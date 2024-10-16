import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        // Add your search logic here (e.g., filtering, API calls, etc.)
    };

    return (
        <>
            <p><b>Ask me -</b> eg: GreAI/ What the best way to look sympathetic?</p>
            <TextField
                variant="outlined"
                placeholder="GreAI/"
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                    endAdornment: ( // Change to endAdornment to position the icon on the right side
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ width: '100%', backgroundColor: 'white', borderRadius: '8px' }} // Adjust width as needed
            />
        </>
    );
};

export default SearchField;
