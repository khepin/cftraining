function CRMFactory() {
    this.type = 'company';
};

CRMFactory.prototype.isEmployee = function (name) {
    return true;
};

CRMFactory.prototype.getType = function() {
    return this.type;
};