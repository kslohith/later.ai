from flask import Flask, request, jsonify
from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient
from new_approach import insert_data
from get_relevant_data import get_data
from intel_rag import intel_rag
from get_tags import tag_generate
from backup_tags import backup_tags
from get_data import retrieve_data_from_mongodb_by_tags
from flask_cors import CORS
import nltk

app = Flask(__name__)
CORS(app)
uri = "mongodb+srv://admin:admin@cluster0.ul6ugs0.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
dbName = "documents"
collectionName = "notes"
collection = client[dbName][collectionName]

@app.route('/saveNotes/', methods=['POST'])
def save_notes():
    data = request.json['data']
    tags = request.json['tags']
    insert_data(data, tags, collection=collection)
    return jsonify({"message": 'Successfully inserted data'})

@app.route('/searchNotes/', methods=['POST'])
def search_notes():
    query = request.json['query']
    relevant_data = get_data(query, collection)
    return intel_rag(query, relevant_data)

@app.route('/getTags/', methods=['POST'])
def get_tags():
    query = request.json['query']
    # relevant_data = tag_generate(query)
    relevant_data = backup_tags(query)
    return relevant_data

@app.route('/getSavedNotes/', methods=['GET'])
def get_saved_notes():
    # relevant_data = tag_generate(query)
    relevant_data = retrieve_data_from_mongodb_by_tags(collection)
    return relevant_data

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)