Remembering various concepts or understanding a concept will take some time, which makes the process of finding one's own notes later tedious, It is better to write one's own notes than to refer to the same websites later to review the same concepts. To address these issue, we provide a query answering system based on the user notes collected from the above step, which eases the user's interaction with their own notes. While building the product, we addressed the technicality problem of LLM hallucination by utilizing vector embeddings from the OpenAI GPT model and indexing them using the MongoDB database with the HNSW algorithm.

Where your Insights Await. This project aims to improve referenced notes collected from various websites, offering a tailored search and query mechanism for specific notes created by the user.
1) Creating a Chrome extension involves writing code in vanilla JavaScript without any framework, which is time-consuming.
2) Large Language Models (LLMs) are time-consuming, and we have to draw a fine balance between better results and faster search.
3) Building UI in 36 hours while also creating UX is painful.
4) Please provide the complete sentence for correction.
5) There is no well-documented MongoDB Atlas Search, which leads to diving deep into its code to understand its functionality.