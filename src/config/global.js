export default {
  global: {
    componenteFormativo: 'Taller básico de ropa exterior tejido plano',
    descripcionCurso:
      'El incremento en la demanda de prendas de vestir ha generado la necesidad de personal con competencias en todos los procesos de confección industrial, en los que los sectores productivos han precisado la importancia de formar personas enfocadas en ejecutar labores cada vez más integrales dentro de la empresa, en aras a aumentar los niveles de productividad. Este proceso requiere talento humano que dé respuesta oportuna y eficaz a las necesidades de carácter técnico y de confección, optimizando los recursos en la solución de problemas, atendiendo así a las necesidades de la empresa y del consumidor final.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Mockup: ejercicios por cada tipo de operación en prendas exteriores de acuerdo con el orden operacional en camisa básica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Mockup: ejercicios por cada tipo de operación en prendas exteriores de acuerdo con el orden operacional en pantalón',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ensamble de las prendas de vestuario exterior',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Camisa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Pantalón',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carrera de Diseño y Gestión en Moda. (2015). Técnicas de patronaje. Tomo II - Hombre. Universidad Peruana de Ciencias Aplicadas (UPC).',
      link:
        'http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=4184904',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2019). Patronaje industrial masculino: toma de medidas [video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=UkwF4YVTnLU&feature=youtu.be',
    },
    {
      referencia: 'Farlex. (s.f.). The free dictionary by farlex',
      link: 'https://es.thefreedictionary.com/',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Gutiérrez R., L. A., Moncayo V., A. X., Tanaka, K., Kimura, F., Moreno B., D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje.',
      link: 'https://hdl.handle.net/11404/4725',
    },
    {
      referencia:
        'SENA. (s.f.). Módulo I. Patronaje industrial masculino. Versión imprimible. SENA.',
    },
    {
      referencia:
        'SENA. (s.f.). Módulo II. Patronaje industrial masculino. Versión imprimible. SENA.',
    },
    {
      referencia:
        'SENA (2020). Red Producción de Contenidos Grupo Gestión Curricular SENA [video]. YouTube.',
      link:
        'https://www.youtube.com/channel/UC6nVHOzgFSU1p-zQHfv7czw/playlists',
    },
    {
      referencia:
        'Valencia, L. (s.f.) Colección…Saber hacer… Ropa para hombre. Camisa de vestir con tablón en espalda. CONEVyT-INEA.',
      link: 'https://es.scribd.com/doc/55621671/camisa-PROCEDIMIENTO-S',
    },
    {
      referencia:
        'Vestuario. (s.f.). Glosario términos de confección | Técnicas de costura. Vestuario CR.',
      link:
        'http://www.vestuariocr.com/costura-general/interesante/164-glosario-terminos-de-confeccion-tecnicas-de-costura.html',
    },
    {
      referencia:
        'Wikipedia. (s.f.). Wikipedia, la enciclopedia libre. Wikipedia.',
      link: 'https://es.wikipedia.org/wiki/Código_de_vestimenta',
    },
  ],
  glosario: [
    {
      termino: 'Acabado',
      significado:
        'Calidad de un objeto en los detalles finales de su elaboración, especialmente en lo que se refiere a su aspecto (Real Academia Española, s.f.).',
    },
    {
      termino: 'Aletilla',
      significado:
        'Pieza de tela que acompaña a la cremallera de una prenda (Vestuario, s.f.).',
    },
    {
      termino: 'Aletillón',
      significado:
        'Es una aleta doble que se le coloca al lado derecho de la parte superior del tiro delantero y sirve para proteger la piel del cierre, en el momento en que este se cierre (SENA, s.f.).',
    },
    {
      termino: 'Almilla',
      significado:
        'Prenda masculina de busto o jubón de armas "ceñido a la cintura y con faldones" y abrochado con cordones, era una prenda interior complementaria de la indumentaria militar que se llevaba debajo de la armadura, bajo el peto del arnés (Wikipedia, s.f.).',
    },
    {
      termino: 'Aplome',
      significado: 'Poner una cosa vertical (Farlex, s.f.).',
    },
    {
      termino: 'Bocamanga',
      significado:
        'Abertura de la manga por donde sale la mano o el brazo, especialmente la parte interior de la misma (Farlex, s.f.).',
    },
    {
      termino: 'Bolsillo',
      significado:
        'Parte de algunas prendas de vestir, consistente en una bolsa interior o superpuesta (Farlex, s.f.).',
    },
    {
      termino: 'Corte',
      significado:
        'Abertura o señal que queda al cortar. Arte y oficio de cortar y confeccionar prendas de vestir (Farlex, s.f.).',
    },
    {
      termino: 'Cremallera',
      significado:
        'Cierre para aberturas longitudinales de prendas de vestir, bolsos, cojines y otras cosas, que consiste en dos filas de dientes metálicos que encajan unos con otros (Farlex, s.f.).',
    },
    {
      termino: 'Cuello',
      significado:
        'Adorno suelto de tela, encaje, piel u otra materia que se pone alrededor del cuello. Parte de una prenda de vestir que rodea el cuello (Farlex, s.f.).',
    },
    {
      termino: 'Cuerpo',
      significado:
        'Parte del vestido que cubre desde el cuello hasta la cintura (Farlex, s.f.).',
    },
    {
      termino: 'Dobladillo',
      significado:
        'Pliegue cosido que remata los bordes de la ropa (Farlex, s.f.).',
    },
    {
      termino: 'Escuadrar',
      significado:
        'Disponer un objeto de modo que sus caras formen ángulos rectos con las caras contiguas. (Farlex, s.f.).',
    },
    {
      termino: 'Espalda',
      significado:
        'Parte de una prenda de vestir que corresponde a esta parte del tronco (Farlex, s.f.).',
    },
    {
      termino: 'Flojo',
      significado:
        'Que no está bien ajustado o apretado (Real Academia Española, s.f.).',
    },
    {
      termino: 'Forro',
      significado:
        'Tela que se pone por la parte interior de las prendas de vestir o de otras cosas (Farlex, s.f.).',
    },
    {
      termino: 'Lateral',
      significado: 'Que está en un lado (Farlex, s.f.).',
    },
    {
      termino: 'Manga',
      significado:
        'Parte de una prenda de vestir que cubre el brazo o la parte superior de este (Farlex, s.f.).',
    },
    {
      termino: 'Pantalón',
      significado:
        'Prenda de vestir con dos perneras que cubre desde la cintura hasta los pies (Farlex, s.f.).',
    },
    {
      termino: 'Pernera',
      significado:
        'Parte del calzón o pantalón que cubre la pierna, y el espacio por donde esta se mete (Farlex, s.f.).',
    },
    {
      termino: 'Pespunte',
      significado:
        'Labor de costura que consiste en volver la aguja hacia atrás después de cada punto para meter la hebra en el mismo sitio por donde se pasó antes, de modo que las puntadas queden unidas (Farlex, s.f.).',
    },
    {
      termino: 'Pinza',
      significado:
        'Pliegue de una tela terminado en punta, que se hace para estrecharla o como adorno (Farlex, s.f.).',
    },
    {
      termino: 'Piquete',
      significado:
        'Agujero o corte pequeño que se hace en la ropa u otras cosas (Real Academia Española, s.f.).',
    },
    {
      termino: 'Pretina',
      significado:
        'Cinta con una hebilla o un broche que se pone en la cintura para sujetar una prenda de vestir (Farlex, s.f.).',
    },
    {
      termino: 'Ruedo',
      significado:
        'Refuerzo o forro con que se guarnece interiormente por la parte inferior los vestidos talares (Farlex, s.f.).',
    },
    {
      termino: 'Sisa',
      significado:
        'Corte hecho en una prenda de vestir para que se ajuste al cuerpo y, en especial, el corte curvo que se hace en la parte de la axila. (Farlex, s.f.).',
    },
    {
      termino: 'Talla',
      significado:
        'Medida convencional usada en la fabricación y venta de prendas de vestir (Farlex, s.f.).',
    },
    {
      termino: 'Talle',
      significado:
        'Parte de una prenda de vestir correspondiente a la cintura del cuerpo humano (Farlex, s.f.).',
    },
    {
      termino: 'Tiro',
      significado:
        'Distancia desde la unión de las perneras hasta la cintura de un pantalón (Farlex, s.f.).',
    },
    {
      termino: 'Vértice',
      significado:
        'Punto en que concurren los dos lados de un ángulo o las caras de un ángulo poliedro. Punto de una curva en que esta se encuentra con su eje (Farlex, s.f.).',
    },
  ],
  complementario: [
    {
      texto:
        'Academia de diseño y confección Alamoda. (2020). Pantalón clásico de hombre/confección/paso a paso [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tccvk8aARNk&feature=youtu.be',
    },
    {
      texto: 'Módulo 4. Confección del pantalón (s.f.).',
      tipo: 'PDF',
      descarga: '/downloads/Pantalon_hombre.pdf',
    },
    {
      texto:
        'Valencia, L. (s.f.) Colección…Saber hacer… Ropa para hombre. Camisa de vestir con tablón en espalda. CONEVyT-INEA.',
      tipo: 'PDF',
      link: '/downloads/Camisa_hombre.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
