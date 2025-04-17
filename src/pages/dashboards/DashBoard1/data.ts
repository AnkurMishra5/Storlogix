// types
import { Message, ProjectDetail } from './types';

// images
import avatar1 from '../../../assets/images/users/user-1.jpg';
import avatar2 from '../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../assets/images/users/user-3.jpg';
import avatar4 from '../../../assets/images/users/user-4.jpg';
import avatar5 from '../../../assets/images/users/user-5.jpg';

const messages: Message[] = [
    {
        id: 1,
        avatar: avatar1,
        sender: 'Ratan',
        text: "Hey! there I'm available...",
        time: '13:40 PM',
    },
    {
        id: 2,
        avatar: avatar2,
        sender: 'Naval',
        text: "I've finished it! See you so...",
        time: '13:34 PM',
    },
    {
        id: 3,
        avatar: avatar3,
        sender: 'Simi',
        text: 'This theme is awesome!',
        time: '13:17 PM',
    },
    {
        id: 4,
        avatar: avatar4,
        sender: 'Mangalam',
        text: 'Nice to meet you',
        time: '12:20 PM',
    },
    {
        id: 5,
        avatar: avatar5,
        sender: 'Mahesh',
        text: "Hey! there I'm available...",
        time: '10:15 PM',
    },
];

const projectDetails: ProjectDetail[] = [
    {
        id: 1,
        name: 'Bulqbox Admin v1',
        startDate: '01/01/2017',
        dueDate: '26/04/2017',
        status: 'Released',
        variant: 'danger',
        clients: 'bulqbox',
    },
    {
        id: 2,
        name: 'Bulqbox Frontend v1',
        startDate: '01/01/2017',
        dueDate: '26/04/2017',
        status: 'Released',
        variant: 'success',
        clients: 'Bulqbox admin',
    },
    {
        id: 3,
        name: 'Bulqbox Admin v1.1',
        startDate: '01/05/2017',
        dueDate: '10/05/2017',
        status: 'Pending',
        variant: 'pink',
        clients: 'bulqbox',
    },
    {
        id: 4,
        name: 'Bulqbox Frontend v1.1',
        startDate: '01/01/2017',
        dueDate: '31/05/2017',
        status: 'Work in Progress',
        variant: 'purple',
        clients: 'Bulqbox admin',
    },
    {
        id: 5,
        name: 'Bulqbox Admin v1.3',
        startDate: '01/01/2017',
        dueDate: '31/05/2017',
        status: 'Coming soon',
        variant: 'warning',
        clients: 'bulqbox',
    },
    {
        id: 6,
        name: 'Bulqbox Admin v1.3',
        startDate: '01/01/2017',
        dueDate: '31/05/2017',
        status: 'Coming soon',
        variant: 'blue',
        clients: 'Bulqbox admin',
    },
];

export { messages, projectDetails };
