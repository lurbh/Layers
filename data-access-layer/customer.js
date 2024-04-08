
const {createConnection} = require("mysql2/promise");

// app.get("/customers" , async (req,res) => {
//     let [customers] = await connection.execute("SELECT * FROM Customers INNER JOIN Companies ON Customers.company_id = Companies.company_id");
//     console.log(customers);
// })

let connection;

async function main()
{
    connection = await createConnection({
        'host': process.env.DB_HOST,
        'user': process.env.DB_USER,
        'database': process.env.DB_NAME,
        'password': process.env.DB_PASSWORD
    })
}

const retriveAllCustomers= async () => {
    try {
        await main();
        let [customers] = await connection.execute("SELECT * FROM Customers INNER JOIN Companies ON Customers.company_id = Companies.company_id");
        return customers;
    } catch (error) {
        console.log("Error getting all Customers", error)
    }
}

const addCustomer = async (first_name,last_name,rating,company_id) => {
    try {
        await main();
        await connection.execute(`INSERT INTO Customers (first_name, last_name, rating, company_id) VALUES
        (?, ?, ?, ?)`, [first_name,last_name,rating,company_id]);
        return "Insert Succesful";
    } catch (error) {
        console.log("Error Adding Customers", error)
    }
}

module.exports= {retriveAllCustomers, addCustomer};