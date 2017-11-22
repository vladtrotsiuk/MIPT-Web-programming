// Изначально в body должен содержаться только один div с id=root, внутри этого div
//  до выполнения JavaScript-кода не должно быть вложенных тегов.
// JS-код должен находиться в отдельном файле app.js.
// На страницу index.html должен быть подключен jQuery и app.js.
// После загрузки страницы выполняется JS-код, который:
// добавляет в div с id=root список ul,
// добавляет в этот список элемент li,
// добавляет в элемент li тэг span с текстом “Сделать задание #3 по web-программированию”,
// добавляет в элемент li кнопку button с текстом “Удалить”, при нажатии на которую весь элемент li должен
//  быть удален из DOM-дерева,
// добавляет в div с id=root input с id=add_task_input и кнопку button с id=add_task
// При нажатии на кнопку с id=add_task добавляется новый элемент li с текстом из input,
// с требованиями как для “Сделать задание #3 по web-программированию

function addElement(s) {
  var el = $('<li><span></span> <button class="delete-button">Удалить</button></li>');
  $('span', el).text(s);
  $('#root ul').append(el);
  $('.delete-button', el).click(function(ev) {
    $(this).parent().remove()
  });
}

$(function() {
  $('#root').append('<ul></ul>');
  $('#root').append('<input id="add_task_input"> <button id="add_task">Добавить</button>');
  $('#add_task').click(function() {
    addElement($('#add_task_input').val())
  });
  addElement('Сделать задание #3 по web-программированию');
})
