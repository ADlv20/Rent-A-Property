import json
import random

# Load the JSON data
with open('updated_data.json', 'r') as f:
    data = json.load(f)

# Define the possible property types
property_types = ['New York' , 'California', 'Los Angeles', 'Maharashtra']

# Loop through each object in the JSON and randomly change the property type
for obj in data:
    obj['location'] = random.choice(property_types)

# Save the updated JSON data
with open('d.json', 'w') as f:
    json.dump(data, f, indent=2)