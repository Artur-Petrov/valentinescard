import {useEffect, useState} from "react";
import './Card.css'
import confetti from 'canvas-confetti';
import type {IPosition} from "../models/IPosition.ts";

export const ValentineCard = () => {
    const [accepted, setAccepted] = useState<boolean>(false)
    const [noBtnPos, setNoBtnPos] = useState<IPosition>({x: 0, y: 0})
    const [isMoved, setIsMoved] = useState<boolean>(false)

    const moveBtn= (): void =>{
        let newX = 0;
        let newY = 0;
        const minDistance = 150;
        do {
            newX = Math.floor(Math.random() * 400) - 200;
            newY = Math.floor(Math.random() * 400) - 200;
        } while (
            Math.abs(newX - noBtnPos.x) < minDistance &&
            Math.abs(newY - noBtnPos.y) < minDistance
            );
        setNoBtnPos({ x: newX, y: newY });
        setIsMoved(true);
    }

    useEffect(() => {
        if (accepted) {
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval: ReturnType<typeof setInterval> = setInterval(function() {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);


                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });

                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);
        }
    }, [accepted]);

    return (
        <div className='card-container bg-pink-500 flex items-center justify-center'>
            <div className='.text-container bg-white p-20 rounded-xl'>
                {!accepted ? (
                    <>
                    <h2 className='text-xl font-bold text-pink-400'>Will you be my valentine?❤️</h2>
                        <div className="buttons flex items-center justify-between mt-7">
                            <button className="yes-btn text-white p-4 rounded-xl bg-pink-500"
                                    onClick={()=>setAccepted(true)}>YES!💜</button>
                            <button className="no-btn text-white p-4 rounded-xl bg-pink-300"
                                    onClick={(e)=> e.preventDefault()}
                                    onMouseEnter={moveBtn}
                                    style={{
                                        position: isMoved ? 'relative' : 'static',
                                        transform: `translate(${noBtnPos.x}px, ${noBtnPos.y}px)`,
                                    }}>no💔</button>
                        </div>
                    </>
                ) :(
                    <>
                        <div>
                            <h2 className='text-xl font-bold text-pink-400'>Thank you!!!❤️💖💘</h2>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
export default ValentineCard;