from keybert import KeyBERT

def tag_generate(query):
    doc = query
    kw_model = KeyBERT()
    doc_embeddings, word_embeddings = kw_model.extract_embeddings(doc)
    keywords = kw_model.extract_keywords(doc, stop_words='english', doc_embeddings=doc_embeddings, word_embeddings=word_embeddings)
    return {"Tags": keywords}