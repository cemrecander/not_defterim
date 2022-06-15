const Sequelize = require("sequelize");

//Veritabanı bağlantısı kuruyorum.
var db_baglan = {
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "notlarim"
}

var sequelize = new Sequelize("mysql://" + db_baglan.user + ":" + db_baglan.password +
    "@" + db_baglan.host + ":" + db_baglan.port + "/" + db_baglan.database + "");

//Hata yakalama
sequelize.authenticate().then(() => {
    console.log("=======================================");
    console.log("Veritabani : " + db_baglan.database + " baglandi");
    console.log("=======================================");
}).catch((err) => {
    console.log("========================================");
    console.log("Veritabani baglantisi hatasi : ", err);
    console.log("========================================");
})