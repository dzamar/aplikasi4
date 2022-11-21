var selectedRow = null;

//Show alert
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//Hapus Semua data
function clearFields(){
    document.querySelector("#kode").value="";
    document.querySelector("#gedung").value="";
    document.querySelector("#kapasitas").value="";
    document.querySelector("#fungsi").value="";
}

//Add data
document.querySelector("#form-ruang").addEventListener("submit", (e) =>{
    e.preventDefault();

    //Get form Values
    const kode = document.querySelector("#kode").value;
    const gedung = document.querySelector("#gedung").value;
    const kapasitas = document.querySelector("#kapasitas").value;
    const fungsi = document.querySelector("#fungsi").value;

    //validasi
    if(kode == "" || gedung == "" || kapasitas == "" || fungsi == ""){
        showAlert("Harus diisi semua!", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#ruang-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${kode}</td>
                <td>${gedung}</td>
                <td>${kapasitas}</td>
                <td>${fungsi}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Ruangan ditambahkan", "success");
        }
    }

});

//Delete Data
document.querySelector("#ruang-list").addEventListener("click",(e) => {
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Data ruangan terhapus", "danger");
    }
});