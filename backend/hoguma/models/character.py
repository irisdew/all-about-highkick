from hoguma import db


class Character(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    word_cloud = db.Column(db.String(2048), nullable=False)

    def __repr__(self):
        return f"Character id: {self.id} name: {self.name}"
