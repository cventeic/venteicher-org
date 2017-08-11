import { Component } from '@angular/core';

import { Card } from './card';
import { Header } from './header';

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

    this.cards = [

      new Card({
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
        tags: [ 'project', 'site' ]
      }),


    ]
  }
}
