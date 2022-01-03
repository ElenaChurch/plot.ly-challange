
async function main() {
    const response = await fetch("../data/samples.json");
    const data = await response.json();
    console.log(data);

//creating arrays
    //const sample_values = Object.keys(data.sample.sample_values);
    const sample_values = Object.values(data.sample_values);
    //const otu_ids = Object.values(data.samples.otu_ids)
    //const otu_labels = Object.values(data.samples.otu_labels)
//bar plot trace
    //const tracebar = {
       // x: sample_values,
        //y: otu_ids,
        //type:'bar',
        //text: otu_labels
    //}
//bubble chart trace
    //const tracebubble = {
       // x:otu_ids,
        //y:sample_values,
        //mode: 'markers',
       // marker: {size:sample_values}
   // }
//document.querySelector('selDataset').addEventListener('change',event=>{
//let data =[];
//if(event.target.value==)

//})
}

main();