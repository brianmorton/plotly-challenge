 //import statement
d3.json("samples.json").then((x) => {
    var names = x.names;
    console.log(names);
    //var names = x.names
    var metadata = x.metadata;
    console.log(metadata);

    //d3 grab html??
   d3.select("tbody");

    //dropdown value selector
    d3.selectAll("#selDataset").on("change", optionChanged);

    //function for checking value from dropdown
    function optionChanged() {
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var idselected = dropdownMenu.property("value");
    console.log(idselected)
    index
    }
    var index_pos = 0
   // demo table info pulled
   function index (idselected){
        if (metadata.id !== idselected)
            index_pos +=1
        else demo_table  
   };
   function demo_table (index_pos){
   var demo_values = metadata[index_pos]
   console.log(demo_values)
   return demo_values
                 }

    });
   

//horizontal bar chart info


// Use `sample_values` as the values for the bar chart.

// * Use `otu_ids` as the labels for the bar chart.

// * Use `otu_labels` as the hovertext for the chart.


//bubble chart info

// * Use `otu_ids` for the x values.

// * Use `sample_values` for the y values.

// * Use `sample_values` for the marker size.

// * Use `otu_ids` for the marker colors.

// * Use `otu_labels` for the text values.


// //function for demographic table creation
//function demo_build()

// //function for key value pair display?

// //function for horizontal bar chart creation

