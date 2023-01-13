package com.example.multimedia.controller;

import com.example.multimedia.controller.response.FaqResponse;
import com.example.multimedia.model.FaqType;
import com.example.multimedia.service.FaqService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/faq")
@Slf4j
@CrossOrigin
public class FaqController {

    @Autowired
    FaqService faqService;

    @GetMapping("/shelter-items")
    public FaqResponse getShelterItemsFaq() {
        return faqService.retrieveFaq(FaqType.NECESSARY_SHELTER_ITEMS);
    }

    @GetMapping("/home-shelter")
    public FaqResponse getHomeShelterFaq() {
        return faqService.retrieveFaq(FaqType.HOME_SHELTER);
    }

    @GetMapping("/emergency-services")
    public FaqResponse getEmergencyServicesFaq() {
        return faqService.retrieveFaq(FaqType.EMERGENCY_SERVICES);
    }
}
