import { Component } from '@angular/core';

import { Card } from './card';
import { Header } from './header';
import { Hyperlink } from './hyperlink';

import imgUri from './images/ChrisProfilePicture.jpg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cards: Array<Card>;

  constructor (){
    console.log("app.component.ts constructor");

    this.cards = [

      new Card({
        hyperlinks: [
          new Hyperlink({
            href:"https://github.com/cventeic",
            icons:["github-circle"],
            texts:["GitHub"]
          }),

          new Hyperlink({
            href:"https://linkedin.com/in/chris-venteicher",
            icons:["linkedin-box"],
            texts:["LinkedIn"]
          }),

          new Hyperlink({
            href: "tel:262 607 2040",
            icons:["phone"],
            texts:["Phone: 262 607 2040"]
          }),

          new Hyperlink({
            href: "email:chris@venteicher.org",
            icons:["email"],
            texts:["Email: chris@venteicher.org"]
          }),

        ],

        headers: [
          new Header({
            tags: [],
            avatarUrls: [ imgUri ],
            titles: [
              `<h1>Chris Venteicher</h1>`,
              `<h2>Software Engineer, Developer of Venteicher.org</h2>`,
            ],
          }),
        ],
        contents: [
          `
            <p>
              I am a Computer Engineer who is bothered when he doesn't know how something works, enjoys building things, enjoys programming and runs Linux on all his computers.
            </p>
            I have the most interest and experience in:
            <ul>
              <li> Machine Learning (Genetic Algorithms, Neural Nets, Markov Models, Agent Systems) </li>
              <li> Web Technologies (d3.js, Rails, Javascript, Angular) </li>
              <li> Cellular (Android, Modems 3GPP, 4G)</li>
              <li> Networking (IPv4, IPv6, Proxy Mobile IP, PPP, DHCP, VPN, WiFi, VoIP/SIP)</li>
              <li> Linux (Ubuntu, Kernel, Network Drivers, Performance Tools)</li>
              <li> Video Compression, 3D Graphics</li>
            </ul>

           `
        ],
        tags: [ 'person' ]
      }),

      new Card({
        headers: [
          new Header({
            tags: [],
            avatarUrls: [ imgUri ],
            titles: [
              "<h1>Venteicher.org Web Site<h1>",
              "<h2>Tools and Components<h2>",
             ],
          }),
        ],
        contents: [
          `
          `
        ],
        tags: [ 'project', 'site' ],

        hyperlinks: [
          new Hyperlink({
            href: "https://angular.io",
            icons:["angular"],
            texts:["Angular.io (v4)"]
          }),

          new Hyperlink({
            href: "https://material.angular.io",
            icons:["angular-material"],
            texts:["Angular Material"]
          }),

          new Hyperlink({
            href: "https://kubernetes.io",
            icons:["kubernetes"],
            texts:["Kubernetes"]
          }),

          new Hyperlink({
            href: "https://cloud.google.com/container-engine",
            icons:["google-container-engine"],
            texts:["Google Container Engine"]
          }),

          new Hyperlink({
            href: "https://www.phusionpassenger.com",
            icons:["passenger"],
            texts:["Passenger"]
          }),

          new Hyperlink({
            href: "https://www.docker.com",
            icons:["docker"],
            texts:["Docker"]
          }),

          new Hyperlink({
            href: "https://lwn.net/Kernel",
            icons:["linux"],
            texts:["Linux"]
          }),


        ],


      }),


    ]
  }
}