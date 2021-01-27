var input = require('./crud');

module.exports = {
    dmGet : function(req, res){
        input.read(function(undefined, dataGuru, dataMapel){
            res.render('dataMapel_page',{data : dataMapel});
    })
    }
}