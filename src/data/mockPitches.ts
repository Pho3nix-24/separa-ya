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
    ]
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
    ]
  }
];