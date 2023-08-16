from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    print('home')
    return jsonify({'mensaje': 'Home'})

@app.route('/login', methods=['POST'])
def login():
    print("hola")
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    

    if email == 'test@example.com' and password == 'jesu':
        response = {'Mensaje': 'Inicio sesion correctamente'}
        return jsonify(response), 200
    
    else:
        response = {'Mensaje': 'Error'}
        return jsonify(response), 401
    

if __name__ == '__main__':
    app.run(debug=True)