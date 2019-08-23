var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "example",
    user: "example",
    password: "example",
    database: "example",
    port: "example"
})

router.get('/', function (req, res, next) {
    res.render('admin');
});

router.get("/product/:cur", function (req, res) {
    var page_size = 10;
    var page_list_size = 10;
    var no = "";
    var totalPageCount = 0;

    var queryString = 'select * from PRODUCT'
    connection.query(queryString, function (error2, data) {
        if (error2) {
            console.log(error2);
            res.redirect('/admin');
        } else {
            var curPage = req.params.cur;
            totalPageCount = data.length;

            if (totalPageCount < 0) {
                totalPageCount = 0
            }
            console.log(data);

            var totalPage = Math.ceil(totalPageCount / page_size);// 전체 페이지수
            var totalSet = Math.ceil(totalPage / page_list_size); //전체 세트수
            var curSet = Math.ceil(curPage / page_list_size) // 현재 셋트 번호
            var startPage = ((curSet - 1) * 10) + 1 //현재 세트내 출력될 시작 페이지
            var endPage = (startPage + page_list_size) - 1; //현재 세트내 출력될 마지막 페이지

            if (curPage < 0) {
                no = 0
            } else {
                no = (curPage - 1) * 10
            }

            var result2 = {
                "curPage": curPage,
                "page_list_size": page_list_size,
                "page_size": page_size,
                "totalPage": totalPage,
                "totalSet": totalSet,
                "curSet": curSet,
                "startPage": startPage,
                "endPage": endPage
            };

            var queryString = 'select * from PRODUCT order by Name desc limit ?,?';
            connection.query(queryString, [no, page_size], function (error, result) {
                if (error) {
                    console.log(error);
                    return
                }
                res.render('product_list', {
                    data: result,
                    paging: result2
                });
            });

        }

    })
})

router.post("/product/:cur", function (req, res) {
    var page_size = 10;
    var page_list_size = 10;
    var no = "";
    var totalPageCount = 0;

    var queryString = 'select * from PRODUCT where Name=?'
    connection.query(queryString, [req.body.search_product_name], function (error2, data) {
        if (error2) {
            console.log(error2);
            res.redirect('/admin');
        } else {
            var curPage = req.params.cur;
            totalPageCount = data.length;

            if (totalPageCount < 0) {
                totalPageCount = 0
            }

            var totalPage = Math.ceil(totalPageCount / page_size);// 전체 페이지수
            var totalSet = Math.ceil(totalPage / page_list_size); //전체 세트수
            var curSet = Math.ceil(curPage / page_list_size) // 현재 셋트 번호
            var startPage = ((curSet - 1) * 10) + 1 //현재 세트내 출력될 시작 페이지
            var endPage = (startPage + page_list_size) - 1; //현재 세트내 출력될 마지막 페이지

            if (curPage < 0) {
                no = 0
            } else {
                no = (curPage - 1) * 10
            }

            var result2 = {
                "curPage": curPage,
                "page_list_size": page_list_size,
                "page_size": page_size,
                "totalPage": totalPage,
                "totalSet": totalSet,
                "curSet": curSet,
                "startPage": startPage,
                "endPage": endPage
            };

            var queryString = 'select * from PRODUCT where Name=? order by Name desc limit ?,?';
            connection.query(queryString, [req.body.search_product_name, no, page_size], function (error, result) {
                if (error) {
                    console.log(error);
                    return
                }
                res.render('product_list', {
                    data: result,
                    paging: result2
                });
            });
        }

    })
})

router.get('/product_registration', function (req, res) {
    res.status(200);
    res.render('product_registration');
})

router.post('/product_registration', function (req, res) {
    res.status(200);
    var queryString = 'INSERT INTO PRODUCT (Name, Location, Price, Category, Detail_Category, INFO_Event, Company, Popularity) VALUES(?, ?, ?, ?, ?, ?, ?, ?)';
    var params = [req.body.Name, req.body.Location, req.body.Price, req.body.Category, req.body.Detail_Category, req.body.INFO_Event, req.body.Company, 0];
    connection.query(queryString, params, function (err, rows) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect('/admin/product/1');
})

router.get("/product_delete/:Name", function (req, res) {
    res.status(200);
    connection.query('delete from PRODUCT where Name = ?', [req.params.Name], function (error2) {
        if (error2) {
            console.log(error2);
            res.redirect('/admin');
        } else {
            res.redirect('/admin/product/1');
        }
    });
})

router.get('/search', function (req, res, next) {
    res.render('search_history');
});

module.exports = router;
