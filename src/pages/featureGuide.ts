import type { IconName } from '../components/Icon';

/** Long-form feature descriptions for the Features page. Keep claims to what the product is described as doing. */
export const featureGuide: {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  does: string[];
  helps: string;
  example: string;
}[] = [
  {
    id: 'courses',
    icon: 'book',
    title: 'Course Management',
    summary: 'Your courses live in one organized place, so you always know what each class covers and students always know where to look.',
    does: ['Create a course for each class or subject', 'Organize lessons in a clear order', 'Upload learning materials to each lesson', 'Keep every course neatly structured'],
    helps: 'No more hunting through chat groups and folders for the right video or note.',
    example: 'A Grade 11 Mathematics teacher builds one course with lessons for algebra, functions and past-paper practice.',
  },
  {
    id: 'students',
    icon: 'users',
    title: 'Student Management',
    summary: 'Keep everything about your students together: who they are, what they are enrolled in and how they are getting on.',
    does: ['Manage student profiles', 'Handle enrollments into courses and classes', 'Follow learning activity', 'See everything from one place'],
    helps: 'You spend less time on lists and spreadsheets and more time on teaching.',
    example: 'A new student joins in the middle of the term, and you enroll them in the right courses in a few steps.',
  },
  {
    id: 'classes',
    icon: 'calendar',
    title: 'Class Management',
    summary: 'Plan when each class happens and keep sessions, live classes and learning activities organized.',
    does: ['Organize class schedules', 'Set up live classes and sessions', 'Plan learning activities', 'Give students one place to check what is next'],
    helps: 'Students know when and where to join, so you answer fewer “what time is class?” messages.',
    example: 'An O/L Science class has a live session on Saturday morning and a revision session before the exam.',
  },
  {
    id: 'attendance',
    icon: 'check',
    title: 'Attendance',
    summary: 'Mark who attended each class and build a clear record of participation over time.',
    does: ['Track student attendance', 'Keep a clear record of participation', 'Look back at past classes', 'Spot students who are missing sessions'],
    helps: 'You have a reliable record instead of notes on paper or in your head.',
    example: 'At the end of a class, you mark the students who were present and the rest are recorded as absent.',
  },
  {
    id: 'payments',
    icon: 'card',
    title: 'Payments',
    summary: 'Keep student fees and payment information organized so you always know where things stand.',
    does: ['Manage student payments and fees', 'Keep payment-related information together', 'See what is paid and what is pending', 'Stop relying on scattered payment notes'],
    helps: 'Less time chasing records, and a clearer picture of your classes’ finances.',
    example: 'At the start of the month, you check which students have paid their class fee and follow up on the rest.',
  },
  {
    id: 'exams',
    icon: 'clipboard',
    title: 'Exams & Assessments',
    summary: 'Create assessments for your students and keep an eye on how they are performing.',
    does: ['Create assessments such as quizzes and tests', 'Assign practice like past papers', 'Monitor student performance', 'Use results to decide what to teach next'],
    helps: 'You find out early who is doing well and who needs extra help.',
    example: 'After a term test, you review performance and plan a revision session for the weaker topics.',
  },
  {
    id: 'materials',
    icon: 'folder',
    title: 'Learning Materials',
    summary: 'Videos, documents, notes and other resources are kept organized so students can find what they need.',
    does: ['Keep videos, documents and notes together', 'Organize resources by course and lesson', 'Share materials with your students', 'Add recordings and other resources'],
    helps: 'As your library grows, it stays easy to manage and easy for students to use.',
    example: 'A teacher adds a recording, a PDF of notes and a worksheet to the same lesson.',
  },
  {
    id: 'analytics',
    icon: 'chart',
    title: 'Analytics',
    summary: 'Understand what is happening across your students, courses and day-to-day operations.',
    does: ['See student activity', 'Understand course performance', 'Get a view of institute operations', 'Use insights to make decisions'],
    helps: 'Owners and teachers can see the bigger picture without collecting numbers by hand.',
    example: 'An institute owner reviews activity across courses to see which ones need attention.',
  },
];

export const flow = [
  { title: 'Set up your courses', text: 'Create courses and add lessons and learning materials.' },
  { title: 'Bring in students and plan classes', text: 'Enroll students and schedule your classes and sessions.' },
  { title: 'Teach and keep records', text: 'Run classes, mark attendance and keep payment information up to date.' },
  { title: 'Review and improve', text: 'Check assessments and analytics to see what to do next.' },
];
