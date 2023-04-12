import React from 'react'
import profile from '../img/profile.png'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://previews.123rf.com/images/malydesigner/malydesigner1403/malydesigner140300760/26846775-%EC%97%B0%ED%95%9C-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%B0%EA%B2%BD-%EC%A7%88%EA%B0%90.jpg"
          alt=""
        />
        <div className="user">
          <img src={profile} alt="" />
          <div className="info">
            <span>Semi</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
        </p>
      </div>
      <Menu className="menu">m</Menu>
    </div>
  )
}

export default Single
