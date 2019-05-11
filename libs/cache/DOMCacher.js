import {isObject, toCamelCase, takeWords} from "../utils/utils.js";

class DOMCacher {
    constructor() {
        this._cache = null;
    }

    get isCacheEmpty() {
        /**
         * @return {Boolean}
         * */
        return (!this.cache || Object.keys(this.cache).length === 0);
    }

    get cache() {
        /**
         * @return {Object}
         * */
        return this._cache;
    }

    set cache(cached) {
        this._cache = Object.assign(this._cache, cached || {});
    }

    clearCache() {
        this._cache = {};
    }

    hasElement(name) {
        /**
         * @param {String} name - a name of a cached element
         * @return {Boolean}
         * */
        return (this.cache && (name in this.cache));
    }

    getElement(name) {
        /**
         * @param {String} name - a name of a cached element
         * @return {HTMLElement|null} - returns a cached element or null if it was not found
         * */
        return this.cache[name] || null;
    }

    addElement(selector) {
        /** Add elements to the cache
         * @param {String|Array|Object} selector - a valid css selector or list of valid css selectors
         * */
        if (isObject(selector)) {
            this.cache = this._cacheFromObject(selector);
            return;
        }
        if (!Array.isArray(selector)) {
            selector = [...arguments];
        }
        this.cache = this._cacheFromArray(selector);
    }

    deleteElement(name) {
        /**
         * @param {String} name - a name of a cached element
         * @return {Object} - an element which has been deleted
         * */
        const matched = this.getElement(name);

        if (matched) delete this.cache[name];
        return matched;
    }


    _cacheFromObject(selectors) {
        /**
         * @private
         * @param {Object} data - a list "key: value" pairs
         * where "key" will be set as a "name" of cashed element
         * and "value" is a valid css selectors which will be used for searching of an element.
         * */
        if (this.isCacheEmpty) this.clearCache();

        const cacheed = {};

        for (let name in selectors) {
            if (!selectors.hasOwnProperty(name)) continue;

            const elements = document.querySelectorAll(selectors[name]);

            if (elements.length > 1) cacheed[name] = [...elements];
            else cacheed[name] = elements[0];
        }

        return cacheed
    }

    _cacheFromArray(selectors) {
        /**
         * In case if there is only an array of css selectors a "name" will be equal to css selector
         * transformed to camel case string
         * @private
         * @param {Array} selectors - array of css selectors
         * @return {Object} - an object with cached data
         * */
        if (this.isCacheEmpty) this.clearCache();

        return selectors.reduce((acc, selector) => {
            const elements = document.querySelectorAll(selector);
            const name = toCamelCase(takeWords(selector));

            if (elements.length > 1) return Object.assign(acc, {[name]: [...elements]});
            else return Object.assign(acc, {[name]: elements[0]});
        }, {});
    }
}

export default DOMCacher;
