package com.example.multimedia.service;

import com.example.multimedia.controller.response.Stage;
import com.example.multimedia.controller.response.StageQuestion;
import org.springframework.core.io.InputStreamSource;

public interface QuestionRecognitionService {

    StageQuestion recognizeQuestion(Stage stage, InputStreamSource audioDataSource);
}
