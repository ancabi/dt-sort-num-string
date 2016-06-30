/**
 * 
 *  @name Numbers with String
 *  @summary Sort data which is a mix of String and numeric data.
 *  @author Andres Billordo
 *
 */

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "num-string-pre": function (a) {
        var x = String(a).replace(/[a-zA-Z. ]/gi, "");
        x = x.replace(",", ".");
        return parseFloat(x);
    },

    "num-string-asc": function (a, b) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "num-string-desc": function (a, b) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});