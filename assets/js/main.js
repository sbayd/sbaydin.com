function jsonToArray(JsonData) {
    var arr = [];
    arr = $.map(JsonData, function (value, index) {
        return [value];
    });
    return arr;
}