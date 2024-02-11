import requests
import time

API_URL = "https://api-inference.huggingface.co/models/ml6team/keyphrase-extraction-kbir-inspec"
headers = {"Authorization": "Bearer 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"}

# def backup_tags(query):
# 	response = requests.post(API_URL, headers=headers, json=query)
# 	return response.json()


def backup_tags(query, max_retries=5):
    retries = 0
    while retries < max_retries:
        response = requests.post(API_URL, headers=headers, json=query)
        if response.status_code == 200:
            try:
                response_json = response.json()
                # Check if the response is not empty and does not contain an error
                if response_json and "error" not in response_json[0]:
                    return response_json
                else:
                    retries += 1
                    print(f"Empty response or error in response. Retrying... (Attempt {retries}/{max_retries})")
                    time.sleep(1)  # Add a small delay before retrying
            except ValueError:
                retries += 1
                print(f"Invalid JSON in response. Retrying... (Attempt {retries}/{max_retries})")
                time.sleep(1)  # Add a small delay before retrying
        else:
            retries += 1
            print(f"Error response received (Status code: {response.status_code}). Retrying... (Attempt {retries}/{max_retries})")
            time.sleep(1)  # Add a small delay before retrying
    return {"error": "Max retries exceeded"}