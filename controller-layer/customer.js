const express = require("express");
const router =  express.Router();

const { serviceGetAllCustomers, serviceAddNewCustomer, serviceUpdateCustomer } = require("../service-layer/customer");

router.get("/", async (req,res) => {
    const customers = await serviceGetAllCustomers();
    res.status(200).json({"customers":(customers)});
})

router.post("/", async (req,res) => {
    const { first_name,last_name,rating,company_id } = req.query;
    const response = await serviceAddNewCustomer(first_name,last_name,rating,company_id);
    res.status(201).json({"Message": response});
})

router.put("/:customer_id", async (req,res) => {
    const { first_name,last_name,rating,company_id } = req.query;
    const { customer_id}  = req.params;
    const response = await serviceUpdateCustomer(customer_id,first_name,last_name,rating,company_id) ;
    res.status(200).json({"Message": response});
})


module.exports = router;