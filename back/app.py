from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate 
from database import db, FULL_URL_DB
from resources.auth.routes import auth 
from flask_restful import Api
from resources.auth.Product import ProductList, ProdList
from resources.auth.Ventas import VentasList, VentaList

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

migrate = Migrate()
migrate.init_app(app,db)



#blueprint
app.register_blueprint(auth)

#rosurces
api.add_resource(ProductList, '/ProductList')
api.add_resource(ProdList, '/ProdList/<int:id>')
api.add_resource(VentasList, '/VentasList')
api.add_resource(VentaList, '/VentaList/<int:id>')
if __name__ == '__main__':
    app.run(debug=True) 