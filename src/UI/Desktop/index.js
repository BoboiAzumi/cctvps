import React from 'react'
import Footer from '../Footer'

class Desktop extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            frame: "/img"
        }
    }

    changeFrame(e){
        let value = e.target.value
        this.setState({
            frame: value
        })
    }

    render(){
        return (
            <div className={this.props.className}>
                <div className="bgbrown">
                    <div className="block py-4">
                        <a href="/" className="text-white text-lg no-underline ml-10">CCTVPS</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="block container bgContainer mx-52 my-16 border">
                        <div className="flex justify-center">
                            <select className="border border-gray-300 text-white text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bgGray w-full mx-40 my-10" onChange={this.changeFrame.bind(this)}>
                                <option value="/img">Pilih</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=63a5320ed7dc7">CCTV 1 Simpang Rambung Merah</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=63a4712f09d09">CCTV 2 Simpang Dua</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=63a46f24d0c25">CCTV 3 Simpang Sambo</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=640cc11f69e2e">CCTV 4 JL.SUDIRMAN / BRI</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=640cc21e1d39f">CCTV 5 JL.MERDEKA / DEPAN BALAI KOTA</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=640eaa699c267">CCTV 6 JL.MH. SITORUS</option>
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <iframe src={this.state.frame} className="w-full aspect-video mx-40 mb-16" scrolling='no'>
                            </iframe>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Desktop