package com.example.multimedia.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Shelter {

    private String address;
    private String type;
    private String form;
    private String buildingType;
    private Boolean hasWifi;
    private Coordinates coordinates;
    private String link;
}
