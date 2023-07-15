import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const GistService = ({ username }) => {
  const [gists, setGists] = useState([]);

  useEffect(() => {
    const fetchGists = async () => {
      try {
        const response = await octokit.gists.listForUser({ username });
        const { data } = response;
        setGists(data);
      } catch (error) {
        console.error('Error fetching gists:', error);
      }
    };

    fetchGists();
  }, [username]);

  return { gists };
};

export default GistService;