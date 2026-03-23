// Data - Updated 2026-03-23
const data = {
  systems: [
    { name: "AI Co-Scientist", company: "Google DeepMind", status: "closed", url: "https://deepmind.google", desc: { en: "Multi-agent system for hypothesis generation", zh: "多Agent假设生成系统" } },
    { name: "FARS", company: "FutureHouse", status: "closed", url: "https://futurehouse.org", desc: { en: "Full-stack autonomous research system", zh: "全栈自主科研系统" } },
    { name: "AI Scientist v2", company: "SakanaAI", status: "open", url: "https://github.com/SakanaAI/AI-Scientist-v2", desc: { en: "End-to-end automated discovery", zh: "端到端自动发现" } },
    { name: "AutoResearch", company: "Karpathy", status: "open", url: "https://github.com/karpathy/autoresearch", desc: { en: "Single-GPU research agent (50K stars)", zh: "单GPU研究Agent (5万星)" } },
    { name: "nanobot", company: "HKUDS", status: "open", url: "https://github.com/HKUDS/nanobot", desc: { en: "Ultra-lightweight OpenClaw (35K stars)", zh: "超轻量OpenClaw (3.5万星)" } },
    { name: "zeroclaw", company: "zeroclaw-labs", status: "open", url: "https://github.com/zeroclaw-labs/zeroclaw", desc: { en: "Fast autonomous AI in Rust (28K stars)", zh: "Rust自主AI (2.8万星)" } }
  ],
  timeline: [
    { date: "2026-03-23", event: { en: "<a href='https://github.com/karpathy/autoresearch' target='_blank'>autoresearch</a> breaks 50K stars!", zh: "<a href='https://github.com/karpathy/autoresearch' target='_blank'>autoresearch</a> 突破5万星!" }, source: "GitHub" },
    { date: "2026-03-22", event: { en: "<a href='https://github.com/aiming-lab/AutoResearchClaw' target='_blank'>AutoResearchClaw</a> explodes to 7.5K stars", zh: "<a href='https://github.com/aiming-lab/AutoResearchClaw' target='_blank'>AutoResearchClaw</a> 暴涨至7500星" }, source: "GitHub" },
    { date: "2026-03-15", event: { en: "OpenClaw ecosystem explosion (100+ projects)", zh: "OpenClaw生态爆发 (100+项目)" }, source: "GitHub" },
    { date: "2026-03-12", event: { en: "<a href='https://github.com/caimingshuo/AI-Research-Agent-Stack' target='_blank'>AI-Research-Agent-Stack</a> launched", zh: "<a href='https://github.com/caimingshuo/AI-Research-Agent-Stack' target='_blank'>AI-Research-Agent-Stack</a> 发布" }, source: "GitHub" },
    { date: "2026-03-11", event: { en: "<a href='https://github.com/SakanaAI/AI-Scientist-v2' target='_blank'>AI-Scientist-v2</a> released", zh: "<a href='https://github.com/SakanaAI/AI-Scientist-v2' target='_blank'>AI-Scientist-v2</a> 发布" }, source: "SakanaAI" },
    { date: "2026-03-10", event: { en: "Google <a href='https://deepmind.google' target='_blank'>AI Co-Scientist</a> announced", zh: "Google 发布 <a href='https://deepmind.google' target='_blank'>AI Co-Scientist</a>" }, source: "DeepMind" },
    { date: "2026-03-08", event: { en: "Karpathy autoresearch trending", zh: "Karpathy autoresearch 爆火" }, source: "Twitter/X" },
    { date: "2026-02-15", event: { en: "<a href='https://futurehouse.org' target='_blank'>FARS</a> system demonstration", zh: "<a href='https://futurehouse.org' target='_blank'>FARS</a> 系统演示" }, source: "FutureHouse" }
  ],
  projects: [
    { id: "autoresearch", name: "autoresearch", owner: "karpathy", url: "https://github.com/karpathy/autoresearch", stars: 50007, category: "full-stack-research", desc: { en: "Single-GPU auto-research agent by Karpathy", zh: "Karpathy新作，单GPU自动研究Agent" }, tags: ["AutoML", "SingleGPU"], updated: "2026-03-23", created: "2026-03-01" },
    { id: "nanobot", name: "nanobot", owner: "HKUDS", url: "https://github.com/HKUDS/nanobot", stars: 35491, category: "openclaw", desc: { en: "Ultra-lightweight OpenClaw implementation", zh: "超轻量级OpenClaw实现" }, tags: ["Lightweight", "OpenClaw"], updated: "2026-03-23", created: "2026-01-15" },
    { id: "zeroclaw", name: "zeroclaw", owner: "zeroclaw-labs", url: "https://github.com/zeroclaw-labs/zeroclaw", stars: 28409, category: "openclaw", desc: { en: "Fast autonomous AI assistant in Rust", zh: "Rust实现的快速自主AI助手" }, tags: ["Rust", "Autonomous"], updated: "2026-03-23", created: "2026-01-20" },
    { id: "awesome-openclaw-usecases", name: "awesome-openclaw-usecases", owner: "hesamsheikh", url: "https://github.com/hesamsheikh/awesome-openclaw-usecases", stars: 26789, category: "openclaw", desc: { en: "Community collection of OpenClaw use cases", zh: "OpenClaw用例社区合集" }, tags: ["Community", "UseCases"], updated: "2026-03-23", created: "2026-01-10" },
    { id: "openfang", name: "openfang", owner: "RightNow-AI", url: "https://github.com/RightNow-AI/openfang", stars: 15265, category: "openclaw", desc: { en: "Open-source Agent Operating System", zh: "开源Agent操作系统" }, tags: ["OS", "Agent"], updated: "2026-03-23", created: "2026-01-25" },
    { id: "AI-Scientist", name: "AI-Scientist", owner: "SakanaAI", url: "https://github.com/SakanaAI/AI-Scientist", stars: 12488, category: "full-stack-research", desc: { en: "Fully automated open-ended scientific discovery", zh: "全自动化开放式科学发现" }, tags: ["Multi-Agent", "End-to-End"], updated: "2026-03-23", created: "2026-02-01" },
    { id: "edict", name: "edict", owner: "cft0808", url: "https://github.com/cft0808/edict", stars: 12033, category: "openclaw", desc: { en: "Multi-Agent Orchestration", zh: "多Agent编排系统" }, tags: ["MultiAgent", "Chinese"], updated: "2026-03-23", created: "2026-02-05" },
    { id: "ironclaw", name: "ironclaw", owner: "nearai", url: "https://github.com/nearai/ironclaw", stars: 10690, category: "openclaw", desc: { en: "OpenClaw in Rust for privacy & security", zh: "Rust隐私安全版OpenClaw" }, tags: ["Rust", "Privacy"], updated: "2026-03-23", created: "2026-02-01" },
    { id: "AutoResearchClaw", name: "AutoResearchClaw", owner: "aiming-lab", url: "https://github.com/aiming-lab/AutoResearchClaw", stars: 7650, category: "full-stack-research", desc: { en: "Fully autonomous research from idea to paper", zh: "从想法到论文完全自动化" }, tags: ["AutoResearch", "OpenClaw"], updated: "2026-03-23", created: "2026-03-10" },
    { id: "AI-Research-SKILLs", name: "AI-Research-SKILLs", owner: "Orchestra-Research", url: "https://github.com/Orchestra-Research/AI-Research-SKILLs", stars: 5412, category: "tools", desc: { en: "Comprehensive open-source library of AI research skills", zh: "全面的AI研究技能开源库" }, tags: ["Skills", "Library"], updated: "2026-03-23", created: "2026-03-01" },
    { id: "PaperBanana", name: "PaperBanana", owner: "dwzhu-pku", url: "https://github.com/dwzhu-pku/PaperBanana", stars: 5340, category: "literature-research", desc: { en: "Automating academic illustration for AI scientists", zh: "AI科学家学术图表自动化" }, tags: ["Visualization", "Academic"], updated: "2026-03-23", created: "2026-01-30" },
    { id: "last30days-skill", name: "last30days-skill", owner: "mvanhorn", url: "https://github.com/mvanhorn/last30days-skill", stars: 4484, category: "literature-research", desc: { en: "Cross-platform research aggregation", zh: "跨平台研究聚合工具" }, tags: ["RAG", "Multi-Source"], updated: "2026-03-23", created: "2026-02-25" },
    { id: "EvoScientist", name: "EvoScientist", owner: "EvoScientist", url: "https://github.com/EvoScientist/EvoScientist", stars: 1500, category: "full-stack-research", desc: { en: "Self-evolving AI Scientists", zh: "自进化AI科学家" }, tags: ["SelfEvolution", "Research"], updated: "2026-03-23", created: "2026-01-26" },
    { id: "AI-Scientist-v2", name: "AI-Scientist-v2", owner: "SakanaAI", url: "https://github.com/SakanaAI/AI-Scientist-v2", stars: 2311, category: "full-stack-research", desc: { en: "Workshop-level automated scientific discovery", zh: "Workshop级别自动化科学发现" }, tags: ["Multi-Agent", "End-to-End"], updated: "2026-03-23", created: "2026-03-05" },
    { id: "ToolUniverse", name: "ToolUniverse", owner: "mims-harvard", url: "https://github.com/mims-harvard/ToolUniverse", stars: 1145, category: "tools", desc: { en: "Democratizing AI scientists with ToolUniverse", zh: "用ToolUniverse民主化AI科学家" }, tags: ["Tools", "Democratization"], updated: "2026-03-23", created: "2026-02-15" },
    { id: "MLGym", name: "MLGym", owner: "facebookresearch", url: "https://github.com/facebookresearch/MLGym", stars: 591, category: "benchmark", desc: { en: "AI Research Agents framework and benchmark", zh: "AI研究Agent框架与基准" }, tags: ["Meta", "Benchmark"], updated: "2026-03-23", created: "2026-02-20" },
    { id: "evil-read-arxiv", name: "evil-read-arxiv", owner: "juliye2025", url: "https://github.com/juliye2025/evil-read-arxiv", stars: 519, category: "literature-research", desc: { en: "Claude Code + Obsidian for reading papers", zh: "Claude Code + Obsidian 读论文" }, tags: ["Obsidian", "PaperReading"], updated: "2026-03-23", created: "2026-03-03" },
    { id: "OpenResearcher", name: "OpenResearcher", owner: "TIGER-AI-Lab", url: "https://github.com/TIGER-AI-Lab/OpenResearcher", stars: 435, category: "full-stack-research", desc: { en: "Deep research trajectory synthesis", zh: "深度研究轨迹合成" }, tags: ["DeepResearch", "OpenSource"], updated: "2026-03-23", created: "2026-03-08" },
    { id: "SciEvalKit", name: "SciEvalKit", owner: "InternScience", url: "https://github.com/InternScience/SciEvalKit", stars: 76, category: "benchmark", desc: { en: "Scientific intelligence evaluation toolkit", zh: "科学智能评估工具包" }, tags: ["Benchmark", "Leaderboard"], updated: "2026-03-23", created: "2026-02-15" },
    { id: "airs-bench", name: "airs-bench", owner: "facebookresearch", url: "https://github.com/facebookresearch/airs-bench", stars: 67, category: "benchmark", desc: { en: "Meta's AI Research Science benchmark", zh: "Meta的AI研究基准" }, tags: ["Meta", "Benchmark"], updated: "2026-03-23", created: "2026-03-01" },
    { id: "DeepInnovator", name: "DeepInnovator", owner: "HKUDS", url: "https://github.com/HKUDS/DeepInnovator", stars: 205, category: "benchmark", desc: { en: "AI Research Assistant for scientific discovery", zh: "AI研究助手 - 科学发现" }, tags: ["Innovation", "IdeaGeneration"], updated: "2026-03-23", created: "2026-03-05" },
    { id: "InnoClaw", name: "InnoClaw", owner: "SpectrAI-Initiative", url: "https://github.com/SpectrAI-Initiative/InnoClaw", stars: 194, category: "full-stack-research", desc: { en: "An AI research Agent for scientific innovation", zh: "AI科研创新Agent" }, tags: ["Innovation", "OpenClaw"], updated: "2026-03-23", created: "2026-03-09" },
    { id: "ResearchClaw", name: "ResearchClaw", owner: "ymx10086", url: "https://github.com/ymx10086/ResearchClaw", stars: 196, category: "literature-research", desc: { en: "Personal AI research assistant on OpenClaw", zh: "基于OpenClaw的个人研究助手" }, tags: ["OpenClaw", "Assistant"], updated: "2026-03-23", created: "2026-03-05" },
    { id: "scholaraio", name: "scholaraio", owner: "ZimoLiao", url: "https://github.com/ZimoLiao/scholaraio", stars: 199, category: "literature-research", desc: { en: "AI-powered academic research terminal", zh: "AI学术研究终端" }, tags: ["Terminal", "Research"], updated: "2026-03-23", created: "2026-02-20" },
    { id: "librarium", name: "librarium", owner: "jkudish", url: "https://github.com/jkudish/librarium", stars: 114, category: "deep-research", desc: { en: "Multi-provider deep research CLI", zh: "多提供商深度研究CLI" }, tags: ["CLI", "MultiProvider"], updated: "2026-03-23", created: "2026-02-20" }
  ],
  domains: [
    { id: "general-science", icon: "🔬", name: { en: "General Science", zh: "通用科研" }, projects: 9 },
    { id: "computer-science", icon: "💻", name: { en: "Computer Science", zh: "计算机科学" }, projects: 2 },
    { id: "literature-review", icon: "📚", name: { en: "Literature Review", zh: "文献综述" }, projects: 6 },
    { id: "infrastructure", icon: "🏗️", name: { en: "Infrastructure", zh: "基础设施" }, projects: 6 },
    { id: "tools", icon: "🛠️", name: { en: "Tools & Skills", zh: "工具与技能" }, projects: 4 }
  ],
  papers: [
    { title: "Nurture-First Agent Development: Building Domain-Expert AI Agents", url: "https://arxiv.org/abs/2603.10808", rating: 5, desc: { en: "Saves 60% Agent development time", zh: "节省60%的Agent开发时间" } },
    { title: "Emulating Clinician Cognition via Self-Evolving Deep Clinical Research", url: "https://arxiv.org/abs/2603.10677", rating: 5, desc: { en: "Improves diagnostic accuracy by 11.2%", zh: "诊断准确率提升11.2%" } },
    { title: "AI Scientist via Synthetic Task Scaling", url: "https://arxiv.org/abs/2603.11999", rating: 5, desc: { en: "Scaling AI scientist capabilities through synthetic tasks", zh: "通过合成任务扩展AI科学家能力" } },
    { title: "The Agentic Researcher: A Practical Guide to AI-Assisted Research", url: "https://arxiv.org/abs/2603.11234", rating: 5, desc: { en: "Comprehensive guide for AI-assisted research in ML", zh: "AI辅助机器学习研究实践指南" } },
    { title: "Toward Reliable, Safe, and Secure LLMs for Scientific Applications", url: "https://arxiv.org/abs/2603.11876", rating: 5, desc: { en: "Ensuring trustworthy deployment of AI scientists", zh: "确保AI科学家的可信部署" } },
    { title: "The Attack and Defense Landscape of Agentic AI: A Comprehensive Survey", url: "https://arxiv.org/abs/2603.11567", rating: 4, desc: { en: "Security challenges and solutions for AI agents", zh: "AI Agent的安全挑战与解决方案" } },
    { title: "From Experiments to Expertise: Scientific Knowledge Consolidation for AI-Driven Research", url: "https://arxiv.org/abs/2603.11456", rating: 4, desc: { en: "How LLMs transform computational research", zh: "LLM如何变革计算研究" } },
    { title: "ClimateAgents: A Multi-Agent Research Assistant for Social-Climate Dynamics", url: "https://arxiv.org/abs/2603.10987", rating: 4, desc: { en: "Multi-agent system for climate research analysis", zh: "气候研究分析多Agent系统" } },
    { title: "ELISA: An Interpretable Hybrid Generative AI Agent for Single-Cell Genomics", url: "https://arxiv.org/abs/2603.11234", rating: 4, desc: { en: "AI agent for expression-grounded discovery", zh: "表达驱动发现的AI Agent" } },
    { title: "Intent Formalization: A Grand Challenge for Reliable Coding in the Age of AI Agents", url: "https://arxiv.org/abs/2603.11765", rating: 4, desc: { en: "Challenges in agentic code generation", zh: "Agent代码生成的挑战" } },
    { title: "Research Paradigm of Materials Science Tetrahedra with AI", url: "https://arxiv.org/abs/2603.10543", rating: 4, desc: { en: "AI-driven materials science research paradigm", zh: "AI驱动的材料科学研究范式" } },
    { title: "TopoBench: A Comprehensive Benchmark for Topological Reasoning in LLMs", url: "https://arxiv.org/abs/2603.12133", rating: 4, desc: { en: "Reveals spatial reasoning limitations in LLMs", zh: "揭示LLM空间推理局限性" } }
  ]
};

let lang = 'en';
let filter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initFilters();
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

// ========== Render Functions ==========

function renderAll() {
  // Update stats
  const totalStars = data.projects.reduce((sum, p) => sum + p.stars, 0);
  document.getElementById('projectCount').textContent = data.projects.length + '+';
  document.getElementById('starCount').textContent = Math.round(totalStars / 1000) + 'K+';
  document.getElementById('paperCount').textContent = data.papers.length;

  renderTimeline();
  renderTopProjects();
  renderDomains();
  renderProjects();
  renderPapers();
  renderSystems();
  renderEvents();
}

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  const timelineHTML = `
    <div class="timeline-line"></div>
    ${data.timeline.slice(0, 5).map((t, i) => `
      <div class="timeline-item" style="animation-delay: ${i * 0.1}s">
        <div class="timeline-date-badge">
          <span class="timeline-date">${t.date}</span>
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-event-badge">
          <div class="timeline-event-text">${t.event[lang]}</div>
          <div class="timeline-source">${t.source}</div>
        </div>
      </div>
    `).join('')}
  `;
  container.innerHTML = timelineHTML;
}

function renderTopProjects() {
  const top = data.projects.sort((a, b) => b.stars - a.stars).slice(0, 6);
  const container = document.getElementById('topProjects');
  container.innerHTML = top.map((p, i) => `
    <div class="project-card">
      <div class="project-header">
        <div class="project-name"><a href="${p.url}" target="_blank">${p.owner}/${p.name}</a></div>
        <span class="project-stars">⭐ ${formatStars(p.stars)}</span>
      </div>
      <p class="project-desc">${p.desc[lang]}</p>
      <div class="project-footer">
        <span>${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</span>
        <span class="project-updated">${p.updated}</span>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const filtered = filter === 'all' ? data.projects : data.projects.filter(p => p.category === filter);
  const container = document.getElementById('allProjects');
  container.innerHTML = `<div class="projects-grid">${filtered.map(p => `
    <div class="project-card">
      <div class="project-header">
        <div class="project-name"><a href="${p.url}" target="_blank">${p.owner}/${p.name}</a></div>
        <span class="project-stars">⭐ ${formatStars(p.stars)}</span>
      </div>
      <p class="project-desc">${p.desc[lang]}</p>
      <div class="project-footer">
        <span>${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</span>
        <span class="project-updated">${p.updated}</span>
      </div>
    </div>
  `).join('')}</div>`;
}

function renderDomains() {
  const container = document.getElementById('domains');
  container.innerHTML = data.domains.map(d => `
    <div class="domain-card">
      <span class="domain-icon">${d.icon}</span>
      <div class="domain-name">${d.name[lang]}</div>
      <div class="domain-count">${d.projects} ${lang === 'en' ? 'projects' : '个项目'}</div>
    </div>
  `).join('');
}

function renderPapers() {
  const container = document.getElementById('papers');
  container.innerHTML = data.papers.map(p => `
    <div class="paper-card">
      <div class="paper-rating">${'⭐'.repeat(p.rating)}</div>
      <div class="paper-title"><a href="${p.url}" target="_blank">${p.title}</a></div>
      <div class="paper-meta">${p.desc[lang]}</div>
    </div>
  `).join('');
}

function renderSystems() {
  const container = document.getElementById('topSystems');
  container.innerHTML = data.systems.map(s => `
    <div class="system-item">
      <div>
        <a href="${s.url}" target="_blank" style="color:var(--text-primary);text-decoration:none;font-weight:500;">${s.name}</a>
        <div class="system-company">${s.desc[lang]}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:4px;">${s.company}</div>
        <span class="status-badge ${s.status}">${s.status==='open'?(lang==='en'?'Open Source':'开源'):(lang==='en'?'Proprietary':'闭源')}</span>
      </div>
    </div>
  `).join('');
}

function renderEvents() {
  const container = document.getElementById('eventsList');
  container.innerHTML = data.timeline.slice(0, 6).map(t => `
    <div class="event-item">
      <span class="event-date">${t.date}</span>
      <span class="event-text">${t.event[lang]}</span>
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
