var mysql = require('mysql');


    var conn = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password : '',
			port : 3306, 
			multipleStatements:true,
			database:'coding_hours'
	});

    conn.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
 });

module.exports.list = function (req,res) {
        conn.query('SELECT id,name,email FROM customers_list',function(err,rows)
         {
            if(err)
                console.log("Error Selecting : %s ",err );
                res.render('customers',{page_title:"Nodehour",data:rows});
         });
}
module.exports.add = function(req, res){
  res.render('add_customer',{page_title:"Add Customers-Nodehour"});
};


module.exports.save = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
        var data = {   
            name    : input.name,
            email   : input.email
    };
        
    var query = conn.query("INSERT INTO customers_list set ? ",data, function(err, rows)
        {
          if (err)
              console.log("Error inserting : %s ",err );
              res.render('add_customer',{page_title:"Add Customers - Node.js",data:rows,
              success_message:"User "+input.name+" has been inserted successfully"});
    });
};


module.exports.edit = function(req, res){
      conn.query('SELECT * FROM customers_list WHERE id = '+req.query.id,function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
                res.render('edit_customer',{page_title:"Edit Customers - Node.js",data:rows});              
         });
                 
   
};
module.exports.save_edit = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var userid      = input.userid;
        var data = {
            name    : input.name,
            email   : input.email        
        
        };
   conn.query("UPDATE customers_list set ? WHERE id = ? ",[data,userid], function(err, rows)
    {
        //console.log(query.sql);
        if (err)
        console.log("Error Updating : %s ",err );
        res.redirect('/customers/list');
    });
};

module.exports.delete_customer = function(req,res){ 

     var id = req.query.id;
     conn.query("DELETE FROM customers_list  WHERE id = ? ",[id], function(err, rows)
        {   
        if(err)
            console.log("Error deleting : %s ",err );
            res.redirect('/customers/list');
        });
};