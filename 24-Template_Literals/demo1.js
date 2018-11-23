/**Example 1 */

const line1 = 'Hello World ';
console.log(`constent of the line 1 is : ${line1}`);

/**Example 2 */

let content = `line1
line2
line3`;

console.log(content);

/**Example 3 */

var customer = {
    name: "foo"
};
var card = {
    amount: 7,
    product: "Bar",
    unitprice: 42
};
var message = `Hello ${custome.name} want to buy ${card.amount} ${card.product} for a total of ${card.amount*card.unitprice} bucks?`;
console.log(message);

// output
// content of line1 is : hello world
// line1
// line2
// line3

// Hello foo,
// wan to buy 7 bar for a total of 2954 bucks?

// demo2.js

let id = 'p01';
const name = 'Name 1';
var price = 24.5;
var productInfo = `<table>
<tr>
<th>Id</th>
<th>${id}</th>
</tr>

<tr>
<th>Name</th>
<th>${name}</th>
</tr>

<tr>
<th>Price</th>
<th>${price}</th>
</tr>
</table>`;
console.log(productInfo);

// output
// will run code demo from <table></table>

// demo3.js

var article = {
    title: 'Hello template literals',
    teaser: 'String interploation is awesome, here are some features',
    body: 'lots of lots of simpe html',
    tags: ['es6', 'template-literals', 'es6-in-depth']

}

var html = `<article>

<header>
<h1>
${article.title}
</h1>
</header>

<section>
<div>${article.teaser}</div>
<div>${article.body}</div>
</section>

<footer>
<ul>

${article.tags.map(tag=>`<li>${tags}</li>`).join('\n    ')}
</ul>
</footer>


</article>`

console.log(html);