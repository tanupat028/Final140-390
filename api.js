function getProductById(req, res) {
    var pid = req.params.pid;    
    // #6 Get a product by ID
    Product.find({"_id":pid}, function(err, products) {
        if (err) res.status(500).json(err);
        res.json(products);
    });
    // ===============================
}

function updateProductById(req, res) {
    var payload = req.body
    var pid = req.params.pid;    
    // #7 Update a product by ID (findByIdAndUpdate)
    Product.findByIdAndUpdate(payload, pid, function(err){
        if (err) res.status(500).json(err);
        res.json({status: "Update a product"});   
        })
    // ===============================
}

function deleteProductById(req, res) {
    var pid = req.params.pid;    
    // #8 Delete a product by ID (findByIdAndDelete)
    Product.findByIdAndRemove(pid, function(err){
        if (err) res.status(500).json(err);
        res.json({status: "Deleate a product"});   
        })
    // ===============================
}

function addProduct(req, res) {
    var payload = req.body
    // #9 Add a new product 
    var product = new Product(payload);
    product.save(function (err){
        if (err) res.status(500).json(err);
        res.json({status: "Added a product"});
    });   
    // ===============================
}