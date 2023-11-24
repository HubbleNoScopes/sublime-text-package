import sublime
import sublime_plugin
import os
import subprocess

class RunJavaScriptMacroCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        # Specify the path to your JavaScript macro file
        js_macro_file = os.path.join(sublime.packages_path(), 'User', 'YourMacro.js')

        # Specify the path to your JSON configuration file
        json_config_file = os.path.join(sublime.packages_path(), 'User', 'config.json')

        # Check if the JavaScript macro file and JSON config file exist
        if os.path.exists(js_macro_file) and os.path.exists(json_config_file):
            # Execute the JavaScript macro using Node.js subprocess
            try:
                subprocess.run(['node', js_macro_file], check=True)
                sublime.message_dialog('String literals converted successfully!')
            except subprocess.CalledProcessError as e:
                sublime.error_message(f'Error executing JavaScript macro:\n{e.stderr.decode()}')
        else:
            sublime.error_message('JavaScript macro or JSON config file not found!')
