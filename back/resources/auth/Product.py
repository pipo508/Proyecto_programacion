from flask import jsonify, request
from flask_restful import Resource
from models.Product import Product
from database import db


class ProductList(Resource):
    def post(self):
        beerName = request.json['beerName']
        beerType = request.json['beerType']
        beerDescription = request.json['beerDescription']
        beerPrice = request.json['beerPrice']
        Product = Product(beerName=beerName, beerType=beerType, beerDescription=beerDescription, beerPrice=beerPrice)

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
                "beerName": Product.beerName,
                "beerType": Product.beerType,
                "beerDescription": Product.beerDescription,
                "beerPrice": Product.beerPrice,
            })
        response = jsonify(result)
        response.status_code = 200
        return response