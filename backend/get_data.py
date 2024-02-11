from pymongo import MongoClient
from collections import defaultdict
import json

def retrieve_data_from_mongodb_by_tags(collection):
    projection = {"text": 1, "tags": 1, "_id": 0}
    cursor = collection.find({},projection)
    results = list(cursor)
    tag_texts_mapping = defaultdict(list)
    for item in results:
        text = item["text"]
        tags = item["tags"]
        for tag in tags:
            tag_texts_mapping[tag].append(text)
    # Convert defaultdict to a regular dictionary
    tag_texts_mapping = dict(tag_texts_mapping)
    # Print the result
    return json.dumps(tag_texts_mapping, indent=4)

