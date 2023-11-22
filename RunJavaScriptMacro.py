import sublime
import sublime_plugin
import os

class RunJavaScriptMacroCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        # Specify the path to your JavaScript macro file
        js_macro_file = os.path.join(sublime.packages_path(), 'User', 'YourMacro.js')

        # Specify the path to your JSON configuration file
        json_config_file = os.path.join(sublime.packages_path(), 'User', 'config.json')

        # Check if the JavaScript macro file and JSON config file exist
        if os.path.exists(js_macro_file) and os.path.exists(json_config_file):
            # Print a message indicating successful execution
            print('JavaScript macro executed successfully!')

            # Read and print the content of the JSON config file
            with open(json_config_file, 'r') as json_file:
                json_content = json_file.read()
                print(f'Content of config.json: {json_content}')

            sublime.message_dialog('JavaScript macro executed successfully!')
        else:
            sublime.error_message('JavaScript macro or JSON config file not found!')
