from flask import Flask
from flask_restful import Api, Resource, reqparse
from fuzzer.generator import generate_samples
from flask_cors import CORS


htmlrule = open('checklists/html.rule')
cssrule= open('checklists/css.rule')
jsrule= open('checklists/js.rule')

GenParse = reqparse.RequestParser()
GenParse.add_argument("template", type=str, help="Test Template to fuzz", required=True)

app = Flask(__name__)
CORS(app)
api = Api(app)

class Generator(Resource):
    def put(self):
        arguments = GenParse.parse_args()
        return { "fuzzer_code" : generate_samples(arguments.template)}

api.add_resource(Generator, "/fuzz")