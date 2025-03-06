import Facebook from "/images/icon-facebook.svg"
import Twitter from "/images/icon-twitter.svg"
import Instagram from "/images/icon-instagram.svg"
import YouTube from "/images/icon-youtube.svg"
import up from "/images/icon-up.svg"
import down from "/images/icon-down.svg"
import { Metric } from "../types"

const socialIcons: { [key: string]: string } = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: YouTube
}

export default function CardToday({ metric } : { metric: Metric }) {
    const { metric: metricName, value, percentage, social } = metric;
    const socialIcon = socialIcons[social.toLowerCase()];
  return (
    <div className="bg-DarkDesaturatedBlueCardBG rounded-[8px] lg:mx-0 mx-5 h-32 flex flex-col justify-evenly 
    px-6.5 mt-4 hover:bg-Darkcardhover">
        <div className="flex justify-between">
            <p className="text-DesaturatedBlueTextdark font-bold text-[0.875rem]">{metricName}</p>
            <img src={socialIcon} alt="" />
        </div>
        <div className="flex justify-between items-center">
            <p className="text-WhiteText font-bold text-4xl">{value}</p>
            <div className="flex gap-2 items-center">
            <img src={ Math.sign(percentage) === 1 ? up : down}></img>
            <p className={`text-xs font-bold ${percentage > 0 ? 'text-LimeGreen' : 'text-Bright-Red' }`}>{percentage < 0 ? -percentage: percentage}%</p>
            </div>
        </div>

    </div>
  )
}
