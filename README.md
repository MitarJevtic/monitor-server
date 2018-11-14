# Monitor server

Today I made a simple application called **Monitor server**.
The main purpose of the application is to respond to the requested request with the object being loaded.

request

curl http://localhost:3000/services/list

response
```json
[
    {
        "namespace": "demo",
        "apps": [
            {
                "name": "app1"
            },
            {
                "name": "app222222"
            }
        ]
    }
]
```


