(function(e){function a(a){for(var o,r,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i={app:0},t=[];function c(e){return s.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{"chunk-0206bfa0":"2a97bf91","chunk-04b93936":"f705b688","chunk-13a6037e":"b678a94b","chunk-16015154":"e686329e","chunk-17977988":"df6a738e","chunk-2c06842c":"627ee5e7","chunk-2d208d90":"a2edfaa4","chunk-2d21d0e2":"1b9c1452","chunk-2d22c123":"3524791c","chunk-2e80bb9a":"e88761c7","chunk-3145fe0f":"39a85f5b","chunk-328f70dd":"50395f5e","chunk-3807499c":"68182a79","chunk-3c94cd2f":"f3dcca89","chunk-3dc647fd":"0e485794","chunk-4cdd78c0":"fedd3caa","chunk-515a8379":"424664e5","chunk-53ccb27e":"0c8453d6","chunk-59974754":"739d932c","chunk-766a929b":"7c6d3b0d","chunk-839300a6":"b4920384","chunk-c796899c":"b33f8829",comple:"e6dd7845",creditos:"be2d2bbd",glosario:"c5f3c084",intro:"40a94ce4",referencias:"bddfa6f2",tema1:"0a1374eb",tema2:"c83e64e4",tema3:"dab0d0ca"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise((function(a,n){for(var o="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"2f8e4ee8","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"384de19e","chunk-766a929b":"5d24dc07","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"a5cf59d0",creditos:"84d2edd0",glosario:"b3cff2cb",intro:"0e433876",referencias:"009c0cb5",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",i=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===i))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===i)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var o=a&&a.target&&a.target.src||i,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete r[e],p.parentNode.removeChild(p),n(t)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var p=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,r,i,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),p=n("8c4f"),f=n("ae58"),m=n("7e58");u["a"].use(p["a"]);var b=new p["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Taller básico de ropa exterior tejido plano",descripcionCurso:"El incremento en la demanda de prendas de vestir ha generado la necesidad de personal con competencias en todos los procesos de confección industrial, en los que los sectores productivos han precisado la importancia de formar personas enfocadas en ejecutar labores cada vez más integrales dentro de la empresa, en aras a aumentar los niveles de productividad. Este proceso requiere talento humano que dé respuesta oportuna y eficaz a las necesidades de carácter técnico y de confección, optimizando los recursos en la solución de problemas, atendiendo así a las necesidades de la empresa y del consumidor final.",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Mockup: ejercicios por cada tipo de operación en prendas exteriores de acuerdo con el orden operacional en camisa básica",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Mockup: ejercicios por cada tipo de operación en prendas exteriores de acuerdo con el orden operacional en pantalón",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Ensamble de las prendas de vestuario exterior",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Camisa",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Pantalón",hash:"t_3_2"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Carrera de Diseño y Gestión en Moda. (2015). Técnicas de patronaje. Tomo II - Hombre. Universidad Peruana de Ciencias Aplicadas (UPC).",link:"http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=4184904"},{referencia:"Ecosistema de Recursos Educativos SENA. (2019). Patronaje industrial masculino: toma de medidas [video]. YouTube.",link:"https://www.youtube.com/watch?v=UkwF4YVTnLU&feature=youtu.be"},{referencia:"Farlex. (s.f.). The free dictionary by farlex",link:"https://es.thefreedictionary.com/"},{referencia:"Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549"},{referencia:"Gutiérrez R., L. A., Moncayo V., A. X., Tanaka, K., Kimura, F., Moreno B., D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje.",link:"https://hdl.handle.net/11404/4725"},{referencia:"SENA. (s.f.). Módulo I. Patronaje industrial masculino. Versión imprimible. SENA."},{referencia:"SENA. (s.f.). Módulo II. Patronaje industrial masculino. Versión imprimible. SENA."},{referencia:"SENA (2020). Red Producción de Contenidos Grupo Gestión Curricular SENA [video]. YouTube.",link:"https://www.youtube.com/channel/UC6nVHOzgFSU1p-zQHfv7czw/playlists"},{referencia:"Valencia, L. (s.f.) Colección…Saber hacer… Ropa para hombre. Camisa de vestir con tablón en espalda. CONEVyT-INEA.",link:"https://es.scribd.com/doc/55621671/camisa-PROCEDIMIENTO-S"},{referencia:"Vestuario. (s.f.). Glosario términos de confección | Técnicas de costura. Vestuario CR.",link:"http://www.vestuariocr.com/costura-general/interesante/164-glosario-terminos-de-confeccion-tecnicas-de-costura.html"},{referencia:"Wikipedia. (s.f.). Wikipedia, la enciclopedia libre. Wikipedia.",link:"https://es.wikipedia.org/wiki/Código_de_vestimenta"}],glosario:[{termino:"Acabado",significado:"Calidad de un objeto en los detalles finales de su elaboración, especialmente en lo que se refiere a su aspecto (Real Academia Española, s.f.)."},{termino:"Aletilla",significado:"Pieza de tela que acompaña a la cremallera de una prenda (Vestuario, s.f.)."},{termino:"Aletillón",significado:"Es una aleta doble que se le coloca al lado derecho de la parte superior del tiro delantero y sirve para proteger la piel del cierre, en el momento en que este se cierre (SENA, s.f.)."},{termino:"Almilla",significado:'Prenda masculina de busto o jubón de armas "ceñido a la cintura y con faldones" y abrochado con cordones, era una prenda interior complementaria de la indumentaria militar que se llevaba debajo de la armadura, bajo el peto del arnés (Wikipedia, s.f.).'},{termino:"Aplome",significado:"Poner una cosa vertical (Farlex, s.f.)."},{termino:"Bocamanga",significado:"Abertura de la manga por donde sale la mano o el brazo, especialmente la parte interior de la misma (Farlex, s.f.)."},{termino:"Bolsillo",significado:"Parte de algunas prendas de vestir, consistente en una bolsa interior o superpuesta (Farlex, s.f.)."},{termino:"Corte",significado:"Abertura o señal que queda al cortar. Arte y oficio de cortar y confeccionar prendas de vestir (Farlex, s.f.)."},{termino:"Cremallera",significado:"Cierre para aberturas longitudinales de prendas de vestir, bolsos, cojines y otras cosas, que consiste en dos filas de dientes metálicos que encajan unos con otros (Farlex, s.f.)."},{termino:"Cuello",significado:"Adorno suelto de tela, encaje, piel u otra materia que se pone alrededor del cuello. Parte de una prenda de vestir que rodea el cuello (Farlex, s.f.)."},{termino:"Cuerpo",significado:"Parte del vestido que cubre desde el cuello hasta la cintura (Farlex, s.f.)."},{termino:"Dobladillo",significado:"Pliegue cosido que remata los bordes de la ropa (Farlex, s.f.)."},{termino:"Escuadrar",significado:"Disponer un objeto de modo que sus caras formen ángulos rectos con las caras contiguas. (Farlex, s.f.)."},{termino:"Espalda",significado:"Parte de una prenda de vestir que corresponde a esta parte del tronco (Farlex, s.f.)."},{termino:"Flojo",significado:"Que no está bien ajustado o apretado (Real Academia Española, s.f.)."},{termino:"Forro",significado:"Tela que se pone por la parte interior de las prendas de vestir o de otras cosas (Farlex, s.f.)."},{termino:"Lateral",significado:"Que está en un lado (Farlex, s.f.)."},{termino:"Manga",significado:"Parte de una prenda de vestir que cubre el brazo o la parte superior de este (Farlex, s.f.)."},{termino:"Pantalón",significado:"Prenda de vestir con dos perneras que cubre desde la cintura hasta los pies (Farlex, s.f.)."},{termino:"Pernera",significado:"Parte del calzón o pantalón que cubre la pierna, y el espacio por donde esta se mete (Farlex, s.f.)."},{termino:"Pespunte",significado:"Labor de costura que consiste en volver la aguja hacia atrás después de cada punto para meter la hebra en el mismo sitio por donde se pasó antes, de modo que las puntadas queden unidas (Farlex, s.f.)."},{termino:"Pinza",significado:"Pliegue de una tela terminado en punta, que se hace para estrecharla o como adorno (Farlex, s.f.)."},{termino:"Piquete",significado:"Agujero o corte pequeño que se hace en la ropa u otras cosas (Real Academia Española, s.f.)."},{termino:"Pretina",significado:"Cinta con una hebilla o un broche que se pone en la cintura para sujetar una prenda de vestir (Farlex, s.f.)."},{termino:"Ruedo",significado:"Refuerzo o forro con que se guarnece interiormente por la parte inferior los vestidos talares (Farlex, s.f.)."},{termino:"Sisa",significado:"Corte hecho en una prenda de vestir para que se ajuste al cuerpo y, en especial, el corte curvo que se hace en la parte de la axila. (Farlex, s.f.)."},{termino:"Talla",significado:"Medida convencional usada en la fabricación y venta de prendas de vestir (Farlex, s.f.)."},{termino:"Talle",significado:"Parte de una prenda de vestir correspondiente a la cintura del cuerpo humano (Farlex, s.f.)."},{termino:"Tiro",significado:"Distancia desde la unión de las perneras hasta la cintura de un pantalón (Farlex, s.f.)."},{termino:"Vértice",significado:"Punto en que concurren los dos lados de un ángulo o las caras de un ángulo poliedro. Punto de una curva en que esta se encuentra con su eje (Farlex, s.f.)."}],complementario:[{texto:"Academia de diseño y confección Alamoda. (2020). Pantalón clásico de hombre/confección/paso a paso [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=tccvk8aARNk&feature=youtu.be"},{texto:"Módulo 4. Confección del pantalón (s.f.).",tipo:"PDF",descarga:"/downloads/Pantalon_hombre.pdf"},{texto:"Valencia, L. (s.f.) Colección…Saber hacer… Ropa para hombre. Camisa de vestir con tablón en espalda. CONEVyT-INEA.",tipo:"PDF",link:"/downloads/Camisa_hombre.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Jhon Alexander Durango",cargo:"Instructor",centro:"Centro de Diseño, Confección y Moda. Itagüí, Antioquia."},{nombre:"María Luisa Yepes Sierra",cargo:"Instructora",centro:"Centro de Diseño, Confección y Moda. Itagüí, Antioquia."},{nombre:"Marisol Osorio Beltrán",cargo:"Líder SENNOVA",centro:"Centro de Diseño, Confección y Moda. Itagüí, Antioquia."},{nombre:"Jhon Fernando Jaramillo Taborda",cargo:"Investigador – Grupo de investigación INAMOD ",centro:"Centro de Diseño, Confección y Moda. Itagüí, Antioquia."},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Diseñadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica -Regional Distrito Capital."},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Revisión pedagógica y metodológica",centro:"Centro de Diseño y Metrología – Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica -Regional Distrito Capital."}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Oscar Marquez Sanabria",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Diego Fernando Velasco Güiza",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Rafael Augusto Mantilla López",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.d10c0dc0.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.f0ffebdc.png"}});
//# sourceMappingURL=app.8a9c89e7.js.map