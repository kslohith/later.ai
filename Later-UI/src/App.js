import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useState , useEffect, useRef} from 'react';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchAppBar from './SearchBar';
import Elevation from './Elevation';
import Chat from './Chat';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Paper from '@mui/material/Paper';
import Tile from './Tile';
import axios from 'axios'; 
import laterImage from './later.png';


const drawerWidth = 240;


function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  // const [TagInput, setTagInput] = useState({
  //   '#Tag1': [{
  //     Title: 'Title1',
  //     Metadata : 'Metadata1',
  //     Doc: 'In the vast expanse of the universe, where galaxies twinkle like diamonds against the velvet sky, /n' +  'there exists an enchanted forest teeming with life. Beneath the canopy of towering trees, a colorful array of creatures frolic and play, their vibrant hues painting a picturesque scene against the lush green backdrop. Butterflies flutter gracefully among the wildflowers, their delicate wings shimmering in the dappled sunlight. Nearby, a majestic elephant trumpets loudly, its tusks gleaming in the golden glow of the setting sun. Further down the path, a curious raccoon peers out from behind a bush, its masked face filled with mischief. As evening falls, the forest comes alive with the melodic chirping of crickets and the haunting call of the nocturnal owl. Stars twinkle overhead like scattered gems, casting a soft glow upon the earth below. And so, the cycle of life continues in this magical realm, where every creature plays a part in the intricate tapestry of natures design. In the vast expanse of the universe, where galaxies twinkle like diamonds against the velvet sky, there exists an enchanted forest teeming with life. Beneath the canopy of towering trees, a colorful array of creatures frolic and play, their vibrant hues painting a picturesque scene against the lush green backdrop. Butterflies flutter gracefully among the wildflowers, their delicate wings shimmering in the dappled sunlight. Nearby, a majestic elephant trumpets loudly, its tusks gleaming in the golden glow of the setting sun. Further down the path, a curious raccoon peers out from behind a bush, its masked face filled with mischief. As evening falls, the forest comes alive with the melodic chirping of crickets and the haunting call of the nocturnal owl. Stars twinkle overhead like scattered gems, casting a soft glow upon the earth below. And so, the cycle of life continues in this magical realm, where every creature plays a part in the intricate tapestry of natures design.In the vast expanse of the universe, where galaxies twinkle like diamonds against the velvet sky, there exists an enchanted forest teeming with life. Beneath the canopy of towering trees, a colorful array of creatures frolic and play, their vibrant hues painting a picturesque scene against the lush green backdrop. Butterflies flutter gracefully among the wildflowers, their delicate wings shimmering in the dappled sunlight. Nearby, a majestic elephant trumpets loudly, its tusks gleaming in the golden glow of the setting sun. Further down the path, a curious raccoon peers out from behind a bush, its masked face filled with mischief. As evening falls, the forest comes alive with the melodic chirping of crickets and the haunting call of the nocturnal owl. Stars twinkle overhead like scattered gems, casting a soft glow upon the earth below. And so, the cycle of life continues in this magical realm, where every creature plays a part in the intricate tapestry of natures design.'    
  //   }, {
  //     Title: 'Title2',
  //     Metadata: 'Metadata2',
  //     Doc: 'Amidst the bustling city streets, where skyscrapers tower over the bustling crowds, lies a hidden sanctuary of tranquility. In the heart of the metropolis, a secret garden blooms with a riot of colors, its fragrant blossoms perfuming the air with their sweet scent. Here, amid the chaos of urban life, one can find solace in the gentle rustle of leaves and the soothing melody of birdsong. Tall trees provide shade from the relentless sun, while winding paths lead to secluded alcoves perfect for quiet contemplation. Butterflies flit from flower to flower, their delicate wings shimmering in the sunlight like iridescent jewels. Nearby, a babbling brook meanders through the garden, its crystal-clear waters teeming with life. Dragonflies dart overhead, their iridescent wings catching the light as they dance in the breeze. As day turns to night, the garden takes on a mystical aura, with fireflies lighting up the darkness like tiny lanterns. Stars twinkle overhead, casting a soft glow upon the serene landscape below. And so, amidst the chaos of city life, this hidden oasis offers a welcome respite—a reminder of the beauty and wonder that can be found in the most unexpected of places.      '
  //   }, {
  //     Title: 'Title3',
  //     Metadata: 'Metadata3',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }],
  //   '#Tag2': [{
  //     Title: 'Title4',
  //     Metadata : 'Metadata4',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }, {
  //     Title: 'Title5',
  //     Metadata: 'Metadata5',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }, {
  //     Title: 'Title6',
  //     Metadata: 'Metadata6',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }],
  //   '#Tag3': [{
  //     Title: 'Title7',
  //     Metadata : 'Metadata7',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }, {
  //     Title: 'Title8',
  //     Metadata: 'Metadata8',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }, {
  //     Title: 'Title9',
  //     Metadata: 'Metadata9',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }],
  //   '#Tag4': [{
  //     Title: 'Title10',
  //     Metadata : 'Metadata10',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }, {
  //     Title: 'Title11',
  //     Metadata: 'Metadata11',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }, {
  //     Title: 'Title12',
  //     Metadata: 'Metadata12',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }],
  //   '#Tag5': [{
  //     Title: 'Title13',
  //     Metadata : 'Metadata13',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }, {
  //     Title: 'Title14',
  //     Metadata: 'Metadata14',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }, {
  //     Title: 'Title15',
  //     Metadata: 'Metadata15',
  //     Doc: 'Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1Doc1'    
  //   }]
  // });
  const [TagInput, setTagInput] = useState({
    '#Tag1':["Doc1"]
  });
  const [activeTile, setActiveTile] = useState(0);
  const [selectedTagIndex, setselectedTagIndex] = useState(0);
  const container = window !== undefined ? () => window().document.body : undefined;
  const intervalId = useRef(null);

  useEffect(() => {
    if(!intervalId.current){
      intervalId.current = setInterval(() => {
        axios.get('https://later-ai-backend.onrender.com/getSavedNotes', { mode: 'no-cors' }) 
          .then(response => {
            console.log(response.data);
            setTagInput(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, 30000);
    }
  }, []);


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // const drawer = (
  //   <div style={{ width: drawerWidth, overflowY: 'auto' }}>
  //     <Toolbar sx={{ textAlign: 'center', display:'flex', justifyContent: 'center', alignItems: 'center', padding: '0px 0px' }}>
  //         <Typography sx={{textAlign: 'center'}}>
  //           Later.ai
  //         </Typography> 
  //     </Toolbar>

  //     <List>
  //       {Object.keys(TagInput).map((tagKey, index) => (
  //         <ListItem key={tagKey} disablePadding>
  //           <ListItemButton selected={index === selectedTagIndex} autoFocus={index === selectedTagIndex} onClick={() => handleListItemClick(index)}>
  //             <Paper variant="outlined" sx={{ p: 1, mb: 1, borderRadius: '8px', textAlign: 'center', width: '90%', margin: 'auto' }}>
  //               <ListItemText primary={tagKey} />
  //             </Paper>
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>

  //   </div>
  // );


  const drawer = (
    <div style={{ width: drawerWidth, overflowY: 'auto' }}>
      {/* <Toolbar sx={{ textAlign: 'center', display:'flex', justifyContent: 'center', alignItems: 'center', padding: '0px 0px' }}> */}
        {/* <Typography sx={{textAlign: 'center'}}> */}
          {/* <img src={laterImage} alt="Later.ai" /> */}
        {/* </Typography>  */}
      {/* </Toolbar> */}

      <Toolbar sx={{ textAlign: 'center', display:'flex', justifyContent: 'center', alignItems: 'center', padding: '0px 0px' }}>
        <img src={laterImage} alt="Later.ai" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }} />
      </Toolbar>
  
      <List>
        {Object.keys(TagInput).map((tagKey, index) => (
          <ListItem key={tagKey} disablePadding>
            <ListItemButton selected={index === selectedTagIndex} autoFocus={index === selectedTagIndex} onClick={() => handleListItemClick(index)}>
              <Paper variant="outlined" sx={{ p: 1, mb: 1, borderRadius: '8px', textAlign: 'center', backgroundColor: index === selectedTagIndex ? 'rgb(0, 86, 179)' : '#2581cb', width: '90%', margin: 'auto' }}>
                <ListItemText primary={tagKey} sx={{
                  color: index === selectedTagIndex ? '#ffffff' : '#ffffff', 
                  fontWeight: index === selectedTagIndex ? 'bold' : 'normal'
                }}  />
              </Paper>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  const handleListItemClick = (index) => {
    setselectedTagIndex(index);
    setActiveTile(0);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* first bar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
       {/* second bar */}
      <Box
        component="main"
        sx={{ marginTop:'24px', flexGrow: 1, p: 3, width: { sm: 250 }}}
      >
        <Tile activeTile= {activeTile} setActiveTile={setActiveTile} doc={TagInput[Object.keys(TagInput)[selectedTagIndex]]}/> 
      </Box>

      <Divider orientation="vertical" flexItem />

      {/* third bar */}
      <Box
          component="main"
          sx={{
            p: 3,
            width: { sm: 500 },
            display: 'flex',
            marginLeft: '20px',
            flexDirection: 'column', // Setting flex direction to column
            alignItems: 'top',
            wordWrap: 'break-word', // or whiteSpace: 'pre-line'
            backgroundColor: '#f5f5f5', // Setting background color to gray
            borderRadius: '16px', // Increase border radius
            overflow: 'hidden', // Hiding overflow to keep the borders rounded
            border: '2px solid #ddd', // Adding border with thickness and color
            height: '97vh', // Setting height to 100%
            paddingTop: '10px', // Adding padding to the top
            paddingBottom: '10px', // Adding padding to the bottom
            marginTop: '20px',
            marginBottom: '20px'
          }}
        >
          <Box sx={{ overflowY: 'auto', flexGrow: 1 }}>
            <Typography paragraph>
              {TagInput[Object.keys(TagInput)[selectedTagIndex]][activeTile]}
            </Typography>
          </Box>
      </Box>

     {/* fourth bar */}
     <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${1240}px)` },
            display: 'flex',
            flexDirection: 'column', // Setting flex direction to column
            alignItems: 'top',
            wordWrap: 'break-word', // or whiteSpace: 'pre-line'
            backgroundColor: '#f5f5f5', // Setting background color to gray
            borderRadius: '16px', // Increase border radius
            overflow: 'hidden', // Hiding overflow to keep the borders rounded
            border: '2px solid #ddd', // Adding border with thickness and color
            height: '97vh', // Setting height to 100%
            paddingTop: '10px', // Adding padding to the top
            paddingBottom: '10px', // Adding padding to the bottom
            margin: '20px 20px',
          }}
      >
        <Chat/>
     </Box>
    
    </Box>
  );
}

export default ResponsiveDrawer;