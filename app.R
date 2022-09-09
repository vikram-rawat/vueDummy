library(ggplot2)
library(shiny)
library(plotly)

# Define UI for application that draws a histogram
ui <- fluidPage(

  # Application title
  titlePanel("Old Faithful Geyser Data"),
  tags$script(src = "js/vue.global.min.js"),
  # Sidebar with a slider input for number of bins
  sidebarLayout(
    sidebarPanel(
      sliderInput("bins",
        "Number of bins:",
        min = 1,
        max = 50,
        value = 30
      )
    ),

    # Show a plot of the generated distribution
    mainPanel(
      tagList(
        htmltools::attachDependencies(
          x = "distPlotly",
          value = htmlwidgets:::getDependency("plotly")
        ),
        htmlTemplate(filename = "html/index.html")
      ),
      tags$script(src = "js/index.js")
    )
  )
)

# Define server logic required to draw a histogram
server <- function(input, output) {
  main_plot <- reactive({
    x <- faithful[, 2]
    bins <- seq(min(x), max(x), length.out = input$bins + 1)
    ggplt <- ggplot(as.data.frame(x), aes(x = x)) +
      geom_histogram() +
      theme_bw()

    return(ggplt)
  })

  output$distPlot <- renderPlot({
    # generate bins based on input$bins from ui.R
    return(main_plot())
  })

  output$distPlotly <- renderPlotly({
    # generate bins based on input$bins from ui.R
    pltly <- main_plot() |>
      ggplotly()
    return(pltly)
  })
}

# Run the application
shinyApp(ui = ui, server = server)
