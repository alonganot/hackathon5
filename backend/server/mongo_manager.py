from json import load
from pathlib import Path
from typing import Optional
from logging import getLogger
from pymongo import MongoClient
from types import TracebackType
from pymongo.database import Database
from pymongo.collection import Collection

from typing_extensions import Self

mongo_log = getLogger(__name__)


class MongoDBContextManager:
    def __init__(self, applicant_type: str) -> None:
        current_dir: Path = Path(__file__).parent
        with open(current_dir.joinpath('config.json')) as config_file:
            config = load(config_file)

        self.host: str = config['MONGO_URI']
        self.port: int = config['MONGO_PORT']
        self.db_name: str = config['MONGO_DB_NAME']
        self.collection_name: str = applicant_type
        self.client: Optional[MongoClient] = None
        self.db: Optional[Database] = None
        self.collection: Optional[Collection] = None

    def __enter__(self) -> Self:
        self.client = MongoClient(self.host, self.port)
        self.db = self.client[self.db_name]
        self.collection = self.db[self.collection_name]

        return self

    def set_collection(self, applicant_type: str) -> None:
        self.collection_name = applicant_type
        self.collection = self.db[self.collection_name]

    def __exit__(self,
                 exc_type: Optional[type[BaseException]], 
                 exc_value: Optional[BaseException], 
                 traceback: Optional[TracebackType]) -> None:
        if exc_type:
            mongo_log.exception(f'Error Occurred', (exc_type, exc_value, traceback))

        if self.client:
            self.client.close()
