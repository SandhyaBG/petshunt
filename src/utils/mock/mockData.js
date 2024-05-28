export default function mockData(mockServer) {
    mockServer.create('pet', {
      "id": 1,
      "category": {
        "id": 2,
        "name": "Cats"
      },
      "name": "Cat 1",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag1"
        },
        {
          "id": 2,
          "name": "Tag2"
        }
      ],
      "status": "pending"
    });
    mockServer.create('pet', {
      "id": 2,
      "category": {
        "id": 2,
        "name": "Cats"
      },
      "name": "Cat 2",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag2"
        },
        {
          "id": 2,
          "name": "Tag3"
        }
      ],
      "status": "available"
    });
    mockServer.create('pet', {
      "id": 3,
      "category": {
        "id": 2,
        "name": "Cats"
      },
      "name": "Cat 3",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag3"
        },
        {
          "id": 2,
          "name": "Tag4"
        }
      ],
      "status": "pending"
    });
    mockServer.create('pet', {
      "id": 4,
      "category": {
        "id": 1,
        "name": "Dogs"
      },
      "name": "Dog 1",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag1"
        },
        {
          "id": 2,
          "name": "Tag2"
        }
      ],
      "status": "available"
    });
    mockServer.create('pet', {
      "id": 5,
      "category": {
        "id": 1,
        "name": "Dogs"
      },
      "name": "Dog 2",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag2"
        },
        {
          "id": 2,
          "name": "Tag3"
        }
      ],
      "status": "sold"
    });
    mockServer.create('pet', {
      "id": 6,
      "category": {
        "id": 1,
        "name": "Dogs"
      },
      "name": "Dog 3",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag3"
        },
        {
          "id": 2,
          "name": "Tag4"
        }
      ],
      "status": "pending"
    });
    mockServer.create('pet', {
      "id": 7,
      "category": {
        "id": 4,
        "name": "Lions"
      },
      "name": "Lion 1",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag1"
        },
        {
          "id": 2,
          "name": "Tag2"
        }
      ],
      "status": "available"
    });
    mockServer.create('pet', {
      "id": 8,
      "category": {
        "id": 4,
        "name": "Lions"
      },
      "name": "Lion 2",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag2"
        },
        {
          "id": 2,
          "name": "Tag3"
        }
      ],
      "status": "available"
    });
    mockServer.create('pet', {
      "id": 9,
      "category": {
        "id": 4,
        "name": "Lions"
      },
      "name": "Lion 3",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag3"
        },
        {
          "id": 2,
          "name": "Tag4"
        }
      ],
      "status": "available"
    });
    mockServer.create('pet', {
      "id": 10,
      "category": {
        "id": 3,
        "name": "Rabbits"
      },
      "name": "Rabbit 1",
      "photoUrls": [
        "url1",
        "url2"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag3"
        },
        {
          "id": 2,
          "name": "Tag4"
        }
      ],
      "status": "available"
    });
    mockServer.create('order', {
      "approved": 50,
      "placed": 100,
      "delivered": 50
    });
  }
  