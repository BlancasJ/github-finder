import { useState } from "react";
import { Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { UserData } from "../types";

interface SearchbarProps {
  setErrorMessage: (message: string | null) => void;
  setUserData: (data: UserData | null) => void;
}

const Searchbar = ({ setErrorMessage, setUserData }: SearchbarProps) => {
  const [username, setUsername] = useState("");

  const handleOnSearch = () => {
    if (!username) {
      setUserData(null);
      setErrorMessage(null);
      return;
    }

    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setErrorMessage('User not found, please try again.');
          setUserData(null);
          return;
        }
        setUserData(data);
        setErrorMessage(null);
      });
  };

  return (
    <TextField
        variant="outlined" // Changed from standard to outlined
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleOnSearch();
          }
        }}
        placeholder="Search Github username..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color: 'var(--theme-secondary-color)',
                  width: '30px',
                  height: '30px',
                }}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <Button
              variant="contained"
              onClick={handleOnSearch}
              size="small"
              sx={{
                marginRight: '0', // Adjust the margin to align the button inside the text field
                borderRadius: '8px', // Round the right corners
                height: '25px', // Match the height of the search bar
                boxShadow: 'none', // Remove shadow effects if any
                textTransform: 'none', // Disable caps to avoid weird text transformation
                '&:hover': {
                  boxShadow: 'none',
                },
              }}
            >
              Search
            </Button>
          ),
        }}
        sx={{
          backgroundColor: 'var(--theme-secondary-background-color)',
          borderRadius: '15px', // Round the corners
          width: '50%', // Use 100% to make it responsive or set a max-width
          '.MuiInputBase-input': {
            color: 'var(--theme-text-primary)',
          },
          '& .MuiOutlinedInput-root': { // New styles for the outlined variant
            '& fieldset': {
              borderColor: 'none', // Set the border color
            },
            '&:hover fieldset': {
              borderColor: 'var(--theme-secondary-color)',
              borderRadius: '15px',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--theme-primary-color)', // Set border color when focused
              borderRadius: '15px',
            },
          },
        }}
      />
  )
}

export default Searchbar;
