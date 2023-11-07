import Arduino from '../assets/images/arduino.png'
import RaspberryPi from '../assets/images/raspberry_pi.png'
import C from '../assets/images/c-48px.png'
import CPP from '../assets/images/cpp.png'
import Express from '../assets/images/express.png'
import SFML from '../assets/images/sfml.png'
import Github from '../assets/images/GitHub-Mark-32px.png'
import GithubWhite from '../assets/images/GitHub-Mark-Light-32px.png'
import Globe from '../assets/images/globe.png'
import Ncurses from '../assets/images/ncurses.jpg'
import Nodejs from '../assets/images/nodejs.png'
import Python from '../assets/images/python.png'
import Youtube from '../assets/images/youtube.png'
import LinkedIn from '../assets/images/linkedin.png'
import QuestionMark from '../assets/images/question-mark-48px.png'
import Unreal from '../assets/images/unreal.png'
import ReactLogo from '../assets/images/react_logo.png'
import ReactNativeLogo from '../assets/images/react_native_logo.png'
import Typescript from '../assets/images/typescript.png'

type SkillIcon = {
  [key: string]: ImageMetadata
}

export default function getSkillIcon(tag: string): ImageMetadata {
    const skillIcon: SkillIcon = {
        'arduino': Arduino,
        'c': C,
        'cpp': CPP,
        'express': Express,
        'sfml': SFML,
        'globe': Globe,
        'github': Github,
        'githubWhite': GithubWhite,
        'ncurses': Ncurses,
        'node-js': Nodejs,
        'python': Python,
        'youtube': Youtube,
        'linkedIn': LinkedIn,
        'react': ReactLogo,
        'react-native': ReactNativeLogo,
        'typescript': Typescript,
        'unreal-engine': Unreal,
        'raspberry-pi': RaspberryPi,
        'default': QuestionMark
    }

    return skillIcon[tag] || QuestionMark
}
