package com.example.multimedia.service.implementation;

import com.example.multimedia.service.AudioRecognitionService;
import edu.cmu.sphinx.api.SpeechResult;
import edu.cmu.sphinx.api.StreamSpeechRecognizer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamSource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Service
@Slf4j
public class DefaultAudioRecognitionService implements AudioRecognitionService {

    @Autowired
    private StreamSpeechRecognizer recognizer;

    @Override
    public List<String> recognisePossibleSentences(InputStreamSource audioDataSource) {
        try (InputStream audioInputStream = audioDataSource.getInputStream()) {
            List<String> recognizedSentences = new ArrayList<>();

            recognizer.startRecognition(audioInputStream);
            SpeechResult result;
            while ((result = recognizer.getResult()) != null) {
                Collection<String> nbest = result.getNbest(3);
                log.info("Best 3 hypothesis: {}", Arrays.toString(nbest.toArray()));
                recognizedSentences.addAll(nbest);
            }
            return recognizedSentences;
        } catch (IOException e) {
            //todo do error logging and throw appropriate exception
            e.printStackTrace();
            throw new RuntimeException("Could not open an audio stream");
        } finally {
            recognizer.stopRecognition();
        }
    }
}
