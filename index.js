import DOMCacher from "./libs/cache/DOMCacher.js";

const cache = new DOMCacher();

//just for testing
cache.addElement( ['input[type="text"]', 'textarea[name="message"]']);
console.dir(Object.assign({},cache.cache));

cache.addElement('#feedback-form', 'main');
console.dir(Object.assign({},cache.cache));

console.log(`Is 'feedbackForm' in cache: ${cache.hasElement('feedbackForm')}`);
console.log(`Is 'trololo' in cache: ${cache.hasElement('trololo')}`);

console.dir(cache.deleteElement('feedbackForm'));
console.log(`Is 'feedbackForm' in cache after it has been removed: ${cache.hasElement('feedbackForm')}`);
