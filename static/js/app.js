
// This function, buildMetadata, should perform to display metadata information for a given sample ID. It fetches metadata from an external JSON file and populates the metadata panel in the HTML with key-value pairs. Additionally, it provides a bonus feature to build a Gauge Chart based on the washing frequency.

function buildMetadata(sample) {
    // Fetch metadata asynchronously from an external JSON file using D3.js
    const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

    d3.json(url).then(function(data) {

        // Extract the 'metadata' array from the fetched data
        let subMeta = data.metadata;

        // // Filter the 'metadata' array based on the provided 'sample' ID
        for (i=0; i<subMeta.length; i++) {
            if (subMeta[i].id == sample) {
            var resultArray = subMeta[i];
            };
        };

        // Select the HTML panel with the id of `#sample-metadata` using D3
        let PANEL = d3.select("#sample-metadata");

        // Clear any existing metadata in the panel using `.html("")`
        PANEL.html("");

        // Iterate through each key-value pair in the metadata and append them as <h6> tags to the panel
        // for (key in result){
        createH6 = PANEL.append('h6');
        createH6.append('ul').append('li').text(`id: ${resultArray.id}`)
        createH6.append('ul').append('li').text(`ethnicity: ${resultArray.ethnicity}`);
        createH6.append('ul').append('li').text(`gender: ${resultArray.gender}`);
        createH6.append('ul').append('li').text(`age: ${resultArray.age}`);
        createH6.append('ul').append('li').text(`location: ${resultArray.location}`);
        createH6.append('ul').append('li').text(`bbtype: ${resultArray.bbtype}`);
        createH6.append('ul').append('li').text(`wfreq: ${resultArray.wfreq}`);
        });            

        // // Bonus: Build the Gauge Chart using the washing frequency data
        // buildGauge();
    
  
};
  /*
This function, buildCharts, is designed to generate visualizations (Bubble Chart and Bar Chart) based on sample data retrieved from an external JSON file. It uses D3.js to fetch the data asynchronously. The function filters the samples based on a provided sample ID, then extracts relevant data (OTU IDs, OTU labels, and sample values) to populate the charts.
The Bubble Chart displays the distribution of bacteria cultures per sample, with OTU IDs on the x-axis and sample values on the y-axis. The size and color of markers represent sample values and OTU IDs, respectively.
The Bar Chart visualizes the top 10 bacteria cultures found in the sample. It presents OTU IDs as y-axis ticks and corresponding sample values as bars. The chart's title indicates its purpose.
this function efficiently utilizes Plotly.js to create interactive and informative visualizations, enhancing data exploration and understanding.
*/
function buildCharts(sample) {
    const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";
    // Fetch data asynchronously from an external JSON file using D3.js
    d3.json(url).then((data) => {
        // Extract the 'samples' array from the fetched data
        var sampleIds = data.samples;

        // Filter the 'samples' array based on the provided 'sample' ID
        for (i=0; i<sampleIds.length; i++) {
            if (sampleIds[i].id == sample) {
            var result = sampleIds[i];
            };
        };
        
        // Extract relevant data for Bubble Chart
        let otu_ids = [];
        let otu_labels = [];
        let otu_values = result.sample_values;

        for (j = 0; j < result.otu_ids.length; j ++) {

            otu_ids_unfiltered = `OTU ${result.otu_ids[j]}`;
            otu_ids.push(otu_ids_unfiltered);

            otu_labels_unfiltered = result.otu_labels[j];
            otu_labels_unfiltered_replaced = otu_labels_unfiltered.toString().replace(/;/g, " ");
            otu_labels.push(otu_labels_unfiltered_replaced);
          };

    
        

        console.log(`OTU IDS: ${otu_ids.slice(0,10)}`);
        console.log(`OTU LABELS: ${otu_labels.slice(0,10)}`);
        console.log(`OTU VALUES: ${otu_values.slice(0,10)}`);
        

        // Extract top 10 OTU IDs for Bar Chart
        // Define data for Bar Chart

        let trace1 = {
            x: otu_values.slice(0,10).reverse(), 
            y: otu_ids.slice(0,10).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            name: "OTU",
            type: "bar",
            orientation: "h"
          };
        
          // Data array
          let plot_data = [trace1];
        
          // Build layout for Bar Chart
          let layout = {
            title: `Sample ${sample} Top 10 OTU Information`,
            margin: {
              l: 100,
              r: 100,
              t: 100,
              b: 100
            },
            height: 600,
            width: 350
          };
        
          // Render the plot to the div tag with id "bar"
          Plotly.newPlot("bar", plot_data, layout);
});      
    
//         // Build layout for Bubble Chart
//         let bubbleLayout = {
          
//         };

//         // Define data for Bubble Chart
//         let bubbleData = [
//             {
               
//             }
//         ];
    
//         // Generate Bubble Chart using Plotly
//         Plotly.newPlot()
    };




  /*
The init() function initializes the webpage by populating a dropdown menu with sample names retrieved from an external JSON file. It then builds the initial plots based on the first sample from the dropdown.
*/

function init() {
    // Grab a reference to the dropdown select element
    let selector = d3.select("#selDataset");

    const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

    // Fetch data asynchronously from an external JSON file using D3.js
    d3.json(url).then((data) => {
        // Extract sample names from the fetched data
        sampleNames = data.names;

        
        // Iterate through each sample name to populate the dropdown menu
        for (i=0; i < sampleNames.length; i++) {
            // Append an <option> element for each sample name
            selector.append("option").text(`${sampleNames[i]}`)
        };

        // Use the first sample from the list to build the initial plots
        let firstSample = sampleNames[0];
        // Build charts based on the first sample
        buildCharts(firstSample);
        // // Display metadata for the first sample
        buildMetadata(firstSample);
    });
}


/*
The optionChanged() function is triggered whenever a new sample is selected from the dropdown. It fetches new data and updates the plots accordingly. 
*/
function optionChanged(newSample) {
    // Fetch new data and update charts and metadata when a new sample is selected
    d3.selectAll("#selDataset").on("change", newSample);
    buildCharts(newSample);
    buildMetadata(newSample);
}

  
  // Initialise the dashboard
  init();
        