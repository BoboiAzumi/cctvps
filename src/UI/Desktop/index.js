import React from 'react'

class Desktop extends React.Component{
    constructor(props){
        super(props)
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
            <>
                <div className="bgbrown">
                    <div className="block py-4">
                        <a href="/" className="text-black text-lg no-underline ml-10">CCTVPS</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="block container bgContainer mx-52 my-16 border">
                        <div className="flex justify-center">
                            <select className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bgGray w-full mx-40 my-10" onChange={this.changeFrame.bind(this)}>
                                <option value="/img">Pilih</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=63a5320ed7dc7">CCTV 1 Simpang Rambung Merah</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=63a4712f09d09">CCTV 2 Simpang Dua</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=63a46f24d0c25">CCTV 3 Simpang Sambo</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=6405abe3a9e26">CCTV 4 JL.SUDIRMAN / BRI</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=6405acdab7613">CCTV 5 JL.MERDEKA / DEPAN BALAI KOTA</option>
                                <option value="https://g3.ipcamlive.com/player/player.php?alias=6405acdab7613">CCTV 6 JL.MH. SITORUS</option>
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <iframe src={this.state.frame} className="w-full aspect-video mx-40 mb-16" scrolling='no'>
                            </iframe>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Desktop