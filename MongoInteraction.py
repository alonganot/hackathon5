objectID = ''
email = ''
fullname = ''
phone = ''
area = []
if type == 'offer':




from pymongo import MongoClient
mongo_uri = "mongodb://username:password@localhost:27017/your_database_name"
# Connect to the MongoDB database
client = MongoClient(mongo_uri)

# Access the database
db = client.get_database()

# Access the collection for user profiles
offers_collection = db['offers']

# Insert a new user profile document
offer = {
    'type': 'offer',
    'email': email,
    'followers': 1000
}
offers_collection.insert_one(profile)

# Access the collection for user profiles
requests_collection = db['requests']

# Insert a new user profile document
request = {
    'username': 'john_doe',
    'name': 'John Doe',
    'followers': 1000
}

# Print the user profiles
for profile in profiles:
    print(profile)

# Close the connection
client.close()