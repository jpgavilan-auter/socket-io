import { saveUser, deleteUser, getUserById, updateUser } from './socket.js';

const userList = document.querySelector('#users');
const name = document.querySelector('#name');
let saveId = "";

export const resetId = () =>{    
    saveId = "";
    name.value="";
}

const userUi = user => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card card-body rounded-0 mb-2 animate__animated animate__fadeInUp">
        <div class="d-flex justify-content-between">
            <h1>${user.name}</h1>
            <div>
                <button class="btn btn-sm btn-primary update" data-id="${user._id}">Modificar</button>
                <button class="btn btn-sm btn-danger delete" data-id="${user._id}">Eliminar</button>
            </div>
        </div>        
    </div>
`

const btnDelete = div.querySelector('.delete')
btnDelete.addEventListener('click', e=>{    
    deleteUser(btnDelete.dataset.id);
});

const btnUpdate = div.querySelector('.update')
btnUpdate.addEventListener('click', e => {    
    getUserById(btnUpdate.dataset.id);
});

return div;
}

export const renderUsers = users => {
    userList.innerHTML = '';
    users.forEach(user => {
        userList.append(userUi(user));
    });
}

export const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(userForm['name'].value);
    if(saveId){
        console.log('updating')
        updateUser(saveId,userForm['name'].value);        
    }else{
        saveUser(userForm['name'].value);
    }
    resetId();
    name.value = "";   
}

export const appendUser = user => {
    userList.append(userUi(user));
}

export const fillForm = (user) =>{
    name.value = user.name;
    saveId = user._id;
}