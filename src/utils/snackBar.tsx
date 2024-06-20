import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Snackbar, SnackbarProps } from '@mui/material';

interface SnackbarContextType {
  showSnackbar: (message: string, options?: SnackbarProps) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarOptions, setSnackbarOptions] = useState<SnackbarProps>({});

  const showSnackbar = useCallback((message: string, options: SnackbarProps = {},) => {
    setSnackbarMessage(message);
    setSnackbarOptions(options);
    setSnackbarOpen(true);
  }, []);

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        {...snackbarOptions}
      />
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export { SnackbarProvider, useSnackbar };
