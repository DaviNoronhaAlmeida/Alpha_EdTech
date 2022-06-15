const object = {};
object['Um atributo com espaços'] = 1;

console.log("Com colchetes:")
console.log(object['Um atributo com espaços']);

console.log("Sem colchetes:");
Object.defineProperty(object, "Um atributo com espaços", { value: 2 });
console.log(object);