import User from "./models/user"; "./models/User";

export default (io) => {
    io.on('connection',  (socket) => {
        const emitUsers = async () => {
            const users = await User.find();
            io.emit('server:loadUsers',users);
        }
        emitUsers();

        socket.on('client:saveUser', async (data) => {            
            const newUser = new User(data);
            const saveUser = await newUser.save();
            io.emit('server:saveUser',saveUser);
        });

        socket.on('client:deleteUser', async (id) => {            
            await User.findByIdAndDelete(id);
            emitUsers();
        });

        socket.on('client:getUser', async (id) => {
            const user = await User.findById(id);            
            socket.emit('server:selectUser', user);
        });

        socket.on('client:updateUser', async (data) => {           
            await User.findByIdAndUpdate(data.id,{
                name : data.name
            })
            emitUsers();
        });
    });
}