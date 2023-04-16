!function(){console.log("hi");fetch("https://restcountries.com/v3.1/name/deutschland").then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){console.log(n)})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.d4af605b.js.map
