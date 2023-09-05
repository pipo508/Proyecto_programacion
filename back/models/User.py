from app import db
class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name= db.Column(db.String(250))
    surname = db.Column(db.String(250))
    address = db.Column(db.String(250))
    email = db.Column(db.String(250))
    password = db.Column(db.String(250))


def str (self):
        return(
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'surname: {self.surname}, '
            f'address: {self.address}, '
            f'email: {self.email}, '
            f'password: {self.password}, '

)