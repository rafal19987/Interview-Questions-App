import SocialListItem from './SocialListItem'
import githubBigIcon from '../assets/githubBig.svg'
import linkedinIcon from '../assets/linkedin.svg'
import portfolioIcon from '../assets/portfolio.svg'
import emailIcon from '../assets/email.svg'

interface SocialsProps {
  icon: string
  alt: string
  description: string
  reference: string
  isEmail: Boolean
}

interface SocialProps extends Array<SocialsProps> {}

const socials: SocialProps = [
  {
    icon: githubBigIcon,
    alt: 'github icon',
    description: 'Check my Github',
    reference: 'https://github.com/rafal19987',
    isEmail: false,
  },
  {
    icon: linkedinIcon,
    alt: 'linkedin icon',
    description: 'Finde me on LinkedIn',
    reference: 'https://www.linkedin.com/in/rafa%C5%82-izdebski-78023b1b0/',
    isEmail: false,
  },
  {
    icon: portfolioIcon,
    alt: 'portfolio site icon',
    description: 'Visit Portfolio Site',
    reference: '/',
    isEmail: false,
  },
  {
    icon: emailIcon,
    alt: 'email icon',
    description: 'Contact via Email',
    reference: 'rafal987.1@o2.pl',
    isEmail: true,
  },
]

const SocialList = () => {
  return (
    <ul className="flex flex-col items-center justify-between h-40 w-full md:flex-row md:items-stretch">
      {socials.map((item) => (
        <SocialListItem
          key={item.description}
          icon={item.icon}
          alt={item.alt}
          description={item.description}
          reference={item.reference}
          isEmail={item.isEmail}
        />
      ))}
    </ul>
  )
}

export default SocialList
