var request = require('request')
var url = 'http://www.pressmantoy.com/product/oregontrail/' 
var outOfStockMarkup = '<a href="http://www.pressmantoy.com/wp-content/uploads/sites/14/2016/07/OT-Notice.png">'

var timeout = 10000
var options = {
  url: url,
  timeout: timeout
}

request(options, function (err, res, body) {
  if (err) {
    console.log('Timeout: ' + err)
    return
  }

  var isInStock = res.body.indexOf(outOfStockMarkup)   

  console.log('Is the Oregon Trail card game back in stock?')
  console.log('The Magic8Node says: ' + (isInStock > -1 ? 'No' : 'Yes'))

})