let userinput: unknown;
let userName: string;

userinput = 5;
userinput = "calvin";

if (typeof userinput === "string") {
  userName = userinput;
  console.log(userName);
}

function generateError(msg: string, code: number): never {
  throw { messae: msg, code: code };
}

let errmsg = "an error occured!!!";
generateError(errmsg, 404);
