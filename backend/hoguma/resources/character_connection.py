from flask import jsonify
from flask_restful import Resource
from hoguma.models.character import Character
from hoguma.models.connection import Connection
from hoguma import db


class CharacterConnection(Resource):
    def get(self):
        nodes = dict()
        characters = db.session.query(Character).all()
        for character in characters:
            ch_id = character.id
            name = character.name
            nodes[ch_id] = name

        edge_origin = []
        edge_DA = []

        connections = db.session.query(Connection).all()
        for connection in connections:
            temp = dict()
            temp["target"] = connection.target
            temp["source"] = connection.source
            if connection.origin_type:
                temp["origin_type"] = connection.origin_type
                edge_origin.append(temp)
            else:
                temp["connection_weight"] = connection.connection_weight
                edge_DA.append(temp)
        result = {
            "nodes": nodes,
            "edge_origin": edge_origin,
            "edge_DA": edge_DA,
        }
        return jsonify(message="success", data=result)
