import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
const navigate = useNavigate();

const [value, setValue] = useState<string>();
    const input = (e: any) => {
        setValue(e.target.value.toLowerCase());
    }

    const handleKeyPress = (e: { key: string; }) => {
        if(e.key === 'Enter'){
            search();
        }
    }

    const search = () => {
        if(value !== undefined) {
            navigate(`/search/${value}`);
        }
    }

    return (
    <div className="hidden md:flex justify-center items-center">
        <div>
            <div id="search_intro" className="border rounded overflow-hidden flex p-2 w-96">
                <label htmlFor="userInput" className="sr-only">Search</label>
                <input required type="search" name="q" className="px-2 py-2 w-full border-none" id="userInput" placeholder="What are you looking for?" onKeyPress={handleKeyPress} onChange={input}/>
                <button onClick={search} className="flex items-center justify-center px-4 border-none">
                    <svg className="h-4 w-4 text-grey-dark" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
)
}