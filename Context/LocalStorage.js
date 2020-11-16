export const getLanes = () => {
  return JSON.parse(localStorage.getItem('lanes')) || false
}

export const updateLocalStorage = (state) => {
  console.log("CHAMADA")

  localStorage.setItem("lanes", JSON.stringify(state))
}
