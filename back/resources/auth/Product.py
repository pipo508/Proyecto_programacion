from flask import jsonify, request
from flask_restful import Resource
from models.User import User
from models.Product import  Product
from database import db


class Productlist(Resource):
    def post(self):
        name = request.json['name']
        description = request.json['description']
        Product = Product(name=name, description=description)

        db.session.add(Product)
        db.session.commit()
        return jsonify({"mensaje": "Producto creado exitosamente"})
    
    def get(self):
        Products= db.session.query(Product).all()
        print("Product",Products)
        result=[]
        for Product in Products:
            result.append({
                "id": Product.id,
                "name": Product.name,
                "description": Product.description,
            })
        response = jsonify(result)
        response.status_code = 200
        return response