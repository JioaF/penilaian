var conn = require('./database');

module.exports = {
    create : function(query, data){
        conn.query(query, data, function(err, results, fields){
            if(err) res.send(err);
            console.log(results);
            if(!err){
                console.log("saved");
            } 
        });
    },
    delete : function(query, data){
        conn.query(query, [data], function(err, results, fields){
            if(err ) throw err;
            console.log(results);
            
        });
    }
}