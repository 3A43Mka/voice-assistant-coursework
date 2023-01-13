package com.example.multimedia.service.implementation;

import com.example.multimedia.controller.request.SheltersRequest;
import com.example.multimedia.controller.response.ShelterResponse;
import com.example.multimedia.controller.response.SheltersResponse;
import com.example.multimedia.model.Coordinates;
import com.example.multimedia.model.Shelter;
import com.example.multimedia.service.MapService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import static com.example.multimedia.util.EarthDistanceCalculator.distance;
import static java.util.Objects.isNull;

@Service
@Data
@Slf4j
public class DefaultMapService implements MapService {

    @Autowired
    private final ObjectMapper mapper;

    @Override
    public ShelterResponse findNearestShelter(Coordinates position) {
        try {
            List<Shelter> shelters = mapper.readValue(getClass().getClassLoader().getResource("shelters/shelters.json"), new TypeReference<>() {
            });
            Shelter shelter = shelters.stream()
                    .min(Comparator.comparingDouble(s -> distance(position.getX(), s.getCoordinates().getX(), position.getY(), s.getCoordinates().getY(), 0, 0)))
                    .orElseThrow(() -> new RuntimeException("Could not find shelters"));
            return ShelterResponse.builder()
                    .shelter(shelter)
                    .build();
        } catch (IOException e) {
            //todo do error logging and throw appropriate exception
            e.printStackTrace();
            throw new RuntimeException("Could not parse shelters");
        }
    }

    @Override
    public SheltersResponse findShelters(SheltersRequest request) {
        try {
            List<Shelter> shelters = mapper.readValue(getClass().getClassLoader().getResource("shelters/shelters.json"), new TypeReference<>() {
            });

            shelters = shelters.stream()
                    .filter(s -> isNull(request.getHasWifi()) || request.getHasWifi().equals(s.getHasWifi()))
                    .filter(s -> isNull(request.getHasElectricity()) || request.getHasElectricity().equals(s.getHasWifi()))
                    .filter(s -> isNull(request.getHasWater()) || request.getHasWater().equals(s.getHasWifi()))
                    .collect(Collectors.toList());

            return SheltersResponse.builder()
                    .shelters(shelters)
                    .build();
        } catch (IOException e) {
            //todo do error logging and throw appropriate exception
            e.printStackTrace();
            throw new RuntimeException("Could not find shelters");
        }
    }
}
