from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields

db = SQLAlchemy()

#Modelo de las noticias
class Noticia(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(256) )
    numero_de_palabras = db.Column(db.Integer)

class NoticiaSchema(SQLAlchemyAutoSchema):
    class Meta:
         model = Noticia
         include_relationships = True
         load_instance = True