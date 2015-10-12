import element from 'vdom-element'
import localize from 'vdux-local'

function render (props, childState) {
  return (
    <div className='css-slot'>
      {props.jedi}
    </div>
  )
}

export default localize({
  render
})
