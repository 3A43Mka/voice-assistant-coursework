package com.example.multimedia.controller.response;

import com.example.multimedia.model.Shelter;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ShelterResponse {

    @JsonUnwrapped
    private Shelter shelter;
}
