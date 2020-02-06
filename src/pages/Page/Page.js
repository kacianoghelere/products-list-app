import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import './Page.scss'

export default function Page({ header, children }) {
  return (
    <div className="Page container px-3 pb-3">
      <Navbar />
      <header>{header}</header>
      {children}
    </div>
  );
}