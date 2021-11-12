import Brand from './mark24_brand.svg?component'
import './app.scss'

export default function App() {
  return (
    <div className='home-page container'>
      <div className='brand row'>
        <div className="col brand">
          <Brand  />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <a className='link' target="_blank" rel="noopener noreferrer" href='https://github.com/mark24Code'>GITHUB</a>
        </div>
        <div className='col'>
          <a className='link' target="_blank" rel="noopener noreferrer" href='https://mark24code.github.io'>BLOG</a>
        </div>
        <div className='col'>
          <a className='link' target="_blank" rel="noopener noreferrer" href='https://note.mark24code.com'>NOTE</a>
        </div>
      </div>

      <footer>
        <div className='row'>
          <div className='col'>
            <small>&copy; MARK24  All rights reserved.</small>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <a target="_blank" rel="noopener noreferrer" href="https://beian.miit.gov.cn">苏ICP备20005080号-2</a>
          </div>
        </div>
    </footer>
    </div>
  )
}