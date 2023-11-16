from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from models.Product import Product
from models.Ventas import Ventas
from database import db 



class VentasList(Resource):
    def post(self):
        print("request",request.json)
        userId = request.json['userId']
        ProductId = request.json['ProductId']
        
        user = User.query.get(userId)
        product = Product.query.get(ProductId)

        venta = Ventas(user=user, product=product)
        
        db.session.add(venta)
        db.session.commit()
        return jsonify({'mensaje': 'Productos agregados con éxito.'})
    
    
    def get(self):
        ventas = db.session.query(Ventas).all()
        result = []
        for venta in ventas:
            result.append({'id': venta.id})
        response = jsonify(result)
        response.status_code = 200 
        return response
    
class VentaList(Resource):
        
    def get(self, id):  
    
        user = User.query.get(id)
        ventas = Ventas.query.filter_by(userId=user.id).all()
        
        result = []
        for venta in ventas:
            product = Product.query.get(venta.productId)
            result.append({
                    "id": product.id,
                    "beerName": product.beerName,
                    "beerType": product.beerType,
                    "beerDescription": product.beerDescription,
                    "beerPrice": product.beerPrice,
                })
        return jsonify(result)
        
    def delete(self, id):  
        product = Product.query.get(id)
        venta = Ventas.query.filter_by( product=product).first()
        
        db.session.delete(venta)
        db.session.commit()
        return jsonify({'mensaje': 'Producto eliminado con éxito.'})