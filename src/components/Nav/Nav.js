import { useEffect } from 'react'


function Nav(props) {
    
    const { pages=[], currentPage, setCurrentPage } = props
    useEffect(() => {}, [currentPage])
    return (
      <nav> 
        <ul>
            {pages.map((page , i) => (
                <li className={page.title} key={ page.title + i } >
                    <span onClick={() => setCurrentPage(page)}>
                        {page.title}
                    </span>                 
                </li>
            ))}

        </ul>
      </nav>
    );
  }
  
  export default Nav;