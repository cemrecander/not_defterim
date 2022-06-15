//Bir tablo oluşturuyorum.
var Notlar = sequelize.define('notlar', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    not_baslik: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
    },
    not_icerik: {
        type: Sequelize.TEXT('medium'),
        allowNull: false
    },
    not_tarih: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});