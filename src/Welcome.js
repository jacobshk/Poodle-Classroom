import * as React from 'react';
import {Typography , Box} from '@mui/material';
import * as THREE from 'three'
import GLOBE from "vanta/dist/vanta.globe.min.js";



class Welcome extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      THREE:THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffffff,
      backgroundColor: 0xafbaff
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
      <div style={{ position:"fixed",height: "100%", width: "100%" }} ref={this.vantaRef}>
        <div className='root'>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:1,
            height:1,
          }}>
          <Typography variant="h3" component="div" sx={{marginTop: 20}}>
                Welcome to Poodle Classroom!
          </Typography>
          <Typography variant="h5" component="div" sx={{marginTop: 5}}>
            Our online learning platform empowers you to explore, grow, and excel!
          </Typography>
        </Box>
        </div>
      </div>
      
    );
  }
}
export default Welcome;