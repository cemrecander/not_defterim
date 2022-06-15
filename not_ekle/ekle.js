const { ipcRenderer } = require("electron");


//Not ekleme işlemi
document.getElementById("ekleForm").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        //Formdan değerleri çekiyorum.
        let not_baslik = document.getElementById("not_baslik").value;
        let not_icerik = document.getElementById("not_icerik").value;

        Notlar.sync();

        //Yeni not oluşturuyorum.
        Notlar.create({
            not_baslik: not_baslik,
            not_icerik: not_icerik
        }).then(Notlar.findAll().then((notlar) => {
            notlar.forEach(not => {
                console.log("=======================================");
                console.log("id: " + not.id);
                console.log("baslik: " + not.not_baslik);
                console.log("icerik: " + not.not_icerik);
                console.log("tarih: " + not.not_tarih);
                console.log("========================================");
            });
            ipcRenderer.send("EklerkenSayfaYenile")
        }).catch((err) => {
            console.log("Not ekleme sırasında bir hata oluştu.")
        }))
    }
);
