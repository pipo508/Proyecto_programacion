from app import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    description = db.Column(db.String(250))

    def __str__(self):
        return (
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'description: {self.description}, '
        )