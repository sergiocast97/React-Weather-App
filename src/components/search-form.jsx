import { SearchIcon, MapPinIcon } from './Icons'

export default function SearchForm({ city, setCity, handleSubmit }) {
    return (
        // Form calls parent function when submitted
        <form
            className="flex gap-4 justify-between items-center rounded-md border border-theme-medium/50 p-2 text-2xl"
            onSubmit={handleSubmit}
        >
            {/* Map Icon from Icon Components */}
            <MapPinIcon />

            {/* Input Text from which city is picked up */}
            <input
                type="text"
                className="bg-transparent border-none outline-none w-full placeholder:text-theme-lightest focus:ring-0"
                placeholder="City"
                value={city}
                onChange={({ target }) => setCity(target.value)}
            />
            
            {/* Submit Button */}
            <button
                type="submit"
                className="bg-transparent transition border-none outline-none p-2 rounded-full hover:bg-theme-medium"
            >
                <SearchIcon />
            </button>
        </form>
    );
}