// Data
const data = {
  projects: [
    { id: "autoresearch", name: "autoresearch", owner: "karpathy", url: "https://github.com/karpathy/autoresearch", stars: 27321, category: "full-stack-research", domain: "computer-science", desc: { en: "Single-GPU auto-research agent by Karpathy", zh: "Karpathy新作，单GPU自动研究Agent" }, tags: ["AutoML", "SingleGPU"], updated: "2026-03-12" },
    { id: "last30days-skill", name: "last30days-skill", owner: "mvanhorn", url: "https://github.com/mvanhorn/last30days-skill", stars: 4040, category: "literature-research", domain: "literature-review", desc: { en: "Cross-platform research aggregation", zh: "跨平台研究聚合工具" }, tags: ["RAG", "Multi-Source"], updated: "2026-03-12" },
    { id: "AI-Scientist-v2", name: "AI-Scientist-v2", owner: "SakanaAI", url: "https://github.com/SakanaAI/AI-Scientist-v2", stars: 2257, category: "full-stack-research", domain: "general-science", desc: { en: "End-to-end research automation", zh: "端到端科研自动化" }, tags: ["Multi-Agent", "End-to-End"], updated: "2026-03-11" },
    { id: "real-world-rails", name: "real-world-rails", owner: "steveclarke", url: "https://github.com/steveclarke/real-world-rails", stars: 472, category: "tools", domain: "software-engineering", desc: { en: "200+ production Rails apps with AI search", zh: "200+生产级Rails应用" }, tags: ["Search", "Production"], updated: "2026-03-11" },
    { id: "lenny-skills", name: "lenny-skills", owner: "RefoundAI", url: "https://github.com/RefoundAI/lenny-skills", stars: 410, category: "tools", domain: "business", desc: { en: "86 product management skills for AI agents", zh: "86个AI Agent产品管理技能" }, tags: ["Skills", "Product"], updated: "2026-03-12" },
    { id: "awesome-ai-agent-papers", name: "awesome-ai-agent-papers", owner: "VoltAgent", url: "https://github.com/VoltAgent/awesome-ai-agent-papers", stars: 289, category: "literature-research", domain: "literature-review", desc: { en: "2026 AI Agent papers collection", zh: "2026年AI Agent论文精选" }, tags: ["Curated", "Papers"], updated: "2026-03-11" },
    { id: "aso-skills", name: "aso-skills", owner: "Eronred", url: "https://github.com/Eronred/aso-skills", stars: 256, category: "tools", domain: "marketing", desc: { en: "AI agent skills for App Store Optimization", zh: "应用商店优化技能" }, tags: ["ASO", "Mobile"], updated: "2026-03-11" },
    { id: "Awesome-Scientific-Skills", name: "Awesome-Scientific-Skills", owner: "InternScience", url: "https://github.com/InternScience/Awesome-Scientific-Skills", stars: 178, category: "tools", domain: "general-science", desc: { en: "Curated Agent Skills for scientific research", zh: "科研Agent技能精选" }, tags: ["Skills", "Scientific"], updated: "2026-03-10" },
    { id: "skills", name: "skills", owner: "dylanfeltus", url: "https://github.com/dylanfeltus/skills", stars: 168, category: "tools", domain: "design", desc: { en: "AI agent skills for research and design", zh: "AI Agent研究和设计技能" }, tags: ["Skills", "Design"], updated: "2026-03-09" },
    { id: "scholaraio", name: "scholaraio", owner: "ZimoLiao", url: "https://github.com/ZimoLiao/scholaraio", stars: 113, category: "literature-research", domain: "data-science", desc: { en: "AI-powered academic research terminal", zh: "AI学术研究终端" }, tags: ["Terminal", "Research"], updated: "2026-03-12" },
    { id: "ScienceBoard", name: "ScienceBoard", owner: "OS-Copilot", url: "https://github.com/OS-Copilot/ScienceBoard", stars: 122, category: "benchmark", domain: "general-science", desc: { en: "[ICLR 2026] Multimodal research benchmark", zh: "[ICLR 2026] 多模态研究基准" }, tags: ["ICLR", "Benchmark"], updated: "2026-03-08" },
    { id: "yolodex", name: "yolodex", owner: "qtzx06", url: "https://github.com/qtzx06/yolodex", stars: 75, category: "tools", domain: "data-science", desc: { en: "Autonomous data labeling (OpenAI Hackathon winner)", zh: "自主数据标注（OpenAI获奖项目）" }, tags: ["DataLabeling", "Hackathon"], updated: "2026-02-05" },
    { id: "ResearchClaw", name: "ResearchClaw", owner: "ymx10086", url: "https://github.com/ymx10086/ResearchClaw", stars: 97, category: "literature-research", domain: "literature-review", desc: { en: "Personal AI research assistant on OpenClaw", zh: "基于OpenClaw的个人研究助手" }, tags: ["OpenClaw", "Assistant"], updated: "2026-03-11" },
    { id: "ata", name: "ata", owner: "Agents2AgentsAI", url: "https://github.com/Agents2AgentsAI/ata", stars: 67, category: "workflow-tools", domain: "computer-science", desc: { en: "AI agents for engineering and research", zh: "工程和研究AI Agent" }, tags: ["Multi-Agent", "Workflow"], updated: "2026-03-11" },
    { id: "airs-bench", name: "airs-bench", owner: "facebookresearch", url: "https://github.com/facebookresearch/airs-bench", stars: 66, category: "benchmark", domain: "general-science", desc: { en: "Meta's AI Research Science benchmark", zh: "Meta的AI研究基准" }, tags: ["Meta", "Benchmark"], updated: "2026-03-09" }
  ],
  domains: [
    { id: "general-science", icon: "🔬", name: { en: "General Science", zh: "通用科研" }, desc: { en: "Hypothesis generation, experiment design", zh: "假设生成、实验设计" }, projects: ["AI-Scientist-v2", "airs-bench", "ScienceBoard", "Awesome-Scientific-Skills"] },
    { id: "computer-science", icon: "💻", name: { en: "Computer Science", zh: "计算机科学" }, desc: { en: "Code generation, automation", zh: "代码生成、自动化" }, projects: ["autoresearch", "ata"] },
    { id: "literature-review", icon: "📚", name: { en: "Literature Review", zh: "文献综述" }, desc: { en: "Paper search, summarization", zh: "论文搜索、摘要" }, projects: ["last30days-skill", "awesome-ai-agent-papers", "ResearchClaw"] },
    { id: "data-science", icon: "📊", name: { en: "Data Science", zh: "数据科学" }, desc: { en: "Data analysis, visualization", zh: "数据分析、可视化" }, projects: ["scholaraio", "yolodex"] },
    { id: "tools", icon: "🛠️", name: { en: "Tools & Skills", zh: "工具与技能" }, desc: { en: "Agent skills and utilities", zh: "Agent技能和工具" }, projects: ["lenny-skills", "aso-skills", "skills"] }
  ],
  papers: [
    { title: "Nurture-First Agent Development", url: "https://arxiv.org/abs/2603.10808", rating: 5, desc: { en: "Saves 60% Agent development time", zh: "节省60%的Agent开发时间" } },
    { title: "Emulating Clinician Cognition via Self-Evolving Deep Clinical Research", url: "https://arxiv.org/abs/2603.10677", rating: 5, desc: { en: "Improves diagnostic accuracy by 11.2%", zh: "诊断准确率提升11.2%" } }
  ]
};

let lang = 'en';
let filter = 'all';

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderTopProjects();
  renderDomains();
  renderAllProjects();
  renderPapers();
  initFilters();
});

// Toggle language
function toggleLang() {
  lang = lang === 'en' ? 'zh' : 'en';
  document.getElementById('langLabel').textContent = lang === 'en' ? '中文' : 'EN';
  
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  
  renderTopProjects();
  renderDomains();
  renderAllProjects();
  renderPapers();
}

// Render top projects
function renderTopProjects() {
  const top = data.projects.slice(0, 3);
  document.getElementById('topProjects').innerHTML = top.map(p => `
    <div class="project-card top">
      <div class="project-header">
        <div class="project-name"><a href="${p.url}" target="_blank">${p.owner}/${p.name}</a></div>
        <span class="project-stars">⭐ ${(p.stars/1000).toFixed(1)}K</span>
      </div>
      <p class="project-desc">${p.desc[lang]}</p>
      <div class="project-meta">
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <span>${p.updated}</span>
      </div>
    </div>
  `).join('');
}

// Render domains
function renderDomains() {
  document.getElementById('domains').innerHTML = data.domains.map(d => `
    <div class="domain-card">
      <div class="domain-icon">${d.icon}</div>
      <div class="domain-name">${d.name[lang]}</div>
      <div class="domain-desc">${d.desc[lang]}</div>
      <div class="domain-projects">${d.projects.length} ${lang === 'en' ? 'projects' : '个项目'}</div>
    </div>
  `).join('');
}

// Render all projects
function renderAllProjects() {
  const filtered = filter === 'all' ? data.projects : data.projects.filter(p => p.category === filter);
  document.getElementById('allProjects').innerHTML = filtered.map(p => `
    <div class="project-card">
      <div class="project-header">
        <div class="project-name"><a href="${p.url}" target="_blank">${p.owner}/${p.name}</a></div>
        <span class="project-stars">⭐ ${p.stars >= 1000 ? (p.stars/1000).toFixed(1) + 'K' : p.stars}</span>
      </div>
      <p class="project-desc">${p.desc[lang]}</p>
      <div class="project-meta">
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <span>${p.updated}</span>
      </div>
    </div>
  `).join('');
}

// Render papers
function renderPapers() {
  document.getElementById('papers').innerHTML = data.papers.map(p => `
    <div class="paper-card">
      <div class="paper-rating">${'⭐'.repeat(p.rating)}</div>
      <div class="paper-title"><a href="${p.url}" target="_blank">${p.title}</a></div>
      <div class="paper-meta">${p.desc[lang]}</div>
    </div>
  `).join('');
}

// Init filters
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filter = btn.dataset.cat;
      renderAllProjects();
    });
  });
}
