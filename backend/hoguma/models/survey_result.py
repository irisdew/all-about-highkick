from hoguma import db


class SurveyResult(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    pair = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f"""
                SurveyResult id: {self.id}
                image: {self.image}
                description: {self.description}
                pair: {self.pair}
            """
