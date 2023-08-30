from flask import jsonify, request, Blueprint
from database import db
from models.User import User 

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/Login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    user = User.query.filter_by(email=email, password=password).first()
    if user:
        response = {'mensaje': 'Usuario logueado correctamente'}
        return jsonify(response), 200
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
    print(email, password)
    user = User(name=name,surname=surname, address=address ,email=email, password=password)
    db.session.add(user)
    db.session.commit()
    response = {'mensaje': 'Usuario creado correctamente'}
    return jsonify(response), 201