function CRMFactory() {
    this.type = 'company';

    this.employees = [
        'sebastien.armand'
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

CRMFactory.prototype.getType = function() {
    return this.type;
};