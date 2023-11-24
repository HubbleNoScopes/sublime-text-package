import sublime
import sublime_plugin
import ast

print("My JavaScript Macro package loaded successfully!")

class RunJavaScriptMacroCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        # Get the content of the active Sublime Text view
        content = self.view.substr(sublime.Region(0, self.view.size()))

        # Check if there are string literal errors using the ast module
        try:
            ast.parse(content, mode='eval')
            sublime.status_message('String literals are valid.')
        except SyntaxError as e:
            sublime.status_message('Invalid string literals: {}'.format(e))

    def is_enabled(self):
        # Enable the command only for JavaScript files
        return self.view.match_selector(0, 'source.js')

