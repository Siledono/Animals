import {userState} from "react"

import bird from "./assets/svg/bird.svg"
import dog from "./assets/svg/dog.svg"
import cat from "./assets/svg/cat.svg"
import cow from "./assets/svg/cow.svg"
import gator from "./assets/svg/gator.svg"
import heart from "./assets/svg/heart.svg"
import horse from "./assets/svg/horse.svg"

import './AnimalsShow.css'

const svgMap = {
    bird,
    dog,
    cat,
    cow,
    gator,
    horse
}

function AnimalShow({type}){
    const [clicks, setClicks] = userState(0)

    const handlerClick = () => {
        setClicks(clicks + 1)
    }
    console.log(type)

    return (
        <div onClick={handlerClick} className="animal-shows">
            <img src={svgMap[type]} alt="animal" className="animal" />
            <img src={heart} alt="heart" style={{ widh: 10 + 10 * clicks + 'px'}} className="heart" />
        </div>
    )

}




