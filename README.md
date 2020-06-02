# Mapa-Content
🌎 Esse projeto utiliza Google Maps API para exibição de dados relevantes em mapa makers.

<img src="/img/home.PNG">

## Getting Started

<img align="left" width="140" height="90" src="/img/materialize_logo.png">

### Materialize
Materialize is a modern responsive CSS framework based on Material Design by Google.

### Installing Materilize

You can also get the latest release using NPM. This release contains source files as well as the compiled CSS and JavaScript files.

```
$ npm install materialize-css@next
```
<img align="left" width="120" height="120" src="/img/logo_firebase.png">

### Firebase
O Firebase é uma plataforma de desenvolvimento de aplicativos para dispositivos móveis e Web desenvolvida pela Firebase.

### Executar um servidor da Web local para desenvolvimento
Ao criar um app da Web, algumas partes do SDK para JavaScript do Firebase exigem que seu app seja hospedado por um servidor, em vez de um sistema de arquivos local. Você pode usar a Firebase CLI para executar um servidor local deste modo:
```
$ npm install -g firebase-tools
```
```
$ firebase init    # Generate a firebase.json (REQUIRED)
```
```
$ firebase serve   # Start development server
```
## API Google Maps

### Get API Key
To use the Maps JavaScript API, you must get an API key which you can then add to your mobile app, website, or web server.  The API key is used to track API requests associated with your project for usage and billing. To learn more about API keys, see the API Key Best Practices and the FAQs.

#### Step 1: Get an API key
Click the button below, to get an API key using the Google Cloud Platform Console. You will be asked to (1) pick one or more products, (2) select or create a project, and (3) set up a billing account. Once your API key is created you will be prompted to restrict the key's usage. (For more information, see Restricting an API key.)

#### Step 2: Add the API key to your request
When loading the Maps JavaScript API, substitute YOUR_API_KEY in the code below with the API key you got from the previous step.

```
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  type="text/javascript"></script>
```

## Built With

* [Materialize](https://materializecss.com/) - The web framework used
* [Firebase](https://firebase.google.com/) - The database used
* [API Google Maps](https://developers.google.com/maps/documentation/)

## :page_facing_up: Licença 
Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :yellow_heart: por <strong> Carlos Henrique da Costa Silva </strong> </p>

