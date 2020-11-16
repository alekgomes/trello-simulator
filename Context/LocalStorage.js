export const getLanes = () => {
  return JSON.parse(localStorage.getItem('lanes')) || false
}

export const updateLocalStorage = (state) => {
  localStorage.setItem("lanes", JSON.stringify(state))
}
