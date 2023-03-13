import React from 'react'
import Desktop from '../Desktop'
import Mobile from '../Mobile'

class UIControll extends React.Component{
    render(){
        return (
            <>
                <Desktop className="hidden lg:block relative lg:max-h-full"/>
                <Mobile className="block lg:hidden"/>
            </>
        )
    }
}

export default UIControll