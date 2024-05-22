import logging

from flask import Flask, jsonify, request

app = Flask(__name__)
server_log = logging.getLogger(__name__)


class Server:
    def __init__(self) -> None:
        # Dummy data for demonstration purposes
        self.dummy_data = [
            {"id": 1, "title": "Harry Potter", "author": "J.K. Rowling"},
            {"id": 2, "title": "Lord of the Rings", "author": "J.R.R. Tolkien"}
        ]

    # Route to get a specific book by ID
    @app.route('/books/<int:id>', methods=['GET'])
    def get_book(id):
        book = next((book for book in books if book['id'] == id), None)
        if book:
            return jsonify(book)
        return jsonify({'message': 'Book not found'}), 404

    # Route to add a new book
    @app.route('/books', methods=['POST'])
    def add_book():
        new_book = request.json
        books.append(new_book)
        return jsonify(new_book), 201

    # Route to update an existing book
    @app.route('/books/<int:id>', methods=['PUT'])
    def update_book(id):
        book = next((book for book in books if book['id'] == id), None)
        if book:
            book.update(request.json)
            return jsonify(book), 200
        return jsonify({'message': 'Book not found'}), 404

    # Route to delete a book by ID
    @app.route('/books/<int:id>', methods=['DELETE'])
    def delete_book(id):
        global books
        books = [book for book in books if book['id'] != id]
        return jsonify({'message': 'Book deleted'}), 200

    # Route to get all books
    @app.route('/books', methods=['GET'])
    def get_books(self):
        return jsonify(self.dummy_data)

    @staticmethod
    def run() -> None:
        app.run(debug=True)


def main() -> None:
    Server().run()


if __name__ == '__main__':
    main()
