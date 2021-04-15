from hoguma import db
from hoguma.models.survey import Survey

import csv

with open(
    "data_settings/dataset/survey_data.csv", "r", encoding="utf-8"
) as csv_file:
    csv_data = csv.reader(csv_file)
    next(csv_data)
    for row in csv_data:
        question_number = row[0]
        question = row[2].replace("\,", ",")
        image = f"../static/survey_question_image/{row[0]}.png"
        select_1 = row[3] + "\n" + row[4]
        select_2 = row[5] + "\n" + row[6]
        select_3 = row[7] + "\n" + row[8]

        survey = Survey(
            question_number=question_number,
            question=question,
            image=image,
            select_1=select_1,
            select_2=select_2,
            select_3=select_3,
        )

        db.session.add(survey)
        db.session.commit()

with open(
    "data_settings/dataset/survey_result_data.csv", "r", encoding="utf-8"
) as csv_file:
    csv_data = csv.reader(csv_file)
    next(csv_data)
    for row in csv_data:
        image = f"../static/survey_question_image/{row[0]}.png"
        description = row[4]
        nick_name = row[3]
        name = row[2]
        pair = (
            f"../static/survey_question_image/{row[8]}.png"
            + "\n"
            + f"../static/survey_question_image/{row[9]}.png"
        )
        survey_result = survey_result(
            image=image,
            description=descriptionl,
            pair=pair,
            nick_name=nick_name,
            name=name,
        )

        db.session.add(survey_result)
        db.session.commit()
