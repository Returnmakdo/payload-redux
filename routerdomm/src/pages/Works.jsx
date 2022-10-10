import React from "react"
import { useParams } from "react-router-dom"

const Works = () => {
    const param = useParams();
    console.log(param)
    return <div>Work</div>
}

export default Works