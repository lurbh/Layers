const {retriveAllCustomers, addCustomer} = require("../data-access-layer/customer");

const serviceGetAllCustomers = async () => {
    const customers = retriveAllCustomers();
    return customers;
};

const serviceAddNewCustomer = async (first_name,last_name,rating,company_id) => {
    const response = addCustomer(first_name,last_name,rating,company_id);
    return response;
}

module.exports= {serviceGetAllCustomers, serviceAddNewCustomer}