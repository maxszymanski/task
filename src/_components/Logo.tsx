import LogoVector from '../assets/logo.svg'

function Logo() {
    return (
        <a
            href="/"
            className="flex shrink-0 items-center gap-4 rounded-xl px-1 py-2 text-lg leading-[23px] font-bold text-dark transition-colors duration-300 outline-none focus-within:ring-2 focus-within:ring-darkPink lg:px-4"
        >
            {' '}
            <span>
                <img src={LogoVector} height={16} width={16} alt="shop logo" />
            </span>
            <span>ShopOnline</span>
        </a>
    )
}

export default Logo
