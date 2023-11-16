from app import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    beerName = db.Column(db.String(250))
    beerType = db.Column(db.String(250))
    beerDescription = db.Column(db.String(250))
    beerPrice = db.Column(db.String(250))
    
    
    productVentas = db.relationship('Ventas', backref='product')
    def __str__(self):
        return (
            f'id: {self.id}, '
            f'beerName: {self.beerName}, '
            f'beerType: {self.beerType}, '
            f'beerDescription: {self.beerDescription}, '
            f'beerPrice: {self.beerPrice}'
        )