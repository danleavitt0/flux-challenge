import element from 'vdom-element'
import localize from 'vdux-local'

function render (props, childState) {
  return (
    <div className='css-scroll-buttons'>
      <button className='css-button-up'/>
      <button className='css-button-down'/>
    </div>
  )
}

export default localize({
  render
})
