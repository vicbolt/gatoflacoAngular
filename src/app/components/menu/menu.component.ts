import { Component, ElementRef, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';

interface Plato {
  nombre: string;
  descripcion: string;
  precio: string;
  precio2: string;
  img: string;
  categorias: string[];
  clase: string;
  sugerencia: string;
  precio2_visible: string;
  nuevo: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {
  @Output() categoryChanged = new EventEmitter<string>();


  platos: Plato[] = [

    //ENTRANTRES

    {
      nombre: 'Ensalada de tomate premium, stracciatella y pesto rosso del gato',
      descripcion: 'Una delicia gourmet que te hará sentir como en casa. Una mezcla de sabores intensos y deliciosos, que te transportará directamente a la cocina gourmet. Ideal para compartir o para disfrutar por ti mismo. ¡Prepárate para una experiencia gastronómica inolvidable!',
      precio: '10,5',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Tartar especial del gato',
      descripcion: '',
      precio: '9,80',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: 'true',
    },

    {
      nombre: 'Croquetas de Temporada 1ud',
      descripcion: '',
      precio: '2,3',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/croqueta-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Takoyaki de Pulpo 8ud',
      descripcion: 'Especialidad japonesa. Estos bocaditos redondos están rellenos de pulpo tierno y sazonados con una mezcla secreta de especias. Rebozados y fritos hasta alcanzar la perfección, se sirven con salsa takoyaki, mayonesa japonesa y un toque de katsoubushi. Cada bocado es una explosión de sabor y textura que te transportará directamente a Japón.',
      precio: '9,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/takoyaki-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Pastella sefarad de pollo',
      descripcion: 'Delicada especialidad inspirada en la cocina judeoespañola, esta pastella combina sabores exóticos y tradicionales en un hojaldre crujiente con relleno de pollo especiado. Una fusión de historia y sabor que transporta al corazón de Sefarad en cada bocado.',
      precio: '5',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Patatas con mojo rojo y alioli suave',
      descripcion: 'Clásico reinventado: patatas doradas al punto, acompañadas de mojo rojo canario con su toque especiado y un alioli suave que equilibra cada bocado. Una combinación irresistible para empezar con buen pie.',
      precio: '8',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },


    {
      nombre: 'Nachos con salsa de queso cheddar y zorza',
      descripcion: 'Disfruta de nuestros nachos crujientes cubiertos con una generosa salsa de queso cheddar fundido y suculenta zorza. Esta combinación de sabores intensos y texturas irresistibles te ofrece un festín de sabor en cada bocado. Perfectos para compartir o para disfrutar como un indulgente capricho.',
      precio: '8,8',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/nachos2-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Torreznos con crema de Revolcona',
      descripcion: 'Prueba nuestros torreznos, acompañados de una suave y sabrosa crema de Revolcona. La combinación de la textura crocante de los torreznos con la riqueza y el sabor profundo de la crema de Revolcona ofrece una experiencia culinaria deliciosa y reconfortante. Un aperitivo perfecto para compartir o disfrutar en solitario.',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/torreznos-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: ''
    },

    {
      nombre: 'Alitas chinese lemon 🌶️🔥',
      descripcion: 'Jugosas alitas de pollo crujientes por fuera y tiernas por dentro, bañadas en una salsa agridulce de limón al estilo asiático, con un toque picante que despierta los sentidos. Un clásico con carácter propio.',
      precio: '9',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: ''
    },

    {
      nombre: 'Alitas fury spicy 🌶️🔥',
      descripcion: 'Para los valientes del picante: alitas de pollo extra crujientes bañadas en una salsa ardiente y explosiva que no se anda con rodeos. Intensamente sabrosas, intensamente picantes.',
      precio: '9',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: ''
    },

    {
      nombre: 'Criollos con miel de mostaza, hierbabuena y parmesano',
      descripcion: 'Sabrosas salchichas criollas a la plancha, realzadas con una suave miel de mostaza, un toque fresco de hierbabuena y lascas de parmesano fundido. Un contraste de sabores que sorprende y conquista.',
      precio: '9,5',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: ''
    },

    {
      nombre: 'Wok de Vermicelli estilo japonés',
      descripcion: 'Finos fideos vermicelli salteados al wok con vegetales frescos y sabores inspirados en la cocina japonesa. Ligero, aromático y lleno de umami en cada bocado.',
      precio: '9,1',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: ''
    },


    // PLATOS CALIENTES

    {
      nombre: 'Alitas Picantonas',
      descripcion: 'Déjate llevar por el sabor intenso de nuestras alitas picantonas. Maridadas con una mezcla especial de especias y salsas que le dan un toque picante y sabroso, cada alita ofrece un equilibrio perfecto entre el calor y la jugosidad. Ideales para los amantes del picante y perfectas para compartir.',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/alitas-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Alitas Umami',
      descripcion: 'Descubre el sabor exótico de nuestras alitas orientales, marinadas con una mezcla de especias y salsas que evocan auténticos sabores de Asia. Cada alita está glaseada con una salsa agridulce y ligeramente especiada, ofreciendo una experiencia culinaria única y llena de matices. Perfectas para quienes buscan un toque de aventura en cada bocado.',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/alitas_verdes-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'flex',
      nuevo: 'true',
    },

    {
      nombre: 'Duo de Quesadillas',
      descripcion: 'Dos es mejor que uno, ¿no? Estas quesadillas vienen cargadas de sabor, rellenas de queso derretido y los ingredientes más sabrosos. Un bocado crujiente que te transportará directamente a México. Ideales para compartir, aunque no prometemos que quieras hacerlo. ¡Ándale, que se enfrían!',
      precio: '7,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/quesadillas-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: 'true',
    },

    {
      nombre: 'Costillas glaseadas en salsa agripicantes ',
      descripcion: 'Tiernas, jugosas y con ese toque que te hará chuparte los dedos. Estas costillas están bañadas en una irresistible salsa agridulce con un toque picante que hará que quieras más con cada bocado. ¿El resultado? Una explosión de sabores que te dejará sin palabras... ¡y sin servilletas!',
      precio: '10',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/costillas-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: 'true',
    },

    {
      nombre: 'Yakisoba con Pollo Teriyaki',
      descripcion: 'Un plato que te transportará directo a las calles de Japón. Fideos yakisoba salteados a la perfección, acompañados de jugoso pollo teriyaki y una mezcla de verduras frescas. Este festín de sabores te hará pensar que tienes un chef japonés en la cocina. ¡Un bocado y estarás haciendo un brindis por el buen gusto!',
      precio: '8,20',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/yakisoba-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: 'true',
    },


    // BURGERS
    
    {
      nombre: 'Burger del Gato',
      descripcion: 'Disfruta de nuestra hamburguesa doble o triple, una auténtica delicia para los amantes de la buena carne. Con dos jugosas hamburguesas de carne, una generosa capa de queso fundido y nuestra salsa especial secreta, cada bocado es una explosión de sabor. Acompañada de ingredientes frescos y pan recién horneado, esta hamburguesa es el equilibrio perfecto entre indulgencia y satisfacción.',
      precio: ' Doble 9,3',
      precio2_visible: 'block',
      precio2: 'Triple 11,30',
      img: '../../../assets/menu/min/burger-min.png',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'flex',
      nuevo: '',
    },

    {
      nombre: 'Burger del Gato con panceta a baja temperatura y salsa mayo asiática spicy',
      descripcion: 'Nuestra burger más traviesa: carne jugosa, panceta cocinada a baja temperatura hasta que se deshace, y coronada con una salsa mayo asiática que le da el rugido final. Un bocado con garra.',
      precio: ' Doble 9,8',
      precio2_visible: 'block',
      precio2: 'Triple 11,80',
      img: '',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'flex',
      nuevo: '',
    },

    {
      nombre: 'Burguer Japan Tempuchicken ',
      descripcion: 'Un viaje directo a Japón en cada mordisco. Pollo crujiente en tempura, acompañado de salsa japonesa y queso fundido. Una fusión perfecta entre lo oriental y lo gourmet que te hará sentir en las calles de Tokio. ¡Irresistible!',
      precio: 'Doble 9,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/burgerjapan-min.png',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'flex',
      nuevo: 'true',
    },

    {
      nombre: 'Burger Black Ranch',
      descripcion: 'Hamburguesa intensa y con carácter. Con cremosa salsa ranch casera. Un clásico reinventado para los que buscan algo diferente.',
      precio: ' Doble 9,5',
      precio2_visible: 'block',
      precio2: 'Triple 11,50',
      img: '',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'flex',
      nuevo: '',
    },

 

    {
      nombre: 'Molletes de solomillo de cerdo en salsa de setas con queso raclette',
      descripcion: 'Una delicia en cada bocado. Jugoso solomillo de cerdo, bañado en una cremosa salsa de setas, coronado con queso raclette fundido, todo ello servido en suaves molletes. El combo perfecto entre lo rústico y lo gourmet, ideal para darte un capricho... o dos. ¡Una explosión de sabor que te hará repetir!',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/molletesolomillo-min.png',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'flex',
      nuevo: 'true',
    },

    {
      nombre: 'Mollete de Pulled Pork con Queso Fundido y Mayonesa de Chipotle',
      descripcion: 'Este mollete es un verdadero festín. Tierna carne de cerdo desmenuzada, cubierta con queso fundido y un toque picante de mayonesa de chipotle. Cada bocado es una fiesta de sabores que te hará bailar de gusto. ¡Prepárate para saborear la felicidad en pan!',
      precio: '8,4',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/molletepulled-min.png',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'none',
      nuevo: 'true',
    },

    {
      nombre: 'Hot Cat',
      descripcion: '¡El gatito caliente que se atreve a ser diferente! Con una salchicha jugosa escondida en un suave pan, este "gato" está adornado con los toppings más deliciosos y una salsa que hará que te maulles de placer. Es el compañero perfecto para tus días más hambrientos, ¡así que no te quedes sin el tuyo!',
      precio: '8',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/hotcat-min.png',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    // PIZZAS
    {
      nombre: 'Pizza Margarita',
      descripcion: 'Una auténtica pizza italiana, la Margarita es la esencia de la cocina napolitana. Su base de masa delgada y crujiente está cubierta con una suave capa de salsa de tomate fresca, enriquecida con hierbas aromáticas como el albahaca. Encima, se funde el queso mozzarella de alta calidad, creando una combinación perfectamente equilibrada de sabores. El toque final de un chorrito de aceite de oliva virgen extra realza los sabores y añade un acabado brillante y delicioso. Ideal para quienes aprecian la simplicidad de los ingredientes frescos y el sabor auténtico de Italia.',
      precio: '16',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/pizzamarga-min.png',
      categorias: ['completo', 'pizzas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Pizza York-Queso',
      descripcion: 'La pizza que hará que tu corazón lata un poco más rápido. Con una base crujiente, salsa de tomate fresca, abundante queso derretido y deliciosa york que se funde en cada bocado. Esta combinación clásica es un abrazo para tus papilas gustativas. ¡Perfecta para compartir, aunque no se lo digas a nadie!',
      precio: '16,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/pizzayorkqueso-min.png',
      categorias: ['completo', 'pizzas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Pizza BBQ',
      descripcion: 'Bacon, picada de vaca madurada, cebolla crujiente, salsa BBQ y masa de pizza artesana. <br>Saboréate con nuestra pizza barbacoa, una mezcla irresistible de sabores intensos y deliciosos. Con una base de salsa barbacoa ahumada, cubierta con suculentas piezas de carne, cebolla caramelizada y queso fundido, esta pizza ofrece un equilibrio perfecto entre lo dulce y lo salado. Termina con un toque de cilantro fresco para una experiencia de sabor que te hará querer más.',
      precio: '17',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/pizzabbq-min.png',
      categorias: ['completo', 'pizzas'],
      clase: '',
      sugerencia: 'flex',
      nuevo: '',
    },

    // POSTRES
    {
      nombre: 'Tarta de queso',
      descripcion: 'Una delicia clásica y cremosa que combina una base de galleta crujiente con un relleno suave y sedoso de queso crema. Esta tarta de queso se hornea a la perfección, logrando un equilibrio ideal entre dulzura y acidez. Se adorna con una suave capa de mermelada de frutos rojos, proporcionando un contraste de sabores que resalta la suavidad de la tarta. Perfecta como el final ideal para cualquier comida, esta tarta es un verdadero placer para los amantes del postre.',
      precio: '5,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/tartaqueso-min.png',
      categorias: ['completo', 'postres'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Tartalatas',
      descripcion: '',
      precio: '5,8',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'postres'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },


    {
      nombre: 'Helados Ben&Jerrys 100ml',
      descripcion: 'El sabor legendario de Ben & Jerry’s, ahora en un tamaño perfecto para llevar. Disfruta de tus combinaciones favoritas de helado cremoso, con trozos de galleta, chocolate y caramelo, en un formato más pequeño pero igual de irresistible. ¡Ideal para un capricho individual en cualquier momento!',
      precio: '4,9',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/helados-min.png',
      categorias: ['completo', 'postres'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Helados paletas',
      descripcion: '',
      precio: '4,5',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'postres'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },


    // BEBIDAS
    {
      nombre: 'Coca Cola',
      descripcion: '',
      precio: '2,4',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Coca Cola Zero',
      descripcion: '',
      precio: '2,4',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Coca Cola Zero Zero',
      descripcion: '',
      precio: '2,4',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    //CERVEZAS

    {
      nombre: 'Doble Estrella Galicia Especial',
      descripcion: '',
      precio: '2,6',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Doble Estrella Galicia (0,0% Tostada)',
      descripcion: '',
      precio: '3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Tercio de Estrella Galicia Especial',
      descripcion: '',
      precio: '2,7',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Tercio de Estrella Galicia 0,0',
      descripcion: '',
      precio: '2,7',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Tercio de Estrella Galicia (Sin Gluten)',
      descripcion: '',
      precio: '2,7',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Erdinger Brauhaus Bayern Radler Limon',
      descripcion: '',
      precio: '3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Brewdog Wingman IPA',
      descripcion: '',
      precio: '3,10',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Nortada (IPA Portuguesa) Sin Filtrar',
      descripcion: '',
      precio: '3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: '1906',
      descripcion: '',
      precio: '3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: '1906 Red Vintage',
      descripcion: '',
      precio: '3,10',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    //Vermut & vinos
    {
      nombre: 'Vermouth Forzudo',
      descripcion: '',
      precio: '2,5',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Tinto de Verano',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Mensaje Roble (Tempranillo) D.O Ribera del Duero',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Mensaje Crianza (Tempranillo) D.O Ribera del Duero',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'De Boca en Boca Crianza (Tempranillo) D.O Rioja Batiscafo',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'De Boca en Boca Crianza (Garnacha) D.O Calatayud',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Origium Roble (Garnacha Syrah) D.O Cariñena',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: '8.0.1 Edición Limitada (Cabernet, Suavignon, Syrah, Merlot) D.O Cariñena',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    //BLANCOS

    {
      nombre: 'V&R (Verdejo) D.O Rueda',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Silfide (Albariño) D.O Rías Baixas',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Particular (Chardonay, Moscatel de Alejandría) D.O Cariñena',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Tentazión Frizzante (Suavignon, Verdejo) D.O Castilla y Leon',
      descripcion: '',
      precio: 'x',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },


    // DESAYUNOS

    {
      nombre: 'Mollete con Tomate y Topping Iberico',
      descripcion: '',
      precio: '3,2',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Mollete de Antequera con Tomate y Aceite',
      descripcion: '',
      precio: '3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',

    },

    {
      nombre: 'Mollete de Lacon con Queso',
      descripcion: '',
      precio: '3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',

    },

    {
      nombre: 'Mollete de Salchichon/Chorizo Iberico',
      descripcion: '',
      precio: '3,2',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',

    },

    {
      nombre: 'Mollete de Bacon con Queso',
      descripcion: '',
      precio: '3,3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',

    },

    {
      nombre: 'Mollete de Lomo con Queso',
      descripcion: '',
      precio: '3,5',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',

    },


    {
      nombre: 'Mollete de Tortilla con Pimientos Verdes Fritos',
      descripcion: '',
      precio: '3,3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',

    },

    {
      nombre: 'Croissant Mixto',
      descripcion: '',
      precio: '3,8',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',

    },

    {
      nombre: 'Bolleria del Dia',
      descripcion: '',
      precio: '3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',

    },


    {
      nombre: 'Pincho de Tortilla',
      descripcion: '',
      precio: '3',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['desayunos'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

  ];

  platosFiltrados: Plato[] = [];
  pageTitle: string = 'Carta'; // Título inicial
  selectedCategory: string = ''; // Propiedad para la categoría seleccionada


filterCategory(categoria: string) {
  this.platosFiltrados = this.platos.filter((plato) =>
    plato.categorias.includes(categoria)
  );
  this.updateTitle(categoria); // Actualizar el título en lugar de emitir el evento
  this.categoryChanged.emit(categoria); // Emitir el evento con la categoría seleccionada
  this.selectedCategory = categoria; // Guardar la categoría seleccionada

}

  ngOnInit() {
    this.filterCategory('completo');
  }

  updateTitle(categoria: string) {
    const titles: { [key: string]: string } = {
      desayunos: 'Desayunos',
      completo: 'Carta Completa',
      entrantes: 'Entrantes',
      principales: 'Principales',
      hamburguesas: 'Burgers, Molletes, Perritos',
      pizzas: 'Pizzas',
      postres: 'Postres',
      bebidas: 'Bebidas',
    };

    this.pageTitle = titles[categoria] || 'Carta';
  }
}
