# webhookTask

[

//Create Account

http://localhost:3000/accounts

post Api

payload:

{
  "email": "testuser@example.com",
  "accountName": "Test Account",
  "website": "https://test.com"
}

--------------

//update Account

http://localhost:3000/accounts/0dcaf687-6c10-40a9-ae1b-d9c41e40883f

put API

payload

{
"accountName": "Test Account one"
}

----------
//get All Account

Get Api

http://localhost:3000/accounts

---------------
//get Account by id

http://localhost:3000/accounts/0dcaf687-6c10-40a9-ae1b-d9c41e40883f
------------------
//delete Account by id

Delete Api

http://localhost:3000/accounts/0dcaf687-6c10-40a9-ae1b-d9c41e40883f
----------------

//Register Incoming Data / Create Destination

http://localhost:3000/server/incoming_data

Post api

payload:

{
  "accountId": "0dcaf687-6c10-40a9-ae1b-d9c41e40883f",
  "url": "https://test.com",
  "httpMethod": "POST",
  "headers": {
    "APP_ID": "1234APPID1234",
    "APP_SECRET": "abcd1234secret",
    "ACTION": "user.update",
    "Content-Type": "application/json",
    "Accept": "*/*"
  }
}

----------------
//Get All Destinations

http://localhost:3000/destinations

----------------------------


Get Api

Response:

[
    {
        "id": 1,
        "url": "https://test.com",
        "httpMethod": "POST",
        "headers": {
            "APP_ID": "1234APPID1234",
            "APP_SECRET": "abcd1234secret",
            "ACTION": "user.update",
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
        "createdAt": "2025-05-27T10:19:33.410Z",
        "updatedAt": "2025-05-27T10:19:33.410Z",
        "AccountId": "0dcaf687-6c10-40a9-ae1b-d9c41e40883f"
    }
]
]
