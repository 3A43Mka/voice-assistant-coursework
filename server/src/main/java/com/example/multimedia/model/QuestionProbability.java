package com.example.multimedia.model;

import com.example.multimedia.controller.response.StageQuestion;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Builder
@EqualsAndHashCode
public class QuestionProbability {

    private StageQuestion question;
    private Double probability;
}
