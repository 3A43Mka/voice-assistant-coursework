package com.example.multimedia.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SheltersRequest {

    @Nullable
    private Boolean hasWifi;
    @Nullable
    private Boolean hasWater;
    @Nullable
    private Boolean hasElectricity;
}
