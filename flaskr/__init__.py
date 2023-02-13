from flask import Flask
#Se inicializa la base de datos
def create_app(config_name):
    app = Flask(__name__)  
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///basetextos.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    return app