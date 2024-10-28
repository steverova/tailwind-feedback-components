import { useEffect, useState } from 'react';


const GistEmbed = ({ gistId }) => {
  const [gistContent, setGistContent] = useState(null);

  useEffect(() => {
    const fetchGist = async () => {
      try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`);
        const gistData = await response.json();
        const fileContent = gistData.files[Object.keys(gistData.files)[0]].content;
        setGistContent(fileContent);
      } catch (error) {
        console.error("Error fetching Gist:", error);
      }
    };

    fetchGist();
  }, [gistId]);

  return (
    <div>
      {gistContent ? (
        <pre>
          <code>{gistContent}</code>
        </pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GistEmbed;
