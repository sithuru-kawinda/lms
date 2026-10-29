import type { IconName } from './components/Icon';

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const capabilities: { icon: IconName; label: string; text: string }[] = [
  { icon: 'book', label: 'Courses', text: 'Structured lessons' },
  { icon: 'users', label: 'Students', text: 'Profiles & enrollments' },
  { icon: 'calendar', label: 'Classes', text: 'Schedules & sessions' },
  { icon: 'card', label: 'Payments', text: 'Fees & records' },
  { icon: 'clipboard', label: 'Exams', text: 'Assessments' },
  { icon: 'chart', label: 'Analytics', text: 'Useful insights' },
];

export const problems: { icon: IconName; title: string; text: string }[] = [
  { icon: 'layers', title: 'Too many tools', text: 'WhatsApp, spreadsheets, payment records, video links and student lists are scattered across different platforms.' },
  { icon: 'clock', title: 'Manual management', text: 'Managing students, attendance, payments and course materials manually takes valuable time.' },
  { icon: 'folder', title: 'Content management', text: 'Course materials, recordings and resources become difficult to organize as your institute grows.' },
  { icon: 'eye', title: 'Limited visibility', text: 'Teachers and institute owners need a clear view of students, courses, payments and performance.' },
];

export const features: { icon: IconName; title: string; text: string }[] = [
  { icon: 'book', title: 'Course Management', text: 'Create courses, organize lessons, upload learning materials and keep everything structured.' },
  { icon: 'users', title: 'Student Management', text: 'Manage student profiles, enrollments, classes and learning activity from one place.' },
  { icon: 'calendar', title: 'Class Management', text: 'Organize schedules, live classes, sessions and learning activities.' },
  { icon: 'check', title: 'Attendance', text: 'Track student attendance and maintain a clear record of participation.' },
  { icon: 'card', title: 'Payments', text: 'Manage student payments, fees and payment-related information.' },
  { icon: 'clipboard', title: 'Exams & Assessments', text: 'Create assessments and monitor student performance.' },
  { icon: 'folder', title: 'Learning Materials', text: 'Keep videos, documents, notes and other resources organized.' },
  { icon: 'chart', title: 'Analytics', text: 'Understand student activity, course performance and institute operations with useful insights.' },
];

export const steps = [
  { title: 'Create', text: 'Create your account and set up your institute or class.' },
  { title: 'Manage', text: 'Add courses, teachers, students and learning materials.' },
  { title: 'Teach & Grow', text: 'Run your classes, manage students and understand your institute through useful insights.' },
];

export type FaqCategory = 'About ClassLms' | 'Using ClassLms' | 'Plans & Getting Started';

export const faqs = [
  { q: 'What Is ClassLms?', cat: 'About ClassLms' as FaqCategory, a: 'ClassLms is a Learning Management System that helps teachers and educational institutes manage courses, students, classes, learning materials and more from one platform.' },
  { q: 'Who Can Use ClassLms?', cat: 'About ClassLms' as FaqCategory, a: 'Tuition teachers, individual educators, tutors, academies and educational institutes, along with their students.' },
  { q: 'Can Individual Teachers Use ClassLms?', cat: 'About ClassLms' as FaqCategory, a: 'Yes. ClassLms is designed to work for a single teacher running their own classes, as well as for larger teams.' },
  { q: 'Can Educational Institutes Use ClassLms?', cat: 'About ClassLms' as FaqCategory, a: 'Yes. Institutes can bring multiple teachers, courses and students together under one centralized workspace.' },
  { q: 'Can I Manage Students And Courses?', cat: 'Using ClassLms' as FaqCategory, a: 'Yes. You can organize courses and lessons, and manage student profiles, enrollments and classes.' },
  { q: 'Can I Manage Payments?', cat: 'Using ClassLms' as FaqCategory, a: 'ClassLms helps you keep track of student fees and payment-related information in one place.' },
  { q: 'Can Students Access Learning Materials?', cat: 'Using ClassLms' as FaqCategory, a: 'Yes. Students can find their courses and open the videos, documents and notes you share with them.' },
  { q: 'Does ClassLms Support Online Classes?', cat: 'Using ClassLms' as FaqCategory, a: 'ClassLms helps you organize schedules, sessions and live classes so students know when and where to join.' },
  { q: 'Can I Upgrade My Plan Later?', cat: 'Plans & Getting Started' as FaqCategory, a: 'Yes. Start simple and move to a plan that suits your needs as your teaching business grows.' },
  { q: 'How Do I Get Started?', cat: 'Plans & Getting Started' as FaqCategory, a: 'Create your account, set up your class or institute, then add your courses, students and learning materials.' },
];

export const footerCols = [
  { title: 'Product', links: [['Features', '/features'], ['Pricing', '/pricing'], ['How It Works', '/how-it-works']] },
  { title: 'Resources', links: [['Documentation', '#'], ['Help Center', '#'], ['FAQ', '/faq']] },
  { title: 'Company', links: [['About', '#'], ['Contact', '/contact'], ['Privacy Policy', '#'], ['Terms', '#']] },
];

export type FeatureGroup = 'Teaching' | 'Operations';

/** Extra detail shown in the Features explorer. `preview` rows are illustrative sample UI. */
export const featureDetails: Record<string, { group: FeatureGroup; tag: string; preview: [string, string][]; abilities: string[] }> = {
  'Course Management': { group: 'Teaching', tag: 'courses', preview: [['Algebra basics', 'Published'], ['Quadratic equations', 'Published'], ['Functions & graphs', 'Draft']], abilities: ['Create courses', 'Organize lessons', 'Upload learning materials'] },
  'Student Management': { group: 'Operations', tag: 'students', preview: [['Student profile', 'Complete'], ['Enrollment', 'Active'], ['Learning activity', 'Tracked']], abilities: ['Manage student profiles', 'Handle enrollments', 'Follow learning activity'] },
  'Class Management': { group: 'Teaching', tag: 'classes', preview: [['Grade 11 Mathematics', 'Live · Today'], ['O/L Science', 'Scheduled'], ['Revision session', 'Scheduled']], abilities: ['Organize schedules', 'Run live classes', 'Plan sessions'] },
  Attendance: { group: 'Operations', tag: 'attendance', preview: [['Student A', 'Present'], ['Student B', 'Present'], ['Student C', 'Absent']], abilities: ['Track attendance', 'Keep a clear record', 'See participation'] },
  Payments: { group: 'Operations', tag: 'payments', preview: [['Monthly fee', 'Paid'], ['Monthly fee', 'Paid'], ['Monthly fee', 'Pending']], abilities: ['Manage student payments', 'Track fees', 'Keep payment information'] },
  'Exams & Assessments': { group: 'Teaching', tag: 'exams', preview: [['Quiz', 'Created'], ['Term test', 'Scheduled'], ['Past paper', 'Assigned']], abilities: ['Create assessments', 'Monitor student performance', 'Review results'] },
  'Learning Materials': { group: 'Teaching', tag: 'materials', preview: [['Videos', 'Organized'], ['PDF & notes', 'Organized'], ['Recordings', 'Organized']], abilities: ['Keep videos and documents', 'Share notes', 'Stay organized'] },
  Analytics: { group: 'Operations', tag: 'insights', preview: [['Student activity', 'Insight'], ['Course performance', 'Insight'], ['Institute operations', 'Insight']], abilities: ['Understand student activity', 'Compare course performance', 'Oversee operations'] },
};

/** Capability-based figures (true of the product today). Replace with real numbers once you have them. */
export const stats = [
  { value: '8', label: 'core modules' },
  { value: '3', label: 'user groups: teachers, institutes, students' },
  { value: '1', label: 'platform for teaching and operations' },
];

/** Pricing page data. `true` means the feature is included. */
export type PlanValue = string | true;

export const pricingPlans: {
  name: string; prefix?: string; base: string; perStudent: string; unit: string;
  features: [string, PlanValue][]; cta: string; featured: boolean;
}[] = [
  {
    name: 'Individual', base: 'LKR 2,000', perStudent: 'LKR 100 / active student', unit: '/month',
    features: [['Courses', 'Unlimited'], ['Students', '30 Max'], ['Teachers', '1 Only'], ['Operators', '0'], ['Exams', 'Unlimited'], ['Attendance', true], ['Payments', true]],
    cta: 'Contact Us', featured: false,
  },
  {
    name: 'Starter', base: 'LKR 5,000', perStudent: 'LKR 50 / active student', unit: '/month',
    features: [['Courses', 'Unlimited'], ['Students', 'Unlimited'], ['Teachers', 'Unlimited'], ['Operators', '1'], ['Exams', 'Unlimited'], ['Attendance', true], ['Payments', true]],
    cta: 'Contact Us', featured: true,
  },
  {
    name: 'Custom', prefix: 'Up to', base: 'LKR 15,000', perStudent: 'LKR 50 / active student', unit: '/month',
    features: [['Courses', 'Unlimited'], ['Students', 'Unlimited'], ['Teachers', 'Unlimited'], ['Operators', '2'], ['Exams', 'Unlimited'], ['Attendance', true], ['Payments', true]],
    cta: 'Contact Us', featured: false,
  },
];

export const comparison: { feature: string; icon: IconName; values: [PlanValue, PlanValue, PlanValue] }[] = [
  { feature: 'Courses', icon: 'book', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
  { feature: 'Students', icon: 'users', values: ['30 Max', 'Unlimited', 'Unlimited'] },
  { feature: 'Teachers', icon: 'users', values: ['1 Only', 'Unlimited', 'Unlimited'] },
  { feature: 'Operators', icon: 'layers', values: ['0', '1', '2'] },
  { feature: 'Exams', icon: 'clipboard', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
  { feature: 'Attendance', icon: 'check', values: [true, true, true] },
  { feature: 'Payments', icon: 'card', values: [true, true, true] },
];

export const enterprise = {
  eyebrow: 'Enterprise',
  title: 'ClassLms for large institutes',
  text: 'Running a large institute, academy or school? Talk to us about a plan tailored to your needs.',
};

/** FAQ answer: plain text, or paragraphs and/or a list. Use **double asterisks** for bold. */
export type FaqAnswer = string | { intro?: string; list?: string[]; outro?: string };

export const pricingFaqs: { q: string; a: FaqAnswer }[] = [
  {
    q: 'How is my monthly price worked out?',
    a: {
      intro: 'Your monthly price is the base price of your plan plus a charge for each active student. For example:',
      list: [
        '**Starter** with 100 active students: LKR 5,000 + (100 × LKR 50) = **LKR 10,000/month**',
        '**Individual** with 30 students: LKR 2,000 + (30 × LKR 100) = **LKR 5,000/month**',
      ],
    },
  },
  {
    q: 'What does each plan cost?',
    a: {
      list: [
        '**Individual:** LKR 2,000 + LKR 100 per active student / month',
        '**Starter:** LKR 5,000 + LKR 50 per active student / month',
        '**Custom:** Up to LKR 15,000 + LKR 50 per active student / month',
      ],
    },
  },
  {
    q: 'What is included in every plan?',
    a: { intro: 'Every plan includes:', list: ['Unlimited Courses', 'Unlimited Exams', 'Attendance', 'Payments'] },
  },
  {
    q: 'Which plan is right for me?',
    a: {
      list: [
        '**Individual** is suitable for one teacher with up to 30 students.',
        '**Starter** is suitable for institutes that need unlimited students and teachers.',
        '**Custom** is suitable for institutes that need additional operational support, including up to 2 operators.',
      ],
    },
  },
  { q: 'Can I upgrade my plan later?', a: 'Yes, you can upgrade your plan later as your needs change.' },
  { q: 'Can I manage payments in ClassLms?', a: 'Yes. Payment management is included in all three plans: Individual, Starter and Custom.' },
  {
    q: 'How do I get started?',
    a: 'You can start with the available plan and use the **Try for Free** option. For Custom requirements or pricing questions, contact the ClassLms team.',
  },
];

/**
 * Contact settings.
 * - `accessKey`: Web3Forms access key. Contact-form messages are emailed to the inbox that owns this key
 *   (create a key for the ClassLms inbox at web3forms.com and replace it here when you have one).
 * - `email` / `whatsapp` / `phone` / `address` / `hours`: optional details; the Contact page shows only the ones that are set.
 */
export const contact = {
  accessKey: '8fe236b9-de1e-49b6-85a2-3c495849f7f7',
  email: 'sithuru15@gmail.com',
  whatsapp: '0703474125',
  phone: '',
  address: '',
  hours: '',
};

/** wa.me link for the WhatsApp number in `contact` ('0703474125' -> 94703474125). Empty string if none is set. */
export function whatsappLink(message = ''): string {
  const digits = contact.whatsapp.replace(/\D/g, '');
  if (!digits) return '';
  const intl = digits.startsWith('0') ? `94${digits.slice(1)}` : digits;
  return `https://wa.me/${intl}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}

export const contactInterests = ['General question', 'Individual plan', 'Starter plan', 'Custom plan', 'Not sure yet'];
