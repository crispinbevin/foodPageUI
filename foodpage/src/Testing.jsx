import React, { useEffect } from 'react'
import './Testing.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react'

function Testing() {
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    })

  return (
    <div className="container-fluid testing-bg">
        <div className="container testing-wrapper">
            {loading?(
                <>
                    <h1><Skeleton /></h1>
                    <p><Skeleton /></p>
                </>
                
            ):(<>
            <h1>Testing Heading</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim blanditiis natus labore suscipit ex exercitationem ducimus, quidem rem at maiores repellat, expedita saepe soluta deserunt. Sequi aspernatur rerum sint aut amet ratione maiores, exercitationem sed debitis facilis reiciendis vero quibusdam voluptas, iusto totam ducimus unde non cupiditate? Quod porro impedit esse blanditiis voluptatum sapiente illum quasi tempore deleniti. Nesciunt perferendis, modi voluptatum unde quas voluptatibus adipisci id placeat, fugit repellat assumenda ad quod quidem? Quibusdam laboriosam, ducimus nulla soluta praesentium consequuntur earum mollitia placeat, maiores ea ipsam eum itaque molestias nostrum alias, expedita dignissimos deserunt nemo enim veritatis. Quisquam, numquam.</p>
            </>
            )}

            </div>
    </div>
  )
}

export default Testing