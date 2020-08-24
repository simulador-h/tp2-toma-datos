<script>
  import { defineComponent } from '@vue/composition-api';

  import { Bar } from 'vue-chartjs';

  export default defineComponent({
    name: 'bar-chart',
    extends: Bar,
    props: ['data', 'options'],
    watch: {
      options() {
        // eslint-disable-next-line
        this.$data._chart.destroy();
        this.renderChart(this.data, this.options);
      },
      data() {
        // eslint-disable-next-line
        this.$data._chart.destroy();
        this.renderChart(this.data, this.options);
      },
    },
    mounted() {
      this.renderChart(this.data, this.options);
    },
  });
</script>
