const navLinks = [
    { id: 1, text: 'Home', link: '#', icon: 'fa fa-home feather' },
    {
        id: 2,
        text: 'Certificates',
        link: '#',
        count: 2,
        icon: 'fa fa-graduation-cap feather'
    },
    { id: 3, text: 'Education', link: '#', icon: 'fa fa-university feather' },
    { id: 4, text: 'Skills', link: '#', icon: 'fa fa-briefcase feather' },
    { id: 5, text: 'About Us', link: '#', icon: 'fa fa-user feather' },
    { id: 6, text: 'Contact', link: '#', icon: 'fa fa-envelope feather' }
];

const getNavLinks = () => {
    return [...navLinks];
};

export default getNavLinks;
