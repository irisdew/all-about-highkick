from hoguma import db
from hoguma.models.gacha import Gacha
from hoguma.models.character import Character

import csv

with open(
    "data_settings/dataset/gacha_data.csv", "r", encoding="utf-8",
) as file:
    csv_data = csv.reader(file)
    next(csv_data)
    for row in csv_data:
        gacha_number = row[8]
        quote = row[3]
        question = row[5]
        description = row[6]
        character_id = (
            db.session.query(Character.id)
            .filter(Character.name == row[2])
            .all()[0]
        )

        gacha = Gacha(
            gacha_number=gacha_number,
            quote=quote,
            question=question,
            description=description,
            character_id=character_id,
        )

