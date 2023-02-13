from flaskr import create_app
from flask_restful import Api
from .modelos import db
from .vistas import VistaNoticia, VistaResultados
import logging
from flask_cors import CORS


#Se crea el contexto de la aplicación desarrollada en flask
app = create_app('default')
app_context = app.app_context()
app_context.push()

cors = CORS(app)


logging.basicConfig(level=logging.DEBUG, 
                    format='%(asctime)s %(levelname)s %(message)s',
                    handlers=[logging.StreamHandler()])

db.init_app(app)
db.create_all()

#Se definene los Apis
api = Api(app)
api.add_resource(VistaNoticia, '/api/nombresnoticias')
api.add_resource(VistaResultados, '/api/resultados')
