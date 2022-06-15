var divNotlar = document.getElementById("divNotlar");

//Notları ana pencereye yazdırma işlemi
Notlar.findAll().then((notlar) => {
    notlar.forEach(not => {
        //console.log(not.dataValues.id);
        var html = '<div  class="row">' +
            '<div class="col-sm-9 mx-auto">' +
            '<div class="card text-center">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + not.dataValues.not_baslik + '</h5>' +
            '<p class="card-text">' + not.dataValues.not_icerik + '</p>' +
            '</div >' +
            '<div  class="card-footer text-muted">' +
            not.dataValues.not_tarih.toLocaleDateString('tr-TR', { dateStyle: 'full' }) +
            '<button id="' + not.dataValues.id + '" onclick="notSil(this.id)" class="btn btn-secondary col-2 py-0">Sil</button>' +
            '</div >' +
            '</div >' +
            '</div >' + '</div >' +
            '<br>';
        divNotlar.innerHTML += html;
    });
})



