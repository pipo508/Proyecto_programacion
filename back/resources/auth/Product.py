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
        product = Product(beerName=beerName, beerType=beerType, beerDescription=beerDescription, beerPrice=beerPrice)

        db.session.add(product)
        db.session.commit()
        return jsonify({"mensaje": "Producto creado exitosamente"})
    
    def get(self):
        products= db.session.query(Product).all()
        print("product",products)
        result=[]
        for product in products:
            result.append({
                "id": product.id,
                "beerName": product.beerName,
                "beerType": product.beerType,
                "beerDescription": product.beerDescription,
                "beerPrice": product.beerPrice,
            })
        response = jsonify(result)
        response.status_code = 200
        return response