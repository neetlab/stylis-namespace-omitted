import assert from "assert";
import { compile, serialize, stringify } from "stylis";

const source = `
@namespace svg url('http://www.w3.org/2000/svg');

a {
  color: orangered;
  text-decoration: underline dashed;
  font-weight: bold;
}

svg|a {
  fill: blueviolet;
  text-decoration: underline solid;
  text-transform: uppercase;
}
`;

const actual = serialize(compile(source), stringify);

// this passes
assert(
  actual.includes(
    "svg|a{fill:blueviolet;text-decoration:underline solid;text-transform:uppercase;}"
  )
);

// but this does not
assert(actual.includes("@namespace svg url('http://www.w3.org/2000/svg');"));
