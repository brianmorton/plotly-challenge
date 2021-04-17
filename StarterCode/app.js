 //import statement
// d3.json("samples.json").then((x) => {
//     var metadata = x.metadata;
//     var samples = x.samples;

   // console.log(metadata);
   // console.log(samples);

    //d3 grab html
   d3.select("tbody");

    //dropdown value selector
    d3.select("#selDataset").on("change", optionChanged);

    //function for checking value from dropdown
    function optionChanged() {
    d3.event.preventDefault()
    d3.json("samples.json").then((x) => {
    var metadata = x.metadata;
    var samples = x.samples;
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var idselected = dropdownMenu.property("value");
    console.log(idselected)
    demoindex(idselected,metadata);
    samplesindex(idselected, samples);
    })
    var index_pos_demo = 0;
    var index_pos_samp = 0;
    var index = 0;
    var index2 = 0;

    //index pos check log
//console.log(metadata[0])
   // demo table info pulled
   function demoindex (idselected,metadata){
        console.log(idselected)
        if (metadata.id !== idselected)
            index +=1;
        else if (metadata.id === idselected)
        {
            index_pos_demo = index;
        };
    var demo_values = metadata[index_pos_demo] 
    console.log(demo_values);
    demo_build(demo_values)
   };
   function samplesindex (idselected,samples){
    //d3.event.preventDefault()
    console.log(idselected)
    if (samples.id !== idselected)
        index2 +=1;
    else if(samples.id === idselected)
    {
        index_pos_samp = index2;
    };
    var samples_pass = samples[index_pos_samp]
    console.log(samples_pass);
    barbuild(samples_pass)

    };

// code for checking charts  
    var testsamples = {"id": "940", "otu_ids": [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977, 3450, 874, 1959, 2191, 1950, 2077, 2275, 944, 2184, 2244, 2024, 2419, 2811, 165, 2782, 2247, 2011, 2396, 830, 2964, 1795, 2722, 307, 2178, 2908, 1193, 2167, 1208, 2039, 1274, 2739, 2737, 1314, 1962, 2186, 2335, 2936, 907, 833, 2483, 2475, 2491, 2291, 159, 2571, 2350, 2342, 2546, 725, 170, 1505, 513, 259, 1169, 258, 1232, 1497, 1498, 1503, 412, 2235, 1960, 1968, 121, 2065, 340, 2110, 2188, 357, 342], "sample_values": [163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], "otu_labels": ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes", "Bacteria", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria"]}
//horizontal bar chart function
    //sort otu ids and get 10
    function barbuild (samples_pass) {
    var bar = d3.select("#bar");
    var otu_bar_labels = samples_pass.otu_ids;
    var otusorted = otu_bar_labels.reverse()
    var otu_ids = otusorted.slice(0, 10);
//sort sample values and get 10
        var sample_store = samples_pass.sample_values
        var sv_reverse = sample_store.reverse()
        var sample_value = sv_reverse.slice(0,10)



        var otu_labels =  samples_pass.otu_labels

var trace1 = {x: otu_ids,
    y: sample_value,
    text: otu_labels,
    type: "bar"
            }

var databar = trace1;

var layout = {
    title: "Bar Chart",
}
Plotly.newPlot("bar", databar, layout) 
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
  
  var data = [trace2];
  
  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', data, layout);
}

// //function for demographic table creation/key value pairs

// function demo_build(demo_values){
// {var bar = d3.select("#sample-metadata")
    
// }
function demo_build(demo_values){
    var tbody = d3.select("#sample-metadata");
    //d3 foreach append tr for object
     Object.entries(demo_values).forEach(function([key, value]) {
  //Append to cell in the row
  var row = tbody.append("tr");
  //append text to cell
    row.text(key,value);
     });
   };
};