from hoguma import db
from hoguma.models.emotion import Emotion
from hoguma.models.character import Character
import json


with open(
    "data_settings/dataset/character_emotion_count.json", "r", encoding="utf-8"
) as json_file:
    emotion_dict = json.load(json_file)
    for key, value in emotion_dict.items():
        character = key
        Character.query.filter()

