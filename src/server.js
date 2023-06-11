const app = require('./app');
const sequelize = require('./utils/connection');
require('./models/index')   //! Importacion de relaciones entre Tablas del DB 

const PORT = process.env.PORT || 8080;

const main = async () => {
    try {
        // sequelize.sync({alter: true});
        sequelize.sync();
        console.log("DB connected");
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.log(error)
    }
}

main();
