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

    //ENTRANTES

    {
      nombre: 'Ensalada temporada de burrata 2.0',
      descripcion: '',
      precio: '10,80',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: 'true',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Croquetas de Temporada 1ud',
      descripcion: '',
      precio: '2,30',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/croqueta-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Takoyakis (8ud)',
      descripcion: '',
      precio: '9,80',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/takoyaki-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Patatas con mojo rojo y alioli',
      descripcion: '',
      precio: '8.30',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },


    {
      nombre: 'Nachos con queso cheddar y salsa gallega',
      descripcion: '',
      precio: '8,90',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Torreznos de invierno',
      descripcion: '',
      precio: '9,00',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/torreznos-min.png',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: ''
    },

    {
      nombre: 'Alitas fury spicy 🌶️🔥',
      descripcion: 'Para los valientes del picante: alitas de pollo extra crujientes bañadas en una salsa ardiente y explosiva que no se anda con rodeos. Intensamente sabrosas, intensamente picantes.',
      precio: '9,30',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: ''
    },


    {
      nombre: 'Alitas garlic parm',
      descripcion: '',
      precio: '9,30',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'entrantes'],
      clase: '',
      sugerencia: 'none',
      nuevo: ''
    },


    // PLATOS PRINCIPALES

    {
      nombre: 'Ramen tradicional tonkotsu al estilo del gato flaco',
      descripcion: '',
      precio: '10,50',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'principales'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Costillas a baja temperatura en salsa BBQ secreta',
      descripcion: '',
      precio: '10,90',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'principales'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Wontons fritos caseos de cerdo ibérico y gambas',
      descripcion: '',
      precio: '10.90',
      precio2_visible: 'none',
      precio2: '',
      img: '',
      categorias: ['completo', 'principales'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },


    // BURGERS
    
    {
      nombre: 'Burger del Gato',
      descripcion: 'Disfruta de nuestra hamburguesa doble o triple, una auténtica delicia para los amantes de la buena carne. Con dos jugosas hamburguesas de carne, una generosa capa de queso fundido y nuestra salsa especial secreta, cada bocado es una explosión de sabor. Acompañada de ingredientes frescos y pan recién horneado, esta hamburguesa es el equilibrio perfecto entre indulgencia y satisfacción.',
      precio: ' Doble 9,50',
      precio2_visible: 'block',
      precio2: 'Triple 11,50',
      img: '../../../assets/menu/min/burger-min.png',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'flex',
      nuevo: '',
    },

        {
      nombre: 'Oklahoma pastrami burger',
      descripcion: '',
      precio: '9,90',
      precio2_visible: 'block',
      precio2: '11,90',
      img: '',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

        {
      nombre: 'Burger ibérica del gato',
      descripcion: '',
      precio: '9,50',
      precio2_visible: 'block',
      precio2: '11,50',
      img: '',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },
 

    {
      nombre: 'Mollete coreano de panceta a baja temperatura',
      descripcion: '',
      precio: '9,20',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/molletesolomillo-min.png',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'none',
      nuevo: '',
    },

    {
      nombre: 'Tempuchicker (Pollo crujiente estilo tempura)',
      descripcion: '',
      precio: '9,50',
      precio2_visible: 'block',
      precio2: '11,50',
      img: '',
      categorias: ['completo', 'hamburguesas'],
      clase: '',
      sugerencia: 'none',
      nuevo: 'true',
    },

    // PIZZAS
    {
      nombre: 'Pizza Margarita',
      descripcion: 'Una auténtica pizza italiana, la Margarita es la esencia de la cocina napolitana.',
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
      nombre: 'Pizza BBQ',
      descripcion: 'Bacon, picada de vaca madurada, cebolla crujiente, salsa BBQ y masa de pizza artesana.',
      precio: '17',
      precio2_visible: 'none',
      precio2: '',
      img: '../../../assets/menu/min/pizzabbq-min.png',
      categorias: ['completo', 'pizzas'],
      clase: '',
      sugerencia: 'flex',
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
