from hoguma import db
from hoguma.models.character import Character
import csv

character_set = [
    "문희",
    "순재",
    "준하",
    "민용",
    "민호",
    "윤호",
    "해미",
    "범",
    "유미",
    "찬성",
    "개성댁",
    "신지",
    "민정",
    "교감",
]

with open(
    "data_settings/dataset/highkick_character_data.csv", "r", encoding="utf-8",
) as file:
    csv_data = csv.reader(file)
    for i in range(3):
        next(csv_data)
    for row in csv_data:
        character = Character(
            name=row[2],
            age=row[4],
            job=row[3],
            quote=row[5],
            word_cloud=f"../static/word_cloud/{row[2]}.png",
            youtube=row[6],
        )
        db.session.add(character)
        db.session.commit()
