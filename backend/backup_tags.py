import requests

API_URL = "https://api-inference.huggingface.co/models/ml6team/keyphrase-extraction-kbir-inspec"
headers = {"Authorization": "Bearer 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"}

def backup_tags(query):
	response = requests.post(API_URL, headers=headers, json=query)
	return response.json()
