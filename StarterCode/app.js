 //import statement
d3.json("samples.json").then((x) => {
   // console.log(x)
    var names = x.names;
     
   // console.log(metadata);
   // console.log(samples);
   var select=d3.selectAll('#selDataset');
   Object.entries(names).forEach(([namekey,namevalue])=>{
       select.append('option').text(namevalue);
   })
   
    //dropdown value selector
    select.on("change", optionChanged);

    //function for checking value from dropdown
    function optionChanged() {
            
            var dropdownMenu = d3.select("#selDataset");
            // Assign the value of the dropdown menu option to a variable
            var idselected = dropdownMenu.property("value");
            //console.log(idselected)
            demoindex(idselected);
            samplesindex(idselected);
    }

   // demo table info pulled
        function demoindex(idselected){
       //console.log(x);
         var metadata = x.metadata;
         var filtmetadata = metadata.filter(obj => obj.id == idselected);
         //console.log(filtmetadata);
         var filtered_meta = filtmetadata[0];
        //console.log(filtered_meta);
        demo_build(filtered_meta)
        };


   function samplesindex(idselected){
        //console.log(x);
        var samples = x.samples;
        var filtsamples = samples.filter(obj => obj.id == idselected);
        //console.log(filtsamples);
         var filtered_samp = filtsamples[0];
        //console.log(filtered_samp);
        barbuild(filtered_samp)

    };

//horizontal bar chart function

    //sort otu ids and get 10
    function barbuild(filtered_samp) {
    //console.log(filtered_samp);  
        var otu_bar_labels = filtered_samp.otu_ids;
        var otu_ids = otu_bar_labels.slice(0, 10);
        //console.log(otu_ids);

        //sort sample values and get 10
        var sample_store = filtered_samp.sample_values
        var sample_value = sample_store.slice(0,10)
        //console.log(sample_value);

        //grab otu labels
        var otu_filt =  filtered_samp.otu_labels
        var otu_labels = otu_filt.slice(0, 10);
        //console.log(otu_labels);

        //build trace
        var trace1 = {x: otu_ids,
        y: sample_value,
        text: otu_labels,
        type: "bar"
        }
        var data = trace1;
            console.log(data)
            // var layout = {
            // title: "Bar Chart",
            // }
            Plotly.newPlot("bar", data) 
            bubblebuild(otu_ids,sample_value, otu_labels)         
    }

  
//bubble chart function
function bubblebuild(otu_ids,sample_value, otu_labels)  {
var trace2 = {
    x: otu_ids,
    y: sample_value,
    text:otu_labels, 
    mode: 'markers',
    marker: {
      size: sample_value,
      color: otu_ids
    }
  };
  
  var data = trace2;
  
  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', data, layout);
}


// //function for demographic table creation/key value pairs
function demo_build(filtered_meta){
   
    var tbody = d3.select("#sample-metadata");
    tbody.text("");
    //d3 foreach append tr for object
     Object.entries(filtered_meta).forEach(function([key, value]) {
  //Append key to cell in the row
  var row = tbody.append("tr");
  row.text(key);
  //append value text
   row = tbody.append("td");
    row.text(value);
     });
    };
});

     