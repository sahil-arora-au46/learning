// SomeType extends OtherType ? TrueType : FalseType;
interface IdLabel {
    id: number /* some fields */;
  }
  interface NameLabel {
    name: string /* other fields */;
  }
  // ---cut---
  type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;


type IsArray<T> = T extends any[] ? true : false;

function isArray<T>(arr: T): IsArray<T> {
  return Array.isArray(arr) as IsArray<T>;
}

const array = [1, 2, 3];
const notArray = 'string';

console.log(isArray(array)); // prints `true`
console.log(isArray(notArray)); // prints `false`