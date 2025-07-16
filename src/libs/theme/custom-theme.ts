'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { colorPalette } from './colorPalette';

let theme = createTheme({
  typography: {
    fontFamily: 'sans-serif', 
    h1: {
      fontSize: '1.8rem', // 20px equivalent
      fontWeight: 700,
    },
    h2:{
      fontSize: '1rem', // 16px equivalent
      fontWeight: 700,
    },
    body1: {
      fontSize: '0.875rem', // 14px equivalent
      fontWeight: 500,
    },
    body2: {
      fontSize: '0.875rem', // 14px equivalent
      fontWeight: 400,
    },
    h5:{
      fontSize: '0.75rem', // 12px equivalent
      fontWeight: 200,
    },
    caption: {
      fontSize: '0.625rem', // 10px equivalent
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      mobile:0,
      tablet: 768,
      xtablet: 1024,
      laptop: 1280,
      desktop: 1366,
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transformOrigin: 'top right',
          right: 15,
          top: '1px',
          left: 'auto',
          fontSize: '14px',
          color: colorPalette.gray[4],

          '&.Mui-focused': {
            color: colorPalette.gray[4], // Change color when focused
            top: '2px',
            scale: 0.9,
            backgroundColor: colorPalette.gray[7],
          },

          '&.Mui-error': {
            color: colorPalette.blue[1], // Error color
          },
        },
      },
    },

  //  MuiSelect: {
  //     styleOverrides: {
  //       root: {
  //         maxHeight: '48px',
  //       padding: '0px !important',
  //         backgroundColor: colorPalette.gray[7],

  //         '& label': {
  //           transformOrigin: 'top right',
  //           right: '25px',
  //           top: '0px',
  //           left: 'auto',
  //           fontSize: '14px',
  //           color: colorPalette.gray[4],

  //           '&.Mui-error': {
  //             color: colorPalette.blue[1], // Error color for helper text
  //           },
  //         },
  //         '& legend': {
  //           textAlign: 'left',
  //         },

  //         '&.Mui-disabled': {
  //           backgroundColor: colorPalette.gray[7],
  //           color: colorPalette.gray[4],
  //           cursor: 'not-allowed',
  //           opacity: 0.6,

  //           '&:hover .MuiOutlinedInput-notchedOutline': {
  //             borderColor: `${colorPalette.blue[1]} !important`,
  //             backgroundColor: colorPalette.gray[7],
  //             color: colorPalette.gray[4],
  //             cursor: 'not-allowed',
  //             // opacity: 0.6,
  //           },

  //           // Add hover effect when disabled
  //           '&:hover': {
  //             backgroundColor: `${colorPalette.gray[4]} !important`,
  //             color: `${colorPalette.gray[7]} !important`,
  //             opacity: 0.6,
  //           },
  //         },
  //       },
  //       select: {
  //         padding: '14px 16px !important',
  //         direction: 'rtl',
  //         borderRadius: '16px',
  //         fontSize: '12px',
  //         fontWeight: 600,
  //         paddingRight: '16px !important',
  //         color: colorPalette.gray[4],
  //         backgroundColor: `${colorPalette.gray[7]} !important`,
  //       },
  //     },
  //   },
    // MuiMenu: {
    //   styleOverrides: {
    //     paper: {
    //       borderRadius: '12px',
    //       maxHeight: '250px',
    //       marginTop: '10px',
    //     },
    //     list: {
    //       direction: 'rtl',
    //       padding: '10px 0',
    //       borderRadius: '8px',
    //       display: 'flex',
    //       flexDirection: 'column',
    //       gap: '4px',
    //     },
    //   },
    // },

    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       minHeight: '40px',
    //       padding: '10px 16px',
    //       width: '96%',
    //       borderRadius: '6px',
    //       margin: 'auto',
    //       fontSize: '12px',
    //       fontWeight: 600,
    //       color: colorPalette.gray[4],
    //       backgroundColor: colorPalette.gray[7],
    //       '&.Mui-selected': {
    //         backgroundColor: colorPalette.gray[7],
    //         color: colorPalette.gray[1],
    //         borderRadius: '8px',
    //       },
    //       '&:hover': {
    //         backgroundColor: `${colorPalette.gray[7]} !important`,
    //         color: colorPalette.gray[1],
    //       },
    //     },
    //   },
    // },
    // MuiFormControlLabel: {
    //   styleOverrides: {
    //     root: {
    //       display: 'flex',
    //       alignItems: 'center',
    //       gap: 8, // Adjust space between checkbox and label
    //     },

    //     label: {
    //       textWrap: 'nowrap',
    //       fontSize: '12px', // Set font size
    //       fontWeight: 600, // Bold label
    //       color: colorPalette.gray[4], // Default text color
    //     },
    //   },
    // },

    

    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: {
    //       //border: `1.5px solid ${colorPalette.gray[4]}`,
    //       // transition: 'all 0.2s ease-in-out',
    //       color: colorPalette.gray[7], // Default color (gray)

    //       '& .MuiSvgIcon-root': {
    //         fontSize: 18, // Adjust icon size
    //       },

    //       // Unchecked state styles
    //       '&::before': {
    //         content: '""',
    //         position: 'absolute',
    //         top: '50%',
    //         left: '50%',
    //         width: 14, // Outer box size
    //         height: 16,
    //         outline: 'none',
    //         border: `1.5px solid ${colorPalette.gray[4]}`, // Border similar to the unchecked style
    //         borderRadius: 4, // Rounded square edges
    //         transform: 'translate(-50%, -50%)',
    //         // transition: 'all 0.2s ease-in-out',
    //         boxShadow: 'none',
    //       },

    //       // Checked state styles
    //       '&.Mui-checked': {
    //         color: 'white', // Inner check color
    //         backgroundColor: colorPalette.blue[1], // Outer box color
    //         borderRadius: 4, // Rounded square like the image
    //         padding: 3, // Adjust padding to match the image
    //         // transition: 'background-color 0.2s ease-in-out',

    //         '& + .MuiFormControlLabel-label': {
    //           color: colorPalette.blue[1], // Change label color when checked
    //         },

    //         '&::before': {
    //           content: '""',
    //           position: 'absolute',
    //           top: '50%',
    //           left: '50%',
    //           width: 14, // Outer box size
    //           height: 16,
    //           backgroundColor: colorPalette.blue[1], // Blue background
    //           borderRadius: 4, // Rounded square edges
    //           transform: 'translate(-50%, -50%)',
    //         },

    //         '&::after': {
    //           content: '""',
    //           position: 'absolute',
    //           top: '50%',
    //           left: '50%',
    //           width: 9, // Inner checkmark size
    //           height: 9,
    //           //backgroundColor: 'white', // White checkmark
    //           clipPath: 'polygon(14% 44%, 0% 65%, 50% 100%, 100% 15%, 84% 0%, 41% 62%)', // Custom checkmark shape
    //           transform: 'translate(-50%, -50%)',
    //         },
    //       },

    //       '&:hover': {
    //         backgroundColor: 'transparent', // No hover effect
    //       },

    //       '&:focus-visible': {
    //         outline: 'none', // Remove focus outline
    //       },
    //     },
    //   },
    // },

    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor:colorPalette.gray[7],
          color: colorPalette.gray[4],
          fontSize:'14px',
          fontWeight:400,
          '& .MuiFormLabel-root': {
            fontSize: '12px !important',
          },
          '& .label': {
            transformOrigin: 'top right',
            right: 26,
            top: '-2px',
            left: 'auto',
            color: colorPalette.gray[4],
            '&.Mui-error': {
              color: colorPalette.blue[1], // Error color for helper text
            },
          },

          legend: {
            textAlign: 'right',
          },

          '& .MuiInputBase-root': {
            minHeight: '48px !important',
            padding: '16px',
          },
          '& legend': {
            textAlign: 'right',
          },
          '& label.Mui-focused': {
            color: colorPalette.gray[9],
            '&.Mui-error': {
              color: colorPalette.blue[1], // Error color for helper text
            },
          },

          '& label, & .MuiFormHelperText-root': {
            textAlign: 'right', // Aligning label and helper text to the right
            direction: 'rtl', // Ensuring RTL for both label & helper text
            marginRight: '13px',
            top: '-1px',
            '& label.Mui-focused': {},
          },
          '& .Mui-error': {
            '& label': {
              color: colorPalette.blue[1], // Error color for label when there's an error
            },
            '& .MuiOutlinedInput-root': {
              borderColor: colorPalette.blue[1], // Error border color
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          maxHeight: '48px',
          padding: '13px 16px !important',
          borderRadius: '8px',
          backgroundColor: colorPalette.gray[7],
          direction: 'rtl', // Input text direction

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.gray[7], // Default hover border color
            backgroundColor: colorPalette.gray[7],
            color: colorPalette.gray[4],
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.gray[7],
            borderWidth: '0.5px',
            backgroundColor: colorPalette.gray[7],
            color: colorPalette.gray[4],
          },

          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.gray[7], // Error border color
            borderWidth: '0.5px', // You can adjust the border width for the error state
            color: colorPalette.gray[4],
            backgroundColor: colorPalette.gray[7],
          },

          '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.gray[7], // Error border color on hover
            color: colorPalette.gray[4],
            backgroundColor: colorPalette.gray[7],
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.gray[6], // Error color on focus
            backgroundColor: colorPalette.gray[7],
          },

          '&.Mui-error': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colorPalette.gray[7], // Error color on hover
              backgroundColor: colorPalette.gray[7],
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colorPalette.gray[7], // Error color on focus
              backgroundColor: colorPalette.gray[7],
            },
          },
        },

        input: {
          padding: '0px',
          zIndex: '1',
          color: colorPalette.gray[4],
          fontSize: '14px',
          direction: 'ltr',
          textAlign: 'left',
          // Ensure text inside input is RTL aligned
        },
        notchedOutline: {
          borderColor: colorPalette.gray[7], // Default border color
          borderWidth: '0.5px', // Optional: Adjust border thickness
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textAlign: 'right', // Ensuring helper text is also RTL
          direction: 'rtl',
          color: colorPalette.gray[4], // Default helper text color
          padding: '2px 10px 0px 0px !important',
          fontSize: '9px !important',
          '&.Mui-error': {
            color: colorPalette.blue[1], // Error color for helper text
          },
        },
      },
    },

   
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none !important',
          fontSize: '14px',
          borderRadius: '8px',
        },
        sizeMedium: {
          padding: '10px 10px !important',
        },
        sizeSmall:{
          padding:'0px 0px !important'
        }
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: colorPalette.blue[1],
            color: colorPalette.gray[1],
            borderRadius:'8px',
           
           // '&:hover': {
            //  backgroundColor: colorPalette.blue[4],
           // },
           // '&:active': {
            //  backgroundColor: colorPalette.blue[4],
            //  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
           // },
           // '&:focus': {
            //  backgroundColor: colorPalette.blue[4],
           //   boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
           // },
           // '&:disabled': {
           //   backgroundColor: colorPalette.gray[3],
           //   color: colorPalette.gray[8],
          //  },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border:`1px solid ${colorPalette.blue[1]}`,
            color: colorPalette.blue[1],
              borderRadius:'8px'
            //'&:hover': {
           //   backgroundColor: colorPalette.pink[4],
           // },
          //  '&:active': {
           //   backgroundColor: colorPalette.pink[4],
           //   boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
          //  },
          //  '&:focus': {
           //   backgroundColor: colorPalette.pink[4],
          //    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
          //  },
          //  '&:disabled': {
           //   backgroundColor: colorPalette.gray[3],
          //    color: colorPalette.gray[8],
          //  },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: colorPalette.blue[1],
           // '&:hover': {
            //  backgroundColor: colorPalette.blue[4],
           // },
           // '&:active': {
            //  backgroundColor: colorPalette.blue[4],
            //  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
           // },
           // '&:focus': {
            //  backgroundColor: colorPalette.blue[4],
           //   boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
           // },
           // '&:disabled': {
           //   backgroundColor: colorPalette.gray[3],
           //   color: colorPalette.gray[8],
          //  },
          },
        },
      ],
    },
//     MuiPickersDay: {
//       styleOverrides: {
//         root: {
//           borderRadius: '50%',
//           color: '#FFFFFF',
//           '&.Mui-selected': {
//             color: '#161616',
//             backgroundColor: '#149DE1',
//           },
//           '&.MuiPickersDay-today': {
//             border: '1px solid #149DE1',
//           },
//         },
//       },
//     },
//     MuiPickersCalendarHeader: {
//       styleOverrides: {
//         root: {
//           color: '#888888',
//         },
//         switchViewButton: {
//           color: '#888888',
//         },
//       },
//     },
//     MuiDayCalendar: {
//       styleOverrides: {
//         weekDayLabel: {
//           color: '#FFFFFF',
//         },
//       },
//     },
//     MuiPickersArrowSwitcher: {
//       styleOverrides: {
//         button: {
//           color: '#888888',
//         },
//       },
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#161616',
//           borderRadius: '12px',
//           padding: '8px',
//           color: '#FFFFFF',
//         },
//       },
//     },
//     MuiInputBase: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#212121',
//           borderRadius: '12px',
//           color: '#FFFFFF',
//           '& input': {
//             padding: '11.5px 10px 11.5px 16px',
//             color: '#FFFFFF',
//           },
//         },
//       },
//     },
  },

  
  }
);

theme = responsiveFontSizes(theme);

export default theme;
