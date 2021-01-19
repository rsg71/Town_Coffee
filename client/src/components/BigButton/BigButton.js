import React from 'react'
import { Button } from 'react-bootstrap'

export default function BigButton(props) {
    return (
        <div>
            <Button className="darkGreenButton" size="lg">{props.children}</Button>
        </div>
    )
}
