package com.example.multimedia.handler.exception;

public class QuestionNotFoundException extends RuntimeException {
    
    public QuestionNotFoundException(String message) {
        super(message);
    }

    public QuestionNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
