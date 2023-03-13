import React from 'react'

class Footer extends React.Component{
    render(){
        return (
            <>
                <div className="bgbrown w-full h-fit bottom-0">
                    <div className="py-4">
                        <div className="flex justify-center py-9">
                            <div className='grid grid-flow-row grid-cols-1'>
                                <div className="flex justify-center py-9">
                                    <img className='text-center' src="/img/github-mark-white.svg" />
                                </div>
                                <p className='text-center text-white'>BoboiAzumi @ Github</p>
                                <a className='text-center text-white' href="https://github.com/BoboiAzumi/cctvps">CCTVPS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer