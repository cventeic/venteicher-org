import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

import imgUriLinkedin from '../images/linkedin.svg';
import imgUriGithub from '../images/mark-github.svg';
import imgUriLinux  from '../images/Linux_logo_tux.svg';
import imgUriKubernetes from '../images/kubernetes-logo.svg';
import imgUriDocker from '../images/docker-brand-full.svg';
import imgUriAngular from '../images/Angular_logo.svg';
import imgUriFlex   from '../images/flex-container.svg';
import imgUriPassenger from '../images/passenger.svg';
import imgUriRails  from '../images/Ruby_On_Rails_Logo.svg';
import imgUriMaterial from '../images/material-logo.svg';
import imgUriContainer from '../images/Container-Engine.svg';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  mdIconRegistry: MdIconRegistry;
  sanitizer: DomSanitizer;

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    console.log("loading icon constructor");

    this.mdIconRegistry = mdIconRegistry;
    this.sanitizer = sanitizer;

    this.mdIconRegistry
      .addSvgIcon( 'linkedin-box',
        this.sanitizer.bypassSecurityTrustResourceUrl(
        imgUriLinkedin
        )
      )
      .addSvgIcon( 'github-circle',
        this.sanitizer.bypassSecurityTrustResourceUrl(
        imgUriGithub
        )
      )
      .addSvgIcon( 'linux',
        this.sanitizer.bypassSecurityTrustResourceUrl(
        imgUriLinux
        )
      )
      .addSvgIcon( 'kubernetes',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          imgUriKubernetes
        )
      )
      .addSvgIcon( 'docker',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          imgUriDocker
        )
      )
      .addSvgIcon( 'angular',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          imgUriAngular
        )
      )
      .addSvgIcon( 'flex',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          imgUriFlex
        )
      )
      .addSvgIcon( 'passenger',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          imgUriPassenger
        )
      )
      .addSvgIcon( 'rails',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          imgUriRails
        )
      )
      .addSvgIcon( 'angular-material',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          imgUriMaterial
        )
      )
      .addSvgIcon( 'google-container-engine',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          imgUriContainer
        )
      );
  }
  ngOnInit() {
  }
}


