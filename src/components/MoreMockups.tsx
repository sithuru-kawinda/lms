import { Icon } from './Icon';
import { Frame, Progress, Stat } from './Mockups';

/* Illustrative UI previews. All figures are sample data, not real statistics. */

export function ExamsMock() {
  return (
    <Frame title="Exams · Assessments">
      <div className="m-head"><b>Assessments</b><span className="m-chip">+ New assessment</span></div>
      {[
        ['Algebra quiz', 'Quiz · Published', 88],
        ['Term test 1', 'Term test · Scheduled', 40],
        ['2022 past paper', 'Past paper · Assigned', 65],
      ].map(([t, s, p]) => (
        <div className="m-list" key={t}>
          <span className="m-ico"><Icon name="clipboard" size={15} /></span>
          <div><b>{t}</b><small>{s}</small></div>
          <Progress value={p as number} />
        </div>
      ))}
      <div className="m-card">
        <div className="m-head"><b>Class performance</b><small>Sample</small></div>
        <div className="m-bars">
          {[45, 60, 52, 74, 68, 82].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} className={i === 5 ? 'is-on' : ''} />
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function PaymentsMock() {
  return (
    <Frame title="Payments · Fees">
      <div className="m-grid m-grid--3">
        <Stat icon="card" label="Paid" value="Up to date" />
        <Stat icon="clock" label="Pending" value="Follow up" />
        <Stat icon="check" label="Records" value="Kept" />
      </div>
      <div className="m-head"><b>Recent payments</b><small>Sample</small></div>
      {[
        ['Student A', 'Monthly fee', 'Paid', '#16A34A'],
        ['Student B', 'Monthly fee', 'Paid', '#16A34A'],
        ['Student C', 'Monthly fee', 'Pending', '#F59E0B'],
        ['Student D', 'Monthly fee', 'Paid', '#16A34A'],
      ].map(([n, d, st, col]) => (
        <div className="m-list m-list--pay" key={n}>
          <span className="m-ico"><Icon name="users" size={15} /></span>
          <div><b>{n}</b><small>{d}</small></div>
          <span className="m-tag" style={{ color: col, background: `${col}1A` }}>{st}</span>
        </div>
      ))}
    </Frame>
  );
}

export function AttendanceMock() {
  const rows: [string, boolean][] = [['Student A', true], ['Student B', true], ['Student C', false], ['Student D', true], ['Student E', true]];
  return (
    <Frame title="Attendance · Grade 11 Mathematics">
      <div className="m-head"><b>Today’s class</b><span className="m-chip">Mark all present</span></div>
      {rows.map(([n, on]) => (
        <div className="m-list m-list--pay" key={n}>
          <span className="m-ico"><Icon name="users" size={15} /></span>
          <div><b>{n}</b><small>{on ? 'Present' : 'Absent'}</small></div>
          <span className={`m-check${on ? ' is-on' : ''}`}>{on && <Icon name="check" size={13} />}</span>
        </div>
      ))}
    </Frame>
  );
}
