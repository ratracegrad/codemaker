<template>
    <!-- bidirectional data binding -->
    <!--    <codemirror v-model="code" :options="cmOptions"></codemirror>-->

    <!--     or to manually control the datasynchronization -->
    <v-container grid-layout-lg>
        <v-layout row>
            <v-flex xs3>
                <v-combobox
                    :items="themes"
                    label="Select Theme"
                    v-model="theme"
                ></v-combobox>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <codemirror
                    ref="myCm"
                    v-model="code"
                    :options="cmOptions"
                    @ready="onCmReady"
                    @focus="onCmFocus"
                    @input="onCmCodeChange"
                >
                </codemirror>
            </v-flex>
        </v-layout>
        <v-layout row mt-3>
            <v-btn dark color="green">Check Code</v-btn>
            <v-spacer></v-spacer>
            <v-btn dark color="green">Reset Code</v-btn>
        </v-layout>
        <v-layout column mt-5>
            <h1>Test Results</h1>
            {{ code }}
        </v-layout>
    </v-container>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/zenburn.css';

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
    name: 'CodemirrorEditor',
    data() {
        return {
            code: 'const a = 10',
            theme: 'monokai',
            cmOptions: {
                tabSize: 4,
                mode: 'text/javascript',
                theme: 'monokai',
                lineNumbers: true,
                line: true,
                styleActiveLine: true,
                styleSelectedText: false,
                foldGutter: true,
                gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                highlightSelectionMatches: {
                    showToken: /\w/,
                    annotateScrollbar: true
                },
                // hint.js options
                hintOptions: {
                    completeSingle: false
                },
                keyMap: 'sublime',
                matchBrackets: true,
                showCursorWhenSelecting: true,
                extraKeys: { Ctrl: 'autocomplete' }
            },
            themes: [
                'cobalt',
                'dracula',
                'material',
                'monokai',
                'solarized',
                'zenburn'
            ]
        };
    },
    watch: {
        theme(val) {
            this.cmOptions.theme = val;
        }
    },
    methods: {
        onCmReady(cm) {
            console.log('the editor is readied!', cm);
        },
        onCmFocus(cm) {
            console.log('the editor is focus!', cm);
        },
        onCmCodeChange(newCode) {
            console.log('this is new code', newCode);
            this.code = newCode;
        }
    },
    computed: {
        codemirror() {
            return this.$refs.myCm.codemirror;
        }
    },
    mounted() {
        console.log('this is current codemirror object', this.codemirror);
        // you can use this.codemirror to do something...
    }
};
</script>

<style scoped>
.cm-matchhighlight {
    background-color: lightgreen;
}
.CodeMirror-selection-highlight-scrollbar {
    background-color: green;
}
</style>
