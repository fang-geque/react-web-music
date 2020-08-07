import React from 'react';
import { Redirect } from 'react-router-dom';

import FGQDiscover from '@/pages/discover';
import FGQFriend from '@/pages/friend';
import FGQMine from '@/pages/mine';


import FGQRecommend from "../pages/discover/c-pages/recommend";
import FGQRanking from "../pages/discover/c-pages/ranking";
import FGQSongs from "../pages/discover/c-pages/songs";
import FGQDjradio from "../pages/discover/c-pages/djradio";
import FGQArtist from "../pages/discover/c-pages/artist";
import FGQAlbum from "../pages/discover/c-pages/album";

const routes = [
  {
    path:"/",
    exact:true,
    render: () =>{
      return <Redirect to="/discover"></Redirect>
    }
  },
  {
    path: "/discover",
    component:FGQDiscover,
    routes:[
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: FGQRecommend
      },
      {
        path: "/discover/ranking",
        component: FGQRanking
      },
      {
        path: "/discover/songs",
        component: FGQSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: FGQDjradio
      },
      {
        path: "/discover/artist",
        component: FGQArtist
      },
      {
        path: "/discover/album",
        component: FGQAlbum
      }
    ]
  },
  {
    path: "/mine",
    component:FGQMine
  },
  {
    path: "/friend",
    component:FGQFriend
  },

];

export default routes;