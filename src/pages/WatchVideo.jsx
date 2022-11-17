import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function WatchVideo() {
    const location = useLocation();
    const { options } = location.state;

    const getAttrs = (iframeTag) => {
        var doc = document.createElement('div');
        doc.innerHTML = iframeTag;

        const iframe = doc.getElementsByTagName('iframe')[0];
        return [].slice
            .call(iframe.attributes)
            .reduce((attrs, element) => {
                attrs[element.name] = element.value;
                return attrs;
            }, {});
    }
    return (
        <>
            <Header details="WATCH VIDEO" />
            <div className='flex'>
                <SideBar />
                <div className='p-10 overflow-y-auto flex flex-col gap-5 h-[89.5vh] w-screen'>
                    <div>
                        <iframe className='h-96 w-[50%] rounded-lg shadow-lg' {...getAttrs(options.videoLink)} />
                    </div>
                    <div>
                        <div className='text-xl font-bold'>{options.title}</div>
                        <div className='text-xl font-medium text-slate-700'>{options.description}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WatchVideo