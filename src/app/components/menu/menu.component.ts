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

export class MenuComponent implements AfterViewInit, OnInit {
  @Output() categoryChanged = new EventEmitter<string>();


  platos: Plato[] = [

    //ENTRANTRES

    {
      nombre: 'Ensalada de burrata y tomate confitado, rucula y aceite de albahaca',
      descripcion: 'Una combinación irresistible de burrata cremosa y tomates confitados dulces, realzada con albahaca fresca, aceite de oliva y un toque de reducción balsámica. Perfecta como entrada ligera o acompañamiento sofisticado.',
      precio: '9,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/burrata.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Provolone al Horno',
      descripcion: 'Una delicia fundida que te hará derretirte de gusto. El queso provolone, suave y cremoso, sale del horno burbujeante, listo para que lo disfrutes con cada bocado. Perfecto para compartir... o no, depende de tu nivel de antojo. ¡Cuidado, quema, pero vale la pena!',
      precio: '9,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'entrantes'],
      clase: 'reverse',
      sugerencia: 'none',
      nuevo: 'true',
    },

    {
      nombre: 'Croquetas de Temporada 1ud',
      descripcion: 'Cada croqueta ofrece una combinación perfecta de una crujiente capa exterior y un relleno cremoso y sabroso de jamón ibérico, que se deshace en la boca. Un bocado irresistible que ha ganado el corazón de nuestros clientes.',
      precio: '2,3',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/croqueta.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Takoyaki de Pulpo 8ud',
      descripcion: 'Especialidad japonesa. Estos bocaditos redondos están rellenos de pulpo tierno y sazonados con una mezcla secreta de especias. Rebozados y fritos hasta alcanzar la perfección, se sirven con salsa takoyaki, mayonesa japonesa y un toque de alga nori. Cada bocado es una explosión de sabor y textura que te transportará directamente a Japón.',
      precio: '9,5',
      precio2_visible: 'none',
      precio2: 'reverse',
      img: '../../../assets/menu/takoyaki.png',
      categorias: ['completo', 'entrantes'],
      clase: 'reverse',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Patatas con mojo rojo y alioli suave',
      descripcion: 'Patatas acompañadas de un vibrante mojo rojo, que aporta un toque de especias y sabor, y un alioli suave, que ofrece una cremosidad delicada. Esta combinación de sabores intensos y suaves es el acompañamiento perfecto para cualquier plato o para disfrutar por sí sola.',
      precio: '7,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/patatas.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Patatas rancheras con duo de quesos fundidos y bacon',
      descripcion: 'Las patatas más rebeldes de la carta. Crujientes por fuera, tiernas por dentro, bañadas en una cascada de queso fundido y rematadas con crujientes trocitos de bacon. Una combinación que va directa al corazón... y al estómago. ¡Imposible resistirse!',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'entrantes'],
      clase: 'reverse',
      sugerencia: 'none',
      nuevo: 'true',
    },


    {
      nombre: 'Nachos con salsa de queso cheddar y zorza',
      descripcion: 'Disfruta de nuestros nachos crujientes cubiertos con una generosa salsa de queso cheddar fundido y suculenta zorza. Esta combinación de sabores intensos y texturas irresistibles te ofrece un festín de sabor en cada bocado. Perfectos para compartir o para disfrutar como un indulgente capricho.',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/nachos2.png',
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
      img: '../../../assets/menu/torreznos.png',
      categorias: ['completo', 'principales'],
      clase: 'reverse',
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
      img: '../../../assets/menu/alitas.png',
      categorias: ['completo', 'principales'],
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
      img: '../../../assets/menu/alitas_verdes.png',
      categorias: ['completo', 'principales'],
      clase: 'reverse',
      sugerencia: 'none',
      nuevo: 'true',
    },

    {
      nombre: 'Duo de Quesadillas',
      descripcion: 'Dos es mejor que uno, ¿no? Estas quesadillas vienen cargadas de sabor, rellenas de queso derretido y los ingredientes más sabrosos. Un bocado crujiente que te transportará directamente a México. Ideales para compartir, aunque no prometemos que quieras hacerlo. ¡Ándale, que se enfrían!',
      precio: '9',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'principales'],
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
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'principales'],
      clase: 'reverse',
      sugerencia: 'none',
      nuevo: 'true',
    },

    {
      nombre: 'Yakisoba con Pollo Teriyaki',
      descripcion: 'Un plato que te transportará directo a las calles de Japón. Fideos yakisoba salteados a la perfección, acompañados de jugoso pollo teriyaki y una mezcla de verduras frescas. Este festín de sabores te hará pensar que tienes un chef japonés en la cocina. ¡Un bocado y estarás haciendo un brindis por el buen gusto!',
      precio: '10',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'principales'],
      clase: '',
      sugerencia: 'none',
      nuevo: 'true',
    },


    // BURGERS
    
    {
      nombre: 'Burger del Gato',
      descripcion: 'Disfruta de nuestra hamburguesa doble o triple, una auténtica delicia para los amantes de la buena carne. Con dos jugosas hamburguesas de carne, una generosa capa de queso fundido y nuestra salsa especial secreta, cada bocado es una explosión de sabor. Acompañada de ingredientes frescos y pan recién horneado, esta hamburguesa es el equilibrio perfecto entre indulgencia y satisfacción.',
      precio: 'Doble 8,5',
      precio2_visible: 'block',
      precio2: 'Triple 10',
      img: '../../../assets/menu/burger.png',
      categorias: ['completo', 'hamburguesas'],
      clase: 'reverse',
      sugerencia: 'flex',
      nuevo: '',
    },

    {
      nombre: 'Burger del Gato BBQ',
      descripcion: 'La estrella de la casa. Una jugosa hamburguesa con carne a la parrilla, bañada en una deliciosa salsa BBQ, con el toque especial de “El Gato”. Todo esto acompañado de bacon crujiente, queso fundido y, por supuesto, mucho sabor. ¡Una combinación que te hará ronronear de felicidad!',
      precio: 'Doble 9,5',
      precio2_visible: 'block',
      precio2: 'Triple 11,5',
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'flex',
      nuevo: 'true',
    },

    {
      nombre: 'Burguer Japan Tempuchicken ',
      descripcion: 'Un viaje directo a Japón en cada mordisco. Pollo crujiente en tempura, acompañado de salsa teriyaki, mayonesa japonesa y un toque fresco de col asiática. Una fusión perfecta entre lo oriental y lo gourmet que te hará sentir en las calles de Tokio. ¡Irresistible!',
      precio: 'Doble 8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'hamburguesas'],
      clase: 'reverse',
      sugerencia: 'flex',
      nuevo: 'true',
    },

    {
      nombre: 'Molletes de solomillo de cerdo en salsa de setas con queso raclette',
      descripcion: 'Una delicia en cada bocado. Jugoso solomillo de cerdo, bañado en una cremosa salsa de setas, coronado con queso raclette fundido, todo ello servido en suaves molletes. El combo perfecto entre lo rústico y lo gourmet, ideal para darte un capricho... o dos. ¡Una explosión de sabor que te hará repetir!',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/no-pic.png',
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
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'hamburguesas'],
      clase: 'reverse',
      sugerencia: 'flex',
      nuevo: 'true',
    },

    {
      nombre: 'Hot Cat',
      descripcion: '¡El gatito caliente que se atreve a ser diferente! Con una salchicha jugosa escondida en un suave pan, este "gato" está adornado con los toppings más deliciosos y una salsa que hará que te maulles de placer. Es el compañero perfecto para tus días más hambrientos, ¡así que no te quedes sin el tuyo!',
      precio: '8',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'flex',
      nuevo: '',
    },

    // PIZZAS
    {
      nombre: 'Pizza BBQ',
      descripcion: 'Bacon, picada de vaca madurada, cebolla crujiente, salsa BBQ y masa de pizza artesana. <br>Saboréate con nuestra pizza barbacoa, una mezcla irresistible de sabores intensos y deliciosos. Con una base de salsa barbacoa ahumada, cubierta con suculentas piezas de carne, cebolla caramelizada y queso fundido, esta pizza ofrece un equilibrio perfecto entre lo dulce y lo salado. Termina con un toque de cilantro fresco para una experiencia de sabor que te hará querer más.',
      precio: '17',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/pizza_bbq.png',
      categorias: ['completo', 'pizzas'],
      clase: 'reverse',
      sugerencia: 'none',
      nuevo: '',

    },

    {
      nombre: 'Pizza Margarita',
      descripcion: 'Una auténtica pizza italiana, la Margarita es la esencia de la cocina napolitana. Su base de masa delgada y crujiente está cubierta con una suave capa de salsa de tomate fresca, enriquecida con hierbas aromáticas como el albahaca. Encima, se funde el queso mozzarella de alta calidad, creando una combinación perfectamente equilibrada de sabores. El toque final de un chorrito de aceite de oliva virgen extra realza los sabores y añade un acabado brillante y delicioso. Ideal para quienes aprecian la simplicidad de los ingredientes frescos y el sabor auténtico de Italia.',
      precio: '17',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'pizzas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Pizza York-Queso',
      descripcion: 'La pizza que hará que tu corazón lata un poco más rápido. Con una base crujiente, salsa de tomate fresca, abundante queso derretido y deliciosa york que se funde en cada bocado. Esta combinación clásica es un abrazo para tus papilas gustativas. ¡Perfecta para compartir, aunque no se lo digas a nadie!',
      precio: '17',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/no-pic.png',
      categorias: ['completo', 'pizzas'],
      clase: 'reverse',
      sugerencia: 'none',
      nuevo: '',
    },

    //BEBIDAS

    {
      nombre: 'Coca Cola',
      descripcion: '',
      precio: '3,2',
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
      precio: '3,2',
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
      precio: '3,2',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Doble de Cerveza',
      descripcion: '',
      precio: '3,2',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Tercio de Cerveza',
      descripcion: '',
      precio: '3,2',
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
      precio: '3,2',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['bebidas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    // POSTRES
    {
      nombre: 'Tarta de queso',
      descripcion: 'Una delicia clásica y cremosa que combina una base de galleta crujiente con un relleno suave y sedoso de queso crema. Esta tarta de queso se hornea a la perfección, logrando un equilibrio ideal entre dulzura y acidez. Se adorna con una suave capa de mermelada de frutos rojos, proporcionando un contraste de sabores que resalta la suavidad de la tarta. Perfecta como el final ideal para cualquier comida, esta tarta es un verdadero placer para los amantes del postre.',
      precio: '6',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/tartaqueso.png',
      categorias: ['completo', 'postres'],
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


  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const cards = this.el.nativeElement.querySelectorAll('.card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((box: Element) => {
      observer.observe(box);
    });
  }
}
