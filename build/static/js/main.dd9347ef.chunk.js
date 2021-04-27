(this.webpackJsonptest = this.webpackJsonptest || []).push([[0], {
  19(e, t, n) {},
  20(e, t, n) {},
  23(e, t, n) {},
  24(e, t, n) {},
  26(e, t, n) {
    n.r(t); const o = n(1); const s = n(0); const i = n.n(s); const a = n(12); const c = n.n(a); const r = n(11); const u = n(13); const l = n(4); const m = n(5); const d = n(7); const p = n(6); const j = n(31); const h = (n(19), (function (e) {
      Object(d.a)(n, e); const t = Object(p.a)(n); function n(e) { let o; return Object(l.a)(this, n), (o = t.call(this, e)).onSubmit = function (e) { o.state.name.trim() && (o.props.addItem(o.state.name), o.setState({ name: '' }), e.preventDefault()); }, o.onChange = function (e) { o.setState({ name: e.target.value }); }, o.state = { name: o.props.name }, o.itemName = i.a.createRef(), o; } return Object(m.a)(n, [{ key: 'componentDidMount', value() { this.itemName.current.focus(); } }, { key: 'componentDidUpdate', value() { this.itemName.current.focus(); } }, {
        key: 'render',
        value() {
          return Object(o.jsxs)('form', {
            onSubmit: this.onSubmit,
            className: 'form-inline',
            children: [Object(o.jsx)('input', {
              type: 'text', ref: this.itemName, value: this.state.name, onChange: this.onChange, className: 'form-control', placeholder: 'add a new task...',
            }), Object(o.jsx)(j.a, { variant: 'outline-secondary', type: 'submit', children: 'Add' })],
          });
        },
      }]), n;
    }(i.a.Component))); const b = (n(20), n(29)); const f = n(30); const O = (function (e) {
      Object(d.a)(n, e); const t = Object(p.a)(n); function n() { return Object(l.a)(this, n), t.apply(this, arguments); } return Object(m.a)(n, [{
        key: 'render',
        value() {
          const e = this; const t = this.props.item.isDone ? 'done' : 'undone'; const n = this.props.item.isDone; return Object(o.jsx)('li', {
            className: 'list-group-item',
            onClick() { e.props.onToggle(e.props.item.id); },
            children: Object(o.jsxs)('div', {
              className: t,
              children: [n ? Object(o.jsx)(b.a, {}) : Object(o.jsx)(f.a, {}), Object(o.jsx)('span', { style: { marginLeft: 15 }, children: this.props.item.value }), Object(o.jsx)('button', {
                type: 'button', className: 'close', onClick(t) { t.stopPropagation(), e.props.onDelete(e.props.item.id); }, children: '\xd7',
              })],
            }),
          });
        },
      }]), n;
    }(i.a.Component)); const v = (n(23), (function (e) { Object(d.a)(n, e); const t = Object(p.a)(n); function n() { return Object(l.a)(this, n), t.apply(this, arguments); } return Object(m.a)(n, [{ key: 'render', value() { const e = this; const t = []; const n = []; return this.props.items.forEach(((s) => (s.isDone ? n.push(Object(o.jsx)(O, { item: s, onDelete: e.props.onDelete, onToggle: e.props.onToggle }, s.id)) : t.push(Object(o.jsx)(O, { item: s, onDelete: e.props.onDelete, onToggle: e.props.onToggle }, s.id))))), Object(o.jsxs)('div', { children: [Object(o.jsx)('ul', { className: 'list-group', children: t }), Object(o.jsx)('hr', {}), Object(o.jsx)('ul', { className: 'list-group', children: n })] }); } }]), n; }(i.a.Component))); const g = (n(24), (function (e) { Object(d.a)(n, e); const t = Object(p.a)(n); function n(e) { let o; return Object(l.a)(this, n), (o = t.call(this, e)).addItem = function (e) { const t = { id: Date.now(), value: e, isDone: !1 }; o.setState(((e) => ({ todoItems: [].concat(Object(u.a)(e.todoItems), [t]) }))); }, o.handleDelete = function (e) { o.setState({ todoItems: o.state.todoItems.filter(((t) => t.id !== e)) }); }, o.toggleTodoItem = function (e) { o.setState(((t) => ({ todoItems: t.todoItems.map(((t) => (t.id === e ? Object(r.a)(Object(r.a)({}, t), {}, { isDone: !t.isDone }) : t))) }))); }, o.state = { todoItems: o.props.initItems }, o; } return Object(m.a)(n, [{ key: 'render', value() { return Object(o.jsxs)('div', { id: 'main', children: [Object(o.jsx)('h1', { className: 'title', children: 'Todo list' }), Object(o.jsx)(h, { addItem: this.addItem, name: '' }), Object(o.jsx)(v, { items: this.state.todoItems, onDelete: this.handleDelete, onToggle: this.toggleTodoItem })] }); } }]), n; }(i.a.Component))); const x = []; x.push({ id: 1, value: 'learn js', isDone: !0 }), x.push({ id: 2, value: 'learn react', isDone: !1 }), x.push({ id: 3, value: 'learn angular', isDone: !1 }); const D = x; n(25); c.a.render(Object(o.jsx)(i.a.StrictMode, { children: Object(o.jsx)(g, { initItems: D }) }), document.getElementById('root'));
  },
}, [[26, 1, 2]]]);
// # sourceMappingURL=main.dd9347ef.chunk.js.map
