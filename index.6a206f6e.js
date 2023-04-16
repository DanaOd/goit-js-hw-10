console.log("hi");fetch("https://restcountries.com/v3.1/name/deutschland").then((o=>{if(!o.ok)throw new Error(o.status);return o.json()})).then((o=>{console.log(o)})).catch((o=>console.log(o)));
//# sourceMappingURL=index.6a206f6e.js.map
