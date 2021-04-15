from hoguma import db
from hoguma.models.overdose import Overdose, OverdoseResult

import csv


with open(
    "data_settings/dataset/overdose.csv", "r", encoding="utf-8"
) as csv_file:
    csv_data = csv.reader(csv_file)
    next(csv_data)
    for row in csv_data:
        question_number = row[0]
        question = row[1]
        answer = row[6]
        select_1 = row[2]
        select_2 = row[3]
        select_3 = row[4]
        select_4 = row[5]
        overdose = Overdose(
            question_number=question_number,
            question=question,
            answer=answer,
            select_1=select_1,
            select_2=select_2,
            select_3=select_3,
            select_4=select_4,
        )

        db.session.add(overdose)
        db.session.commit()

with open(
    "data_settings/dataset/overdose_result.csv", "r", encoding="utf-8"
) as csv_file:
    csv_data = csv.reader(csv_file)
    next(csv_data)
    for row in csv_data:
        image = f"../static/highkick_test_image/{row[0]}.png"
        rank = row[0]
        description = row[1]
        overdose_result = OverdoseResult(
            rank=rank, image=image, description=description
        )
        db.session.add(overdose_result)
        db.session.commit()

