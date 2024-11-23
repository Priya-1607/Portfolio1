import React from 'react'
import './navbar.css'
import AddHomeIcon from '@mui/icons-material/AddHome';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PortraitIcon from '@mui/icons-material/Portrait';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import CreateIcon from '@mui/icons-material/Create';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
function Navbar() {
  return (
    <div>
		  {/* <nav>
          <ul>
            <li></li>
            <li><a href="/contact">Contact Us test</a></li>

			
          </ul>
        </nav> */}
        <nav className="navigation-bar">
	<span>
	<a href="/"><AddHomeIcon /></a>
	</span>
	<span>
	<a href="/about">
	{/* <i className="fa-solid fa-user"></i> */}
	<PersonIcon/>
	</a>
	</span>

	<span>
	<a href="/contact"><LocalPhoneIcon/></a>
	</span>
	<span>
	<a href="/project"><BatchPredictionIcon/></a>
	</span>

	<span>
	<a href="/experience">
	<NextWeekIcon/>
	</a>
	</span>


	<span>
	<a href="/education">
	<CreateIcon/>
	</a>
	</span>
	<span>
	<a href="/skill">
	<LightbulbIcon/>
	</a>
	</span>
	
</nav>
</div>
  )
}

export default Navbar