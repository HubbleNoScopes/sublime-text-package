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

Contact
https://github.com/HubbleNoScopes
https://github.com/HubbleNoScopes/sublime-text-package

Validation Functions:

validateSingleQuotedString(value): Attempts to evaluate the provided string as a JavaScript expression within single quotes. Returns true if successful, false if there is an error.
validateDoubleQuotedString(value): Checks if the value inside double quotes contains only alphanumeric characters. Returns true if the value is valid, false otherwise.
Conversion Function (convertStringLiterals):

Reads the content of a file specified by the filePath.
Defines a regular expression (stringLiteralRegex) to match string literals (both single-quoted and double-quoted).
Processes each match found by the regular expression:
Checks if it's a single-quoted literal and validates it using validateSingleQuotedString.
If validation fails, displays an error message and leaves the string unchanged.
Checks if it's a double-quoted literal and validates it using validateDoubleQuotedString.
If validation fails, displays an error message and leaves the string unchanged.
If no validation errors occur, leaves the string unchanged.
Display Error Messages:

If there are validation errors during the processing of string literals, it sets the hasErrors flag to true.
Displays error messages using sublime.error_message for each invalid string literal.
Display Success Message:

If there are no validation errors (hasErrors is false), it displays a success message using sublime.message_dialog.
Insert Changes into the Active View:

If there are no validation errors, it replaces the content in the active Sublime Text view with the modified content.
Automatically Run the Conversion:

The entire process is automatically triggered by calling convertStringLiterals('YourMacro.js') at the end.
So, in summary, the code reads a JavaScript file, validates and potentially modifies its string literals, displays appropriate messages, and updates the active Sublime Text view if there are no validation errors.
