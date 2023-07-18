import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

// const octokit = new Octokit ({	
//   auth: "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"	
// });

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

// Create a gist
// octokit.rest.gists.create({	
//   files: {	
//     'README.md': {	
//       content: 'Hello World'	
//     }	
//   }	
//   })	
//   .then((response) => console.log("Gist is created"));

export default GistService;