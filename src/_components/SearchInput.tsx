import Loop from '../assets/loop.svg'

function SearchInput({
    setQuery,
    inputValue = '',
    setInputValue,
}: {
    setQuery: (value: string) => void | null
    setInputValue: (value: string) => void
    inputValue: string
}) {
    return (
        <div className="py-3 lg:px-4">
            <div className="relative max-w-[248px] rounded-xl">
                <label
                    htmlFor="search"
                    className="absolute top-1/2 left-3 -translate-y-1/2 pr-2"
                >
                    <img
                        src={Loop}
                        alt="loop icon"
                        height={24}
                        width={24}
                        className="pointer-events-none"
                    />
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search for products"
                    className="placeholder: w-full max-w-[248px] rounded-xl bg-lightPink py-3 pr-4 pl-12 text-dark transition-colors duration-300 placeholder:font-sans placeholder:text-base placeholder:leading-6 placeholder:font-normal placeholder:text-darkPink focus:ring-2 focus:ring-darkPink focus:outline-none"
                    value={inputValue}
                    autoComplete="off"
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setQuery(inputValue)
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default SearchInput
