<template>
    <v-container>
        <v-card>
            <v-card-title>
                <div class="title text-capitalize">{{ challenge.name }}</div>
            </v-card-title>
            <v-card-text class="subheading">
                <div v-html="challenge.instructions"></div>
            </v-card-text>
            <v-responsive>
                <div class="codemirror">
                    <codemirror
                        v-if="challenge.hasOwnProperty('name')"
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
import { mapState } from 'vuex';
import db from '@/plugins/firebase';
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
    name: 'CodeEditor',
    data: () => ({
        challenge: {},
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
    }),
    computed: {
        ...mapState({
            id: state => state.selectedChallenge
        })
    },
    mounted() {
        db.collection('challenges')
            .doc(this.id)
            .get()
            .then(doc => {
                if (doc.exists) {
                    this.challenge = doc.data();
                }
            });
    }
};
</script>

<style scoped>
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
