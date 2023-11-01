from flask import jsonify, request, Blueprint
from database import db
from models.User import User 

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    print(email, password)
    emailDb = User.query.filter_by(email=email).first()
    role = emailDb.role
    if emailDb and emailDb.password == password:
        return jsonify(role=role), 200
    else:
        response = {'mensaje': 'Usuario o password incorrectos'}
        return jsonify(response), 400

@auth.route('/Register', methods=['POST'])
def register():
    data =request.get_json()
    name =data.get('name')
    surname =data.get('surname')
    address =data.get('address')
    email =data.get('email')
    password =data.get('password')
    role = "2"
    print(name, password, email, role)

    user = User(name=name,surname=surname, address=address ,email=email, password=password ,role=role)
    db.session.add(user)
    db.session.commit()
    registerEmail= User.query.filter_by(email=email).first()
    idUser= registerEmail.id
    return jsonify(role=role, idUser=idUser), 200
