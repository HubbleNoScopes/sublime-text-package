//redefine string literals with string parsing and string validation methods. 
//single quote string literals accept the vaues of all JS
//double quote string literals only accept the values of alphanumerics.

// Function to validate single-quoted string literals
function validateSingleQuotedString(value) {
  try {
    // Attempt to evaluate the provided string as a JavaScript expression
    eval(`let testValue = ${value}`);
    return true;
  } catch (error) {
    return false;
  }
}

// Function to validate double-quoted string literals
function validateDoubleQuotedString(value) {
  // Check if the value inside double quotes contains only alphanumeric characters
  return /^"[\w\s]*"$/.test(value);
}

// Examples of usage
let singleQuotedExample1 = "'Hello, World!'";
let singleQuotedExample2 = "'function sayHello() { console.log(\"Hello!\"); }'";

let doubleQuotedExample1 = '"Alpha123"';
let doubleQuotedExample2 = '"Special@Chars"';

console.log(validateSingleQuotedString(singleQuotedExample1)); // Outputs: true
console.log(validateSingleQuotedString(singleQuotedExample2)); // Outputs: true

console.log(validateDoubleQuotedString(doubleQuotedExample1)); // Outputs: true
console.log(validateDoubleQuotedString(doubleQuotedExample2)); // Outputs: false



const fs = require('fs');

function convertStringLiterals(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf-8');

  // Regular expression to match string literals
  const stringLiteralRegex = /(['"])(.*?)\1/g;

  // Process each match
  fileContent = fileContent.replace(stringLiteralRegex, (match, quote, content) => {
    // Check if it's a single-quoted literal
    if (quote === "'") {
      if (!validateSingleQuotedString(content)) {
        // Convert to double-quoted literal
        return `"${content}"`;
      }
    } else {
      // Check if it's a double-quoted literal
      if (!validateDoubleQuotedString(match)) {
        // Convert to single-quoted literal
        return `'${content}'`;
      }
    }
    // No conversion needed
    return match;
  });

  // Replace the content in the active Sublime Text view
  const activeView = sublime.active_window().active_view();
  activeView.run_command("insert", {"characters": fileContent});
}

// Example usage
convertStringLiterals('your_file.js');
