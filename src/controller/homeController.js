
import connection from '../configs/connectDB'

let getHomePage = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            // Truyền dữ liệu ra index.ejs(dữ liệu dạng json tham số thứ 2 của res.render)
            return res.render('index.ejs', ({ dataUser: JSON.stringify(results) }));
        }
    );
}

module.exports = {
    getHomePage
}