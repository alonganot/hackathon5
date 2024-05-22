from http import HTTPStatus
from logging import getLogger

from flask import Flask, jsonify, request

server_log = getLogger(__name__)


class BackendRestServer:
    IP = 'localhost'
    PORT = 1360

    def __init__(self) -> None:
        self.app = Flask(__name__)

        # Dummy data for demonstration purposes
        self.dummy_data = [
            {"id": 1, "title": "Harry Potter", "author": "J.K. Rowling"},
            {"id": 2, "title": "Lord of the Rings", "author": "J.R.R. Tolkien"}
        ]
        
        self.setup_routes()

    def setup_routes(self):
        self.app.add_url_rule('/books', view_func=self.get_books, methods=['GET'])
        self.app.add_url_rule('/books/<int:book_id>', view_func=self.get_book, methods=['GET'])
        self.app.add_url_rule('/books', view_func=self.add_book, methods=['POST'])
        self.app.add_url_rule('/books/<int:book_id>', view_func=self.update_book, methods=['PUT'])
        self.app.add_url_rule('/books/<int:book_id>', view_func=self.delete_book, methods=['DELETE'])
        self.app.add_url_rule('/books/<int:book_id>', view_func=self.patch_book, methods=['PATCH'])
        self.app.add_url_rule('/books/<int:book_id>/metadata', view_func=self.get_book_metadata, methods=['HEAD'])

    def get_books(self):
        return jsonify(self.dummy_data)

    def get_book(self, book_id):
        book = next((book for book in self.dummy_data if book['id'] == book_id), None)
        if book:
            return jsonify(book), HTTPStatus.OK
        else:
            return jsonify({"error": "Book not found"}), HTTPStatus.NOT_FOUND

    def add_book(self):
        data = request.json
        if 'title' in data and 'author' in data:
            new_book = {
                "id": len(self.dummy_data) + 1,
                "title": data['title'],
                "author": data['author']
            }
            self.dummy_data.append(new_book)
            return jsonify(new_book), HTTPStatus.CREATED
        else:
            return jsonify({"error": "Missing required fields"}), HTTPStatus.BAD_REQUEST

    def update_book(self, book_id):
        data = request.json
        book = next((book for book in self.books if book['id'] == book_id), None)
        if book:
            book.update(data)
            return jsonify(book), HTTPStatus.OK
        else:
            return jsonify({"error": "Book not found"}), HTTPStatus.NOT_FOUND

    def delete_book(self, book_id):
        book = next((book for book in self.books if book['id'] == book_id), None)
        if book:
            self.books.remove(book)
            return jsonify({"message": "Book deleted successfully"}), HTTPStatus.OK
        else:
            return jsonify({"error": "Book not found"}), HTTPStatus.NOT_FOUND

    def patch_book(self, book_id):
        data = request.json
        book = next((book for book in self.books if book['id'] == book_id), None)
        if book:
            book.update(data)
            return jsonify(book), HTTPStatus.OK
        else:
            return jsonify({"error": "Book not found"}), HTTPStatus.NOT_FOUND

    def get_book_metadata(self, book_id):
        book = next((book for book in self.books if book['id'] == book_id), None)
        if book:
            # For simplicity, let's just return the book's ID and title as metadata
            return "", HTTPStatus.OK, {"Book-ID": str(book['id']), "Book-Title": book['title']}
        else:
            return jsonify({"error": "Book not found"}), HTTPStatus.NOT_FOUND

    def run(self) -> None:
        self.app.run(host=BackendRestServer.IP, port=BackendRestServer.PORT, debug=True)


def main() -> None:
    BackendRestServer().run()


if __name__ == '__main__':
    main()
