import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
    const useInfo = useContext(AuthContext);
    return useInfo;

};

export default useAuth;