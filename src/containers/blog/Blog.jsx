import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
          We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groubA'>
          <Article imgUrl={blog01} date="dec 29, 2022" title="GPT-3 and Open AI are the future. Let us explore how is it?" />
        </div>
        <div className='gpt3__blog-container_groubB'>
          <Article imgUrl={blog02} date="dec 21, 2022" title="GPT-3 and Open AI are the future. Let us explore how is it?" />
          <Article imgUrl={blog03} date="dec 21, 2022" title="GPT-3 and Open AI are the future. Let us explore how is it?" />
          <Article imgUrl={blog04} date="dec 21, 2022" title="GPT-3 and Open AI are the future. Let us explore how is it?" />
          <Article imgUrl={blog05} date="dec 21, 2022" title="GPT-3 and Open AI are the future. Let us explore how is it?" />
        </div>
      </div>
    </div>
  )
}

export default Blog