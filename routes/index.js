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

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {

  //var search = '%' + req.body.goods + '%'+ ' ORDER BY Popularity DESC';
  var queryString = 'SELECT * from PRODUCT WHERE Name like \"%' + req.body.goods + '%\" ORDER BY Popularity DESC';
  var queryString1 = 'SELECT * from PRODUCT WHERE Detail_Category like \"%' + req.body.goods + '%\" ORDER BY Popularity DESC';
  var queryString2 = 'SELECT * from PRODUCT WHERE Category like \"%' + req.body.goods + '%\" ORDER BY Popularity DESC';

  //console.log('상품명: '+req.body.goods);
  //console.log(search);
  // console.log(queryString);
  connection.query(queryString, function (err, results) {
    if (err) {
      console.log('양승영일해라query name');
    } else {
      if (results.length > 0) {
        res.send({ results: results });
        console.log('Name: ' + req.body.goods);
      } else {
        connection.query(queryString1, function (err, results) {
          if (err) {
            console.log('양승영일해라query detail');
          } else {
            if (results.length > 0) {
              res.send({ results: results });
              console.log('detail: ' + req.body.goods);
            } else {
              connection.query(queryString2, function (err, results) {
                if (err) {
                  console.log('양승영일해라query Category');
                } else {
                  if (results.length > 0) {
                    res.send({ results: results });
                    console.log('Category: ' + req.body.goods);
                  } else {
                    res.send({ results: results });
                    console.log('없음: ' + req.body.goods);
                  }
                }
              })
            }
          }
        })
      }
    }
  })
});

router.post('/recomandation', function (req, res, next) {

  //var queryString = 'select RE_Name1 from RECOMMANDATION where RE_Name2 =? UNION select RE_Name2 from RECOMMANDATION where RE_Name1 =? order by Count';
  var queryString ='SELECT RE_Name1 ,Count from RECOMMANDATION WHERE RE_Name2= \"'+ req.body.goods +'\" union select RE_Name2,Count from RECOMMANDATION where RE_Name1= \"'+req.body.goods+'\" order by Count desc';
  
  //var queryString = 'SELECT * from PRODUCT WHERE Name like \"%' + req.body.goods + '%\" ORDER BY Popularity DESC';
  
  //console.log("크흠 : "+queryString);

  connection.query(queryString, [req.body.goods, req.body.goods], function (err, results) {
    if (err) {
      console.log("에러다다아아ㅏㅏㅏ");
    } else if (results.length > 0) {
     // console.log(results);
      res.send({ results: results });
     // console.log('Name: ' + req.body.goods);
    }
  })
});
module.exports = router;
