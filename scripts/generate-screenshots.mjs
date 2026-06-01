import { writeFileSync } from 'fs';
import { dirname, join } from 'path';

const OUT = join('C:', 'Users', 'anasi', 'workspace', 'Website', 'spent-portfolio', 'public', 'images', 'app-screenshots');

// ── Colors ──
const C = {
  primary: '#3F51B5',
  accent: '#FF4081',
  bg: '#FAF9FF',
  darkNavy: '#1A237E',
  slate: '#455A64',
  white: '#FFFFFF',
  lightGray: '#F0F0F5',
  divider: '#E8E6F0',
  orange: '#FF9800',
  blue: '#2196F3',
  purple: '#9C27B0',
  green: '#4CAF50',
  gray: '#9E9E9E',
};

const W = 312, H = 680;

function svg(...parts) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${parts.join('')}</svg>`;
}

// ── Helper: rounded rect ──
function rect(x, y, w, h, rx = 12, fill = C.white, stroke = null) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"${stroke ? ` stroke="${stroke}"` : ''}/>`;
}

// ── Helper: text ──
function text(x, y, content, opts = {}) {
  const a = opts.anchor || 'start';
  const f = opts.font || '14px';
  const ff = opts.family || 'system-ui, -apple-system, sans-serif';
  const w = opts.weight || 'normal';
  const fill = opts.fill || C.darkNavy;
  const opacity = opts.opacity || 1;
  return `<text x="${x}" y="${y}" text-anchor="${a}" font-family="${ff}" font-size="${f}" font-weight="${w}" fill="${fill}" opacity="${opacity}">${content}</text>`;
}

// ── Helper: icon (simplified) ──
function homeIcon(x, y, size = 20, fill = C.slate) {
  const s = size / 20;
  return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${fill}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </g>`;
}

function catIcon(x, y, size = 20, fill = C.slate) {
  const s = size / 20;
  return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${fill}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
  </g>`;
}

function reportIcon(x, y, size = 20, fill = C.slate) {
  const s = size / 20;
  return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${fill}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </g>`;
}

function settingsIcon(x, y, size = 20, fill = C.slate) {
  const s = size / 20;
  return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${fill}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </g>`;
}

function activeHomeIcon(x, y, size = 20) {
  return homeIcon(x, y, size, C.primary);
}

function activeCatIcon(x, y, size = 20) {
  return catIcon(x, y, size, C.primary);
}

function navBar() {
  return `
    <rect x="0" y="${H - 64}" width="${W}" height="64" fill="${C.white}" />
    <line x1="0" y1="${H - 64}" x2="${W}" y2="${H - 64}" stroke="${C.divider}" stroke-width="1"/>
    ${homeIcon(28, H - 54, 18)}
    ${text(20, H - 33, 'Home', { font: '10px', fill: C.primary, weight: '600' })}
    ${catIcon(100, H - 54, 18)}
    ${text(90, H - 33, 'Categories', { font: '10px', fill: C.slate })}
    ${reportIcon(170, H - 54, 18)}
    ${text(163, H - 33, 'Reports', { font: '10px', fill: C.slate })}
    ${settingsIcon(240, H - 54, 18)}
    ${text(232, H - 33, 'Settings', { font: '10px', fill: C.slate })}
    <!-- pill indicator at home -->
    <rect x="38" y="${H - 7}" width="12" height="3" rx="1.5" fill="${C.primary}"/>
  `;
}

// ══════════════════════════════════════════════
//  SCREEN 1: Dashboard
// ══════════════════════════════════════════════
function screenDashboard() {
  const navY = H - 64;

  return svg(`
    <!-- background -->
    <rect width="${W}" height="${H}" fill="${C.bg}"/>

    <!-- status bar area -->
    <rect x="0" y="0" width="${W}" height="44" fill="${C.bg}"/>
    ${text(16, 28, '9:41', { font: '13px', weight: '600' })}
    <!-- battery icon -->
    <rect x="260" y="18" width="22" height="11" rx="2" fill="none" stroke="${C.darkNavy}" stroke-width="1.2"/>
    <rect x="262" y="20" width="15" height="7" rx="1" fill="${C.darkNavy}"/>
    <rect x="284" y="21" width="2" height="5" rx="0.5" fill="${C.darkNavy}"/>
    <!-- signal -->
    <rect x="240" y="22" width="2.5" height="2.5" rx="0.5" fill="${C.darkNavy}"/>
    <rect x="244" y="19" width="2.5" height="5.5" rx="0.5" fill="${C.darkNavy}"/>
    <rect x="248" y="15" width="2.5" height="9.5" rx="0.5" fill="${C.darkNavy}"/>
    <rect x="252" y="11" width="2.5" height="13.5" rx="0.5" fill="${C.darkNavy}"/>

    <!-- header -->
    ${text(20, 72, 'Spent', { font: '26px', weight: '700', fill: C.darkNavy })}

    <!-- total spent card -->
    ${rect(16, 88, 280, 140, 16, C.primary)}
    ${text(32, 120, 'Total Spent', { font: '14px', fill: '#B8C4F6', weight: '400' })}
    ${text(32, 170, '$2,450.00', { font: '38px', weight: '700', fill: C.white })}
    ${text(32, 195, 'This Month', { font: '12px', fill: '#B8C4F6', weight: '400' })}
    <!-- mini sparkline decoration -->
    <path d="M200 175 Q220 160 240 170 Q260 180 280 165" fill="none" stroke="#FF4081" stroke-width="2" opacity="0.7"/>
    <circle cx="280" cy="165" r="3" fill="#FF4081"/>

    <!-- chart section -->
    ${text(20, 258, 'Weekly Spending', { font: '16px', weight: '600', fill: C.darkNavy })}

    <!-- chart area -->
    ${rect(16, 272, 280, 140, 14, C.white)}
    <!-- chart grid lines -->
    <line x1="40" y1="295" x2="280" y2="295" stroke="${C.divider}" stroke-width="0.5" stroke-dasharray="4,4"/>
    <line x1="40" y1="335" x2="280" y2="335" stroke="${C.divider}" stroke-width="0.5" stroke-dasharray="4,4"/>
    <line x1="40" y1="375" x2="280" y2="375" stroke="${C.divider}" stroke-width="0.5" stroke-dasharray="4,4"/>
    <!-- bars: Mon-Sat -->
    <!-- Mon: 40px height -->
    <rect x="55" y="375" width="28" height="40" rx="6" fill="${C.primary}"/>
    ${text(52, 405, 'Mon', { font: '9px', fill: C.slate })}
    <!-- Tue: 25px -->
    <rect x="100" y="390" width="28" height="25" rx="6" fill="${C.primary}" opacity="0.6"/>
    ${text(97, 405, 'Tue', { font: '9px', fill: C.slate })}
    <!-- Wed: 60px -->
    <rect x="145" y="350" width="28" height="65" rx="6" fill="${C.accent}"/>
    ${text(142, 405, 'Wed', { font: '9px', fill: C.slate })}
    <!-- Thu: 35px -->
    <rect x="190" y="385" width="28" height="55" rx="6" fill="${C.primary}" opacity="0.8"/>
    ${text(187, 405, 'Thu', { font: '9px', fill: C.slate })}
    <!-- Fri: 50px -->
    <rect x="235" y="370" width="28" height="45" rx="6" fill="${C.primary}" opacity="0.7"/>
    ${text(232, 405, 'Fri', { font: '9px', fill: C.slate })}

    <!-- recent transactions -->
    ${text(20, 440, 'Recent Transactions', { font: '16px', weight: '600', fill: C.darkNavy })}

    <!-- transaction items -->
    <!-- Coffee Shop -->
    ${rect(16, 456, 280, 52, 12, C.white)}
    <rect x="28" y="466" width="32" height="32" rx="10" fill="#FFF3E0"/>
    <text x="44" y="487" text-anchor="middle" font-family="${'system-ui, -apple-system, sans-serif'}" font-size="14px" font-weight="600" fill="${C.orange}">&#9749;</text>
    ${text(70, 480, 'Coffee Shop', { font: '14px', weight: '500', fill: C.darkNavy })}
    ${text(70, 498, 'Today, 9:41 AM', { font: '11px', fill: C.slate })}
    ${text(280, 483, '-$4.50', { font: '14px', weight: '600', fill: C.darkNavy, anchor: 'end' })}

    <!-- Grocery Store -->
    ${rect(16, 514, 280, 52, 12, C.white)}
    <rect x="28" y="524" width="32" height="32" rx="10" fill="#E8F5E9"/>
    <text x="44" y="545" text-anchor="middle" font-family="${'system-ui, -apple-system, sans-serif'}" font-size="14px" font-weight="600" fill="#4CAF50">&#9783;</text>
    ${text(70, 538, 'Grocery Store', { font: '14px', weight: '500', fill: C.darkNavy })}
    ${text(70, 556, 'Yesterday, 3:20 PM', { font: '11px', fill: C.slate })}
    ${text(280, 541, '-$45.20', { font: '14px', weight: '600', fill: C.darkNavy, anchor: 'end' })}

    <!-- Uber -->
    ${rect(16, 572, 280, 52, 12, C.white)}
    <rect x="28" y="582" width="32" height="32" rx="10" fill="#E3F2FD"/>
    <text x="44" y="603" text-anchor="middle" font-family="${'system-ui, -apple-system, sans-serif'}" font-size="14px" font-weight="600" fill="#2196F3">&#9855;</text>
    ${text(70, 596, 'Uber', { font: '14px', weight: '500', fill: C.darkNavy })}
    ${text(70, 614, 'May 28, 7:15 PM', { font: '11px', fill: C.slate })}
    ${text(280, 599, '-$12.30', { font: '14px', weight: '600', fill: C.darkNavy, anchor: 'end' })}

    <!-- Restaurant -->
    ${rect(16, 630, 280, 52, 12, C.white)}
    <rect x="28" y="640" width="32" height="32" rx="10" fill="#FCE4EC"/>
    <text x="44" y="661" text-anchor="middle" font-family="${'system-ui, -apple-system, sans-serif'}" font-size="14px" font-weight="600" fill="#E91E63">&#9785;</text>
    ${text(70, 654, 'Restaurant', { font: '14px', weight: '500', fill: C.darkNavy })}
    ${text(70, 672, 'May 27, 8:00 PM', { font: '11px', fill: C.slate })}
    ${text(280, 657, '-$28.00', { font: '14px', weight: '600', fill: C.darkNavy, anchor: 'end' })}

    <!-- bottom nav -->
    ${navBar()}
  `);
}

// ══════════════════════════════════════════════
//  SCREEN 2: Categories
// ══════════════════════════════════════════════
function screenCategories() {
  const navY = H - 64;

  const categories = [
    { name: 'Food & Dining', amount: '$850', color: C.orange, icon: '&#9749;' },
    { name: 'Transportation', amount: '$320', color: C.blue, icon: '&#9855;' },
    { name: 'Shopping', amount: '$480', color: C.accent, icon: '&#9875;' },
    { name: 'Entertainment', amount: '$210', color: C.purple, icon: '&#9792;' },
    { name: 'Bills & Utilities', amount: '$390', color: C.green, icon: '&#9881;' },
    { name: 'Other', amount: '$200', color: C.gray, icon: '&#9003;' },
  ];

  return svg(`
    <!-- background -->
    <rect width="${W}" height="${H}" fill="${C.bg}"/>

    <!-- status bar -->
    <rect x="0" y="0" width="${W}" height="44" fill="${C.bg}"/>
    ${text(16, 28, '9:41', { font: '13px', weight: '600' })}
    <rect x="260" y="18" width="22" height="11" rx="2" fill="none" stroke="${C.darkNavy}" stroke-width="1.2"/>
    <rect x="262" y="20" width="15" height="7" rx="1" fill="${C.darkNavy}"/>
    <rect x="284" y="21" width="2" height="5" rx="0.5" fill="${C.darkNavy}"/>
    <rect x="240" y="22" width="2.5" height="2.5" rx="0.5" fill="${C.darkNavy}"/>
    <rect x="244" y="19" width="2.5" height="5.5" rx="0.5" fill="${C.darkNavy}"/>
    <rect x="248" y="15" width="2.5" height="9.5" rx="0.5" fill="${C.darkNavy}"/>
    <rect x="252" y="11" width="2.5" height="13.5" rx="0.5" fill="${C.darkNavy}"/>

    <!-- header -->
    ${text(20, 72, 'Categories', { font: '26px', weight: '700', fill: C.darkNavy })}

    <!-- total spending mini card -->
    ${rect(16, 88, 280, 56, 14, C.primary)}
    ${text(32, 110, 'Total Spent This Month', { font: '12px', fill: '#B8C4F6' })}
    ${text(32, 134, '$2,450.00', { font: '22px', weight: '700', fill: C.white })}

    <!-- category list -->
    ${text(20, 172, 'Spending by Category', { font: '16px', weight: '600', fill: C.darkNavy })}

    <!-- categories -->
    ${categories.map((cat, i) => {
      const y = 190 + i * 70;
      // card
      let s = `<rect x="16" y="${y}" width="${280}" height="60" rx="14" fill="${C.white}"/>`;
      // left color circle
      s += `<circle cx="48" cy="${y + 30}" r="16" fill="${cat.color}"/>`;
      // icon inside circle
      s += `<text x="48" y="${y + 35}" text-anchor="middle" font-size="13px" fill="${C.white}" font-weight="600">${cat.icon}</text>`;
      // name
      s += text(74, y + 28, cat.name, { font: '14px', weight: '500', fill: C.darkNavy });
      // amount
      s += text(280, y + 28 + 1, cat.amount, { font: '14px', weight: '700', fill: C.darkNavy, anchor: 'end' });
      // spending bar (proportional)
      const total = 2450;
      const barW = (parseInt(cat.amount.replace('$', '')) / total) * 180;
      s += `<rect x="74" y="${y + 42}" width="${barW}" height="4" rx="2" fill="${cat.color}" opacity="0.3"/>`;
      // chevron
      s += `<text x="280" y="${y + 35}" text-anchor="end" font-size="12px" fill="${C.divider}">&#9654;</text>`;
      return s;
    }).join('\n')}

    <!-- bottom nav (Categories active) -->
    <rect x="0" y="${H - 64}" width="${W}" height="64" fill="${C.white}"/>
    <line x1="0" y1="${H - 64}" x2="${W}" y2="${H - 64}" stroke="${C.divider}" stroke-width="1"/>
    ${homeIcon(28, H - 54, 18)}
    ${text(20, H - 33, 'Home', { font: '10px', fill: C.slate })}
    ${activeCatIcon(100, H - 54, 18)}
    ${text(90, H - 33, 'Categories', { font: '10px', fill: C.primary, weight: '600' })}
    ${reportIcon(170, H - 54, 18)}
    ${text(163, H - 33, 'Reports', { font: '10px', fill: C.slate })}
    ${settingsIcon(240, H - 54, 18)}
    ${text(232, H - 33, 'Settings', { font: '10px', fill: C.slate })}
    <!-- pill indicator at categories -->
    <rect x="110" y="${H - 7}" width="12" height="3" rx="1.5" fill="${C.primary}"/>
  `);
}

// ── Write files ──
writeFileSync(join(OUT, 'dashboard_home.svg'), screenDashboard());
writeFileSync(join(OUT, 'categories_screen.svg'), screenCategories());

console.log('Done! Created:');
console.log('  dashboard_home.svg');
console.log('  categories_screen.svg');
