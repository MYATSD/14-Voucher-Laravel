import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PreventComponent = ({ fail, check, children,authenticate }) => {
    const nav = useNavigate()
    useEffect(() => {
        if (check) {
            nav(fail)
        }
        else {
            nav(authenticate)
        }
    })
    return <>{children}</>
}

export default PreventComponent
