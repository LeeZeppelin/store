const baseSize = 6;
const sizeUnit = 'px';

export const config = {
  palette: {
    white: '#ffffff',
    nearWhite: '#eeeeee',
    lightGray: '#cccccc',
    midGray: '#666666',
    nearBlack: '#333333'
  },
  fontFamily: { primary: 'georgia', secondary: 'arial' },
  fontSize: {
    small: `${baseSize * 2}${sizeUnit}`,
    medium: `${baseSize * 3}${sizeUnit}`
  }
};
