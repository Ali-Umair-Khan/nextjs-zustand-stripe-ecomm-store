

export default function Loading() {
    const styles = {
        loadingContainer: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f3f4f6',
        },
        loadingSpinner: {
          width: '50px',
          height: '50px',
          border: '5px solid #e5e7eb',
          borderTop: '5px solid #3b82f6',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        },
        '@keyframes spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      };
      
      return (
        <div style={styles.loadingContainer}>
          <div style={styles.loadingSpinner}></div>
        </div>
      );
      
}