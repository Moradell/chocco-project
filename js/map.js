// let myMap;
 
// const init = () => {
//  myMap = new ymaps.Map("map", {
//    center: [43.115445, 131.885459],
//    zoom: 15,
//    controls: []
//  });

//  const coords = [
  //  [43.115445, 131.885459],
  //  [43.112089, 131.874944],
  //  [43.113667, 131.892782],
  //  [43.119134, 131.878711]
//  ];

//  const myCollection = new ymaps.GeoObjectCollection({}, {
//    draggable: false,
//    iconLayout: 'default#image',
//    iconImageHref: "../img/marker.svg",
//    iconImageSize: [46, 57],
//    iconImageOffset: [-25, -52]
//  });

//  coords.forEach(coord => {
//   myCollection.add(new ymaps.Placemark(coord));
//  });

//  myMap.geoObjects.add(myCollection);

//  myMap.behaviors.disable("scrollZoom");
// };
 
// ymaps.ready(init);

let myMap;
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [43.115445, 131.885459],
   zoom: 15,
   controls: [],
 });
 
 let coords = [
    [43.115445, 131.885459],
    [43.112089, 131.874944],
    [43.113667, 131.892782],
    [43.119134, 131.878711],
   ],
   myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
     iconImageHref: './img/marker.svg',
     iconImageSize: [46, 57],
     iconImageOffset: [-35, -52]
   });
 
 for (let i = 0; i < coords.length; i++) {
   myCollection.add(new ymaps.Placemark(coords[i]));
 }
 
 myMap.geoObjects.add(myCollection);
 
 myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);