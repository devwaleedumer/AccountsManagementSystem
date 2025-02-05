export var getUser= () => JSON.parse(localStorage.getItem('user'));
export var removeUser= () =>  localStorage.removeItem('user');
export var setUser = (token) =>  localStorage.setItem('user',JSON.stringify(token));

