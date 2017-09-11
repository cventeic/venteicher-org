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
        images: [imgUri],
        hyperlinks: [
          new Hyperlink({
            href:"https://github.com/cventeic",
            icons:["github-circle"],
            texts:["GitHub- All Repos"]
          }),

          new Hyperlink({
            href:"https://linkedin.com/in/chris-venteicher",
            icons:["linkedin-box"],
            texts:["LinkedIn- Chris V"]
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
              `Chris Venteicher`,
              `Software Engineer, Developer of Venteicher.org`,
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
              <li> C, C++, Ruby </li>
              <li> Machine Learning (Genetic Algorithms, Neural Nets, Markov Models, Agent Systems) </li>
              <li> Web Technologies (d3.js, Rails, Angular4, Kubernetes) </li>
              <li> Cellular (Android, Modems 3GPP, 4G/LTE)</li>
              <li> Networking (IPv4, IPv6, Proxy Mobile IP, PPP, DHCP, VPN, WiFi, VoIP/SIP)</li>
              <li> Linux (Ubuntu, Kernel, Network Drivers, Performance Tools)</li>
              <li> Video Compression, 3D Graphics / OpenGL </li>
            </ul>

           `
        ],
        tags: [ 'person' ]
      }),




      new Card({
        images: [],
        headers: [
          new Header({
            tags: [],
            avatarUrls: [ imgUri ],
            titles: [
              "Venteicher.org Web Site",
              "WebSite Construction and Cloud Deployment",
             ],
          }),
        ],
        contents: [
          `
        This web site is constructed using:
        <ul>
          <li> Angular 4 </li>
          <li> Angular Material 2 </li>
          <li> Angular Universal (Server Side rendering to speed up initial page loading)</li>
        </ul>

        This web site hosted and served using:
        <ul>
          <li> Phusion Passenger + Nginx + Node.js to serve content. </li>
          <li> Google Container Engine + Kubernetes for Hosting / Compute. </li>
        </ul>

        <p>
          Rails 5 was originally used to serve content.
          However I did not succeed in supporting Angular Universal with Rails 5 + Webpacker.
          In the future I plan to re-integrate Rails 5 to provide backend database services.
        </p>
  `
        ],
        tags: [ 'project', 'site' ],

        hyperlinks: [
          new Hyperlink({
            href:"https://github.com/cventeic",
            icons:["github-circle"],
            texts:["GitHub- Site Content"]
          }),

          new Hyperlink({
            href:"https://github.com/cventeic",
            icons:["github-circle"],
            texts:["GitHub- Google Container / Kubernetes Deployment Scripts"]
          }),


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




      new Card({
        headers: [
          new Header({
            tags: [],
            avatarUrls: [ imgUri ],
            titles: [
              "3D Printer",
              "Custom Designed and Built 3D Printer",
             ],
          }),
        ],
        contents: [
          `
          The 3D printer was built using:
          <ul>
            <li> v-slot linear rails from openbuilds (20mm x 20mm and 20mm x 80mm rails) </li>
            <li> Ramps 1.4 (arduino) electronics </li>
            <li> Marlin software on the Ramps </li>
          </ul>

          The Printing process uses:
          <ul>
            <li> Octoprint for remote control </li>
            <li> Cura for slicing </li>
          </ul>
        `
        ],
        tags: [ 'project'],
        videos: [ "https://www.youtube.com/embed/zzwA_C7NFoI" ],
        hyperlinks: [ ],
      }),



      new Card({
        headers: [
          new Header({
            tags: [],
            avatarUrls: [ imgUri ],
            titles: [
              "Interactive 3D Graphics via Ruby",
              "OpenGL 3D Graphics in Ruby Language"
             ],
          }),
        ],
        contents: [
          `
            OpenGL 3D graphics written in Ruby

            <ul>
              <li> Programatic shaders with diffuse and specular lighting. </li>
              <li> Arcball and Quaterion implemented in Ruby code. </li>
              <li> Basic shape rendering in Ruby code. </li>
              <li> Buffer management in Ruby. </li>
            </ul>
 `
        ],
        tags: [ 'project' ],

        hyperlinks: [
          new Hyperlink({
            href:"https://github.com/cventeic/opengl-ruby",
            icons:["github-circle"],
            texts:["GitHub- opengl-ruby code "]
          }),
        ],
        videos: [ "https://www.youtube.com/embed/_8pJCWOsiIo" ],
      }),



    ]
  }
}
