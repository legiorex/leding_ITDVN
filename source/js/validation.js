(function () {
    var me = {};
    
    me.isEmail = function isEmail(email) {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
        return re.test(email);
    };

    me.isNumber = function isEmail(number) {
        var re = /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/;
        return re.test(number);
    };

    me.isNotEmpty = function(str) {

        return Boolean(str);
    };

    ITVDN.validation = me;
}());