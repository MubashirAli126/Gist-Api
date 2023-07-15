import React from 'react';
import GistService from '../services/gistService';
import GistList from './GistList';

const Gist = () => {
    const username = 'mubashirali126'; // Replace with the desired GitHub username
  
    const { gists } = GistService({ username });
  
    return <GistList gists={gists} />;
  };
  

export default Gist
