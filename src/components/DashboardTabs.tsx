import { useState, type ReactNode } from 'react';
import { AnalyticsMock, CourseMock } from './Mockups';
import { AttendanceMock, ExamsMock, PaymentsMock } from './MoreMockups';

const tabs: { id: string; label: string; title: string; text: string; chips: string[]; visual: ReactNode }[] = [
  {
    id: 'courses', label: 'Courses', title: 'Build Courses Your Way',
    text: 'Organize lessons into modules and keep every video, document and note together in one place.',
    chips: ['Modules', 'Lessons', 'Materials', 'Students'], visual: <CourseMock />,
  },
  {
    id: 'exams', label: 'Exams', title: 'Assess And Follow Progress',
    text: 'Create quizzes, term tests and past-paper practice, then keep an eye on how students are doing.',
    chips: ['Quizzes', 'Term tests', 'Past papers', 'Results'], visual: <ExamsMock />,
  },
  {
    id: 'analytics', label: 'Analytics', title: 'See Your Institute At A Glance',
    text: 'Understand student activity, course performance and day-to-day operations with clear insights.',
    chips: ['Students', 'Courses', 'Activity', 'Insights'], visual: <AnalyticsMock />,
  },
  {
    id: 'payments', label: 'Payments', title: 'Keep Fees Organized',
    text: 'Track student fees and payment information so you always know what is paid and what is pending.',
    chips: ['Fees', 'Records', 'Status', 'Students'], visual: <PaymentsMock />,
  },
  {
    id: 'attendance', label: 'Attendance', title: 'Know Who Showed Up',
    text: 'Mark attendance for every class and keep a clear record of student participation.',
    chips: ['Classes', 'Sessions', 'Records', 'Students'], visual: <AttendanceMock />,
  },
];

export function DashboardTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const t = tabs.find((x) => x.id === active) ?? tabs[0];
  return (
    <section className="section" id="dashboards">
      <div className="container">
        <div className="dt__tabs" role="tablist" aria-label="Product areas">
          {tabs.map((x) => (
            <button
              key={x.id}
              role="tab"
              id={`dt-tab-${x.id}`}
              aria-selected={x.id === active}
              aria-controls="dt-panel"
              className={x.id === active ? 'is-on' : ''}
              onClick={() => setActive(x.id)}
            >
              {x.label}
            </button>
          ))}
        </div>
        <div className="dt__panel" id="dt-panel" role="tabpanel" aria-labelledby={`dt-tab-${t.id}`} key={t.id}>
          <div className="dt__copy">
            <span className="eyebrow">{t.label}</span>
            <h2>{t.title}</h2>
            <p>{t.text}</p>
            <div className="dt__chips">
              {t.chips.map((c) => (<span key={c}>{c}</span>))}
            </div>
          </div>
          <div className="dt__visual">{t.visual}</div>
        </div>
      </div>
    </section>
  );
}
