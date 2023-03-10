
function compute<T>(a:T,b:T):T{
    if(typeof a ==="string"&& typeof b === "string") {
        return a+b as T;
    }
    if(typeof a ==="number"&& typeof b === "number") {
        return a+b as T;
    }
    return a
  }

  let num = compute<number>(3,5)