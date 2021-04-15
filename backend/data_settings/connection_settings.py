from hoguma import db
from hoguma.models.connection import Connection
from hoguma.models.character import Character

import json

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

connection_keys = []
for i in range(len(character_set) - 1):
    for j in range(i + 1, len(character_set)):
        connection_keys.append((character_set[i], character_set[j]))

with open(
    "data_settings/dataset/highkick_merged.txt", encoding="utf-8"
) as file:
    scripts = file.read()

scrips_per_scene = scripts.split("씬")

connection_weight = dict()
for scene in scrips_per_scene:
    for connection in connection_keys:
        character_1 = connection[0]
        character_2 = connection[1]
        if character_1 in scene and character_2 in scene:
            if connection not in connection_weight:
                connection_weight[connection] = 1
            else:
                connection_weight[connection] += 1

for key, value in connection_weight.items():
    source, target = key
    weight = value
    if weight == 0:
        continue

    source_id = (
        db.session.query(Character.id).filter(Character.name == source).all()[0]
    )
    target_id = (
        db.session.query(Character.id).filter(Character.name == target).all()[0]
    )

    connection = Connection(
        target=target, source=source, connection_weight=weight
    )
    db.session.add(connection)
    db.session.commit()
