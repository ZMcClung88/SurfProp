import React, { Coponent } from 'react';

const PageBreak = () => {
  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <div style={styles.lineStyle} />
    </div>
  );
};

const styles = {
  lineStyle: {
    height: '1px',
    width: '90%',
    borderBottom: '1px solid black',
    marginTop: '15%'
  }
};

export default PageBreak;
