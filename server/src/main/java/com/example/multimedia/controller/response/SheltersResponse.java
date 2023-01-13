package com.example.multimedia.controller.response;

import com.example.multimedia.model.Shelter;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SheltersResponse {

    private List<Shelter> shelters;
}
