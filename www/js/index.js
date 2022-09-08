$(document).ready(() => {

const { createApp,  ref, onMounted, nextTick } = Vue

const application =  createApp({
    
    delimiters: ["{%%", "%%}"],
    
    setup()  {
      const message = ref('Hello Vue!');
      const id = ref('distPlot');

      onMounted(()=>{
        nextTick(() => {
          console.log("mounted")
          Shiny.bindAll("#shiny-plot-output-distPlot");
        })
      })
      
      return {
        message ,
        id
      }
    }
  })
  
const runApp = application.mount('#app')  
})

