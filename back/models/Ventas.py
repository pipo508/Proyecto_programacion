from app import db

class Ventas(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    userId = db.Column(db.Integer, db.ForeignKey('user.id'))#Es para llamar el dato de otra tabla
    productId = db.Column(db.Integer, db.ForeignKey('product.id'))

    def __str__(self):
        return (
            f'id: {self.id}, '
            f'userId: {self.userId}, '
            f'productId: {self.productId}, '
        )