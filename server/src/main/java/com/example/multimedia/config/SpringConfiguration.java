package com.example.multimedia.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.cmu.sphinx.api.StreamSpeechRecognizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import java.io.IOException;

@Configuration
public class SpringConfiguration {
    @Bean(name = "multipartResolver")
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
        multipartResolver.setMaxUploadSize(10000000);
        return multipartResolver;
    }

    @Bean(name = "sphynxConfiguration")
    public edu.cmu.sphinx.api.Configuration configuration() {
        edu.cmu.sphinx.api.Configuration configuration = new edu.cmu.sphinx.api.Configuration();
        configuration.setAcousticModelPath("resource:/ac_model");
        configuration.setDictionaryPath("resource:/dictionary/5757.dic");
        configuration.setLanguageModelPath("resource:/lm/5757.lm");
        return configuration;
    }

    @Bean(name = "sphynxSpeechRecognizer")
    public StreamSpeechRecognizer recognizer() throws IOException {
        return new StreamSpeechRecognizer(configuration());
    }

    @Bean(name = "objectMapper")
    public ObjectMapper mapper() {
        return new ObjectMapper();
    }
}
