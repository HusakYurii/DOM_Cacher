const trim = function (string = "") {
    /**
     * This function removes all whitespaces
     * @param {String} string - a string which is need to be trimmed.
     * @return {String} - trimmed string
     * */
    if (!string.charAt && !string.trim) return null;
    else return string.replace(/\s/g, "");

};

const takeWords = function (string) {
    /**
     * This function matches all characters and filters them from empty spaces
     * @param {String} string - a string which will be filtered
     * @return {Array} - filtered from non-characters array
     * */
    return string.match(/[a-zA-Z]*/g).filter(word => word !== "");
};

const toCamelCase = function (params) {
    /**
     * @param {Array|String} params - an array | list of words
     * @return {String} - a camel case string;
     *
     * This function is intended to transform an array | list of words to to a camel case string
     * for example:
     * [feedback, form] ===> feedbackForm
     * [main, input, name, email] ===> mainInputNameEmail
     * */

    if (!Array.isArray(params)) params = [...arguments];

    return params.reduce((acc, word) => {
        const char = word.charAt(0).toUpperCase();
        return acc = acc + word.replace(/^\w/, char);
    });
};

export {
    trim,
    takeWords,
    toCamelCase
}