import element from 'vdom-element'
import localize from 'vdux-local'
import DarkJedi from './DarkJedi'

function render (props, childState) {
  return (
    <div className='css-slots'>
      <DarkJedi key='jedi' jedi='Dark Jedi'/>
    </div>
  )
}

export default localize ({
  render
})
