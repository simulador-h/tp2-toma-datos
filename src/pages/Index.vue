<template>
  <q-page class="column items-center justify-evenly">
    <h1>
      GRUPO - H
    </h1>
    <div class="row q-gutter-md justify-center">
      <q-btn push color="white" text-color="primary" label="Lucas Astrada" />
      <q-btn push color="white" text-color="primary" label="Tatiana Candusso" />
      <q-btn push color="white" text-color="primary" label="Rodrigo Gonzalez" />
      <q-btn push color="white" text-color="primary" label="Enzo Montoya" />
      <q-btn push color="white" text-color="primary" label="Gabriel Palacio" />
    </div>
    <div class="q-pa-lg text-justify">
      Se presentan 3 series, obtenidas mediante la aplicación de técnicas de web scrapping, donde
      cada una de ellas contiene la marca temporal y el tiempo calculado entre llegadas
      correspondientes a mensajes publicados en el image-board público "4chan.org".
      <br>
      El proceso de exfiltración se realizó de forma manual, ejecutandose declaraciones javascript
      en la consola del navegador.

      Para la obtención de las marcas temporales, de los mensajes de un hilo específico, se
      utilizaron los siguiente comandos:
      <br>
      <br>
      <q-chip>
        <q-avatar icon="bookmark" color="red" text-color="white" />
        const elements = document.querySelectorAll('span.dateTime:not(.postNum)')
      </q-chip>
      <q-chip>
        <q-avatar icon="bookmark" color="red" text-color="white" />
        Array.from(elements).map(v => Date(v.innerHTML))
      </q-chip>
      <br>
      <br>
      El cual emitirá un array de cadenas de texto, con las marcas temporales de cada mensaje
      escrito en el hilo.
      <br>
      Dado que las marcas temporales se encuentran en el formato `MM/DD/YY(ddd)hh:mm:ss` se uso una
      consola REPL con la librería `moment.js` para realizar la conversión a formato de fechas y
      obtener el tiempo entre llegadas.
      <br>
      Para ello se usaron las siguientes declaraciones, aplicadas de forma iterada sobre los
      elementos del arreglo previamente obtenido:
      <br>
      <br>
      <q-chip>
        <q-avatar icon="bookmark" color="red" text-color="white" />
        const iat = moment(ts).diff(_ts, 'seconds')
      </q-chip>
      <q-chip>
        <q-avatar icon="bookmark" color="red" text-color="white" />
        return { ts, iat }
      </q-chip>
      <br>
      <br>
      De esa manera, y mediante la conversion del nuevo arreglo al formato JSON, se pueden aplicar
      al sistema para su procesamiento y análisis.
      <br>
      <br>
      A continuación se pueden descargar las series:
    </div>
    <div class="q-px-md q-pb-xl q-gutter-sm">
      <q-btn type="a" href="/data-series-4chan-b.json" label="Serie A" push />
      <q-btn type="a" href="/data-series-4chan-h.json" label="Serie B" push />
      <q-btn type="a" href="/data-series-4chan-vp.json" label="Serie C" push />
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    name: 'PageIndex',
    components: { },
    setup() {
      return { };
    },
  });
</script>
