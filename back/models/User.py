from app import db
class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(250))
    contraseña = db.Column(db.String(250))

def str (self):
        return(
            f'id: {self.id}, '
            f'email: {self.email}, '
            f'contraseña: {self.contraseña}, '
)