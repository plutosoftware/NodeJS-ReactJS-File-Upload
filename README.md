# File Upload with NodeJS & Multer to Local Storage:

File uploading and storing the file for later retreval is one of the most comman feature part of any web application. Here is just the POC for Uploading file via REST API to NodeJS Server.

Here, we are using `multer`, as file uploading middleware. It is library which makes it easier to work with file uploads. In the example we have built the api to accept multiple files, but this can also work with single file. Although the place where we want to strictly abide by single file upload, the change should be done accordingly.

# How to run :

1. Go to client folder, run `npm install` and then `npm start`. This will start your frontend client on port `3000`.
2. Go to server folder, run `npm install` and then `npm start`. This will start your backend API on port `8020`.
3. Now, Test the application by uploading single or multiple files.
