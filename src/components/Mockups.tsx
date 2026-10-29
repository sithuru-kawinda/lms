import type { ReactNode } from 'react';
import { Icon, type IconName } from './Icon';

/* Illustrative UI previews. All figures are sample data, not real statistics. */

export function Frame({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`mock ${className}`} role="img" aria-label={`${title} — sample preview of the ClassLms dashboard`}>
      <div className="mock__bar">
        <i /><i /><i />
        <span>{title}</span>
      </div>
      <div className="mock__body" aria-hidden="true">{children}</div>
    </div>
  );
}

export function Stat({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  return (
    <div className="m-stat">
      <span className="m-ico"><Icon name={icon} size={15} /></span>
      <small>{label}</small>
      <b>{value}</b>
    </div>
  );
}

export function Progress({ value }: { value: number }) {
  return <div className="m-prog"><i style={{ width: `${value}%` }} /></div>;
}

const bars = [38, 52, 44, 66, 58, 78, 70];

export function DashboardMock() {
  return (
    <Frame title="ClassLms · Dashboard">
      <div className="m-grid m-grid--3">
        <Stat icon="users" label="Total Students" value="1,248" />
        <Stat icon="book" label="Active Courses" value="18" />
        <Stat icon="calendar" label="Upcoming Classes" value="6" />
      </div>
      <div className="m-row">
        <div className="m-card m-card--grow">
          <div className="m-head"><b>Attendance</b><small>This week</small></div>
          <div className="m-bars">
            {bars.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} className={i === 5 ? 'is-on' : ''} />
            ))}
          </div>
        </div>
        <div className="m-card m-card--side">
          <div className="m-head"><b>Recent Payments</b></div>
          {['Payment received', 'Payment received', 'Payment pending'].map((t, i) => (
            <div className="m-line" key={i}>
              <span className="m-dot" style={{ background: i === 2 ? '#F59E0B' : '#16A34A' }} />
              <small>{t}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="m-head"><b>Courses</b><small>Student progress</small></div>
      <div className="m-grid m-grid--2">
        {[['Grade 11 Mathematics', 72], ['O/L Science', 48]].map(([n, p]) => (
          <div className="m-card" key={n}>
            <div className="m-thumb" />
            <b>{n}</b>
            <Progress value={p as number} />
            <small>{p}% avg. progress</small>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function CourseMock() {
  return (
    <Frame title="Courses · Grade 11 Mathematics">
      <div className="m-head"><b>Lessons</b><span className="m-chip">+ Add lesson</span></div>
      {[
        ['Algebra basics', 'Video · Notes', 100],
        ['Quadratic equations', 'Video · PDF', 65],
        ['Functions & graphs', 'Draft', 15],
        ['Past paper practice', 'Assessment', 0],
      ].map(([t, s, p]) => (
        <div className="m-list" key={t}>
          <span className="m-ico"><Icon name={s === 'Assessment' ? 'clipboard' : 'play'} size={15} /></span>
          <div>
            <b>{t}</b>
            <small>{s}</small>
          </div>
          <Progress value={p as number} />
        </div>
      ))}
    </Frame>
  );
}

export function AnalyticsMock() {
  return (
    <Frame title="Analytics · Overview">
      <div className="m-grid m-grid--3">
        <Stat icon="users" label="Students" value="Active" />
        <Stat icon="check" label="Attendance" value="Tracked" />
        <Stat icon="card" label="Payments" value="Updated" />
      </div>
      <div className="m-card">
        <div className="m-head"><b>Learning activity</b><small>Last 30 days</small></div>
        <svg viewBox="0 0 300 100" className="m-line-chart" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F97316" stopOpacity=".28" />
              <stop offset="1" stopColor="#F97316" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 80 C30 70 50 78 80 55 S130 60 160 40 S230 45 260 22 L300 15 V100 H0Z" fill="url(#g1)" />
          <path d="M0 80 C30 70 50 78 80 55 S130 60 160 40 S230 45 260 22 L300 15" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="m-row">
        <div className="m-card m-card--grow">
          <small>Course performance</small>
          <Progress value={78} /><Progress value={54} /><Progress value={66} />
        </div>
        <div className="m-card m-card--side m-donut">
          <svg viewBox="0 0 36 36" width="64" height="64">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#FFEDD5" strokeWidth="5" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#F97316" strokeWidth="5" strokeDasharray="66 88" strokeLinecap="round" transform="rotate(-90 18 18)" />
          </svg>
          <small>Attendance</small>
        </div>
      </div>
    </Frame>
  );
}

export function StudentMock() {
  return (
    <Frame title="Student · My Learning">
      <div className="m-hello">
        <b>Welcome back 👋</b>
        <small>Continue where you left off</small>
      </div>
      <div className="m-card m-next">
        <span className="m-ico"><Icon name="calendar" size={15} /></span>
        <div><b>Next class</b><small>Live session · Today</small></div>
        <span className="m-chip m-chip--solid">Join</span>
      </div>
      <div className="m-head"><b>My courses</b></div>
      {[['Grade 11 Mathematics', 72], ['O/L Science', 48], ['English Literature', 90]].map(([n, p]) => (
        <div className="m-list" key={n}>
          <span className="m-ico"><Icon name="book" size={15} /></span>
          <div><b>{n}</b><small>{p}% complete</small></div>
          <Progress value={p as number} />
        </div>
      ))}
    </Frame>
  );
}
