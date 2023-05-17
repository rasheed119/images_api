var container = document.createElement("div");
container.setAttribute("class","container");


var row = document.createElement("div");
row.setAttribute("id","row");



container.append(row);
document.body.append(container);


async function getdatails(){
  var responce = await fetch("https://picsum.photos/v2/list?page=4&limit=50");
  var data = await responce.json();
  for(var i = 0 ; i < data.length ; i++){
    try {
      row.innerHTML+=
      `<div class = "col-md-4 col-sm-12">
      <div class="card text-center m-3" id="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${data[i].download_url}" class="card-img-top mb-3" alt="..." width="100" height="150">
      <p class="card-text">Image Number : ${parseInt(data[i].id) + 1}</p>
      <p class="card-text">Author : ${data[i].author}</p>
      <p class="card-text">Download image : <a href=${data[i].download_url} target="_blank">Click here to download</a></p>
      
    </div>
    </div>`
    } catch (error) {
      console.log("error");
    }
  }
}
getdatails();