package com.example.multimedia.service;

import org.springframework.core.io.InputStreamSource;

import java.util.List;

public interface AudioRecognitionService {

    List<String> recognisePossibleSentences(InputStreamSource audioDataSource);
}
