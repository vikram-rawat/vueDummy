$(document).on('shiny:connected', function (event) {
  Shiny.unbindAll();
  const { createApp, ref, onMounted, watchEffect } = Vue;
  application = createApp({
    delimiters: ['{%%', '%%}'],
    setup() {
      message = ref('Vue for Shiny');

      onMounted(() => {});

      watchEffect(() => {});

      return {
        message,
      };
    },
  });
  runApp = application.mount('#app');
  Shiny.bindAll();
});
