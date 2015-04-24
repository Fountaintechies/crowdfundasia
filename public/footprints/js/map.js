alert('initialize map');

var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
  // var map;
  // var geocoder;
  // function initialize()
  // {
  //   alert('initialize map');
  //     var myLatlong   =   new google.maps.LatLng(9.9312328, 76.2673041);
  //     var myOptions   =   {
  //                             zoom:8,
  //                             center:myLatlong,
  //                             mapTypeId:google.maps.MapTypeId.ROADMAP
  //                         };
  //    map          =   new google.maps.Map(document.getElementById('map_canvas'),myOptions);
  //    geocoder      =   new google.maps.Geocoder();
  // }

// $(document).ready(function(){
//     $("#autocomplete").autocomplete({
//         source:function(request,response){
//             geocoder.geocode({'address':request.term},function(results){
//                 response($.map(results,function(item){
//                     return {
//                        label:item.formatted_address,
//                        value:item.formatted_address,
//                        latitude:item.geometry.location.lat(),
//                        longitude:item.geometry.location.lng(),
//                     }
//                 }))
//             })
//        },
//         select:function(event,ui) {
//           var location    =   new google.maps.LatLng(ui.item.latitude,ui.item.longitude);
//           marker          =   new google.maps.Marker({
//               map:map,
//               draggable:true
//           })
//          var stringvalue  =  'latitude:<input type="text" value="'+ui.item.latitude+'" >Longitude:<input type="text" value="'+ui.item.longitude+'"><br/>';
//           $("#value").append(stringvalue);
//           marker.setPosition(location);
//           map.setCenter(location);
//         }
//     })
//   });
