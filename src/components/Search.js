import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

//nothing = arrow function code is run at initial render + after every rerender
//empty array = arrow function code is run at initial render,
//an array with data = arrow function code is run at initial render + after every rerender IF data has changed since last render

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </div>
        <div className='content'>
          <div className='header'>
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

// YES I trust wikipedia API and use dangerouslySetinnerHTML :)

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter search term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            className='input'

          />
        </div>
      </div>
      <div className='ui celled list'>
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;
