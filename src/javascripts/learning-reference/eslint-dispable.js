//------------- examples of dispablin & enabling eslint 1) whole page 2) from ... to ... 3) for a single line


// add this comment at the top of the page to modify the given rule on this page  ---> /* eslint no-console: 0 */
/*eslint-disable no-alert, no-console */
console.log('Hello there!'); 
//alert('foo');  // eslint-disable-line no-alert
/*eslint-enable no-alert */