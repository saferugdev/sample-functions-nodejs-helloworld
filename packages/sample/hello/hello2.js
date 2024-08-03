function main(args) {
  let name = args.name || "stranger";
  let greeting = "Hello2 " + name + "!";
  console.log(greeting);
  return { body: greeting };
}

exports.main = main;
