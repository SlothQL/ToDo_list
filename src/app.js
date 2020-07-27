import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                { name: 'Buy groceries', priority: 'high'},
                { name: 'Clean bathroom', priority: 'high'},
                { name: 'Hoover floor', priority: 'low'}
            ],
            newName: '',
            newPriority: ''
        },
        methods: {
            saveNewTodo: function() {
                this.todos.push({
                    name: this.newName,
                    priority: this.newPriority
                });
                this.newName = '';
                this.newPriority = '';
            }
        }
    });
});