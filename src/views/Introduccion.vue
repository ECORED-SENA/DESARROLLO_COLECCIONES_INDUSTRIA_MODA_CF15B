<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src='@/assets/curso/introduccion/img01.svg')
    
    p.mb-4 Ropa es el nombre genérico que reciben las prendas de vestir, se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. El significado más amplio del concepto incluye entre la ropa los pantalones, las camisas, los abrigos, las chaquetas y los accesorios, entre otros artículos (Definición de, 2008).
    p.mb-4 Para la elaboración de prendas de vestir exterior, las plantas de confección deben estar dotadas por maquinaria especializada para procesar tejido plano o sin elongación, ya que esta línea de producción se caracteriza por el uso de dicho tejido. Entre la maquinaria requerida se encuentran la máquina plana de una y dos agujas, la fileteadora, la recubridora, la cerradora de codo, la pretinadora, la presilladora, la botonadora y la ojaladora, así como las guías y aditamentos que ayudan a la calidad y buen ajuste de estas.

    .tarjeta.color-gris.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/introduccion/img02.png')
        .col-lg-8.mb-4.mb-lg-0
          p.mb-4 Las prendas de vestir en material textil se han usado por la necesidad principal de cubrir el cuerpo y de ser el soporte ante cambios rigurosos del clima durante estaciones frías o, por el contrario, con prendas ligeras durante la época de calor.
          p.mb-4 La vestimenta durante todas sus épocas y constantes cambios en el mundo ha representado símbolos como el estatus social y lo estético en el contexto de la moda, siendo un objeto de manifestación colectiva. Por claras diferencias corporales la ropa era femenina o masculina e incluso en el contexto actual como simplemente utilitarias sin distinción de género, llamadas prendas unisex, en el que sin perder su uso de cubrir el cuerpo se busca en estas cada vez más la comodidad.
          p.mb-4 Tampoco se debe olvidar que las prendas son usadas de acuerdo con la ocasión y, que su confección cambia de acuerdo con el diseño, así sea el mismo tipo de prenda, por ejemplo, el pantalón formal o informal que es la misma prenda, pero cambia en su estructura a la hora de confeccionarla.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
