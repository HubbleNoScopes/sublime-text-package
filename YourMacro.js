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
        // Display error message without modifying the content
        hasErrors = true;
        sublime.error_message(`Invalid single-quoted string literal: ${content}`);
        return match;
      }
    } else {
      // Check if it's a double-quoted literal
      if (!validateDoubleQuotedString(content)) {
        // Display error message without modifying the content
        hasErrors = true;
        sublime.error_message(`Invalid double-quoted string literal: ${content}`);
        return match;
      }
    }
    // No conversion needed
    return match;
  });

  if (!hasErrors) {
    sublime.message_dialog('String literals are valid.');
  }
}

// Automatically run the conversion on the provided file
convertStringLiterals('YourMacro.js');
