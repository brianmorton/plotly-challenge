 //import statement
d3.json("samples.json").then((x) => {
    var names = x.names;
    console.log(names);
    //var names = x.names
    var metadata = x.metadata;
    console.log(metadata);

});

//d3 grab html??
 var tbody = d3.select("tbody");


// d3.selectAll("#selDataset").on("change", optionChanged);
// function optionChanged() {
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
//     // Initialize an empty array 
//     var data = [];
    
//     if (dataset == '940') {
//         data = 940;
//         console.log(data);
//     }
//     else if (dataset == '941') {
//         data = 941;
//         console.log(data);
//     }
//     else if (dataset == '943') {
//         data = 943;
//         console.log(data);
//     }
//     else if (dataset == '944') {
//         data = 944;
//         console.log(data);
//     }



//     //sample ids , "945", "946", "947", "948", "949", "950", "952", "953", "954", "955", "956", "958", "959", "960", "961", "962", "963", "964", "966", "967", "968", "969", "970", "971", "972", "973", "974", "975", "978", "1233", "1234", "1235", "1236", "1237", "1238", "1242", "1243", "1246", "1253", "1254", "1258", "1259", "1260", "1264", "1265", "1273", "1275", "1276", "1277", "1278", "1279", "1280", "1281", "1282", "1283", "1284", "1285", "1286", "1287", "1288", "1289", "1290", "1291", "1292", "1293", "1294", "1295", "1296", "1297", "1298", "1308", "1309", "1310", "1374", "1415", "1439", "1441", "1443", "1486", "1487", "1489", "1490", "1491", "1494", "1495", "1497", "1499", "1500", "1501", "1502", "1503", "1504", "1505", "1506", "1507", "1508", "1510", "1511", "1512", "1513", "1514", "1515", "1516", "1517", "1518", "1519", "1521", "1524", "1526", "1527", "1530", "1531", "1532", "1533", "1534", "1535", "1536", "1537", "1539", "1540", "1541", "1542", "1543", "1544", "1545", "1546", "1547", "1548", "1549", "1550", "1551", "1552", "1553", "1554", "1555", "1556", "1557", "1558", "1561", "1562", "1563", "1564", "1572", "1573", "1574", "1576", "1577", "1581", "1601"]

// //function for demographic info table creation

// //function for key value pair display?

// //function for horizontal bar chart

// //function for bubble chart


