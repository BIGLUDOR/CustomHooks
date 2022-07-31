import { useState } from "react"
import { useEffect } from "react"

export const Messages = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {

            const OnMouseMove = ({ x, y }) => {
            setCoords({ x, y })

            }
            window.addEventListener('mousemove', OnMouseMove)
        return () => {
            window.removeEventListener('mousemove', OnMouseMove)
        }
    }, [])

    return (
        <>
            <h3> Este usuario ya existe</h3>
            {JSON.stringify( coords)}
        </>
    )
}
