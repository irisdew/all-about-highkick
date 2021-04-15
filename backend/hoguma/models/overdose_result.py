from hoguma import db

class OverdoseResult(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(200), nullable=False)
    rank = db.Column(db.String(20), nullable=False)
    title = db.Column(db.String(20), nullable=False)
    description = db.Column(db.String(200), nullable=False)

    def __repr__(self):
    return f"""
            OverdoseResult id: {self.id}
            image: {self.image}
            rank: {self.rank}
            title: {self.title}
            description: {self.description}
        """