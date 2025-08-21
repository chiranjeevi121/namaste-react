// const heading=    React.createElement("h1",{id:"heading",xyz:"123"},"Hellow World From React");
const nesteddiv=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{}, "I am h1 tag")));
//sibilings
const sibnesteddiv=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{}, "I am h1 tag"),React.createElement("h2",{},"i am h2 tag")]));
//complex nested
const combnesteddiv=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{}, "I am h1 tag"),React.createElement("h2",{},"i am h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")])]);

console.log(nesteddiv)
  const root=       ReactDOM.createRoot(document.getElementById("root"));
//   console.log(root);
// //   root.render(nesteddiv);
// root.render(sibnesteddiv);
root.render(combnesteddiv)