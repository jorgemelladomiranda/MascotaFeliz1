import React from 'react'
import Animales from "../../images/animals-index.jpg";
import Dogcat from "../../images/animals-description.jpg";


export const Recomendaciones = () => {
  return (
    <div>
        <div className='recommendations'>
         <h1>10 consejos para mantener felices a los perros y gatos en de casa</h1>
         <img className='animales' src={Animales} alt="" />
        </div>

        <div className='description-recommendations'>
            <img className='image-dogcat' src={Dogcat} alt="" />
         
            <div className='text-recommendations'>
            <h2><b>Es innegable que las mascotas pueden hacer que el tiempo sea mucho más agradable cuando estás en casa
             y no se puede salir. Te explicamos algunos consejos sobre cómo tener feliz a tu mascota en casa.</b></h2>
            <p>Están con nosotros cuando necesitamos desahogarnos o simplemente necesitamos un abrazo y su atención es como una válvula de escape beneficiosa tanto para las mascotas como para las personas.
                Pero estar encerrado en casa con tu mascota también tiene sus complicaciones. Aquí encontrarás algunos consejos sobre cómo tener feliz y contenta a tu mascota estando en casa.</p>
            </div>
        </div>
        <div className='tips'>
          <h2>1. Sigue una rutina</h2>
              <p>Es probable que tu rutina se haya visto interrumpida de forma significativa. En momentos como estos es tentador abandonar también las rutinas de tu mascota.</p>
              <p>La conductista de Purina, la Dra. Annie Valuska comenta: «Es importante mantener la rutina de tu mascota lo más intacta posible. La alimentación, el baño y las caminatas deberían darse como de normal y si tu perro está acostumbrado a ir en coche, no es mala idea seguir llevándolo a dar una vuelta».</p>
              <p>También nos recuerda que seguir pidiéndole un buen comportamiento, como sentarse antes de cruzar una puerta o no pedir durante las comidas, es otra forma importante de mantener la coherencia en su rutina.</p>
              
          <h2>2. No descuides su rato de descanso</h2>
              <p>Tu mascota está acostumbrada a tener tiempo para sí misma mientras la familia está fuera, así que trata de darle tiempo de descanso durante el día.</p>
              <p>Como nos recuerda el conductista de Purina, el Dr. Francois Martin: «No es buena idea cambiar la rutina de la mascota y darle mucha socialización. Las mascotas no son niños. No hay que mantenerlos ocupados con actividades todo el día».</p>
              <p>Padres, suspirad aliviados: puede que vuestros hijos necesiten actividades para llenar sus días, pero tu gato o tu perro estará la mar de bien así e incluso preferirá pasar un rato tranquilo.</p>


          <h2>3. Diversión a bocados</h2>
              <p>Para esas conferencias virtuales, las clases en casa o, simplemente, esos momentos en los que necesitas descansar, va muy bien darle a tu mascota una golosina para que se entretenga.</p>
              <p>La Dra. Séverine Ligout, conductista de Purina, nos recuerda que aunque estas golosinas pueden ser una actividad divertida para tu mascota, también es fácil perder el norte y acabar sobrealimentándola. Ten en cuenta el recuento calórico y compensa las calorías extra de los aperitivos dándole un poco menos de pienso a la hora de comer.</p>


          <h2>4. Ejercicio, ejercicio, ejercicio</h2>
              <p>No pierdas los nervios y canaliza la energía en algo productivo: el ejercicio para perros y gatos en casa. Mantenerse activo en estos tiempos es tan beneficioso para ti como para tu mascota.</p>
              <p>Es posible que no puedas llevar al perro al parque para que haga ejercicio, pero aun así puedes encontrar formas de hacerle descargar toda la energía. Incluso un viaje al buzón puede suponer un poquito de ejercicio. Si no puedes salir de casa, aparta algunos muebles y deja espacio para lanzarle algún juguete o jugar al tira y afloja.</p>
              <p>Sal al patio si tienes uno y que juegue a perseguir. Recomendamos que aproveches el ejercicio para perros y gatos en casa como otra forma más de reforzar el horario de tu mascota. Planifica sesiones de juego aproximadamente a la misma hora todos los días, esto la ayudará a seguir la rutina y, a la vez, le ofrecerá estimulación física y mental, además de estrechar el vínculo humano-animal.</p>


          <h2>5. Juega a juegos mentales</h2>
              <p>Otra buena forma de cansar a tu mascota es con la estimulación mental, como enseñarle un par de trucos nuevos. ¿Siempre has querido que tu perro haga la croqueta o que tu gato baile? Pues ahora es el momento perfecto para darle esas clases.</p>
              <p>«Al igual que las personas, las mascotas experimentan lo que llamamos el “Efecto Eureka” o la respuesta emocional a la resolución de problemas», explica el Dr. Ragen McGowan, conductista de Purina. «Ese momento “ajá” cuando descubres algo sientes una oleada muy positiva de emociones. Nuestras mascotas también experimentan esto».</p>
              <p>También puedes aprovechar la hora de la comida como una forma de enriquecer mentalmente a tu mascota. Esparce la comida por la casa y haz que use el sentido del olfato para encontrarla o hazte con un comedero tipo rompecabezas para que le suponga un pequeño desafío mental.</p>
              <p>Si quieres saber cómo entrenar o adiestrar a tu perro en casa, ¡mira estos vídeos sobre consejos y adiestramiento canino!</p>

          <h2>6. Sé un compañero de piso considerado</h2>
              <p>A nadie le gusta un compañero de piso que siempre está haciendo ruido... y tu mascota no es una excepción. Ahora que tu mascota y tú pasáis mucho tiempo de calidad juntos, ten en cuenta que el animal oye mucho mejor que nosotros, así que procura no hacer demasiado ruido.</p>
              <p>Esto le dará también algo de tiempo para descansar. Si el ruido de fondo es imprescindible, piensa en poner música clásica (varios estudios han revelado que puede ayudar a tranquilizar a las mascotas), pódcast o la radio.</p>

          <h2>7. La participación de los niños</h2>
              <p>Si hay niños en casa, pídeles que participen para mantener a la mascota sana y feliz. Ahora es un buen momento para reforzar el buen comportamiento de las mascotas y ayudar a los niños a comprender el lenguaje corporal de nuestros animales de compañía. También es divertido involucrar a las mascotas en el aprendizaje de tu hijo.</p>
              <p>Los niños necesitan aprender y se ha demostrado que las mascotas los ayudan en algunas áreas de aprendizaje (por ejemplo, en la lectura). Si la mascota es afable y paciente, implementa sesiones en las que tu hijo le lea al animal como parte de su rutina.</p>

          <h2>8. Sigue una dieta saludable</h2>
              <p>Es posible que disfrutes de unos atracones de macarrones con extra de queso y brownies, pero eso no significa que la mascota deba descuidar su dieta.</p>
              <p>No la alimentes con los restos de comida solo porque tu «mesa» sea el sofá durante estos días. Sigue con el horario de alimentación de tu mascota y continúa dándole la comida de forma regular tanto como sea posible.</p>
              <p>Si le das más golosinas de lo habitual para recompensarla por ser tan buena compañera (porque, seamos sinceros, se lo merece), ten en cuenta que el máximo de calorías diarias provenientes de aperitivos y golosinas es del 10 por ciento.</p>
              <p>Infórmate sobre la rutina de alimentación para tu mascota saludable y equilibrada.</p>

          <h2>9. Crea un «lugar seguro»</h2>  
              <p>Es posible que tu mascota necesite su espacio personal para sentirse segura y cómoda durante un momento en que, de repente, hay más personas alrededor. Esto es especialmente importante en el caso de los gatos, pero a los perros también les va bien tener un «espacio seguro».</p>
              <p>Si crees que tu mascota está abrumada por la «reunión» repentina de gente, procura que tenga un espacio seguro que toda la familia respete. Cuando el animal esté allí, ese espacio nos estará prohibido; incluso va bien considerarlos «invisibles» allí.</p>
              <p>Esto también ayuda a los niños a comprender que deben dejar en paz a las mascotas cuando se encuentran en su lugar especial hasta que estas estén listas para jugar.</p>

          <h2>10. ¡Sé creativo!</h2>
              <p>¿Cómo hacer feliz a tu perro o gato?, cuando no es factible salir a buscar juguetes nuevos, sé creativo y hazle los juguetes tú mismo.</p>
              <p>Ofrécele juguetes divertidos que pueda destruir. Puede ser un tubo de cartón con pienso escondido en su interior o una botella de plástico que pueda romper para sacar las golosinas de adentro.</p>
              <p>Tener una forma productiva de sacar toda su energía destructiva puede ser beneficioso tanto para tu mascota... como para tus zapatos de piel.</p>
              <p>Finalmente, te recomendamos que eches un vistazo a los vídeos sobre consejos para tu perro en gestionar el estrés, como habituarlo a nuevas situaciones, etc.</p>

        </div>
    </div>
    
  )
}


