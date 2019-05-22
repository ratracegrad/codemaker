<template>
    <v-container>
        <v-card>
            <v-card-title>
                <div class="title text-capitalize">{{ challenge.title }}</div>
            </v-card-title>
            <v-card-text class="subheading">
                <div v-html="challenge.descr"></div>
            </v-card-text>
            <v-responsive>
                <div>
                    <codemirror
                        v-model="challenge.code"
                        :options="cmOption"
                    ></codemirror>
                </div>
            </v-responsive>
            <v-card-actions>
                <v-btn dark large round class="blue">Test Code</v-btn>
                <v-spacer></v-spacer>
                <v-btn outline class="blue">Reset Code</v-btn>
                <v-btn outline class="blue">Dashboard</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
// language
import 'codemirror/mode/javascript/javascript.js';

// theme css
import 'codemirror/theme/monokai.css';

// require active-line.js
import 'codemirror/addon/selection/active-line.js';

// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js';
import 'codemirror/addon/search/searchcursor.js';

// hint
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/selection/active-line.js';

// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/match-highlighter.js';

// keyMap
import 'codemirror/mode/clike/clike.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/search.js';
import 'codemirror/keymap/sublime.js';

// foldGutter
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/xml-fold.js';
export default {
    data() {
        return {
            challenge: {
                title: 'palindrome',
                descr: `<p>Create a function that will take an input string and return true or false if that string is a palindrome.</p>
                <p>A palindrome is a string that is spelled the same way forwards and backwards. Here are some examples of palindromes:</p>
                <ul>
                    <li>pop</li>
                    <li>mom</li>
                    <li>racecar</li>
                </ul>`,
                code: `import someResource from 'codemirror/some-resource'
export default {
  data () {
    return {
      exampleCode: 'const a = 10',
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/javascript',
        lineWrapping: true,
        theme: 'default'
      }
    }
  },
  components: examples
}`
            },
            cmOption: {
                tabSize: 4,
                styleActiveLine: false,
                lineNumbers: true,
                styleSelectedText: false,
                line: true,
                foldGutter: true,
                gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                highlightSelectionMatches: {
                    showToken: /\w/,
                    annotateScrollbar: true
                },
                mode: 'text/javascript',
                hintOptions: {
                    completeSingle: false
                },
                keyMap: 'sublime',
                matchBrackets: true,
                showCursorWhenSelecting: true,
                theme: 'monokai',
                extraKeys: { Ctrl: 'autocomplete' }
            }
        };
    }
};
</script>

<style>
.CodeMirror-focused .cm-matchhighlight {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: repeat-x;
}
.cm-matchhighlight {
    background-color: lightgreen;
}
.CodeMirror-selection-highlight-scrollbar {
    background-color: green;
}
</style>
