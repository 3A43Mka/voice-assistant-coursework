package com.example.multimedia.service.implementation;

import com.example.multimedia.controller.response.Stage;
import com.example.multimedia.controller.response.StageQuestion;
import com.example.multimedia.handler.exception.QuestionNotFoundException;
import com.example.multimedia.model.QuestionProbability;
import com.example.multimedia.service.AudioRecognitionService;
import com.example.multimedia.service.QuestionRecognitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamSource;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class DefaultQuestionRecognitionService implements QuestionRecognitionService {

    private static final Double QUALITY_THRESHOLD = 0.6d;

    @Autowired
    private AudioRecognitionService audioRecognitionService;

    @Override
    public StageQuestion recognizeQuestion(Stage stage, InputStreamSource audioDataSource) {
        List<String> recognizedSentences = audioRecognitionService.recognisePossibleSentences(audioDataSource);
        return findQuestion(stage, recognizedSentences);
    }

    private StageQuestion findQuestion(Stage stage, List<String> recognizedSentences) {
        //todo do parameter verifications or create verification service and use in controller

        List<QuestionProbability> questionProbabilities = Optional.ofNullable(stage.getQuestions()).stream()
                .flatMap(Collection::stream)
                .filter(Objects::nonNull)
                .map(q -> QuestionProbability.builder()
                        .question(q)
                        .probability(getQuestionProbability(q.getQuestionText(), recognizedSentences))
                        .build())
                .collect(Collectors.toList());

        return questionProbabilities.stream()
                .filter(q -> Double.compare(q.getProbability(), QUALITY_THRESHOLD) >= 0)
                .max(Comparator.comparingDouble(QuestionProbability::getProbability))
                .map(QuestionProbability::getQuestion)
                .orElseThrow(() -> getQuestionNotFoundException(stage));
    }

    private QuestionNotFoundException getQuestionNotFoundException(Stage stage) {
        return new QuestionNotFoundException("Question was not found for stage " + stage);
    }

    private double getQuestionProbability(String questionText, List<String> recognizedSentences) {
        Set<String> questionWords = getWordsSet(questionText);
        List<Set<String>> recognizedSentencesWords = recognizedSentences.stream()
                .map(this::getWordsSet)
                .collect(Collectors.toList());

        recognizedSentencesWords.forEach(s -> s.retainAll(questionWords));
        return recognizedSentencesWords.stream()
                .map(Set::size)
                .map(s -> (double) s / questionWords.size())
                .max(Double::compare)
                .orElse(0d);
    }

    private Set<String> getWordsSet(String text) {
        return Arrays.stream(text.split(" "))
                .map(String::toLowerCase)
                .collect(Collectors.toSet());
    }
}
