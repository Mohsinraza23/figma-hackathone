<<<<<<< HEAD
import React from 'react';

type BadgeProps = {
  label: string;
  className?: string;
};

export const Badge: React.FC<BadgeProps> = ({ label, className }) => {
  return <span className={`badge ${className}`}>{label}</span>;
};



=======
import React from 'react';

type BadgeProps = {
  label: string;
  className?: string;
};

export const Badge: React.FC<BadgeProps> = ({ label, className }) => {
  return <span className={`badge ${className}`}>{label}</span>;
};



>>>>>>> 7c399953a115e53d1d38481072be48b58e6570dd
