import { useEffect, useState } from 'react'
import Logo from './Logo'
import SearchInput from './SearchInput'
import SearchBox from './SearchBox'

function Header() {
    const [query, setQuery] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleClearSearch = () => {
        setQuery('')
        setInputValue('')
    }

    useEffect(() => {
        if (inputValue === '') setQuery('')
    }, [query, inputValue])

    return (
        <>
            <header className="relative z-20 flex flex-col items-center gap-3 border-b border-grayscale px-4 py-3 sm:flex-row sm:justify-between xl:px-10">
                <Logo />
                <SearchInput
                    setQuery={setQuery}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                />
            </header>
            {query && (
                <SearchBox query={query} clearSearch={handleClearSearch} />
            )}
        </>
    )
}

export default Header
