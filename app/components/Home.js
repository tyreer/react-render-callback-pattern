import React from 'react';
import GitHubRenderCallback from './GitHubRenderCallback';
import Badge from './Badge';
import Profile from './Profile';

export default function Home() {
  return (
    <div>
      <GitHubRenderCallback username="tyreer">
        {user => (user === null
          ? <p>LOADINGs</p>
          : <Profile userData={user} />)
        }
      </GitHubRenderCallback>
      <GitHubRenderCallback username="tyreer">
        {user => (user === null
          ? <p>LOADINGs</p>
          : <Badge userData={user} />)}
      </GitHubRenderCallback>
    </div>
  );
}
