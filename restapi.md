1. `POST` `localhost:4000/api/register`

```
{
  "email": "john.doe@example.com",
  "password": "password123",
  "username": "johndoe"
}
```

2. `POST` `/api/login`

```
{
  "email": "john.doe@example.com",
  "password": "password123",
}
```

```
{
    "message": "Login successfully",
    "id": "0qxzb2ye"
}
```

3. `POST` /api/create/thread

```

```

4. `GET` `localhost:4000/api/all/threads`

- Get all the threads

```
{
    "threads": [
        {
            "id": "j3tli9fh",
            "title": "New thread title",
            "userId": "0qxzb2ye",
            "replies": [],
            "likes": []
        }
    ]
}
```

5. `POST` `localhost:4000/api/thread/like`

```
{
  "threadId": "qdh95n8z",
  "userId": "0qxzb2ye"
}
```

````
{
    "message": "You've reacted to the post!"
}```
````
