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

const fs = require('fs');
const sublime = require('sublime');

function convertStringLiterals(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf-8');
  let hasErrors = false;

  // Regular expression to match string literals
  const stringLiteralRegex = /(['"])(.*?)\1/g;

  // Process each match
  fileContent = fileContent.replace(stringLiteralRegex, (match, quote, content) => {
    // Check if it's a single-quoted literal
    if (quote === "'") {
      if (!validateSingleQuotedString(content)) {
        // Display an error message without making changes
        hasErrors = true;
        sublime.error_message(`Invalid single-quoted string literal: ${content}`);
        return match;
      }
    } else {
      // Check if it's a double-quoted literal
      if (!validateDoubleQuotedString(content)) {
        // Display an error message without making changes
        hasErrors = true;
        sublime.error_message(`Invalid double-quoted string literal: ${content}`);
        return match;
      }
    }
    // No conversion needed
    return match;
  });

  if (!hasErrors) {
    sublime.message_dialog('String literals converted successfully!');
    // Replace the content in the active Sublime Text view
    const activeView = sublime.active_window().active_view();
    activeView.run_command("insert", {"characters": fileContent});
  }
}

// Automatically run the conversion on the provided file
convertStringLiterals('YourMacro.js');
