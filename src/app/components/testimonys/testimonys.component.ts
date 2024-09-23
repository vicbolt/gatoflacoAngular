import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-testimonys',
  templateUrl: './testimonys.component.html',
  styleUrl: './testimonys.component.scss'
})
export class TestimonysComponent implements AfterViewInit {
  reviews = [
    { title: 'Servicio muy atento', 
      text: 'Ya hemos ido un par de veces a comer y la verdad es todo está muy rico. Los torreznos con revolcona están buenísimos, las croquetas también muy ricas, la hamburguesa de lujo. Nos quedan por probar algunas cosas que seguro también estarán buenas. Los postres también muy buenos, sobre todo el de queso. La atención y servicio muy atento. El precio acorde con lo que comes, por lo que creo que es un sitio recomendable..', 
      rating: 5,
      name: 'Diego Medina' 
    },

    { title: 'Interesante', 
      text: 'Un sitio muy chulo y siempre que voy tiene un ambiente muy agradable y divertido. La comida tiene un toque muy interesante. La hamburguesa está buenísima y molletes también. Tiene opciones de ensaladas muy buenas y entrantes. Los camareros cercanos y alegres así da gusto !! Volveré !!', 
      rating: 5,
      name: 'Beatriz C' 
    },
    
    { title: 'Muy Rico!', 
      text: 'Vamos por partes, la comida está increíble, las croquetas de jamón súper cremosas, los torreznos con crema de revolcón a crujientes y buenísimo, la ensalada de burrata, la hamburguesa del gato y el molerle de secreto impresionante. Que no falte la tarta de queso. En cuanto al servicio en terraza Blanca de 10, y el compañero Javi que está en barra y atendiendo dentro de 11!!! Un equipo muy bueno! ', 
      rating: 5,
      name: 'Bruno E' 
    },
    { title: 'Repetiremos', 
      text: 'Hemos comido hoy y la comida muy rica, en especial la hamburguesa. Relación calidad precio muy buena. Servicio rápido y bueno. Volveremos.', 
      rating: 5,
      name: 'Robairbus' 
    },
    
    { title: 'Me gustó la comida', 
      text: 'Pequeño restaurante muy bien puesto, con una muy buena atención exquisita. La hamburguesa triple el gato está realmente muy muy buena. El mollete de secreto de 10 también. Para repetir. :)', 
      rating: 5,
      name: 'Jesús' 
    },

    { title: 'Smash Burger buenísima', 
      text: 'Fui a cenar con unas amigas y nos encantó el ambiente. Probamos la hamburguesa del Gato, una Smash burguer buenísima y a muy buen precio. La camarera que nos atendió fue muy maja y super agradable, nos recomendó varios platos para la próxima vez, y están muy atentos de las mesas. Da gusto que te atiendan con una sonrisa. Volveré sin duda.',        
      rating: 5,
      name: 'Evelyn' 
    },

    { title: 'Descubrimiento', 
      text: 'Algunos días he ido a tomar el vermut, tienen el forzudo. Riquísimo! Ponen una tapa con la consumición: migas, lacón… hoy he tenido la oportunidad de probar la hamburguesa y ha sido un grato descubrimiento. Esta deliciosa. Hoy tenían la especial de Halloween con pan negro y salsa de chedar. ¡Nos ha encantado! La atención es muy buena, están pendientes de las mesas y el cocinero se nota que le encanta y lo hace con cariño.',        
      rating: 5,
      name: 'Laura G' 
    },

    { title: 'Ambiente tranquilo', 
      text: 'Hemos venido 4 veces desde que lo descubrimos y nos encanta el sitio, ambiente tranquilo, camareros super atentos y la comida muy rica. La hamburguesa y los molletes son nuestra debilidad pero todo esta riquisimo!',        
      rating: 5,
      name: 'María C' 
    },

    { title: 'Servicio muy amable', 
      text: 'Fui a cenar con unas amigas y nos encantó el ambiente. Probamos la hamburguesa del Gato, una Smash burguer buenísima y a muy buen precio. La camarera que nos atendió fue muy maja y super agradable, nos recomendó varios platos para la próxima vez, y están muy atentos de las mesas. Da gusto que te atiendan con una sonrisa. Volveré sin duda.',        
      rating: 5,
      name: 'Evelyn' 
    },

    { title: 'Aperitivos generosos', 
      text: 'Todo lo que hemos comido ha estado exquisito. Las anchoas, la hamburguesa, las croquetas, en fin, todo. Además el trato es excepcional, son amables, atentos y generosos con los aperitivos. Pero, sobre todo, unas bellísimas personas. Tuvimos un percance de salud, y se portaron maravillosamente. Ojalá tengan mucha suerte. Ya era hora que hubiera en Valdemoro un sitio de calidad.',        
      rating: 5,
      name: 'MArisa' 
    },

    // Añade más reseñas aquí
  ];

  ngAfterViewInit(): void {
    $('.review-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}