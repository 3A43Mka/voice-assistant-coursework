package com.example.multimedia.controller;

import com.example.multimedia.controller.request.SheltersRequest;
import com.example.multimedia.controller.response.ShelterResponse;
import com.example.multimedia.controller.response.SheltersResponse;
import com.example.multimedia.model.Coordinates;
import com.example.multimedia.service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/shelters")
@CrossOrigin
public class MapController {

    @Autowired
    MapService mapService;

    @GetMapping("/nearest")
    public ShelterResponse getNearestShelter(Coordinates position) {
        return mapService.findNearestShelter(position);
    }

    @GetMapping
    public SheltersResponse getShelters(SheltersRequest request) {
        return mapService.findShelters(request);
    }
}
