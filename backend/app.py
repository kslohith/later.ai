from flask import Flask, request, jsonify
from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient
from new_approach import insert_data
from get_relevant_data import get_data
from intel_rag import intel_rag
from get_tags import tag_generate

app = Flask(__name__)
uri = "mongodb+srv://admin:admin@cluster0.ul6ugs0.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
dbName = "documents"
collectionName = "notes"
collection = client[dbName][collectionName]

@app.route('/saveNotes/', methods=['POST'])
def save_notes():
    data = request.json['data']
    insert_data(data, collection=collection)
    return jsonify({"message": 'Successfully inserted data'})

@app.route('/searchNotes/', methods=['POST'])
def search_notes():
    query = request.json['query']
    relevant_data = get_data(query, collection)
    return intel_rag(query, relevant_data)

@app.route('/getTags/', methods=['POST'])
def get_tags():
    query = request.json['query']
    relevant_data = tag_generate(query)
    return relevant_data

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)