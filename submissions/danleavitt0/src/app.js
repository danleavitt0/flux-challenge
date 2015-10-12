import element from 'vdom-element'
import localize from 'vdux-local'
import Slots from './Slots'
import ControlButtons from './ControlButtons'

function render (props, childState) {
  return (
    <div className='app-container'>
      <div className='css-root'>
        <section className='css-scrollable-list'>
          <Slots key='slots'/>
          <ControlButtons key='buttons'/>
        </section>
      </div>
    </div>
  )
}

export default localize({
  render
})
