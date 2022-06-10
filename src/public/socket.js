const socket = io() 

export const loadUsers = (callback) => {
    socket.on('server:loadUsers', callback);
}

export const saveUser = (name) => {
   socket.emit('client:saveUser', {name});
}

export const onSaveUser = (callback) => {
    socket.on('server:saveUser',callback);
}

export const deleteUser = id => {
    socket.emit('client:deleteUser', id);
}

export const getUserById = (id) => {
    socket.emit('client:getUser', id);
}

export const onSelected = (callback) => {
    socket.on('server:selectUser', callback);    
}

export const updateUser = (id, name) => {
    socket.emit('client:updateUser', {
        id,
        name
    });
}