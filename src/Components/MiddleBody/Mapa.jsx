import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function Mapa() {
  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: [55.34, 61.33], zoom: 9 }}>
          <Placemark
            geometry={{
              type: "Point",
              coordinates: ["55.34204212045834", "61.33879316690873"],
            }}
            properties={{
              hintContent: "Долгодеревенское, ул. Свердловская д 7А ",
              balloonContent: `<div class="balloon">
                               <div class="contacts-information">Sphinx</div>
                               <div class="adress">c. Долгодеревенское, ул. Свердловская д 7A</div>
                               <div class="contacts">телефон: +7(932)238-25-27</div>
                               </div>`,
            }}
            options={{
              iconLayout: "default#image",
              iconImageSize: [25, 25],
              iconImageHref: "public/Sphinx.png",
            }}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          ></Placemark>

          <Placemark
            geometry={{
              type: "Point",
              coordinates: ["55.31061990635656", "61.263775626769466"],
            }}
            properties={{
              hintContent: "Рощино, ул. Ленина, д 11А ",
              balloonContent: `<div class="balloon">
                               <div class="contacts-information">Sphinx</div>
                               <div class="adress">поселок. Рощино, ул. Ленина д 11A</div>
                               <div class="contacts">телефон: +7(932)238-25-28</div>
                               </div>`,
            }}
            options={{
              iconLayout: "default#image",
              iconImageSize: [25, 25],
              iconImageHref: "public/Sphinx.png",
            }}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          ></Placemark>
        </Map>
      </div>
    </YMaps>
  );
}

export default Mapa;
