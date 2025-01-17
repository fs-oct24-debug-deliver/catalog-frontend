import React from 'react';
import Box from '@mui/material/Box';

export const NoProductsFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '50%',
        margin: '20px 0 80px',
        textAlign: 'center',
      }}
    >
      <img
        src="../../../../../public/img/cuty-cat-not-found-products.webp"
        alt="Not Found Page with cuty cat"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '8px',
        }}
      />
    </Box>
  );
};
