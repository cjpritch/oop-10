const Employee = require("../lib/Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber){

        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getRole(){
        return this.role;
    }
};

const createManager = (data) => {
    const {name, id, email, officeNumber} = data;   
    const manager = new Manager(name, id, email, officeNumber)   
};

module.exports = { Manager, createManager };