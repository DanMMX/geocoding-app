# Geocoding app

Inside you will find 2 folders, one for the server and one for the client.

## Server

It's a restify REST server using NodeJS

### Installing

```
cd server/
npm install
cp .env.template .env
# modify that new .env file with the Google API key
npm start
```

### Endpoints

#### GET `/?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA`

Get the geocode of a provided address

#### GET `/reverse?latlng=40.714224,-73.961452`

Get the reverse geocode of a specific location on the globe

#### GET `/distance?latlng=50.0663889,-5.714722222222222&latlng2=58.6438889,-3.0700000000000003`

Get the distance between two locations on the globe

## Client

It's a create-react-app React application.

### Installing

```
cd client/
npm install
cp .env.template .env
# modify that new .env file with the server's endpoint. it's set to localhost:8080 as default
npm start
```

### Creating a build
`npm run build`