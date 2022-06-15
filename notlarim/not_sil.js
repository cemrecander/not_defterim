//Not silme işlemi
function notSil(id) {
    if (confirm("Bu notu silmek istediğinize emin misiniz?")) {
        Notlar.destroy({
            where: {
                id: id
            }
        })
    }
    ipcRenderer.send("SilerkenSayfaYenile")
}
