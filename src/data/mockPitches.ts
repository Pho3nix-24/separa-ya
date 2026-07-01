// 1. Definimos la estructura de un campo individual dentro de un local
export interface Campo {
  id: string;
  nombre: string;      // ej. "Campo 01"
  tipo: string;        // ej. "5 vs 5", "7 vs 7"
  superficie: string;  // ej. "Sintética", "Losa"
  precioHora: number;
}

// 2. Definimos la estructura principal del Local (La empresa)
export interface Local {
  id: string;
  nombre: string;
  distrito: string;    
  direccion: string;
  imagenes: string[];  // Un array para el carrusel de la Fase 1
  precioDesde: number; // Para mostrar en la tarjeta principal
  calificacion: number;
  whatsapp: string;    // ¡Vital para nuestro CTA de la Fase 1!
  servicios: string[]; // ej. ['chalecos', 'estacionamiento', 'wifi']
  campos: Campo[];
  latitud: number;     // Coordenada latitud para geolocalización
  longitud: number;    // Coordenada longitud para geolocalización
}

// 3. Creamos nuestra base de datos simulada (Mock Data)
export const localesMock: Local[] = [
  {
    id: "el-guerrero-mochica",
    nombre: "El Guerrero de Mochica Sports",
    distrito: "Trujillo",
    direccion: "Av. 9 de Octubre 148 - Urb. Miraflores",
    imagenes: [
      "https://scontent.ftru3-1.fna.fbcdn.net/v/t39.30808-6/472552604_1018671456946008_2104266298523843127_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x720&ctp=s1280x720&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEY2BZy84TDel0-5tJYRVOtEgr5UJd-nV0SCvlQl36dXQXI63sTCDdylC15ymLQwKMuI9TP7P12VkjdiwlsFL4t&_nc_ohc=TONgdFHyfMEQ7kNvwGGOCAw&_nc_oc=AdqtPWiG1W80FBw5R9Wg9oDNvF_5rUVNPymuPU9Ps5HYmREijOZFImn8IDW8JnzTYecoE1EJG678huxFEVtzciHf&_nc_zt=23&_nc_ht=scontent.ftru3-1.fna&_nc_gid=N45SpOw2kFd9LSwnbdG7Fg&_nc_ss=7b2a8&oh=00_Af_eRc4UQp6iTvLFYffK-dFRmoAJPw1-3dLmdVYEehbQ4Q&oe=6A37B2E1"
    ],
    precioDesde: 60,
    calificacion: 4.5,
    whatsapp: "51999123456",
    servicios: ["chalecos", "pelota", "estacionamiento", "pago_tarjeta", "baños", "wifi"],
    campos: [
      {
        id: "c1",
        nombre: "Campo 01",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 60
      }
    ],
    latitud: -8.1025,
    longitud: -79.0210
  },
  {
    id: "los-peloteros",
    nombre: "Los Peloteros",
    distrito: "Victor Larco",
    direccion: "Av. Los Colibríes Mz. X Lote 54",
    imagenes: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpjUiPw0zjzwIIelvPA0J7a-nAtoi4iyUQmOoHTwpJr571M7RmxqjpDo&s=10"
    ],
    precioDesde: 70,
    calificacion: 4.0,
    whatsapp: "51999654321",
    servicios: ["chalecos", "pelota", "baños", "tienda"],
    campos: [
      {
        id: "c2",
        nombre: "Campo 03",
        tipo: "7 vs 7",
        superficie: "Sintética",
        precioHora: 80
      },
      {
        id: "c3",
        nombre: "Campo 04",
        tipo: "7 vs 7",
        superficie: "Sintética",
        precioHora: 90
      }
    ],
    latitud: -8.1342,
    longitud: -79.0381
  },
  {
    id: "soccer-club-el-bunker",
    nombre: "Soccer Club - El Búnker",
    distrito: "Victor Larco",
    direccion: "Av. Larco 1230 - Vista Alegre",
    imagenes: [
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHi40mi6o1OCggBozhjqhmgcYmUGlX-Y8U2UutCYlCHGhdER3kgttSGjFzTZd8KmPGRiV1qR_CEcHfR73pzZa62rTvpxidOAjYL-dcx83aCkF8NLBeiKZKrPM2hremUGBdfnctN=w534-h240-k-no"
    ],
    precioDesde: 70,
    calificacion: 4.6,
    whatsapp: "51987654321",
    servicios: ["chalecos", "pelota", "baños", "duchas", "estacionamiento", "tienda"],
    campos: [
      {
        id: "c4",
        nombre: "Cancha Sintética Principal",
        tipo: "7 vs 7",
        superficie: "Sintética",
        precioHora: 90
      },
      {
        id: "c5",
        nombre: "Cancha Sintética Secundaria",
        tipo: "5 vs 5",
        superficie: "Sintética",
        precioHora: 70
      }
    ],
    latitud: -8.1311,
    longitud: -79.0435
  },
  {
    id: "polideportivo-claro",
    nombre: "Polideportivo Claro",
    distrito: "Victor Larco",
    direccion: "Calle Las Flores 450 - Vista Alegre",
    imagenes: [
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEqZVfMSkp-_x-2Hr6c0sr_hFUHt8yJS4W40jmtnBARHQXe0o7omQ9ehKpskcAGcdPMRgX1DeFQO-RgOz9hc8-vc7cZU1AfYkFL2pYNwsPltPinINWmp_H0fmud2JzEyjKuMwdjEQ=s1360-w1360-h1020-rw"
    ],
    precioDesde: 50,
    calificacion: 4.2,
    whatsapp: "51987654322",
    servicios: ["baños", "duchas", "vestuarios"],
    campos: [
      {
        id: "c6",
        nombre: "Losa Multiusos",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 50
      }
    ],
    latitud: -8.1362,
    longitud: -79.0412
  },
  {
    id: "complejo-deportivo-mansiche",
    nombre: "Complejo Deportivo Mansiche",
    distrito: "Trujillo",
    direccion: "Av. Mansiche s/n (Frente al Estadio Mansiche)",
    imagenes: [
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFX6ehjGeEqraFdL-6fB5P5kFxuisB-OkS6EkhefTy6q4DrkMbmDO91K6-PndLVGyM0QMx62izMkBHOCd4K36p2S8nlfFLdkOFeDiJTJsLvPHKXdsk_zsxNzuiGdg8FG5Sufgc0=w408-h306-k-no"
    ],
    precioDesde: 40,
    calificacion: 4.3,
    whatsapp: "51987654323",
    servicios: ["baños", "vestuarios", "estacionamiento"],
    campos: [
      {
        id: "c7",
        nombre: "Losa Principal",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 40
      },
      {
        id: "c8",
        nombre: "Losa de Básquetbol",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 40
      }
    ],
    latitud: -8.1072,
    longitud: -79.0345
  },
  {
    id: "polideportivo-inca-roca",
    nombre: "Polideportivo Inca Roca",
    distrito: "El Porvenir",
    direccion: "Av. Pumacahua 1200 - El Porvenir",
    imagenes: [
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGI32N1zZvwF941bt3x3kQrl5MAjTB42ASP6y7RO5feLAOR-ZZPkQut82fomCPXyKTqIBfS6sbtZljtI1vljDjPg54WsBzBpEOGjbXS5h5KKaQdLGRI1bdBdCeFk8kc5TkHOwNsdA=s1360-w1360-h1020-rw"
    ],
    precioDesde: 60,
    calificacion: 4.1,
    whatsapp: "51987654324",
    servicios: ["chalecos", "pelota", "baños", "tienda"],
    campos: [
      {
        id: "c9",
        nombre: "Cancha Grass Inca Roca",
        tipo: "7 vs 7",
        superficie: "Sintética",
        precioHora: 80
      },
      {
        id: "c10",
        nombre: "Losa Multiusos",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 60
      }
    ],
    latitud: -8.0935,
    longitud: -79.0062
  },
  {
    id: "gol-peru-sports-complex",
    nombre: "Gol Perú Sports Complex",
    distrito: "La Esperanza",
    direccion: "Av. Parque Industrial 240 - La Esperanza",
    imagenes: [
      "https://scontent.ftru3-1.fna.fbcdn.net/v/t1.6435-9/81189651_492897541355290_4657301964135071744_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x640&ctp=s1280x640&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHzSTnpzPh3Pb4LDyDI7RKXlJD-ODn1hlGUkP44OfWGUeMCNB2J92coRMwBmQl75ubxbLYQ9btxBOMzDfCB2INV&_nc_ohc=qs6jHGVEGuEQ7kNvwFFS0ek&_nc_oc=AdrNA-m7nP5zHJXw6batiGFXVIZbyQr1ZTS0vbmoid44cCOHLbmlXW9KbEe5jAC-Sm9DJTroQQK-V1JxuIW53ThT&_nc_zt=23&_nc_ht=scontent.ftru3-1.fna&_nc_gid=F-l9vJ1Con1VGX8CgONGIw&_nc_ss=7b2a8&oh=00_AQDiGb8zSJ5CqFBaXkyIhR4PEhSay9bD8Shx12mg0TKoCQ&oe=6A6AA4D5"
    ],
    precioDesde: 65,
    calificacion: 4.4,
    whatsapp: "51987654325",
    servicios: ["chalecos", "pelota", "baños", "duchas", "estacionamiento", "luz"],
    campos: [
      {
        id: "c11",
        nombre: "Cancha Grass Sintético 1",
        tipo: "7 vs 7",
        superficie: "Sintética",
        precioHora: 85
      },
      {
        id: "c12",
        nombre: "Cancha Grass Sintético 2",
        tipo: "5 vs 5",
        superficie: "Sintética",
        precioHora: 65
      }
    ],
    latitud: -8.0772,
    longitud: -79.0520
  },
  {
    id: "complejo-deportivo-florencia-de-mora",
    nombre: "Complejo Deportivo Municipal Florencia de Mora",
    distrito: "Florencia de Mora",
    direccion: "Calle 12 de Noviembre 820 - Florencia de Mora",
    imagenes: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn1v03zS95GB0PocsjQYPlhNSBLmh29nLeJvJOHQb4ROGEPr6K8AC2cn2WdPsFju_5i4Z4IM725JGXV2hvjrH_qlyNernJjVWPy5tt0utBgbIbUS1A6liqFDmrMdrnuxXbAVyejU=s1360-w1360-h1020-rw"
    ],
    precioDesde: 30,
    calificacion: 4.0,
    whatsapp: "51987654326",
    servicios: ["baños", "vestuarios", "luz"],
    campos: [
      {
        id: "c13",
        nombre: "Losa Techada 1",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 30
      }
    ],
    latitud: -8.0862,
    longitud: -79.0212
  },
  {
    id: "complejo-polideportivo-huanchaco",
    nombre: "Complejo Polideportivo de Huanchaco",
    distrito: "Huanchaco",
    direccion: "Av. La Rivera s/n (Frente a la playa) - Huanchaco",
    imagenes: [
      "https://larepublica.cronosmedia.glr.pe/migration/images/O2XL2R7HOZCXRISFK4OVG3TCLE.jpg"
    ],
    precioDesde: 50,
    calificacion: 4.5,
    whatsapp: "51987654327",
    servicios: ["baños", "duchas", "estacionamiento", "cafetería", "wi-fi"],
    campos: [
      {
        id: "c14",
        nombre: "Cancha de Grass Natural",
        tipo: "7 vs 7",
        superficie: "Sintética",
        precioHora: 70
      },
      {
        id: "c15",
        nombre: "Campo de Arena (Vóley/Fútbol Playa)",
        tipo: "5 vs 5",
        superficie: "Arena",
        precioHora: 50
      }
    ],
    latitud: -8.0735,
    longitud: -79.1170
  },
  {
    id: "polideportivo-huaca-del-sol",
    nombre: "Polideportivo Huaca del Sol",
    distrito: "Moche",
    direccion: "Calle Manco Cápac 150 - Moche Pueblo",
    imagenes: [
      "https://scontent.ftru3-1.fna.fbcdn.net/v/t39.30808-6/657493061_1237356885215984_3440134174071701513_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFegeDw5KwVCV9aGbPhzRD5COY_x8VCBPoI5j_HxUIE-rVX5qPXifycDjBsauBX58hUcrw1khfiuPW0RoxKsc2-&_nc_ohc=Bz_0Kw5AhHsQ7kNvwHVUIaM&_nc_oc=AdpziQgeR3YZ7-KIma7K80l1ccraVjlriTgyb3RFeUbiv8F4K4lWPUGPFp7IIeu3jpWQCs6JMCvtdwLvyfZPEqmb&_nc_zt=23&_nc_ht=scontent.ftru3-1.fna&_nc_gid=DNu7hn9muMq7X66_yAQqNA&_nc_ss=7b2a8&oh=00_AQDZaJzD697tjHSoEa4Vkx2qVRy-6O1s5u1TOuUKHzqfHw&oe=6A490AE1"
    ],
    precioDesde: 45,
    calificacion: 4.3,
    whatsapp: "51987654328",
    servicios: ["baños", "pelota", "estacionamiento", "tienda"],
    campos: [
      {
        id: "c16",
        nombre: "Losa Sintética Moche",
        tipo: "5 vs 5",
        superficie: "Sintética",
        precioHora: 45
      }
    ],
    latitud: -8.1685,
    longitud: -79.0090
  },
  {
    id: "estadio-municipal-salaverry",
    nombre: "Estadio e Instalaciones Municipales de Salaverry",
    distrito: "Salaverry",
    direccion: "Av. La Marina s/n (Cercano a la playa) - Salaverry",
    imagenes: [
      "https://scontent.ftru1-1.fna.fbcdn.net/v/t39.30808-6/559576785_1212164924265354_6891768546953069226_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEbqYHdAJGAnJIgZngLMa1FjHYR9xN9XeiMdhH3E31d6HMyQau0usLTG63ou41GsYAi01rNA8ZC1jOEj7hKj56j&_nc_ohc=8LzM-0uQJe4Q7kNvwFGtNBa&_nc_oc=Adq_jGAgfRiaMa69TfiBjzBsvNpuJtpeTBUIY0JRrQx8V8k9j1IiWoFFfm-R7EFJugZChaFphF1wYVDz6r3jww_7&_nc_zt=23&_nc_ht=scontent.ftru1-1.fna&_nc_gid=HBzTFaP_AJbZxtzDbPgqPA&_nc_ss=7b2a8&oh=00_AQDgZie0LOSiSRke3BSwWkGut81huH0NCs1hjCh5l406nA&oe=6A48FB4C"
    ],
    precioDesde: 40,
    calificacion: 4.1,
    whatsapp: "51987654329",
    servicios: ["baños", "vestuarios", "estacionamiento"],
    campos: [
      {
        id: "c17",
        nombre: "Cancha Principal de Grass",
        tipo: "7 vs 7",
        superficie: "Sintética",
        precioHora: 60
      },
      {
        id: "c18",
        nombre: "Losa Municipal",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 40
      }
    ],
    latitud: -8.2235,
    longitud: -78.9770
  },
  {
    id: "complejo-deportivo-laredo",
    nombre: "Complejo Deportivo de Laredo",
    distrito: "Laredo",
    direccion: "Av. El Centenario 300 - Laredo",
    imagenes: [
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFpMEzNLwVkfcUjSVA-woUzPaPK-il_ip1CagjUDQhPmsIdTwU6XjQG41kLH44XjwUyBW7dtCDYSejoxUNw5YSxuXfQ8_b-PKRJRYXKeqUgkolryix7d5W07NKoEGwJ7s0wPEfA=s1360-w1360-h1020-rw"
    ],
    precioDesde: 35,
    calificacion: 4.2,
    whatsapp: "51987654330",
    servicios: ["baños", "duchas", "tienda"],
    campos: [
      {
        id: "c19",
        nombre: "Losa de Concreto Laredo",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 35
      }
    ],
    latitud: -8.0895,
    longitud: -78.9610
  },
  {
    id: "losa-deportiva-shiran",
    nombre: "Losa Deportiva de Shirán",
    distrito: "Poroto",
    direccion: "Carretera Industrial km 40 - Centro Poblado Shirán",
    imagenes: [
      "https://scontent.ftru1-1.fna.fbcdn.net/v/t39.30808-6/647411631_1503407691787538_2342699231621212418_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF5E7zb3PLZth_DRyds_aim99cyrOOonc731zKs46idzpyNinxy_DA_cvKiTuLgLnWXYeY9123AhQHLHu8HbMjR&_nc_ohc=E1ryn0UX1yMQ7kNvwFD6Lmq&_nc_oc=AdpBf0tvwmXkLm9LrgHHi56N8TJNR3WiyC77ghFLvrMFoP10SmgOrbeaq-Nuf1pZlYR3g4zEwvXXz1QraI80CJ_C&_nc_zt=23&_nc_ht=scontent.ftru1-1.fna&_nc_gid=_pUPc1yiEdL01XG3owEvnQ&_nc_ss=7b2a8&oh=00_AQCcJqqL0Rat46f4_pD29Cj5sQ7tm9b1C_NNjPHW8KpCxQ&oe=6A48FB85"
    ],
    precioDesde: 25,
    calificacion: 4.0,
    whatsapp: "51987654331",
    servicios: ["baños", "pelota"],
    campos: [
      {
        id: "c20",
        nombre: "Losa Shirán",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 25
      }
    ],
    latitud: -8.0210,
    longitud: -78.7840
  },
  {
    id: "losa-deportiva-municipal-simbal",
    nombre: "Losa Deportiva Municipal de Simbal",
    distrito: "Simbal",
    direccion: "Calle Trujillo 120 (Plaza de Armas) - Simbal",
    imagenes: [
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH9ZB6rHVdsqSBYZXAl7CEesMW0R5sOtRFDGtt8EkVNMsqWkwTSCRMyr2hXljx6dfScTVRoHeuGaH5mJKZrjZlaiohe4apFfXBqB-jJ3ugySVB6x-4ksxa4ZdQYsWS7F4HtXsRhxA=s1360-w1360-h1020-rw"
    ],
    precioDesde: 30,
    calificacion: 4.2,
    whatsapp: "51987654332",
    servicios: ["baños", "pelota", "tienda"],
    campos: [
      {
        id: "c21",
        nombre: "Losa Municipal Simbal",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 30
      }
    ],
    latitud: -7.9820,
    longitud: -78.8120
  },
  {
    id: "complejo-deportivo-barrio-4",
    nombre: "Complejo Deportivo del Barrio 4",
    distrito: "Alto Trujillo",
    direccion: "Mz. D Lote 15 - Barrio 4 - Alto Trujillo",
    imagenes: [
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEN9NHTdNuXAKrFsFG2fxlDsXCaOwchv2pI-DGrnXComz4p2zDX-PR40dmgDPiH-agM0cA3w3UwDgaQHN30htM2aHBQbX_F04hDqV2YsxDy5QWdAe03B6SzRBVnjRNj5O7JHLAK7EBwwv7M=s1360-w1360-h1020-rw"
    ],
    precioDesde: 40,
    calificacion: 4.0,
    whatsapp: "51987654333",
    servicios: ["baños", "chalecos", "pelota"],
    campos: [
      {
        id: "c22",
        nombre: "Cancha Sintética Barrio 4",
        tipo: "5 vs 5",
        superficie: "Sintética",
        precioHora: 50
      },
      {
        id: "c23",
        nombre: "Losa de Concreto Barrio 4",
        tipo: "5 vs 5",
        superficie: "Losa",
        precioHora: 40
      }
    ],
    latitud: -8.0680,
    longitud: -78.9880
  }
];
