// Data - Updated 2026-03-21
const data = {
  systems: [
    { name: "AI Co-Scientist", company: "Google DeepMind", status: "closed", url: "https://deepmind.google", desc: { en: "Multi-agent system for hypothesis generation", zh: "多Agent假设生成系统" } },
    { name: "FARS", company: "FutureHouse", status: "closed", url: "https://futurehouse.org", desc: { en: "Full-stack autonomous research system", zh: "全栈自主科研系统" } },
    { name: "AI Scientist v2", company: "SakanaAI", status: "open", url: "https://github.com/SakanaAI/AI-Scientist-v2", desc: { en: "End-to-end automated discovery", zh: "端到端自动发现" } },
    { name: "AutoResearch", company: "Karpathy", status: "open", url: "https://github.com/karpathy/autoresearch", desc: { en: "Single-GPU research agent (46K stars)", zh: "单GPU研究Agent (4.6万星)" } },
    { name: "nanobot", company: "HKUDS", status: "open", url: "https://github.com/HKUDS/nanobot", desc: { en: "Ultra-lightweight OpenClaw (33K stars)", zh: "超轻量OpenClaw (3.3万星)" } },
    { name: "zeroclaw", company: "zeroclaw-labs", status: "open", url: "https://github.com/zeroclaw-labs/zeroclaw", desc: { en: "Fast autonomous AI in Rust (27K stars)", zh: "Rust自主AI (2.7万星)" } }
  ],
  timeline: [
    { date: "2026-03-21", event: { en: "autoresearch reaches 46K+ stars", zh: "autoresearch 突破4.6万星" }, source: "GitHub" },
    { date: "2026-03-15", event: { en: "OpenClaw ecosystem explosion (100+ projects)", zh: "OpenClaw生态爆发 (100+项目)" }, source: "GitHub" },
    { date: "2026-03-12", event: { en: "AI-Research-Agent-Stack launched", zh: "AI-Research-Agent-Stack 发布" }, source: "GitHub" },
    { date: "2026-03-11", event: { en: "AI-Scientist-v2 released", zh: "AI-Scientist-v2 发布" }, source: "SakanaAI" },
    { date: "2026-03-10", event: { en: "Google AI Co-Scientist announced", zh: "Google 发布 AI Co-Scientist" }, source: "DeepMind" },
    { date: "2026-03-08", event: { en: "Karpathy autoresearch trending", zh: "Karpathy autoresearch 爆火" }, source: "Twitter/X" },
    { date: "2026-02-15", event: { en: "FARS system demonstration", zh: "FARS 系统演示" }, source: "FutureHouse" }
  ],
  projects: [
    { id: "autoresearch", name: "autoresearch", owner: "karpathy", url: "https://github.com/karpathy/autoresearch", stars: 46121, category: "full-stack-research", desc: { en: "Single-GPU auto-research agent by Karpathy", zh: "Karpathy新作，单GPU自动研究Agent" }, tags: ["AutoML", "SingleGPU"], updated: "2026-03-21", created: "2026-03-01" },
    { id: "AI-Scientist-v2", name: "AI-Scientist-v2", owner: "SakanaAI", url: "https://github.com/SakanaAI/AI-Scientist-v2", stars: 2305, category: "full-stack-research", desc: { en: "End-to-end research automation", zh: "端到端科研自动化" }, tags: ["Multi-Agent", "End-to-End"], updated: "2026-03-21", created: "2026-03-05" },
    { id: "OpenResearcher", name: "OpenResearcher", owner: "TIGER-AI-Lab", url: "https://github.com/TIGER-AI-Lab/OpenResearcher", stars: 425, category: "full-stack-research", desc: { en: "Open pipeline for deep research trajectory synthesis", zh: "深度研究轨迹合成开放流水线" }, tags: ["DeepResearch", "OpenSource"], updated: "2026-03-15", created: "2026-03-08" },
    { id: "AutoResearchClaw", name: "AutoResearchClaw", owner: "aiming-lab", url: "https://github.com/aiming-lab/AutoResearchClaw", stars: 92, category: "full-stack-research", desc: { en: "Fully autonomous research from idea to paper", zh: "从想法到论文完全自动化" }, tags: ["AutoResearch", "OpenClaw"], updated: "2026-03-15", created: "2026-03-10" },
    { id: "librarium", name: "librarium", owner: "jkudish", url: "https://github.com/jkudish/librarium", stars: 112, category: "deep-research", desc: { en: "Multi-provider deep research CLI", zh: "多提供商深度研究CLI" }, tags: ["CLI", "MultiProvider"], updated: "2026-03-05", created: "2026-02-20" },
    { id: "OpenDeepResearch", name: "OpenDeepResearch", owner: "DesignOps6ix9", url: "https://github.com/DesignOps6ix9/OpenDeepResearch", stars: 69, category: "deep-research", desc: { en: "Interactive deep research agent", zh: "可交互深度研究Agent" }, tags: ["Interactive", "Chinese"], updated: "2026-03-14", created: "2026-03-01" },
    { id: "last30days-skill", name: "last30days-skill", owner: "mvanhorn", url: "https://github.com/mvanhorn/last30days-skill", stars: 4418, category: "literature-research", desc: { en: "Cross-platform research aggregation", zh: "跨平台研究聚合工具" }, tags: ["RAG", "Multi-Source"], updated: "2026-03-21", created: "2026-02-25" },
    { id: "paperbanana", name: "paperbanana", owner: "llmsresearch", url: "https://github.com/llmsresearch/paperbanana", stars: 1164, category: "literature-research", desc: { en: "Automated academic figures and research visuals", zh: "自动学术图表和研究可视化" }, tags: ["Visualization", "Academic"], updated: "2026-03-15", created: "2026-02-28" },
    { id: "evil-read-arxiv", name: "evil-read-arxiv", owner: "juliye2025", url: "https://github.com/juliye2025/evil-read-arxiv", stars: 387, category: "literature-research", desc: { en: "Claude Code + Obsidian for reading papers", zh: "Claude Code + Obsidian 读论文" }, tags: ["Obsidian", "PaperReading"], updated: "2026-03-15", created: "2026-03-03" },
    { id: "scholaraio", name: "scholaraio", owner: "ZimoLiao", url: "https://github.com/ZimoLiao/scholaraio", stars: 199, category: "literature-research", desc: { en: "AI-powered academic research terminal", zh: "AI学术研究终端" }, tags: ["Terminal", "Research"], updated: "2026-03-21", created: "2026-02-20" },
    { id: "ResearchClaw", name: "ResearchClaw", owner: "ymx10086", url: "https://github.com/ymx10086/ResearchClaw", stars: 196, category: "literature-research", desc: { en: "Personal AI research assistant on OpenClaw", zh: "基于OpenClaw的个人研究助手" }, tags: ["OpenClaw", "Assistant"], updated: "2026-03-21", created: "2026-03-05" },
    { id: "nanobot", name: "nanobot", owner: "HKUDS", url: "https://github.com/HKUDS/nanobot", stars: 33621, category: "openclaw", desc: { en: "Ultra-lightweight OpenClaw implementation", zh: "超轻量级OpenClaw实现" }, tags: ["Lightweight", "OpenClaw"], updated: "2026-03-15", created: "2026-01-15" },
    { id: "zeroclaw", name: "zeroclaw", owner: "zeroclaw-labs", url: "https://github.com/zeroclaw-labs/zeroclaw", stars: 27122, category: "openclaw", desc: { en: "Fast autonomous AI assistant in Rust", zh: "Rust实现的快速自主AI助手" }, tags: ["Rust", "Autonomous"], updated: "2026-03-15", created: "2026-01-20" },
    { id: "awesome-openclaw-usecases", name: "awesome-openclaw-usecases", owner: "hesamsheikh", url: "https://github.com/hesamsheikh/awesome-openclaw-usecases", stars: 24918, category: "openclaw", desc: { en: "Community collection of OpenClaw use cases", zh: "OpenClaw用例社区合集" }, tags: ["Community", "UseCases"], updated: "2026-03-15", created: "2026-01-10" },
    { id: "openfang", name: "openfang", owner: "RightNow-AI", url: "https://github.com/RightNow-AI/openfang", stars: 14456, category: "openclaw", desc: { en: "Open-source Agent Operating System", zh: "开源Agent操作系统" }, tags: ["OS", "Agent"], updated: "2026-03-15", created: "2026-01-25" },
    { id: "ironclaw", name: "ironclaw", owner: "nearai", url: "https://github.com/nearai/ironclaw", stars: 10056, category: "openclaw", desc: { en: "OpenClaw in Rust for privacy & security", zh: "Rust隐私安全版OpenClaw" }, tags: ["Rust", "Privacy"], updated: "2026-03-15", created: "2026-02-01" },
    { id: "edict", name: "edict", owner: "cft0808", url: "https://github.com/cft0808/edict", stars: 9380, category: "openclaw", desc: { en: "Multi-Agent Orchestration", zh: "多Agent编排系统" }, tags: ["MultiAgent", "Chinese"], updated: "2026-03-15", created: "2026-02-05" },
    { id: "SciEvalKit", name: "SciEvalKit", owner: "InternScience", url: "https://github.com/InternScience/SciEvalKit", stars: 74, category: "benchmark", desc: { en: "Scientific intelligence evaluation toolkit", zh: "科学智能评估工具包" }, tags: ["Benchmark", "Leaderboard"], updated: "2026-02-27", created: "2026-02-15" },
    { id: "airs-bench", name: "airs-bench", owner: "facebookresearch", url: "https://github.com/facebookresearch/airs-bench", stars: 67, category: "benchmark", desc: { en: "Meta's AI Research Science benchmark", zh: "Meta的AI研究基准" }, tags: ["Meta", "Benchmark"], updated: "2026-03-21", created: "2026-03-01" },
    { id: "DeepInnovator", name: "DeepInnovator", owner: "HKUDS", url: "https://github.com/HKUDS/DeepInnovator", stars: 188, category: "tools", desc: { en: "AI Research Assistant for scientific discovery", zh: "AI研究助手 - 科学发现" }, tags: ["Innovation", "IdeaGeneration"], updated: "2026-03-15", created: "2026-03-05" },
    { id: "ata", name: "ata", owner: "Agents2AgentsAI", url: "https://github.com/Agents2AgentsAI/ata", stars: 68, category: "tools", desc: { en: "End-to-end engineering/research agents", zh: "端到端工程和研究Agent" }, tags: ["Multi-Agent", "Workflow"], updated: "2026-03-21", created: "2026-03-01" }
  ],
  domains: [
    { id: "general-science", icon: "🔬", name: { en: "General Science", zh: "通用科研" }, projects: 6 },
    { id: "computer-science", icon: "💻", name: { en: "Computer Science", zh: "计算机科学" }, projects: 2 },
    { id: "literature-review", icon: "📚", name: { en: "Literature Review", zh: "文献综述" }, projects: 6 },
    { id: "infrastructure", icon: "🏗️", name: { en: "Infrastructure", zh: "基础设施" }, projects: 5 },
    { id: "multi-agent", icon: "🤖", name: { en: "Multi-Agent", zh: "多Agent" }, projects: 2 }
  ],
  papers: [
    { title: "Nurture-First Agent Development", url: "https://arxiv.org/abs/2603.10808", rating: 5, desc: { en: "Saves 60% Agent development time", zh: "节省60%的Agent开发时间" } },
    { title: "Emulating Clinician Cognition via Self-Evolving Deep Clinical Research", url: "https://arxiv.org/abs/2603.10677", rating: 5, desc: { en: "Improves diagnostic accuracy by 11.2%", zh: "诊断准确率提升11.2%" } },
    { title: "Reasoning LLMs-as-Judges in Non-Verifiable LLM Post-Training", url: "https://arxiv.org/abs/2603.12246", rating: 5, desc: { en: "Insights for reasoning judges in RL alignment", zh: "推理型评判在RL对齐中的洞察" } },
    { title: "TopoBench: Benchmarking LLMs on Hard Topological Reasoning", url: "https://arxiv.org/abs/2603.12133", rating: 4, desc: { en: "Reveals spatial reasoning limitations", zh: "揭示空间推理局限性" } }
  ]
};

let lang = 'en';
let filter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initFilters();
  initTimelineViz();
});

function toggleLang() {
  lang = lang === 'en' ? 'zh' : 'en';
  document.getElementById('langLabel').textContent = lang === 'en' ? '中文' : 'EN';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  renderAll();
}

function formatStars(s) { return s >= 1000 ? (s/1000).toFixed(1) + 'K' : s; }
function getCatIcon(c) {
  const icons = { 'full-stack-research':'🔬', 'deep-research':'🔍', 'literature-research':'📚', 'openclaw':'🤖', 'benchmark':'📊', 'tools':'🛠️' };
  return icons[c] || '📦';
}

function initTimelineViz() {
  // Simple bar chart visualization
  const monthlyData = {};
  data.projects.forEach(p => {
    const d = new Date(p.created || p.updated);
    const k = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    monthlyData[k] = (monthlyData[k] || 0) + 1;
  });
  const months = Object.keys(monthlyData).sort();
  const maxCount = Math.max(...Object.values(monthlyData));
  
  const container = document.getElementById('timelineViz');
  if (!container) return;
  
  let cum = 0;
  container.innerHTML = `
    <div class="timeline-chart">
      <div class="timeline-bars">
        ${months.map(m => {
          cum += monthlyData[m];
          const height = Math.max(40, (cum / (cum)) * 140);
          const [y, mo] = m.split('-');
          return `
            <div class="timeline-bar-wrapper">
              <div class="timeline-bar" style="height: ${height}px;">
                <span class="bar-count">${cum}</span>
              </div>
              <div class="timeline-bar-label">${lang === 'en' ? mo + '/' + y.slice(2) : mo + '月'}</div>
            </div>
          `;
        }).join('')}
      </div>
      <div class="timeline-legend">${lang === 'en' ? 'Cumulative Projects Over Time' : '项目累计增长趋势'}</div>
    </div>
  `;
}

function renderAll() {
  // Update stats
  const totalStars = data.projects.reduce((sum, p) => sum + p.stars, 0);
  document.getElementById('projectCount').textContent = data.projects.length + '+';
  document.getElementById('starCount').textContent = Math.round(totalStars / 1000) + 'K+';
  document.getElementById('paperCount').textContent = data.papers.length;

  // Systems
  const systemsEl = document.getElementById('topSystems');
  if (systemsEl) {
    systemsEl.innerHTML = data.systems.map(s => `
      <div class="system-item">
        <div>
          <a href="${s.url}" target="_blank" style="color:var(--text-primary);text-decoration:none;font-weight:500;">${s.name}</a>
          <div style="font-size:0.75rem;color:var(--text-muted);">${s.desc[lang]}</div>
        </div>
        <div style="text-align:right;">
          <div class="system-company">${s.company}</div>
          <span class="status-badge ${s.status}">${s.status==='open'?(lang==='en'?'Open Source':'开源'):(lang==='en'?'Proprietary':'闭源')}</span>
        </div>
      </div>
    `).join('');
  }

  // Timeline Events
  const eventsEl = document.getElementById('eventsList');
  if (eventsEl) {
    eventsEl.innerHTML = data.timeline.map(t => `
      <div class="event-item">
        <div class="event-date">${t.date}</div>
        <div class="event-text">${t.event[lang]}</div>
      </div>
    `).join('');
  }

  // Top Projects
  const top = data.projects.slice(0, 6);
  const topEl = document.getElementById('topProjects');
  if (topEl) {
    topEl.innerHTML = top.map((p, i) => `
      <div class="project-card">
        ${i < 3 ? `<div class="rank-badge" style="position:absolute;top:-8px;right:12px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#78350f;font-weight:700;font-size:0.75rem;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;">${i+1}</div>` : ''}
        <div class="project-header">
          <div class="project-name"><a href="${p.url}" target="_blank">${p.owner}/${p.name}</a></div>
          <span class="project-stars">⭐ ${formatStars(p.stars)}</span>
        </div>
        <p class="project-desc">${p.desc[lang]}</p>
        <div class="project-footer" style="display:flex;justify-content:space-between;align-items:center;font-size:0.75rem;">
          <span>${p.tags.map(t => `<span class="tag">${t}</span>`).join(' ')}</span>
          <span style="color:var(--text-muted);">${p.updated}</span>
        </div>
      </div>
    `).join('');
  }

  // Domains
  const domainsEl = document.getElementById('domains');
  if (domainsEl) {
    domainsEl.innerHTML = data.domains.map(d => `
      <div class="domain-card">
        <div class="domain-icon">${d.icon}</div>
        <div class="domain-name">${d.name[lang]}</div>
        <div class="domain-count">${d.projects} ${lang === 'en' ? 'projects' : '个项目'}</div>
      </div>
    `).join('');
  }

  // All Projects
  renderProjects();

  // Papers
  const papersEl = document.getElementById('papers');
  if (papersEl) {
    papersEl.innerHTML = data.papers.map(p => `
      <div class="paper-card">
        <div class="paper-rating">${'⭐'.repeat(p.rating)}</div>
        <div class="paper-title"><a href="${p.url}" target="_blank">${p.title}</a></div>
        <div class="paper-meta">${p.desc[lang]}</div>
      </div>
    `).join('');
  }

  // Update footer date
  const footer = document.querySelector('.footer p');
  if (footer) {
    footer.innerHTML = `Maintained by <strong>OpenClaw</strong> · Updated 2026-03-21`;
  }
}

function renderProjects() {
  const filtered = filter === 'all' ? data.projects : data.projects.filter(p => p.category === filter);
  const container = document.getElementById('allProjects');
  if (!container) return;
  
  container.innerHTML = filtered.map(p => `
    <div class="project-card">
      <div class="project-header">
        <div class="project-name"><a href="${p.url}" target="_blank">${p.owner}/${p.name}</a></div>
        <span class="project-stars">⭐ ${formatStars(p.stars)}</span>
      </div>
      <p class="project-desc">${p.desc[lang]}</p>
      <div class="project-footer" style="display:flex;justify-content:space-between;align-items:center;font-size:0.75rem;">
        <span>${p.tags.map(t => `<span class="tag">${t}</span>`).join(' ')}</span>
        <span style="color:var(--text-muted);">${p.updated}</span>
      </div>
    </div>
  `).join('');
}

function initFilters() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filter = btn.dataset.cat;
      renderProjects();
    });
  });
}
