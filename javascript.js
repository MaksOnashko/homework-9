// Класс работы с To-Do List

toDoList = {
    // Добавляем задачу
    addTask: function (text) {
        // Если пользователь написал хоть что-то
        if (text.length > 0) {
            // Создаем основу задачи
            var divCart = document.createElement('div'),
                divCartHeader = document.createElement('div'),
                buttonCartAdd = document.createElement('button'),
                buttonCartDel = document.createElement('button'),
                divCartBody = document.createElement('div'),
                pCartBody = document.createElement('p'),
                divCartFoot = document.createElement('div'),
                // Создаем уникальный id задачи
                taskId = row.childElementCount+1,
                onClickDelTask = 'toDoList.delTask('+taskId+')',
                onClickComTask = 'toDoList.comTask('+taskId+')';

            // Главный div
            divCart.setAttribute('class', 'card mb-3');
            divCart.setAttribute('id', 'taskId_'+taskId);
            divCart.setAttribute('style', 'max-width: 18rem;');

            // Верх с кнопкой завершено
            divCartHeader.setAttribute('class', 'card-header bg-transparent border-light');
            buttonCartAdd.setAttribute('class', 'btn btn-success btn-sm btn-block');
            buttonCartAdd.setAttribute('type', 'button');
            buttonCartAdd.setAttribute('onclick', onClickComTask);
            buttonCartAdd.textContent = 'Complete';

            // Тело задачи
            divCartBody.setAttribute('class', 'card-body');
            pCartBody.setAttribute('class', 'card-text');
            // Текст задачи
            pCartBody.textContent = text;

            // Низ с кнопкой удалить
            divCartFoot.setAttribute('class', 'card-footer bg-transparent border-light');
            buttonCartDel.setAttribute('class', 'btn btn-danger btn-sm btn-block');
            buttonCartDel.setAttribute('type', 'button');
            buttonCartDel.setAttribute('onclick', onClickDelTask);
            buttonCartDel.textContent = 'Delete';

            // Собираем дочение блоки задачи
            divCartHeader.appendChild(buttonCartAdd);
            divCartBody.appendChild(pCartBody);
            divCartFoot.appendChild(buttonCartDel);
            
            // Собраем главный блок
            divCart.appendChild(divCartHeader);
            divCart.appendChild(divCartBody);
            divCart.appendChild(divCartFoot);

            // Добавляем задачу в список задач
            row.appendChild(divCart);
        }
    },

    // Завершаем задачу
    comTask: function (id) {
        var divCart = document.getElementById('taskId_'+id),
            divCartHeader = divCart.getElementsByTagName('div')[0],
            buttonCartAdd = divCartHeader.getElementsByTagName('button')[0],
            /*divCartBody = divCart.getElementsByTagName('div')[1],*/
            divCartFoot = divCart.getElementsByTagName('div')[2],
            buttonCartDel = divCartFoot.getElementsByTagName('button')[0];

        buttonCartDel.setAttribute('class', 'btn btn-success btn-sm btn-block');
        buttonCartAdd.setAttribute('disabled', '');
        buttonCartDel.setAttribute('disabled', '');
        divCart.setAttribute('class', 'card mb-3 bg-success');
    },
    
    // Удаляем задачу
    delTask: function (id) {
        var divCart = document.getElementById('taskId_'+id),
            divCartHeader = divCart.getElementsByTagName('div')[0],
            buttonCartAdd = divCartHeader.getElementsByTagName('button')[0],
            /*divCartBody = divCart.getElementsByTagName('div')[1],*/
            divCartFoot = divCart.getElementsByTagName('div')[2],
            buttonCartDel = divCartFoot.getElementsByTagName('button')[0];

        buttonCartAdd.setAttribute('class', 'btn btn-danger btn-sm btn-block');
        buttonCartAdd.setAttribute('disabled', '');
        buttonCartDel.setAttribute('disabled', '');
        divCart.setAttribute('class', 'card mb-3 bg-danger');
    },
    
    // Выбираем задачи
    getTasks: function () {
        // Еще не реализовано
        console.log('getTasks');
    },
};

var button = document.getElementsByTagName('button')[0],
    row = document.getElementById('cartList');

button.addEventListener('click', function () {
    let taskText = document.getElementsByTagName('textarea')[0];
    toDoList.addTask(taskText.value);
    taskText.value = '';
});


// Класс строит HTML (пока не строит)
buildList = {

    // Построим head
    buildHead: function () {
        console.log('buildHead');
    },
    // Построим body
    buildBody: function () {
        console.log('buildBody');
    },
};