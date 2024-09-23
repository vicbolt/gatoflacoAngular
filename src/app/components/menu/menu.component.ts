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
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements AfterViewInit, OnInit {
  @Output() categoryChanged = new EventEmitter<string>();


  platos: Plato[] = [
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
    },

    // PLATOS CALIENTES

    {
      nombre: 'Croquetas de Jamon Iberico',
      descripcion: 'Cada croqueta ofrece una combinación perfecta de una crujiente capa exterior y un relleno cremoso y sabroso de jamón ibérico, que se deshace en la boca. Un bocado irresistible que ha ganado el corazón de nuestros clientes.',
      precio: '2,3',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/croqueta.png',
      categorias: ['completo', 'principales'],
      clase: 'reverse',
      sugerencia: 'none',
    },

    {
      nombre: 'Nachos con salsa de queso cheddar y zorza',
      descripcion: 'Disfruta de nuestros nachos crujientes cubiertos con una generosa salsa de queso cheddar fundido y suculenta zorza. Esta combinación de sabores intensos y texturas irresistibles te ofrece un festín de sabor en cada bocado. Perfectos para compartir o para disfrutar como un indulgente capricho.',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/nachos2.png',
      categorias: ['completo', 'principales'],
      clase: '',
      sugerencia: 'none',
    },

    {
      nombre: 'Patatas con mojo rojo y alioli suave',
      descripcion: 'Patatas acompañadas de un vibrante mojo rojo, que aporta un toque de especias y sabor, y un alioli suave, que ofrece una cremosidad delicada. Esta combinación de sabores intensos y suaves es el acompañamiento perfecto para cualquier plato o para disfrutar por sí sola.',
      precio: '7',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/patatas.png',
      categorias: ['completo', 'principales'],
      clase: 'reverse',
      sugerencia: 'none',
    },


    {
      nombre: 'Torreznos con crema de Revolcona',
      descripcion: 'Prueba nuestros torreznos, acompañados de una suave y sabrosa crema de Revolcona. La combinación de la textura crocante de los torreznos con la riqueza y el sabor profundo de la crema de Revolcona ofrece una experiencia culinaria deliciosa y reconfortante. Un aperitivo perfecto para compartir o disfrutar en solitario.',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/torreznos.png',
      categorias: ['completo', 'principales'],
      clase: '',
      sugerencia: 'none',
    },

    {
      nombre: 'Alitas Picantonas',
      descripcion: 'Déjate llevar por el sabor intenso de nuestras alitas picantonas. Maridadas con una mezcla especial de especias y salsas que le dan un toque picante y sabroso, cada alita ofrece un equilibrio perfecto entre el calor y la jugosidad. Ideales para los amantes del picante y perfectas para compartir.',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/alitas.png',
      categorias: ['completo', 'principales'],
      clase: 'reverse',
      sugerencia: 'none',
    },

    {
      nombre: 'Alitas Orientales',
      descripcion: 'Descubre el sabor exótico de nuestras alitas orientales, marinadas con una mezcla de especias y salsas que evocan auténticos sabores de Asia. Cada alita está glaseada con una salsa agridulce y ligeramente especiada, ofreciendo una experiencia culinaria única y llena de matices. Perfectas para quienes buscan un toque de aventura en cada bocado.',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/alitas_verdes.png',
      categorias: ['completo', 'principales'],
      clase: '',
      sugerencia: 'none',
    },

    {
      nombre: 'Takoyaki de Pulpo',
      descripcion: 'Especialidad japonesa. Estos bocaditos redondos están rellenos de pulpo tierno y sazonados con una mezcla secreta de especias. Rebozados y fritos hasta alcanzar la perfección, se sirven con salsa takoyaki, mayonesa japonesa y un toque de alga nori. Cada bocado es una explosión de sabor y textura que te transportará directamente a Japón.',
      precio: '8,5',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/takoyaki.png',
      categorias: ['completo', 'principales'],
      clase: 'reverse',
      sugerencia: 'none',
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
      clase: '',
      sugerencia: 'flex',
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
    },

    {
      nombre: 'Pizza Margarita',
      descripcion: 'Una auténtica pizza italiana, la Margarita es la esencia de la cocina napolitana. Su base de masa delgada y crujiente está cubierta con una suave capa de salsa de tomate fresca, enriquecida con hierbas aromáticas como el albahaca. Encima, se funde el queso mozzarella de alta calidad, creando una combinación perfectamente equilibrada de sabores. El toque final de un chorrito de aceite de oliva virgen extra realza los sabores y añade un acabado brillante y delicioso. Ideal para quienes aprecian la simplicidad de los ingredientes frescos y el sabor auténtico de Italia.',
      precio: '17',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/pizza_bbq.png',
      categorias: ['completo', 'pizzas'],
      clase: '',
      sugerencia: 'none',
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
      clase: 'reverse',
      sugerencia: 'none',
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
      hamburguesas: 'Burgers',
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
