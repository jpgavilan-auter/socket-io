import {loadUsers, onSaveUser, onSelected} from './socket.js';
import {onHandleSubmit, renderUsers, appendUser, fillForm, resetId} from './ui.js';

onSaveUser(appendUser);
loadUsers(renderUsers);
onSelected(fillForm);

const userForm = document.querySelector('#userForm');
const btnCancel = document.querySelector('#btnCancel');
userForm.addEventListener('submit',onHandleSubmit);
btnCancel.addEventListener('click',resetId);