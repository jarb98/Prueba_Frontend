#from flaskr import create_app
from flask import Flask

from flask_restful import Api
from .modelos import db
from .vistas import VistaNoticia, VistaResultados 
from .vistas import VistaTaller1Opcion1, VistaTaller1Opcion2, VistaTaller1Opcion3,VistaTaller1Opcion4
import logging
from flask_cors import CORS


#Se crea el contexto de la aplicación desarrollada en flask
#app = create_app('default')
app = Flask(__name__)
app_context = app.app_context()
app_context.push()

cors = CORS(app)


logging.basicConfig(level=logging.DEBUG, 
                    format='%(asctime)s %(levelname)s %(message)s',
                    handlers=[logging.StreamHandler()])

#db.init_app(app)
#db.create_all()

#Se definene los Apis
api = Api(app)
api.add_resource(VistaNoticia, '/api/nombresnoticias')
api.add_resource(VistaResultados, '/api/resultados')
api.add_resource(VistaTaller1Opcion1, '/api/taller1/opcion1')
api.add_resource(VistaTaller1Opcion2, '/api/taller1/opcion2')
api.add_resource(VistaTaller1Opcion2, '/api/taller1/opcion4')



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
