package com.example.multimedia.service;

import com.example.multimedia.controller.response.FaqResponse;
import com.example.multimedia.model.FaqType;

public interface FaqService {

    FaqResponse retrieveFaq(FaqType faqType);
}
