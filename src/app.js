import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: ['Buy groceries', 'Clean bathroom', 'Hoover floor'],
            newTodo: ''
        },
        methods: {
            saveNewTodo: function() {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        }
    });
});