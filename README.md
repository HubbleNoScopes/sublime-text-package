String literal re-define scan and authenticate with validation
# sublime-text-package
Sublime editor package is downloadable "sublime-text-package"

initial purpose of package was to add layer of security to javascript. Currently string literals are interchangeable. Re-defining them will cause an error if given incorrect characters.

Project-in-development. No auto-update & must-reinstall package.

I cannot figure out why the keybinding is not running the macro.
i don't see any errors in the sublime console. 
I added alerts for debugging however i only see the "load success" alert.
Manual keybind to keymap is required. { "keys": ["ctrl+shift+-"], "command": "run_javascript_macro" } is not working..
no current keybind confliction..


Read, Write, Edit - Please
https://github.com/users/HubbleNoScopes/projects/4
https://github.com/HubbleNoScopes/sublime-text-package

Contact
https://github.com/HubbleNoScopes

Validation Functions:

validateSingleQuotedString(value): Attempts to evaluate the provided string as a JavaScript expression within single quotes. Returns true for valid expressions and false for invalid ones.
validateDoubleQuotedString(value): Checks if the value inside double quotes contains only alphanumeric characters. Returns true for valid strings and false for invalid ones.
File Reading and Processing:

Read the content of the specified JavaScript file (YourMacro.js) using the fs (file system) module.
Regular Expression Matching:

Use a regular expression (stringLiteralRegex) to match all string literals (both single-quoted and double-quoted) in the file content.
Processing Each Match:

For each matched string literal:
If it's single-quoted, check its validity using validateSingleQuotedString.
If it's double-quoted, check its validity using validateDoubleQuotedString.
If a string literal is invalid, set hasErrors to true and display an error message using sublime.error_message.
If the string literal is valid, no conversion is needed.
Displaying Results:

If hasErrors is true, display an error message indicating the type of invalid string literal.
If there are no errors (hasErrors is false), display a success message using sublime.message_dialog indicating that string literals were validated successfully.
Inserting Content into the Active Sublime Text View:

Replace the content in the active Sublime Text view with the modified or original content, depending on whether there were errors.
Security Measure - Retaining Original Content:

To prevent automatic correction of invalid code and potential security risks, the script does not automatically change the content of the JavaScript file. Instead, it alerts users about invalid string literals and retains the original content. This ensures that any malicious attempt to inject code is not automatically corrected, and errors are highlighted for the user's attention.
Automatic Execution:

The script is set to automatically run on the provided file (YourMacro.js), but it can be adapted to work on other files as needed.
