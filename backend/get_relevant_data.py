from openai import OpenAI
import os


def get_data(query,collection):

    os.environ['OPENAI_API_KEY'] = os.getenv('openai_secret')
    client = OpenAI()

    response = client.embeddings.create(
        input=query,
        model="text-embedding-ada-002"
    )

    # define pipeline
    pipeline = [
    {
        '$vectorSearch': {
        'index': 'vector-search', 
        'path': 'embedding', 
        'queryVector': [] ,
        'numCandidates': 150, 
        'limit': 10
        }
    }, {
        '$project': {
        '_id': 0, 
        'text': 1,
        'score': {
            '$meta': 'vectorSearchScore'
        }
        }
    }
    ]

    pipeline[0]['$vectorSearch']['queryVector'] = response.data[0].embedding
    result = collection.aggregate(pipeline)

    relevant_data = ""
    for i in result:
        print(i)
        print(i.values())
        relevant_data += i['text']

    return relevant_data
 