package com.example.multimedia;

import edu.cmu.sphinx.api.Configuration;
import edu.cmu.sphinx.api.SpeechResult;
import edu.cmu.sphinx.api.StreamSpeechRecognizer;

import java.io.IOException;
import java.io.InputStream;

public class LibraryTestDemo {
    public static void main(String[] args) throws IOException {
        Configuration configuration = new Configuration();
        configuration.setAcousticModelPath("resource:/edu/cmu/sphinx/models/en-us/en-us");
        configuration.setDictionaryPath("resource:/dictionary/cmudict.dict");
        configuration.setLanguageModelPath("resource:/lm/1784_copy.lm");
        configuration.setSampleRate(44100);

        StreamSpeechRecognizer recognizer = new StreamSpeechRecognizer(configuration);
        InputStream stream = LibraryTestDemo.class.getResourceAsStream("/audio/1.wav");
        recognizer.startRecognition(stream);

        SpeechResult result;
        while ((result = recognizer.getResult()) != null) {
//            System.out.format("Hypothesis: %s\n", result.getHypothesis());
//            System.out.println("List of recognized words and their times:");
//            for (WordResult r : result.getWords()) {
//                System.out.println(r);
//            }
            System.out.println("Best 3 hypothesis:");
            for (String s : result.getNbest(3)) {
                System.out.println(s);
            }
        }
        recognizer.stopRecognition();
        stream.close();
    }
}
