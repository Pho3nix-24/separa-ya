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
      "/img/trux_mochica.png"
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
    direccion: "VXG4+5H2, Av. Los Colibríes, Trujillo 13008",
    imagenes: [
      "/img/trux_peloteros.png"
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
    distrito: "Trujillo Centro",
    direccion: "Dirección: Urb Las Orquídeas, Trujillo 13011",
    imagenes: [
      "/img/trux_bunker.png"
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
    direccion: "Tito CondeMayta 1048, Víctor Larco Herrera 13003",
    imagenes: [
      "/img/trux_claro.png"
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
    direccion: "Av Mansiche 379, Trujillo 13001",
    imagenes: [
      "/img/trux_mansiche.png"
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
    direccion: "Jr. Inca Roca 1060-1218, El Porvenir 13003",
    imagenes: [
      "/img/trux_inca.png"
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
      "/img/trux_gol.png"
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
    id: "club-pueblo-florencia-de-mora",
    nombre: "Club del Pueblo Florencia de Mora",
    distrito: "Florencia de Mora",
    direccion: "WXCJ+MGF, 25 De Diciembre, Florencia de Mora 13003",
    imagenes: [
      "/img/trux_florencia.png"
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
    direccion: "WV6H+CR4, Huanchaco 13000",
    imagenes: [
      "/img/trux_huanchaco.png"
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
    direccion: "Calle Manco Cápac 150 - Moche Pueblo Trujillo 13011",
    imagenes: [
      "/img/trux_huacasol.png"
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
    direccion: "Av. La Marina s/n (Cercano a la playa) - Q2JG+2HW, Salaverry 13611",
    imagenes: [
      "/img/trux_munisalaverry.png"
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
    direccion: "Av. El Centenario 300 - W25P+X86 Polideportivo, Laredo 13101",
    imagenes: [
      "/img/trux_laredo.png"
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
      "/img/trux_shiran.png"
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
    direccion: "Calle Trujillo 120 (Plaza de Armas) - 25PR+37M, Simbal 13105",
    imagenes: [
      "/img/trux_simbal.png"
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
    direccion: "Mz. D Lote 15 - Barrio 4 - Alto Trujillo, El Porvenir 13003",
    imagenes: [
      "/img/trux_barrio4.png"
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
