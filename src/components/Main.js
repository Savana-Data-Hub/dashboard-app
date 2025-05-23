import React from 'react';
import classes from '../App.module.css';

const Main = () => {
    return (
        <div className={classes.container} style={{ textAlign: 'center'}}>
            <img
                src="https://res.cloudinary.com/diaxcqxfp/image/upload/v1731924506/Analyze_Data_1_xaleqz.png"
                alt="Logo"
                style={{ width: '200px', height: 'auto', marginBottom: '20px' }}
            />
            <p style={{ fontSize: '20px', color: '#555' }}>Interactive Dashboards</p>
            <a
                href="https://your-metabase-url/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#4CAF50',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
            >
                Visualize Here
            </a>
        </div>
    );
};

export default Main;
