<template>
  <q-page padding>
    <q-tabs
      v-model="activeTab"
      dense align="justify"
      active-color="primary" indicator-color="primary" class="text-grey"
    >
      <q-tab
        v-for="series in dataSeries"
        :key="series.id"
        :name="series.id"
        :label="series.name"
      />
    </q-tabs>

    <q-tab-panels v-model="activeTab" animated>
      <q-tab-panel
        v-for="series in dataSeries"
        :key="series.id"
        :name="series.id"
      >
        <distribution-analysis :name="series.name" :data="series.data" />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
  import {
    defineComponent,
    reactive,
    toRefs,
  } from '@vue/composition-api';

  import normalDataSeries from 'assets/application/json/data-series-4chan-b.json';
  import exponentialDataSeries from 'assets/application/json/data-series-4chan-h.json';
  import uniformDataSeries from 'assets/application/json/data-series-4chan-vp.json';

  import { IData } from 'interfaces';

  import DistributionAnalysis from 'components/DistributionAnalysis.vue';

  function useGoodnessOfFit() {
    const state = reactive({
      activeTab: '',
      dataSeries: [{
        id: '4chan-exp',
        name: 'Normal',
        data: normalDataSeries as IData[],
      }, {
        id: '4chan-norm',
        name: 'Exponential',
        data: exponentialDataSeries as IData[],
      }, {
        id: '4chan-unif',
        name: 'Uniform',
        data: uniformDataSeries as IData[],
      }],
    });

    state.activeTab = state.dataSeries[0]?.id;

    return toRefs(state);
  }

  export default defineComponent({
    name: 'GoodnessOfFit',
    components: { DistributionAnalysis },
    setup() {
      return useGoodnessOfFit();
    },
  });
</script>
