import sublime
import sublime_plugin
import os
import subprocess

class RunJavaScriptMacroCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        # Get the content of the active Sublime Text view
        content = self.view.substr(sublime.Region(0, self.view.size()))

        # Check if there are string literal errors using the Node.js subprocess
        try:
            subprocess.run(['node', '-e', content], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            sublime.status_message('String literals are valid.')
        except subprocess.CalledProcessError as e:
            sublime.status_message(f'Invalid string literals: {e.stderr.decode()}')
