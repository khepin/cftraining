function CRMFactory() {
    this.type = 'company';

    this.employees = [
		{'Shawn Kuan', 'Developer'}
    ]
};

CRMFactory.prototype.isEmployee = function (name) {
    for (var i = 0; i < this.employees.length; i++) {
        if (this.employees[i] === name) {
            return true;
        }
    }
    return false;
};

CRMFactory.prototype.getEmployees = function() {
    return this.employees;
};

CRMFactory.prototype.getType = function() {
    return this.type;
};