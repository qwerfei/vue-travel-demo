// mutations第一个参数表示state对象,令state里的city值等于changeCity方法里传入的city值
export default {
  changCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}