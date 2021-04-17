 //Global variables
 
 var firstrun = true
 //import statement
d3.json("samples.json").then((x) => {
    console.log(x)
    var names = x.names;
    //assign to global
     
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
       console.log(x);
       var metadata = x.metadata;
       
      var filtmetadata = metadata.filter(obj => obj.id == idselected);
      console.log(filtmetadata);
        var filtered_meta = filtmetadata[0]
        console.log(filtered_meta);


        //console.log(idselected)
    

    //console.log(demo_values);
    demo_build(filtered_meta)
   };
   function samplesindex(idselected,samples){
    //d3.event.preventDefault()
    //console.log(idselected)
    if (samples.id !== idselected)
        index2 +=1;
    else if(samples.id === idselected)
    {
        index_pos_samp = index2;
    };
    var samples_pass = samples[index_pos_samp]
    //console.log(samples_pass);
    barbuild(samples_pass)

    };

//horizontal bar chart function
    //sort otu ids and get 10
    function barbuild(samples_pass) {
    var bar = d3.select("#bar");
    var otu_bar_labels = samples_pass.otu_ids;
    var otusorted = otu_bar_labels.reverse()
    var otu_ids = otusorted.slice(0, 10);
        //console.log(otu_ids);
//sort sample values and get 10
        var sample_store = samples_pass.sample_values
        var sv_reverse = sample_store.reverse()
        var sample_value = sv_reverse.slice(0,10)
        //console.log(sample_value);


        var otu_labels =  samples_pass.otu_labels
        //console.log(otu_labels);
var trace1 = {x: otu_ids,
    y: sample_value,
    text: otu_labels,
    type: "bar"
            }
var data = trace1;

var layout = {
    title: "Bar Chart",
}
Plotly.newPlot("bar", data, layout) 
bubblebuild(otu_ids,sample_value, otu_labels)         
    }

  
//bubble chart function
function bubblebuild(otu_ids,sample_value, otu_labels)  {
var bubble = d3.select("#bubble")
var trace2 = {
    x: otu_ids,
    y: sample_value,
    text:otu_labels, 
    mode: 'markers',
    marker: {
      size: sample_value,
      color: otu_ids,
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
    if (firstrun = true){
        firstrun = false;
    var tbody = d3.select("#sample-metadata");
    //d3 foreach append tr for object
     Object.entries(filtered_meta).forEach(function([key, value]) {
  //Append key to cell in the row
  var row = tbody.append("tr");
  row.text(key)
  //append value text
   row = tbody.append("td");
    row.text(value);
     });
   } else {
    var tbody = d3.select("#sample-metadata");
    //d3 foreach append tr for object
     Object.entries(filtered_meta).forEach(function([key, value]) {
  //Append key to cell in the row
        row.text(key);
  //append value text
        row.text(value);
                    });
        };
    };
});