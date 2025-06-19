import React from 'react';

export type MyButtonProps = {
    label: string;
};

export const MyButton: React.FC<MyButtonProps> = ({ label }) => {
    return <button>{label}</button>;
};