import os
from langchain.text_splitter import CharacterTextSplitter
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from langchain_community.embeddings.openai import OpenAIEmbeddings
from langchain_community.vectorstores import MongoDBAtlasVectorSearch
from langchain_community.document_loaders import DirectoryLoader

def insert_data(content, collection):

    text_splitter = CharacterTextSplitter(chunk_size=700, chunk_overlap=50)
    docs = text_splitter.split_text(content)
    embeddings = OpenAIEmbeddings(openai_api_key=os.getenv('openai_secret'))


    def write_string_to_text_file(string, file_path):
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, 'w') as file:
            file.write(string)

    for items in docs:
        write_string_to_text_file(items,"./temp/temp_file.txt")
        loader = DirectoryLoader( './temp', glob="./*.txt", show_progress=True)
        data = loader.load()
        MongoDBAtlasVectorSearch.from_documents( data, embeddings, collection=collection )   
