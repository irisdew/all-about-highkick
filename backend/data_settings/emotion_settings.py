from hoguma import db
from hoguma.models.emotion import Emotion
from hoguma.models.character import Character
import json


with open(
    "data_settings/dataset/character_emotion_count.json", "r", encoding="utf-8"
) as json_file:
    emotion_dict = json.load(json_file)
    for key, value in emotion_dict.items():
        character_id = (
            db.session.query(Character.id).filter(Character.name == key).all()
        )
        joy = round(value["기쁨"], 1)
        sadness = round(value["슬픔"], 1)
        anger = round(value["분노"], 1)

        emotion = Emotion(
            happy=happy, anger=anger, sadness=sadness, character_id=character_id
        )
        db.session.add(emotion)
        db.session.commit()

