import os
from langchain.text_splitter import CharacterTextSplitter
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from langchain_community.embeddings.openai import OpenAIEmbeddings
from langchain_community.vectorstores import MongoDBAtlasVectorSearch
from langchain_community.document_loaders import DirectoryLoader
from openai import OpenAI
from nltk.tokenize import sent_tokenize

def insert_data(content, tags, collection):

    os.environ['OPENAI_API_KEY'] = os.getenv('openai_secret')
    client = OpenAI()
    sentences = sent_tokenize(content)
    chunks = []
    current_chunk = ""
    current_chunk_size = 0
    chunk_size = 700
    for sentence in sentences:
        # Check if adding the sentence would exceed the chunk size
        if current_chunk_size + len(sentence) <= chunk_size:
            current_chunk += sentence + " "
            current_chunk_size += len(sentence)
        else:
            # Add the current chunk to the list and start a new chunk
            chunks.append(current_chunk.strip())
            current_chunk = sentence + " "
            current_chunk_size = len(sentence)
    if current_chunk:
        chunks.append(current_chunk.strip())

    data = []

    for items in chunks:
        print(items)
        print("-----------")
        response = client.embeddings.create(
        input=items,
        model="text-embedding-ada-002"
        )
        new_data = {}
        new_data["text"] = items
        new_data["tags"] = tags
        new_data["embedding"] = response.data[0].embedding
        data.append(new_data)

    collection.insert_many(data)
        

