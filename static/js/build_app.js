const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {

  console.log(data);

  // This is an array of the subjectIDs in the 'name' object
  let namesSubjectIDs = data.names;

  // Create four arrays to extract the Subject ID, OTU ID for each subject, OTU Values for each subject and the Lables for each OTU. Match the index so they can be reliably called upon 
  // Array of subject IDs
  var subjectIdArray = [];

  // Array of OTUs associated with each subject ID by identical index reference.
  var subjectOtuId = [];

  // Array of OTU values for each OTU Id as above
  var subjectOtuIdVals =  [];

  // Array of labels for each subject
  var subjectLabels = [];

  for (i = 0; i < namesSubjectIDs.length; i++) {    
    
    let idIndex = namesSubjectIDs.indexOf(data.samples[i].id);
    // console.log(`The ID Index is: ${idIndex}`)

  
    let subjectIds = data.samples[idIndex].id;
    subjectIdArray.push(subjectIds);
    // console.log(`Subject ID: ${subjectIds}`)

    let otuSetIds = data.samples[idIndex].otu_ids;    
    var individualOtuIds = [];

      // For each OTU Id in the sample set att 'OTU' the the start of the number.
      for (j = 0; j < otuSetIds.length; j ++) {
        otuSubjectId = `OTU ${otuSetIds[j]}`;
        individualOtuIds.push(otuSubjectId);
      };
    // Push the first 10 values
    subjectOtuId.push(individualOtuIds.slice(0, 10));
    // console.log(`Subject OTU Ids: ${individualOtuIds}`);

    let otuValues = data.samples[idIndex].sample_values;
    // console.log(`Subject OTU Values: ${otuValues}`);
    // Push the first 10 values
    subjectOtuIdVals.push(otuValues.slice(0, 10));

    let labelsSearch = data.samples[idIndex].otu_labels;
    // Replace ';' in each label index with ' '
      var labelsReplaced = [];
      for (k = 0; k < labelsSearch.length; k ++) {
        otuLabelEach = data.samples[idIndex].otu_labels[k];
        otuLabelEachReplaced = otuLabelEach.toString().replace(/;/g, " ");
        labelsReplaced.push(otuLabelEachReplaced)    
      };

    // Push the first 10 values
    subjectLabels.push(labelsReplaced.slice(0, 10));
    // console.log(`Subject Labels: ${labelsReplaced}`)
     };
  

  console.log(subjectIdArray[0]);
  console.log(subjectOtuId[0]);
  console.log(subjectOtuIdVals[0]);
  console.log(subjectLabels[0]);


  function init() {
    // Trace1 for the OTU Data
  let trace1 = {
    x: subjectOtuIdVals[0].reverse(), 
    y: subjectOtuId[0].reverse(),
    text: subjectLabels[0].reverse(),
    name: "OTU",
    type: "bar",
    orientation: "h"
  };

  // Data array
  let plot_data = [trace1];

  // Apply a title to the layout
  let layout = {
    title: "OTU Values",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    },
    height: 600,
    width: 800
  };

  // Render the plot to the div tag with id "bar"
  Plotly.newPlot("bar", plot_data, layout);
};

  d3.selectAll("#selDataset").on("change", data);

// // WORK ON THE GET DATA FOR THE DROPDOWNS!
//   // Function called by DOM changes
// function getData() {

//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.select("#selDataset");

//   // Assign the value of the dropdown menu option to a variable
//   let dataset = dropdownMenu.property("value");

//   // Initialise an empty array for the new country's data
//   let newdata  = [];

//   // If/Else statement to assign the chosen country to the new dataset
//   if (dataset == 'australia') {
//     newdata  = australia;
//   }
//   else if (dataset == 'brazil') {
//     newdata  = brazil;
//   }
//   else if (dataset == 'uk') {
//     newdata  = uk;
//   }
//   else if (dataset == 'mexico') {
//     newdata  = mexico;
//   }
//   else if (dataset == 'singapore') {
//     newdata  = singapore;
//   }
//   else if (dataset == 'southAfrica') {
//     newdata  = southAfrica;
//   }
// // Call function to update the chart
//   updatePlotly(newdata );
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("bar", "values", [newdata]);
// }

init();
});



