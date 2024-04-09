const {retriveAllCustomers, addCustomer, updateCustomer} = require("../data-access-layer/customer");

const serviceGetAllCustomers = async () => {
    const customers = retriveAllCustomers();
    return customers;
};

const serviceAddNewCustomer = async (first_name,last_name,rating,company_id) => {
    const response = addCustomer(first_name,last_name,rating,company_id);
    return response;
}

const serviceUpdateCustomer = async (customer_id,first_name,last_name,rating,company_id) => {
    const response = updateCustomer(customer_id,first_name,last_name,rating,company_id);
    return response;
}

module.exports= {serviceGetAllCustomers, serviceAddNewCustomer, serviceUpdateCustomer}