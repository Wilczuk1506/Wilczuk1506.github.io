import React, { useState, useEffect } from 'react';

function getAverageColorFromPath(path, callback) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = path;

    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let rTotal = 0, gTotal = 0, bTotal = 0, count = 0;

        for (let i = 0; i < data.length; i += 4) {
            const alpha = data[i + 3];
            if (alpha === 0) continue; // skip transparent

            rTotal += data[i];
            gTotal += data[i + 1];
            bTotal += data[i + 2];
            count++;
        }

        if (count === 0) return callback('#666666'); // fallback if all pixels were transparent

        const r = Math.round(rTotal / count);
        const g = Math.round(gTotal / count);
        const b = Math.round(bTotal / count);
        const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

        callback(hex);
    };
}

const Skill = ({ description, experience, icon }) => {

    const [averageColor, setAaverageColor] = useState('#666'); // fallback color

    useEffect(() => {
        getAverageColorFromPath(icon, (hex) => {
            setAaverageColor(hex);
        });
    }, [icon]);

    const experienceDivs = Array.from({ length: 5 }, (_, i) => (
        <div
            key={i}
            style={{ backgroundColor: i < experience ? averageColor : 'transparent' }}
            className="w-5 h-5 m-1 border-gray-800 rounded-full border-3"
        />
    ));

    return (
        <div className="relative flex flex-col items-center justify-center h-55 p-4 overflow-hidden text-center transition-colors duration-500 ease-in-out border-4 border-gray-800 cursor-default w-45 bg-gray-500/10   0 rounded-2xl hover:bg-gray-300/20 group">

            <div className="z-10 flex flex-col items-center justify-center text-center">
                <div className='h-30 flex justify-center items-center'>
                    <img src={icon} alt="" className="max-h-35" />
                </div>
                <div className="flex flex-row justify-center mt-5">
                    {experienceDivs}
                </div>
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center text-white transition-transform duration-500 translate-x-full group-hover:translate-x-0 bg-gray-700/60">
                {
                    description
                }
            </div>
        </div>
    );
}

export default Skill;