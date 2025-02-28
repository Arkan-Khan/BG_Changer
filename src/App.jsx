import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#FF69B4') // Vibrant pink as default
  
  const colors = [
    { name: 'Pink', value: '#FF69B4' },
    { name: 'Red', value: '#FF5252' },
    { name: 'Green', value: '#4CAF50' },
    { name: 'Blue', value: '#2196F3' },
    { name: 'Yellow', value: '#FFC107' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Lavender', value: '#E6E6FA' },
    { name: 'Purple', value: '#9C27B0' },
    { name: 'Orange', value: '#FF9800' }
  ]
  
  // Determine if text should be dark or light based on background
  const getTextColor = (bgColor) => {
    return ['#FFFFFF', '#FFC107', '#E6E6FA'].includes(bgColor) ? '#333333' : 'white'
  }
  
  return (
    <div
      style={{
        backgroundColor: color,
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        transition: 'background-color 0.5s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          marginBottom: '16px', 
          color: '#333'
        }}>
          Color Picker
        </h1>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '8px', 
          marginBottom: '16px' 
        }}>
          {colors.map((colorObj) => (
            <button
              key={colorObj.name}
              onClick={() => setColor(colorObj.value)}
              style={{
                backgroundColor: colorObj.value,
                color: getTextColor(colorObj.value),
                border: colorObj.value === '#FFFFFF' ? '1px solid #ddd' : 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                minWidth: '90px',
                cursor: 'pointer',
                fontWeight: '500',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                margin: '4px'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {colorObj.name}
            </button>
          ))}
        </div>
        
        <div style={{ marginTop: '16px' }}>
          <p style={{ color: '#333' }}>
            Current color: <span style={{ fontWeight: 'bold' }}>
              {colors.find(c => c.value === color)?.name || color}
            </span>
          </p>
        </div>
      </div>
      
      <div style={{ 
        position: 'fixed', 
        bottom: '16px', 
        left: '0', 
        right: '0', 
        textAlign: 'center' 
      }}>
        <p style={{ 
          fontSize: '14px', 
          color: getTextColor(color)
        }}>
          Click on a color button to change the background
        </p>
      </div>
    </div>
  )
}

export default App