import React from 'react';

const Header = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    {/* ...autres éléments du header... */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {/* Bouton de traduction */}
      {/* ...votre bouton de traduction ici... */}
      {/* Logo à droite */}
      <img src="/myGymPro.png" alt="Logo MyGymPro" style={{ height: 60 , background: "red" }} />
    </div>
  </div>
);

export default Header;
