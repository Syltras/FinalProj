import React from 'react'
import '../../OurStyles/HomeCSS/HomePage.css';

const HomePage = () => {
  return (
    <div>
        <header className="header">
        <h1>Welcome to My Homepage</h1>
      </header>
      <main className="main-content">
        <p>This is a simple and nice-looking home page created using React.</p>
        <p>Feel free to customize and style it according to your preferences!</p>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HomePage