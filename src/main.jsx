import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="p-3">
      <div className="navbar rounded-xl border-3 border-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost btn-circle ml-2" href="/"><img src="/icons/fashiongames_transparent.png" width={40} /></a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm">
              <li><a>Profile</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="ml-3 mr-3 mb-3 p-3 rounded-xl bg-base-200">
      <App />
    </div>
  </StrictMode>
)
