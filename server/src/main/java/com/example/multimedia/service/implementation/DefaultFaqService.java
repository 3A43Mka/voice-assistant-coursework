package com.example.multimedia.service.implementation;

import com.example.multimedia.controller.response.FaqResponse;
import com.example.multimedia.model.FaqType;
import com.example.multimedia.service.FaqService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@Data
public class DefaultFaqService implements FaqService {

    @Autowired
    private final ObjectMapper mapper;

    @Override
    public FaqResponse retrieveFaq(FaqType faqType) {
        try {
            return mapper.readValue(getClass().getClassLoader().getResource(faqType.getFaqLink()), FaqResponse.class);
        } catch (IOException e) {
            //todo do error logging and throw appropriate exception
            e.printStackTrace();
            throw new RuntimeException("Could not find faq for " + faqType);
        }
    }
}
