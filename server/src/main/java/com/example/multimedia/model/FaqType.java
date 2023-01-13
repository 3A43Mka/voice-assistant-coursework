package com.example.multimedia.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FaqType {

    NECESSARY_SHELTER_ITEMS("faq/necessary_shelter_items.json"),
    HOME_SHELTER("faq/home_shelter.json"),
    EMERGENCY_SERVICES("faq/emergency_services.json");

    private final String faqLink;
}
