# DOM Cacher
## About:
Once working on a small projects you might want to keep all references to dom elements in some cache, so you have access ti them.
You can use this DOM Cacher, just create an instance of it and add elements to cache using its API.
P.S the html file looks like [this](https://husakyurii.github.io/DOM_Cacher/.)

```js
const cache = new DOMCacher();

// To add
// An array of valid css selectors can be used
cache.addElement(['input[type="text"]', 'textarea[name="message"]']);

// Or just a list of valid css selectors
cache.addElement('#feedback-form', 'main');

// To remove
cache.deleteElement('feedbackForm');

// To check if a cache has an element
cache.hasElement('feedbackForm');

// To take an element
cache.getElement('feedbackForm');

// To clean cache from previous elements
cache.clearCache();

// To cache elements from Object with custom names for an elements
cache.addElement({
    TEXT_INPUTS: 'input[type="text"]',
    __MAIN: 'main',
    $FEEDbackForm$: '#feedback-form'
});

....

```