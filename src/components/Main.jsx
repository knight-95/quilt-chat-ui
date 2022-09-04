import React from "react";
import messages from '../assets/Messages.svg'
import settings from '../assets/settings.svg'
import AddFriend from '../assets/addFriend.svg'
import group from '../assets/group2.svg'


const Main = () => {
  return (
    
    <div className="relative flex h-[82vh] flex-row addfriends_hc_container">
      <div className="w-150 main-menu sidebar_hc_container">
        <nav class="side-menu">
          <ul class="side-menu-items">
            <li>
              <a className="" href="/">
                <img src={messages} alt="messages" />
              </a>
            </li>
            <li>
              <a aria-current="page" class="active" href="/addfriends">
                <img src={AddFriend} alt='addFriend'/>
              </a>
            </li>
            <li>
              <a class="" href="/settings">
                <img src={settings} alt='settings'/>
              </a>
            </li>
            <li>
              <a class="" href="/globalchat">
                <img src={group} alt='group'/>
              </a>
            </li>
          </ul>
        </nav>
      </div>

        <div className="submenu-bg w-1/5 addfriends_hc_main">

        </div>

    </div>
  );
};

export default Main;
