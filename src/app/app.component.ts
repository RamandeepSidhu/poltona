import { Component, OnInit } from '@angular/core';
import { render } from 'react-dom';
import React from 'react';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';

import { Workspace } from 'polotno/canvas/workspace';
import { SidePanel } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { createStore } from 'polotno/model/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // private player: videojs.Player;

 
  ngOnInit() {
    // this.player = videojs('video-player', {
    //   controls: true,
    //   fluid: true,
    //   plugins: {
    //     // Add any necessary plugins for video editing
    //   }
    // });
    // this.player.src('/path/to/your/video.mp4');
    const store = createStore({
      key: 'r1WuPey1JuY1yl_L4Vyb',
      showCredit: true,
    });

    store.addPage();

    render(
      React.createElement(PolotnoContainer, { className: 'polotno-app-container' },
        React.createElement(SidePanelWrap, null,
          React.createElement(SidePanel, { store: store })
        ),
        React.createElement(WorkspaceWrap, null,
          React.createElement(Toolbar, { store: store }),
          React.createElement(Workspace, { store: store }),
          React.createElement(ZoomButtons, { store: store })
        )
      ),
      document.getElementById('polotno-root')
    );
  }
  // trimVideo() {
  //   // Implement video trimming functionality using the videojs API
  //   // Example: Get start and end time, and create a trimmed clip
  //   const startTime = 10; // Start time in seconds
  //   const endTime = 30; // End time in seconds
  //   const trimmedClip = this.player.currentTime(startTime).cut(endTime);

  //   // Perform any additional editing operations as needed

  //   // Save the edited video or perform further actions
  // }
}
