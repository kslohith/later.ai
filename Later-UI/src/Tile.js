import React, { useState } from 'react';

function Tile(props) {
//   const [activeTile, setActiveTile] = useState(0);

  const handleTileClick = (tileNumber) => {
    props.setActiveTile(tileNumber);
  }

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        {props.doc.map((el, index) => (
          <div
            // style={{ ...styles.tile, backgroundColor: props.activeTile === index ? '#0056b3' : '#2581cb' }}
            style={{
                ...styles.tile,
                backgroundColor: props.activeTile === index ? '#0056b3' : '#2581cb',
                boxShadow: props.activeTile === index ? '0px 0px 8px rgba(0, 0, 0, 0.5)' : 'none',
                transition: 'box-shadow 0.3s ease-in-out' // Add transition for smoother effect
              }}
            key={index}
            onClick={() => handleTileClick(index)}
          >
            {/* <div style={styles.tileHeader}>{el.Title}</div> */}
            {/* <div style={styles.metadata}>{el.Metadata}n</div> */}
            <div style={styles.truncatedText}>{el}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh', // Make the container full height of the viewport
  },
  sidebar: {
    flex: 1, // Take up remaining space
    background: '#fff', // White background
    padding: '20px',
    overflowY: 'auto', // Enable vertical scrolling if needed
  },
  tile: {
    width: '100%', // Take up 100% width of the parent div
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '2581cb', // Blue color
    cursor: 'pointer',
    borderRadius: '10px', // Rounded borders
    transition: 'background-color 0.3s ease', // Transition for background color change
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for slight elevation
  },
  tileHeader: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#fff', // White text color
  },
  metadata: {
    fontSize: '12px',
    color: '#ccc',
    marginBottom: '8px',
  },
  truncatedText: {
    fontSize: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#fff', // White text color
  },
};

export default Tile;
