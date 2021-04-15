from flask import jsonify
from flask_restful import Resource
from hoguma.models.survey import Survey, SurveyResult
from hoguma.models.word import Word
from hoguma import db


class Test(Resource):
    def get(self, category):
        result = []
        if category == "survey":
            survey_set = db.session.query(Survey).all()
            for survey in survey_set:
                q_num = survey.id
                question = survey.question
                image_url = survey.image
                select = [
                    survey.select_1.split("\n"),
                    survey.select_2.split("\n"),
                    survey.select_3.split("\n"),
                ]

                data = {
                    "q_num": q_num,
                    "question": question,
                    "image_url": image_url,
                    "select": select,
                }
                result.append(data)

            return jsonify(message="success", data=result)
        elif category == "word":
            words = db.session.query(Word.id, Word.emotion, Word.word).all()
            for word in words:
                result.append(list(word))
            return jsonify(message="success", data=result)
