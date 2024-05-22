from http import HTTPStatus
from logging import getLogger
from typing import Any, Optional
from bson import json_util, ObjectId

from pymongo.errors import PyMongoError
from flask import Flask, jsonify, request

from mongo_manager import MongoDBContextManager

server_log = getLogger(__name__)


class BackendRestServer:
    IP = 'localhost'
    PORT = 1360

    DATA_INDEX = 0
    STATUS_INDEX = 1

    def __init__(self) -> None:
        self.app: Flask = Flask(__name__)
        self.setup_routes()

    def setup_routes(self):
        self.app.add_url_rule('/applicants/all',
                              view_func=self.get_all_applicants,
                              methods=['GET'])
        self.app.add_url_rule('/applicants/<string:applicant_type>',
                              view_func=self.get_applicants,
                              methods=['GET'])
        self.app.add_url_rule('/applicants/<string:applicant_type>/<string:applicant_area>',
                              view_func=self.get_applicants,
                              methods=['GET'])
        self.app.add_url_rule('/applicants/<string:applicant_type>',
                              view_func=self.add_applicant,
                              methods=['POST'])
        self.app.add_url_rule('/applicants/<string:applicant_type>/<string:object_id>',
                              view_func=self.update_applicant,
                              methods=['PUT'])
        self.app.add_url_rule('/applicants/<string:applicant_type>/<string:object_id>',
                              view_func=self.delete_applicant,
                              methods=['DELETE'])
        self.app.add_url_rule('/applicants/<string:applicant_type>/<string:object_id>',
                              view_func=self.patch_applicant,
                              methods=['PATCH'])

    @staticmethod
    def create_area_filter(applicant_area: str) -> Optional[dict[str: str]]:
        if applicant_area:
            return {'area': applicant_area}

        return None
        
    @staticmethod
    def create_object_filter(serialized_object_id: str) -> dict[str: ObjectId]:
        object_id: ObjectId = json_util.loads(serialized_object_id)
        return {'_id': object_id}

    def get_all_applicants(self,
                           applicant_area: Optional[str] = None) -> tuple[tuple[dict[str, Any], dict[str, Any]], HTTPStatus]:
        with MongoDBContextManager('requests') as mongo:
            area_filter = self.create_area_filter(applicant_area)
            requests_data = list(mongo.collection.find(area_filter))

            mongo.set_collection('offers')
            offers_data = list(mongo.collection.find(area_filter))

            all_data = ({'requests_data_list': requests_data}, {'offers_data_list': offers_data})
            
        return all_data, HTTPStatus.OK

    def get_applicants(self,
                       applicant_type: str,
                       applicant_area: Optional[str] = None) -> tuple[dict[str, Any], HTTPStatus]:
        with MongoDBContextManager(applicant_type) as mongo:
            data_list = {'data_list': list(mongo.collection.find(self.create_area_filter(applicant_area)))}

        if not data_list:
            return jsonify({'Exception': f'{KeyError('Applicant not found')}'}), HTTPStatus.NOT_FOUND

        return jsonify(json_util.dumps(data_list)), HTTPStatus.OK

    def add_applicant(self,
                      applicant_type: str) -> tuple[dict[str, Any], HTTPStatus]:
        with MongoDBContextManager(applicant_type) as mongo:
            try:
                mongo.collection.insert_one(request.json)
            except PyMongoError as exception:
                server_log.exception(exception)
                return jsonify({'Exception': exception}), HTTPStatus.BAD_REQUEST
            
        return jsonify({'Exception': f'{'Created successfuly'}'}), HTTPStatus.CREATED

    def update_applicant(self, applicant_type: str, serialized_object_id: str):
        with MongoDBContextManager(applicant_type) as mongo:
            try:
                mongo.collection.find_one_and_replace(self.create_object_filter(serialized_object_id), request.json)
            except PyMongoError as exception:
                server_log.exception(exception)
                return jsonify({'Exception': exception}), HTTPStatus.BAD_REQUEST

        return jsonify({'Exception': f'{'Updated successfuly'}'}), HTTPStatus.OK

    def delete_applicant(self, applicant_type: str, object_id: str):
        with MongoDBContextManager(applicant_type) as mongo:
            try:
                mongo.collection.delete_one(self.create_object_filter(object_id))
            except PyMongoError as exception:
                server_log.exception(exception)
                return jsonify({'Exception': exception}), HTTPStatus.BAD_REQUEST

        return jsonify({'Exception': f'{'Deleted successfuly'}'}), HTTPStatus.OK

    def patch_applicant(self, applicant_type: str, serialized_object_id: str):
        with MongoDBContextManager(applicant_type) as mongo:
            try:
                mongo.collection.find_one_and_update(self.create_object_filter(serialized_object_id), request.json)
            except PyMongoError as exception:
                server_log.exception(exception)
                return jsonify({'Exception': exception}), HTTPStatus.BAD_REQUEST

        return jsonify({'Exception': f'{'Updated successfuly'}'}), HTTPStatus.OK

    def run(self) -> None:
        self.app.run(host=BackendRestServer.IP, port=BackendRestServer.PORT, debug=True)


def main() -> None:
    BackendRestServer().run()


if __name__ == '__main__':
    main()
