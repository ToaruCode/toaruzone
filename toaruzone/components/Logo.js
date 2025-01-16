import Image from 'next/image'
import lightLogo from '../public/logo_light_mode.png'
import darkLogo from '../public/logo_dark_mode.png'

const Logo = ({ mode = 'light' }) => {
  const isLightMode = mode === 'light'

  return (
    <div>
      <Image
        src={isLightMode ? lightLogo : darkLogo}
        alt="Logo"
        width={10}
        height={10}
        sizes="10vw"
        priority={true}
      />
    </div>
  )
}

export default Logo
