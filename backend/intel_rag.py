import os
import json
import predictionguard as pg
from langchain import PromptTemplate, FewShotPromptTemplate

def intel_rag(query, context):
    # Set your Prediction Guard token as an environmental variable.
    os.environ["PREDICTIONGUARD_TOKEN"] = "q1VuOjnffJ3NO2oFN8Q9m8vghYc84ld13jaqdF7E"

    template = """### Instruction:
    Read the below input context and respond with a short answer to the given question. Use only the information in the below input to answer the question. If you cannot answer the question, respond with "Sorry, I can't find an answer, but you might try looking in the following resource."
    
    ### Input:
    Context: {context}
    
    Question: {question}
    
    ### Response:
    """
    qa_prompt = PromptTemplate(
        input_variables=["context", "question"],
        template=template,
    )

    prompt = qa_prompt.format(context=context, question=query)
    
    result = pg.Completion.create(
        model="Neural-Chat-7B",
        prompt=prompt
    )
    
    return json.dumps(
        result,
        sort_keys=True,
        indent=4,
        separators=(',', ': ')
    )