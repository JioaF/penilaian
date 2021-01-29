
var input = require('./crud');

function rata_rata(uh, uts, uas){



}

function predikat(){
    
    
    return
}


module.exports = {
    dnGet : function(req, res){
        res.render('./dataNilai_page/data-nilai');
    },
    dnAddGet : function(req, res){
        res.render('./dataNilai_page/dn_Form', {actionurl:'/data-nilai/add'});
        console.log(req.url);
    }
};