from app import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    beerName = db.Column(db.String(250))
    beerType = db.Column(db.String(250))
    beerDescription = db.Column(db.String(250))
    beerPrice = db.Column(db.String(250))

    def __str__(self):
        return (
            f'id: {self.id}, '
            f'name: {self.beerName}, '
            f'type: {self.beerType}, '
            f'description: {self.beerDescription}, '
            f'price: {self.beerPrice}'
        )