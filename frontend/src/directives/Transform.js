export default {
  bind(el, binding, vnode) {
    let current = 0

    el.addEventListener('click', function(){

      let increment = binding.value || 90

      current+= increment
      el.style.transform = `rotate(${current}deg)`

      if(binding.modifiers.animate){
        el.style.transition = 'transform 0.5s'
      }
    })
  }
}
