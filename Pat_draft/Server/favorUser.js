    function favorUser(name, recipient, favorSelect) {
        this.name = name || "";
        this.recipient = recipient || "";
        this.favorSelect = favorSelect || "";
    }

    favorUser.prototype.setName = function (input) {
        this.name = input;
    }
    favorUser.prototype.setrecipient = function (input) {
        this.recipient = input;
    }
    favorUser.prototype.setfavor = function (input) {
        this.favorSelect = input;
    }
    favorUser.prototype.getName = function () {
        return this.name;
    }
    favorUser.prototype.getRecipient = function () {
        return this.recipient;
    }
    favorUser.prototype.getFavor = function () {
        return this.favorSelect;
    }

    favorUser.prototype.toString = function () {
        return this.name + "*" + this.recipient + "*" + this.favorSelect;
    }
    module.exports = favorUser;