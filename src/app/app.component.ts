import { Component, OnInit } from '@angular/core';
import { render } from 'react-dom';
import React from 'react';

import { Workspace } from 'polotno/canvas/workspace';
import { SidePanel } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { createStore } from 'polotno/model/store';
 import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const store = createStore({
      key: 'nFA5H9elEytDyPyvKL7T',
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


}


