package com.example.multimedia.service;

import com.example.multimedia.controller.request.SheltersRequest;
import com.example.multimedia.controller.response.ShelterResponse;
import com.example.multimedia.controller.response.SheltersResponse;
import com.example.multimedia.model.Coordinates;

public interface MapService {

    ShelterResponse findNearestShelter(Coordinates position);

    SheltersResponse findShelters(SheltersRequest request);
}
