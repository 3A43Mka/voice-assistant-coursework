package com.example.multimedia.controller.response;

import java.util.Arrays;
import java.util.List;

import static com.example.multimedia.controller.response.StageQuestion.*;

public enum Stage {

    START(BEGINNING),
    MAIN(SHELTERS_INFO, FAQ_INFO, COMMAND_LIST),
    SHELTERS(SHELTERS_DISPLAY, NEAREST_SHELTER, FILTER_BY_WIFI, FILTER_BY_ELECTRICITY, FILTER_BY_WATER, FILTER_BY_FOOD, COMMAND_LIST, BACK),
    FAQ(FAQ_ITEMS_FOR_SHELTER, FAQ_HOME_SHELTER, FAQ_EMERGENCY_SERVICES, COMMAND_LIST, BACK),
    ;

    private final List<StageQuestion> questions;

    Stage(StageQuestion... questions) {
        this.questions = Arrays.asList(questions);
    }

    public List<StageQuestion> getQuestions() {
        return questions;
    }
}
