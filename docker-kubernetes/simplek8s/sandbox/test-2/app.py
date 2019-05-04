from flask import Flask, request
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)


class Index(Resource):
    def get(self):
        name = 'world'

        if request.args.get('name'):
            name = request.args.get('name')

        return {
            'message': 'Hello ' + name + '!'
        }, 200


api.add_resource(Index, '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
