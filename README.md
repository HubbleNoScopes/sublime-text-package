String literal re-define scan and authenticate with validation
# sublime-text-package
Sublime editor package is downloadable "sublime-text-package"

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

String Literal Validation Functions:

validateSingleQuotedString: Attempts to evaluate a provided string as a JavaScript expression within single quotes.
validateDoubleQuotedString: Checks if the value inside double quotes contains only alphanumeric characters.
Main Function convertStringLiterals:

Reads the content of a file specified by the filePath parameter.
Uses a regular expression to match string literals in the file.
Processes each match, checking if it's a single- or double-quoted literal and validates accordingly.
If validation fails, it converts the invalid literal and displays an error message using Sublime Text's sublime.error_message.
If no errors are found, it displays a success message using sublime.message_dialog.
Replaces the content in the active Sublime Text view.
Automated Run:

Calls convertStringLiterals with the file path 'YourMacro.js'
The validation aims to ensure that the string literals are correctly formatted JavaScript expressions. If there are errors, it provides error messages, and if successful, it displays a success message.
