 // This example displays a marker at the center of Australia.
      // When the user clicks the marker, an info window opens.

      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

        var contentString = '<center>'+
            '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Plataforma 1</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, Esta plataforma está cadastrada na sua propriedade</p>'+
            '<p>Clique no botao para para acessar as informações que estão sendo coletadas pela plataforma</p>'+
            '<button>Acesso</button>'+
            '</div>'+
            '</div>'+
            '</center>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }