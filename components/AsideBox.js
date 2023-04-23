import Link from 'next/link'
import React from 'react'

const asideBox = () => {
  return (
    <>
      <aside>
        <div>
          <form>
            <input type="search" id='search' name='search' placeholder='Search' />
          </form>
          <div className='Categories'>
            <p className='title'>Categories</p>
            <Link href="/"><p>Accounting</p></Link>
            <Link href="/cia"><p>CIA </p></Link>
            <Link href="/"><p>CMA Tips</p></Link>
            <Link href="/us-cma"><p>CMA USA</p></Link>
            <Link href="/"><p>CPA Tips</p></Link>
            <Link href="/us-cpa"><p>CPA USA</p></Link>
            <Link href="/ea"><p>EA (Enrolled Agent)</p></Link>
            <Link href="/ifrs"><p>IFRS</p></Link>
          </div>
          <div className='Categories'>
            <p className='title'>Archives</p>
            <Link href="/"><p>2023 </p></Link>
            <Link href="/"><p>2022 </p></Link>
            <Link href="/"><p>2021 </p></Link>
          </div>

        </div>
      </aside>
    </>
  )
}

export default asideBox