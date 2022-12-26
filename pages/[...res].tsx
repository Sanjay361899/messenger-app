import { useRouter } from 'next/router'
import React from 'react'

const res = () => {
    const routers=useRouter();
    const {res}=routers.query
    console.log(res);
    
    return (
        <div>
        hello {res && res[0]}
    </div>
  )
}

export default res
