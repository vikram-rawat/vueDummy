$(document).ready(() => {
  $(document).on('shiny:connected', function (event) {
    Shiny.unbindAll();
    const { createApp, ref, onMounted, nextTick } = Vue;

    const application = createApp({
      delimiters: ['{%%', '%%}'],
      setup() {
        const message = ref('Hello Vue!');
        const plotid = ref('distPlot');
        const plotlyid = ref('distPlotly');

        onMounted(() => {
          nextTick(() => {
            console.log('mounted');
            Shiny.bindAll('#shiny-plot-output-distPlot');
            Shiny.bindAll('#html-widget-output-distPlotly');
          });
        });

        return {
          message,
          plotid,
          plotlyid,
        };
      },
    });

    const runApp = application.mount('#app');

    Shiny.bindAll();
  });
});
