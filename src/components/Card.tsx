import { User } from "../types"

import Facebook from "/images/icon-facebook.svg"
import Twitter from "/images/icon-twitter.svg"
import Instagram from "/images/icon-instagram.svg"
import YouTube from "/images/icon-youtube.svg"

import up from "/images/icon-up.svg"
import down from "/images/icon-down.svg"

type UserProps = {
    User: User
}
const socialIcons: { [key: string]: string } = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: YouTube
}

const socialColors: { [key: string]: string } = {
    facebook: "bg-Facebook",
    twitter: "bg-Twitter",
    instagram: "bg-linear-to-r from-Instagram to-Instagram-2",
    youtube: "bg-Youtube"
}

export default function Card({User}:UserProps ) {

    const { followers,social, today, type, username } = User;
    const socialColor = socialColors[social.toLowerCase()];

    const socialIcon = socialIcons[social.toLowerCase()];

    console.log(User.social)
    return (
        <div className="bg-DarkDesaturatedBlueCardBG mt-4 rounded-[8px] mx-5 
        overflow-hidden text-DesaturatedBlueTextdark hover:bg-Darkcardhover light:hover:bg-lightCardhover lg:h-[215px] lg:mx-0
        light:bg-Light-BlueCardBG light:text-light-text">
            <div className={`h-1 ${socialColor}` }></div>
            <section className="mt-4 flex flex-col items-center text-center gap-5 lg:my-7">
                <div className="flex gap-3 items-center">
                    <img className='w-5 h-5' src={socialIcon} alt="" />
                    <p className="text-[0.875rem] font-bold">{username}</p>
                </div>
                <div>
                    <p className="font-black text-5xl text-WhiteText light:text-DarkTextlight">{followers}</p>
                    <p className="tracking-[4px] font-light text-xs mt-2">{type.toUpperCase()}</p>
                </div>
                <div className="flex gap-2 items-center mb-4">
                    <img src={ Math.sign(today) === 1 ? up : down}></img>
                    <p className={`text-xs font-bold ${today > 0 ? 'text-LimeGreen' : 'text-Bright-Red' }`}>{today < 0 ? -today: today } Today</p>
                </div>
            </section>
        </div>
    )
}
