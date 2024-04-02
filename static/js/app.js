
/*
This function, buildMetadata, should perform to display metadata information for a given sample ID. It fetches metadata from an external JSON file and populates the metadata panel in the HTML with key-value pairs. Additionally, it provides a bonus feature to build a Gauge Chart based on the washing frequency.
*/

const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

d3.json(url).then((data) => {

    
    
    console.log(data);
});

function buildMetadata(sample) {
    // Fetch metadata asynchronously from an external JSON file using D3.js
    d3.json(url).then((data) => {

        // Extract the 'metadata' array from the fetched data
        
  

//         // Filter the 'metadata' array based on the provided 'sample' ID
        

//         // Extract the first result from the filtered array
//         let result = resultArray[0];
//         // Select the HTML panel with the id of `#sample-metadata` using D3
//         let PANEL = d3.select("#sample-metadata");

//         // Clear any existing metadata in the panel using `.html("")`
//         PANEL.html("");

//         // Iterate through each key-value pair in the metadata and append them as <h6> tags to the panel
//         for (key in result){
            

//         // Bonus: Build the Gauge Chart using the washing frequency data
//         buildGauge();
    }
    )};

  

//   /*
// This function, buildCharts, is designed to generate visualizations (Bubble Chart and Bar Chart) based on sample data retrieved from an external JSON file. It uses D3.js to fetch the data asynchronously. The function filters the samples based on a provided sample ID, then extracts relevant data (OTU IDs, OTU labels, and sample values) to populate the charts.
// The Bubble Chart displays the distribution of bacteria cultures per sample, with OTU IDs on the x-axis and sample values on the y-axis. The size and color of markers represent sample values and OTU IDs, respectively.
// The Bar Chart visualizes the top 10 bacteria cultures found in the sample. It presents OTU IDs as y-axis ticks and corresponding sample values as bars. The chart's title indicates its purpose.
// this function efficiently utilizes Plotly.js to create interactive and informative visualizations, enhancing data exploration and understanding.
// */
// function buildCharts(sample) {
//     // Fetch data asynchronously from an external JSON file using D3.js
//     d3.json("URL for JSON file").then((data) => {
//         // Extract the 'samples' array from the fetched data
        
//         // Filter the 'samples' array based on the provided 'sample' ID
        
//         // Extract the first result from the filtered array
//         let result = resultArray[0];
    
//         // Extract relevant data for Bubble Chart
//         let otu_ids = 
//         let otu_labels = 
      
    
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
    
//         // Extract top 10 OTU IDs for Bar Chart
        
//         // Define data for Bar Chart
       
    
//         // Build layout for Bar Chart
        
    
//         // Generate Bar Chart using Plotly
//         Plotly.newPlot()
//     });
// }



//   /*
// The init() function initializes the webpage by populating a dropdown menu with sample names retrieved from an external JSON file. It then builds the initial plots based on the first sample from the dropdown.
// */

// function init() {
//     // Grab a reference to the dropdown select element
//     let selector = d3.select("#selDataset");

//     // Fetch data asynchronously from an external JSON file using D3.js
//     d3.json("URL for JSON file").then((data) => {
//         // Extract sample names from the fetched data
   

//         // Iterate through each sample name to populate the dropdown menu
        
//             // Append an <option> element for each sample name
            

//         // Use the first sample from the list to build the initial plots
//         let firstSample = sampleNames[0];
//         // Build charts based on the first sample
//         buildCharts(firstSample);
//         // Display metadata for the first sample
//         buildMetadata(firstSample);
//     });
// }


// /*
// The optionChanged() function is triggered whenever a new sample is selected from the dropdown. It fetches new data and updates the plots accordingly. 
// */
// function optionChanged(newSample) {
//     // Fetch new data and update charts and metadata when a new sample is selected
//     buildCharts(newSample);
//     buildMetadata(newSample);
// }

  
//   // Initialise the dashboard
//   init();
  