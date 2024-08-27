


export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}


export const getUserFromLocal = () => {
  const user = localStorage.getItem('user');
  return user === null ? null : JSON.parse(user);
}


export const removeUserFromLocal = () => {
  localStorage.clear();
}


export const setCarts = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}


export const getCartsFromLocal = () => {
  const carts = localStorage.getItem('carts');
  return carts === null ? [] : JSON.parse(carts);
}


export const removeCartsFromLocal = () => {
  localStorage.removeItem('carts');
}