const questions = [
  {
    "10": "console.log(4 - \"5\" + 0xf - \"1e1\");\n"
  },
  {
    "11": "function F() {}\n\nconsole.log(F.prototyope);\n"
  },
  {
    "12": "function F() {}\n\n// true or false?\nconsole.log(F instanceof Function);\n"
  },
  {
    "13": "var a = [1, 2, 3];\nvar b = [1, 2, 3];\n\nconsole.log(a == b);\n"
  },
  {
    "4": "var y = 1;\n\nif (function f(){}) {\n  y += typeof f;\n}\n\nconsole.log(y);\n"
  },
  {
    "6": "console.log( +\"something\" );\n"
  },
  {
    "7": "var a = new Array(1,2),\n    b = new Array(3);\n\nconsole.log(a[0] + b[0]);\n"
  },
  {
    "8": "var a = (1,5 - 1) * 2;\n\nconsole.log(a);\n"
  },
  {
    "9": "for (var key in {1:1, 0:0}) {\n  console.log(key);\n}\n"
  }
];
export default questions;
