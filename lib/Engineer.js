const Employee = require("../lib/Employee");

class Engineer extends Employee {

    constructor(name, id, email, github){
        
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.role;
    }
};

const createEngineer = (data) => {
    const {name, id, email, github} = data;   
    const engineer = new Engineer(name, id, email, github)   
};

module.exports = { Engineer, createEngineer };