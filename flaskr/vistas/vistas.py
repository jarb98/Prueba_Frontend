from flask import request, jsonify
from ..modelos import db, Noticia, NoticiaSchema
from flask_restful import Resource
from bs4 import BeautifulSoup
import numpy as np
from collections import Counter

import os

noticia_schema = NoticiaSchema()
#Clase que es llamada por el api para mostrar la lista de archivos disponibles 
class VistaNoticia(Resource): 
    #Get Method para llenar la lista de archivos de los que el usuario va a seleccionar
    def get(self):
        #directory = '../archivos', lo cambio para ver si sirve en docker. Primero en localhost
        directory = '/app/archivos'
        files = os.listdir(directory)
        return jsonify(files)
#Clase que es llamada por el api para sacar los resultados de los retos
class VistaResultados (Resource):

    def post(self):

        u_nombre1 = request.json["nombre1"]
        u_nombre2 = request.json["nombre2"]
        u_nombre3 = request.json["nombre3"]
        num_palabras = int(request.json["num_palabras"])

        resultados = []

        nombres = [u_nombre1, u_nombre2, u_nombre3]
        #Para punto 7 toca meter esto en una funcion
        for u_nombre in nombres:
            if u_nombre == "": 
                print("u_nombre esta vacio")
            else: 
                print (u_nombre)
                #directory = '../archivos', lo cambio para ver si sirve en docker. Primero en localhost
                directorio = "/app/archivos/" + u_nombre
                try: 
                    if (u_nombre[-4:]==".txt"):
                        doc_1=open(directorio,"r").readlines()
                        concatena=" ".join(doc_1)
                    else: 
                        with open (directorio, "r") as f:
                            contents=f.read()
                            doc_1=BeautifulSoup(contents, "html.parser")
                        doc_1=str(doc_1)
                        concatena="".join(str(doc_1))
                    resultado_palabras = Counter(concatena.split()).most_common()[:num_palabras]
                    resultados.append(resultado_palabras)
                    print("Nuevos Resultados: ")
                    print(resultado_palabras)

                except FileNotFoundError:
                    return "File not found", 404




        return resultados



class VistaTaller1Opcion1 (Resource):
#Retorna un resumen de los valores de barcos en fechas especificadas
#Conexion a Atlas -> Agrupamiento -> Retorno tabla
    def post(self):
        startDate = request.json["startDate"]
        endDate = request.json["endDate"]

        print(startDate)
        print(endDate)
        
        return 'Opcion1 funciona ok'

class VistaTaller1Opcion2(Resource):
#Retorna un resumen de los valores de barcos en fechas especificadas por tipo de carga

    def post(self):
        startDate = request.json["startDate"]
        endDate = request.json["endDate"]
        estado = request.json["estado"]


        return 'Opcion2 funciona ok'
    

class VistaTaller1Opcion3(Resource):
#Retorna un analisis de lo ocurrido en pandemia 


    def post(self):



        return 'Opcion3 funciona ok'
    
class VistaTaller1Opcion4(Resource):
    def post(self):
        startDate = request.json["startDate"]
        endDate = request.json["endDate"]



        return 'Opcion4 funciona ok'

