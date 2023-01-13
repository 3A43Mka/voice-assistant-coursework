package com.example.multimedia.controller;

import com.example.multimedia.controller.response.PromptResponse;
import com.example.multimedia.controller.response.Stage;
import com.example.multimedia.controller.response.StageQuestion;
import com.example.multimedia.service.QuestionRecognitionService;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@Slf4j
public class PromptController {

    @Autowired
    private QuestionRecognitionService questionRecognitionService;

    @PostMapping(value = "/recognize", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @CrossOrigin
    public PromptResponse getAnswers(@RequestParam @NonNull Stage stage,
                                     @RequestParam MultipartFile audioData) {
        log.info("stage: {}", stage);
        log.info("file: {}", audioData);

        StageQuestion question = questionRecognitionService.recognizeQuestion(stage, audioData);
        log.info("question: {}", question);

        return PromptResponse.builder()
                .recognisedQuestion(question)
                .build();
    }
}
