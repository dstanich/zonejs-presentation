# What is zone.js and how does it work with Angular?

Presentation given to...
* 2017-11-01: AngularMN  - [Event Page](https://www.meetup.com/AngularMN/events/244290051/)

## Overview
Zone.js is an important part of Angular 2+ but it is rarely discussed in tutorials.  Learn about what zone.js is, how it works, and ways you can use it to make your Angular application better.

## Materials
All code is available in this repository in branches.

### Setup
1.  `npm install -g @angular/cli`
2.  Clone this repository
3.  `cd zonejs-presentation && npm install`

### Branches
| Branch | Content |
|--------|---------|
| `gh-pages` | Presentation |
| `master` | All final code |
| `00-zonejs-starter` | Initial zone.js branch with no functionality |
| `01-zonejs-basic-info` | Zone.current, patched async calls, and call stack |
| `02-zonejs-forking` | Forking, run(), and zone changing |
| `03-zonejs-hooks` | Forking off another fork, onFork hook |
| `04-zonejs-timing` | Practical use by creating ZoneSpec that will time executing of code within the zone |
| `00-ngx-starter` | Initial Angular branch with basic setup |
| `01-ngx-basic-hooks` | Setup NgZone hooks and make a basic HTTP call |
| `02-ngx-run-outside-zone` | Run code outsize NgZone to avoid change detection |
| `03-ngx-populate-list` | UI populated with more data.  Has change detection counter. |
| `04-ngx-populate-rocket` | UI adds a button to populate rocket data. |
| `05-ngx-on-push` | ChangeDetectionStrategy.OnPush is used for less change detection checks |
