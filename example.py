#!/bin/bash/env python3

import requests

url = 'https://jsonplaceholder.typicode.com/users'

r = requests.get(url)
users = r.json()

for user in users:
    print(f"{user['id']} {user['name']} {user['email']}")
