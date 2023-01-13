package com.example.multimedia.controller.response;

public enum StageQuestion {

    BEGINNING("Start"),
    FAQ_INFO("Receive helpful facts"),
    FAQ_ITEMS_FOR_SHELTER("What to take to shelter"),
    FAQ_HOME_SHELTER("Shelter in home"),
    FAQ_EMERGENCY_SERVICES("Emergency services"),
    SHELTERS_INFO("Go to shelters"),
    SHELTERS_DISPLAY("Show shelters"),
    NEAREST_SHELTER("Find nearest shelter"),
    COMMAND_LIST("Show commands"),
    FILTER_BY_WIFI("Filter by wifi"),
    FILTER_BY_ELECTRICITY("Filter by electricity"),
    FILTER_BY_WATER("Filter by water"),
    FILTER_BY_FOOD("Filter by food"),
    BACK("Back");

    private final String questionText;

    StageQuestion(String text) {
        this.questionText = text;
    }

    public String getQuestionText() {
        return questionText;
    }
}
