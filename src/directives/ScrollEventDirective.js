import Vue from 'vue'
export const ScrollEvent = {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
}
Vue.directive('scroll', ScrollEvent)

// const defaultBackgroundColor = '#86bbff'
//
// // Initialize the annoying-background directive.
// export const AnnoyingBackground = {
//   bind (el, binding, vnode) {
//     // Allow users to customise the color by passing an expression.
//     const color = binding.expression || defaultBackgroundColor
//
//     // el might not be present for server-side rendering.
//     if (el) {
//       // Set the element's background color.
//       el.style.backgroundColor = color
//     }
//   }
// }
//
// // You can also make it available globally.
// Vue.directive('annoying-background', AnnoyingBackground)
