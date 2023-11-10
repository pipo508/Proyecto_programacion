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

class ProdList(Resource):
    def put(self, id):
        product = Product.query.get_or_404(id)
        product.beerName = request.json.get('beerName',product.beerName)
        product.beerType = request.json.get('beerType',product.beerType)
        product.beerDescription = request.json.get('beerDescription',product.beerDescription)
        product.beerPrice= request.json.get('beerPrice',product.beerPrice)
        
        print(product)
        
        db.session.commit()
        return jsonify({'mensaje': 'Trabajo editado con éxito.'})

    def delete(self, id):
        product = Product.query.get_or_404(id)
        db.session.delete(product)
        db.session.commit()
        return jsonify({'mensaje': 'Trabajo eliminado con éxito.'})