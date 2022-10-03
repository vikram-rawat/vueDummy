$(document).on('shiny:connected', function (event) {
  Shiny.unbindAll();
  const { createApp, ref, onMounted, nextTick, watchEffect } = Vue;

  application = createApp({
    delimiters: ['{%%', '%%}'],
    setup() {
      const message = ref('Hello Vue!');
      const plotid = ref('distplot');
      const plotlyid = ref('distPlotly');

      onMounted(() => {
        nextTick(() => {});
      });

      watchEffect(() => {
        console.log(Shiny.shinyapp.$inputValues.bins);
      });

      return {
        message,
        plotid,
        plotlyid,
      };
    },
  });

  runApp = application.mount('#app');

  Shiny.bindAll();
});
