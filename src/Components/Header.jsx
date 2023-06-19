import React from 'react'

const Header = () => {
  return (
    <>
    <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">Logo</a>
        </div>
    </nav>
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Library</a></li>
              <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </div>
      </nav>
      </>
  )
}

export default Header