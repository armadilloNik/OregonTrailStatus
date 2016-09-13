var request = require('request')
var url = 'http://www.pressmantoy.com/product/oregontrail/' 
var outOfStockMarkup = '<a href="http://www.pressmantoy.com/wp-content/uploads/sites/14/2016/07/OT-Notice.png"><img class="alignnone size-medium wp-image-1115" src="http://www.pressmantoy.com/wp-content/uploads/sites/14/2016/07/OT-Notice-250x349.png" alt="OT Notice"></a>'

var timeout = 10000
var options = {
  url: url,
  timeout: timeout
}

request(options, function (err, res, body) {
  if (err) {
    console.log(err)
    return
  }


  var isInStock = res.body.indexOf(outOfStockMarkup) > -1  

  console.log('Is the Oregon Trail card game back in stock?')
  console.log('Magic8 node says: ' + isInStock ? '[Yes]' : '[No]')

})