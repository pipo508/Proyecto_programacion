from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate 
from database import db, FULL_URL_DB
from resources.auth.routes import auth  

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

migrate = Migrate()
migrate.init_app(app,db)



#blueprint
app.register_blueprint(auth)

if __name__ == '__main__':
    app.run(debug=True)