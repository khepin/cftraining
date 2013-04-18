function CRMFactory() {
    this.type = 'company';
};

CRMFactory.prototype.isEmployee = function (name) {
    return Math.random()*10 > 5;
};

CRMFactory.prototype.getType = function() {
    return this.type;
};