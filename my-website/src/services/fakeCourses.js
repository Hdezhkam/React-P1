const courses = [
    {
        id: 1,
        title: 'HTML & CSS',
        imageUrl:
            '#',
        text: 'Test',
        time: '10:11:00',
        price: 50000
    },
    {
        id: 1,
        title: 'Bootstrap 4',
        imageUrl:
            '#',
        text: 'Test',
        time: '10:11:00',
        price: 100000
    },
    {
        id: 1,
        title: 'ReactJs',
        imageUrl:
            '#',
        text: 'Test',
        time: '10:11:00',
        price: 80000
    },
    {
        id: 1,
        title: 'Java Script',
        imageUrl:
            '#',
        text: 'Test',
        time: '10:11:00',
        price: 80000
    }
];

const getCourses = () => {
    return [...courses];
};

export default getCourses;
