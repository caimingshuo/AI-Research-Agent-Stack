// Data - Updated 2026-03-15
const data = {
  systems: [
    { name: "AI Co-Scientist", company: "Google DeepMind", status: "closed", url: "https://deepmind.google", desc: { en: "Multi-agent system for hypothesis generation", zh: "多Agent假设生成系统" } },
    { name: "FARS", company: "FutureHouse", status: "closed", url: "https://futurehouse.org", desc: { en: "Full-stack autonomous research system", zh: "全栈自主科研系统" } },
    { name: "AI Scientist v2", company: "SakanaAI", status: "open", url: "https://github.com/SakanaAI/AI-Scientist-v2", desc: { en: "End-to-end automated discovery", zh: "端到端自动发现" } },
    { name: "AutoResearch", company: "Karpathy", status: "open", url: "https://github.com/karpathy/autoresearch", desc: { en: "Single-GPU research agent (35K stars)", zh: "单GPU研究Agent (3.5万星)" } },
    { name: "nanobot", company: "HKUDS", status: "open", url: "https://github.com/HKUDS/nanobot", desc: { en: "Ultra-lightweight OpenClaw (33K stars)", zh: "超轻量OpenClaw (3.3万星)" } },
    { name: "zeroclaw", company: "zeroclaw-labs", status: "open", url: "https://github.com/zeroclaw-labs/zeroclaw", desc: { en: "Fast autonomous AI in Rust (27K stars)", zh: "Rust自主AI (2.7万星)" } },
    { name: "Coscientist", company: "Multiple Labs", status: "open", url: "https://github.com/jataware/open-coscientist", desc: { en: "Autonomous chemistry research", zh: "自主化学研究" } }
  ],
  timeline: [
    { date: "2026-03-15", event: { en: "OpenClaw ecosystem explosion (100+ projects)", zh: "OpenClaw生态爆发 (100+项目)" }, source: "GitHub" },
    { date: "2026-03-12", event: { en: "AI-Research-Agent-Stack launched", zh: "AI-Research-Agent-Stack 发布" }, source: "GitHub" },
    { date: "2026-03-11", event: { en: "AI-Scientist-v2 released", zh: "AI-Scientist-v2 发布" }, source: "SakanaAI" },
    { date: "2026-03-10", event: { en: "Google AI Co-Scientist announced", zh: "Google 发布 AI Co-Scientist" }, source: "DeepMind" },
    { date: "2026-03-08", event: { en: "Karpathy autoresearch trending", zh: "Karpathy autoresearch 爆火" }, source: "Twitter/X" },
    { date: "2026-02-15", event: { en: "FARS system demonstration", zh: "FARS 系统演示" }, source: "FutureHouse" }
  ],
  projects: [
    // Top Projects (Full-Stack Research)
    { id: "autoresearch", name: "autoresearch", owner: "karpathy", url: "https://github.com/karpathy/autoresearch", stars: 35057, category: "full-stack-research", domain: "computer-science", desc: { en: "Single-GPU auto-research agent by Karpathy", zh: "Karpathy新作，单GPU自动研究Agent" }, tags: ["AutoML", "SingleGPU"], updated: "2026-03-15" },
    { id: "AI-Scientist-v2", name: "AI-Scientist-v2", owner: "SakanaAI", url: "https://github.com/SakanaAI/AI-Scientist-v2", stars: 2274, category: "full-stack-research", domain: "general-science", desc: { en: "End-to-end research automation", zh: "端到端科研自动化" }, tags: ["Multi-Agent", "End-to-End"], updated: "2026-03-14" },
    { id: "OpenResearcher", name: "OpenResearcher", owner: "TIGER-AI-Lab", url: "https://github.com/TIGER-AI-Lab/OpenResearcher", stars: 425, category: "full-stack-research", domain: "general-science", desc: { en: "Open pipeline for deep research trajectory synthesis", zh: "深度研究轨迹合成开放流水线" }, tags: ["DeepResearch", "OpenSource"], updated: "2026-03-15" },
    { id: "AutoResearchClaw", name: "AutoResearchClaw", owner: "aiming-lab", url: "https://github.com/aiming-lab/AutoResearchClaw", stars: 92, category: "full-stack-research", domain: "general-science", desc: { en: "Fully autonomous research from idea to paper", zh: "从想法到论文完全自动化" }, tags: ["AutoResearch", "OpenClaw"], updated: "2026-03-15" },
    
    // Deep Research Agents
    { id: "librarium", name: "librarium", owner: "jkudish", url: "https://github.com/jkudish/librarium", stars: 112, category: "deep-research", domain: "general-science", desc: { en: "Multi-provider deep research CLI", zh: "多提供商深度研究CLI" }, tags: ["CLI", "MultiProvider"], updated: "2026-03-05" },
    { id: "OpenDeepResearch", name: "OpenDeepResearch", owner: "DesignOps6ix9", url: "https://github.com/DesignOps6ix9/OpenDeepResearch", stars: 69, category: "deep-research", domain: "general-science", desc: { en: "Interactive deep research agent", zh: "可交互深度研究Agent" }, tags: ["Interactive", "Chinese"], updated: "2026-03-14" },
    { id: "deep-research-prompt", name: "deep-research-prompt", owner: "Raymond-Hear", url: "https://github.com/Raymond-Hear/deep-research-prompt", stars: 72, category: "deep-research", domain: "general-science", desc: { en: "Deep research prompt engineering skill", zh: "深度研究提示词工程Skill" }, tags: ["PromptEngineering", "Skill"], updated: "2026-03-15" },
    
    // Literature Research
    { id: "last30days-skill", name: "last30days-skill", owner: "mvanhorn", url: "https://github.com/mvanhorn/last30days-skill", stars: 4162, category: "literature-research", domain: "literature-review", desc: { en: "Cross-platform research aggregation", zh: "跨平台研究聚合工具" }, tags: ["RAG", "Multi-Source"], updated: "2026-03-15" },
    { id: "paperbanana", name: "paperbanana", owner: "llmsresearch", url: "https://github.com/llmsresearch/paperbanana", stars: 1164, category: "literature-research", domain: "academic-writing", desc: { en: "Automated academic figures and research visuals", zh: "自动学术图表和研究可视化" }, tags: ["Visualization", "Academic"], updated: "2026-03-15" },
    { id: "evil-read-arxiv", name: "evil-read-arxiv", owner: "juliye2025", url: "https://github.com/juliye2025/evil-read-arxiv", stars: 387, category: "literature-research", domain: "literature-review", desc: { en: "Claude Code + Obsidian for reading papers", zh: "Claude Code + Obsidian 读论文" }, tags: ["Obsidian", "PaperReading"], updated: "2026-03-15" },
    { id: "arxiv-daily-researcher", name: "arxiv-daily-researcher", owner: "yzr278892", url: "https://github.com/yzr278892/arxiv-daily-researcher", stars: 230, category: "literature-research", domain: "literature-review", desc: { en: "Daily arXiv paper digest with notifications", zh: "arXiv每日论文推送与通知" }, tags: ["DailyDigest", "arXiv"], updated: "2026-03-15" },
    { id: "scholaraio", name: "scholaraio", owner: "ZimoLiao", url: "https://github.com/ZimoLiao/scholaraio", stars: 153, category: "literature-research", domain: "data-science", desc: { en: "AI-powered academic research terminal", zh: "AI学术研究终端" }, tags: ["Terminal", "Research"], updated: "2026-03-15" },
    { id: "ResearchClaw", name: "ResearchClaw", owner: "ymx10086", url: "https://github.com/ymx10086/ResearchClaw", stars: 127, category: "literature-research", domain: "literature-review", desc: { en: "Personal AI research assistant on OpenClaw", zh: "基于OpenClaw的个人研究助手" }, tags: ["OpenClaw", "Assistant"], updated: "2026-03-15" },
    { id: "PaperClaw", name: "PaperClaw", owner: "meowscles69", url: "https://github.com/meowscles69/PaperClaw", stars: 108, category: "literature-research", domain: "academic-writing", desc: { en: "27 OpenClaw skills for academic research teams", zh: "学术研究团队的27个OpenClaw技能" }, tags: ["Skills", "Academic"], updated: "2026-03-15" },
    { id: "arXivisual", name: "arXivisual", owner: "rajshah6", url: "https://github.com/rajshah6/arXivisual", stars: 150, category: "literature-research", domain: "data-science", desc: { en: "TartanHacks '26 Winner - arXiv visualization", zh: "黑客松获奖作品 - arXiv可视化" }, tags: ["Visualization", "Hackathon"], updated: "2026-03-14" },
    { id: "awesome-ai-agent-papers", name: "awesome-ai-agent-papers", owner: "VoltAgent", url: "https://github.com/VoltAgent/awesome-ai-agent-papers", stars: 305, category: "literature-research", domain: "literature-review", desc: { en: "2026 AI Agent papers collection", zh: "2026年AI Agent论文精选" }, tags: ["Curated", "Papers"], updated: "2026-03-15" },
    
    // OpenClaw Ecosystem
    { id: "nanobot", name: "nanobot", owner: "HKUDS", url: "https://github.com/HKUDS/nanobot", stars: 33621, category: "openclaw", domain: "infrastructure", desc: { en: "Ultra-lightweight OpenClaw implementation", zh: "超轻量级OpenClaw实现" }, tags: ["Lightweight", "OpenClaw"], updated: "2026-03-15" },
    { id: "zeroclaw", name: "zeroclaw", owner: "zeroclaw-labs", url: "https://github.com/zeroclaw-labs/zeroclaw", stars: 27122, category: "openclaw", domain: "infrastructure", desc: { en: "Fast autonomous AI assistant in Rust", zh: "Rust实现的快速自主AI助手" }, tags: ["Rust", "Autonomous"], updated: "2026-03-15" },
    { id: "awesome-openclaw-usecases", name: "awesome-openclaw-usecases", owner: "hesamsheikh", url: "https://github.com/hesamsheikh/awesome-openclaw-usecases", stars: 24918, category: "openclaw", domain: "community", desc: { en: "Community collection of OpenClaw use cases", zh: "OpenClaw用例社区合集" }, tags: ["Community", "UseCases"], updated: "2026-03-15" },
    { id: "openfang", name: "openfang", owner: "RightNow-AI", url: "https://github.com/RightNow-AI/openfang", stars: 14456, category: "openclaw", domain: "infrastructure", desc: { en: "Open-source Agent Operating System", zh: "开源Agent操作系统" }, tags: ["OS", "Agent"], updated: "2026-03-15" },
    { id: "ironclaw", name: "ironclaw", owner: "nearai", url: "https://github.com/nearai/ironclaw", stars: 10056, category: "openclaw", domain: "infrastructure", desc: { en: "OpenClaw in Rust for privacy & security", zh: "Rust隐私安全版OpenClaw" }, tags: ["Rust", "Privacy"], updated: "2026-03-15" },
    { id: "edict", name: "edict", owner: "cft0808", url: "https://github.com/cft0808/edict", stars: 9380, category: "openclaw", domain: "multi-agent", desc: { en: "Multi-Agent Orchestration (三省六部制)", zh: "三省六部制多Agent编排系统" }, tags: ["MultiAgent", "Chinese"], updated: "2026-03-15" },
    { id: "ClawWork", name: "ClawWork", owner: "HKUDS", url: "https://github.com/HKUDS/ClawWork", stars: 7209, category: "openclaw", domain: "productivity", desc: { en: "OpenClaw as your AI coworker ($15K earned)", zh: "OpenClaw作为AI同事 (赚$15K)" }, tags: ["Coworker", "Productivity"], updated: "2026-03-15" },
    { id: "ClawRouter", name: "ClawRouter", owner: "BlockRunAI", url: "https://github.com/BlockRunAI/ClawRouter", stars: 5506, category: "openclaw", domain: "infrastructure", desc: { en: "Agent-native LLM router for OpenClaw", zh: "OpenClaw原生LLM路由器" }, tags: ["Router", "MultiModel"], updated: "2026-03-15" },
    { id: "mimiclaw", name: "mimiclaw", owner: "memovai", url: "https://github.com/memovai/mimiclaw", stars: 4463, category: "openclaw", domain: "hardware", desc: { en: "Run OpenClaw on a $5 chip", zh: "在$5芯片上运行OpenClaw" }, tags: ["Hardware", "Embedded"], updated: "2026-03-15" },
    { id: "ClawX", name: "ClawX", owner: "ValueCell-ai", url: "https://github.com/ValueCell-ai/ClawX", stars: 4395, category: "openclaw", domain: "desktop", desc: { en: "Desktop GUI for OpenClaw", zh: "OpenClaw桌面GUI" }, tags: ["Desktop", "GUI"], updated: "2026-03-15" },
    { id: "openclaw-docker-cn-im", name: "openclaw-docker-cn-im", owner: "justlovemaki", url: "https://github.com/justlovemaki/openclaw-docker-cn-im", stars: 3378, category: "openclaw", domain: "chinese", desc: { en: "OpenClaw with Chinese IM platforms", zh: "OpenClaw中国IM平台整合版" }, tags: ["Docker", "ChineseIM"], updated: "2026-03-15" },
    { id: "OpenClaw-RL", name: "OpenClaw-RL", owner: "Gen-Verse", url: "https://github.com/Gen-Verse/OpenClaw-RL", stars: 2786, category: "openclaw", domain: "training", desc: { en: "Train agents by talking", zh: "通过对话训练Agent" }, tags: ["RL", "Training"], updated: "2026-03-15" },
    { id: "awesome-openclaw-tutorial", name: "awesome-openclaw-tutorial", owner: "xianyu110", url: "https://github.com/xianyu110/awesome-openclaw-tutorial", stars: 2695, category: "openclaw", domain: "tutorial", desc: { en: "Comprehensive Chinese tutorial", zh: "全面中文教程" }, tags: ["Tutorial", "Chinese"], updated: "2026-03-15" },
    { id: "mission-control", name: "mission-control", owner: "builderz-labs", url: "https://github.com/builderz-labs/mission-control", stars: 2549, category: "openclaw", domain: "dashboard", desc: { en: "Dashboard for AI agent orchestration", zh: "AI Agent编排仪表盘" }, tags: ["Dashboard", "Orchestration"], updated: "2026-03-15" },
    { id: "hiclaw", name: "hiclaw", owner: "alibaba", url: "https://github.com/alibaba/hiclaw", stars: 1942, category: "openclaw", domain: "multi-agent", desc: { en: "Collaborative Multi-Agent OS by Alibaba", zh: "阿里巴巴协作多Agent OS" }, tags: ["Alibaba", "Collaborative"], updated: "2026-03-15" },
    { id: "openclaw-master-skills", name: "openclaw-master-skills", owner: "LeoYeAI", url: "https://github.com/LeoYeAI/openclaw-master-skills", stars: 1779, category: "openclaw", domain: "skills", desc: { en: "339+ curated OpenClaw skills", zh: "339+精选OpenClaw技能" }, tags: ["Skills", "Collection"], updated: "2026-03-15" },
    { id: "VisionClaw", name: "VisionClaw", owner: "Intent-Lab", url: "https://github.com/Intent-Lab/VisionClaw", stars: 1628, category: "openclaw", domain: "hardware", desc: { en: "AI assistant for Meta Ray-Ban glasses", zh: "Meta Ray-Ban智能眼镜AI助手" }, tags: ["Glasses", "Vision"], updated: "2026-03-15" },
    
    // Benchmarks
    { id: "SciEvalKit", name: "SciEvalKit", owner: "InternScience", url: "https://github.com/InternScience/SciEvalKit", stars: 74, category: "benchmark", domain: "general-science", desc: { en: "Scientific intelligence evaluation toolkit", zh: "科学智能评估工具包" }, tags: ["Benchmark", "Leaderboard"], updated: "2026-02-27" },
    { id: "airs-bench", name: "airs-bench", owner: "facebookresearch", url: "https://github.com/facebookresearch/airs-bench", stars: 66, category: "benchmark", domain: "general-science", desc: { en: "Meta's AI Research Science benchmark", zh: "Meta的AI研究基准" }, tags: ["Meta", "Benchmark"], updated: "2026-03-09" },
    { id: "DeepInnovator", name: "DeepInnovator", owner: "HKUDS", url: "https://github.com/HKUDS/DeepInnovator", stars: 188, category: "tools", domain: "general-science", desc: { en: "AI Research Assistant - Idea Spark & Scientific Discovery", zh: "AI研究助手 - 创意火花与科学发现" }, tags: ["Innovation", "IdeaGeneration"], updated: "2026-03-15" },
    
    // Tools
    { id: "ata", name: "ata", owner: "Agents2AgentsAI", url: "https://github.com/Agents2AgentsAI/ata", stars: 67, category: "tools", domain: "computer-science", desc: { en: "End-to-end engineering/research agents", zh: "端到端工程和研究Agent" }, tags: ["Multi-Agent", "Workflow"], updated: "2026-03-11" },
    { id: "brenner_bot", name: "brenner_bot", owner: "Dicklesworthstone", url: "https://github.com/Dicklesworthstone/brenner_bot", stars: 65, category: "tools", domain: "biology", desc: { en: "Sydney Brenner's methodology with AI", zh: "用AI实现Sydney Brenner科学方法论" }, tags: ["Methodology", "Biology"], updated: "2026-03-07" },
    { id: "InnoClaw", name: "InnoClaw", owner: "zjowowen", url: "https://github.com/zjowowen/InnoClaw", stars: 53, category: "tools", domain: "innovation", desc: { en: "AI research agent for scientific innovation", zh: "科学创新AI研究Agent" }, tags: ["OpenClaw", "Innovation"], updated: "2026-03-15" },
    { id: "Aether", name: "Aether", owner: "NaLv2004", url: "https://github.com/NaLv2004/Aether", stars: 3, category: "tools", domain: "telecom", desc: { en: "AI Scientist for tele-communication research", zh: "电信领域AI Scientist" }, tags: ["Domain", "Telecom"], updated: "2026-03-13" }
  ],
  domains: [
    { id: "general-science", icon: "🔬", name: { en: "General Science", zh: "通用科研" }, desc: { en: "Hypothesis generation, experiment design", zh: "假设生成、实验设计" }, projects: ["AI-Scientist-v2", "OpenResearcher", "AutoResearchClaw", "SciEvalKit", "airs-bench", "DeepInnovator"] },
    { id: "computer-science", icon: "💻", name: { en: "Computer Science", zh: "计算机科学" }, desc: { en: "Code generation, automation", zh: "代码生成、自动化" }, projects: ["autoresearch", "ata"] },
    { id: "literature-review", icon: "📚", name: { en: "Literature Review", zh: "文献综述" }, desc: { en: "Paper search, summarization", zh: "论文搜索、摘要" }, projects: ["last30days-skill", "awesome-ai-agent-papers", "ResearchClaw", "evil-read-arxiv", "arxiv-daily-researcher", "PaperClaw"] },
    { id: "data-science", icon: "📊", name: { en: "Data Science", zh: "数据科学" }, desc: { en: "Data analysis, visualization", zh: "数据分析、可视化" }, projects: ["scholaraio", "arXivisual"] },
    { id: "academic-writing", icon: "📝", name: { en: "Academic Writing", zh: "学术写作" }, desc: { en: "Paper writing, figure generation", zh: "论文写作、图表生成" }, projects: ["paperbanana", "PaperClaw"] },
    { id: "infrastructure", icon: "🏗️", name: { en: "Infrastructure", zh: "基础设施" }, desc: { en: "Agent platforms and runtimes", zh: "Agent平台和运行时" }, projects: ["nanobot", "zeroclaw", "openfang", "ironclaw", "ClawRouter"] },
    { id: "multi-agent", icon: "🤖", name: { en: "Multi-Agent", zh: "多Agent" }, desc: { en: "Multi-agent orchestration", zh: "多Agent编排" }, projects: ["edict", "hiclaw"] }
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

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderSystems();
  renderTimeline();
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
  
  renderSystems();
  renderTimeline();
  renderTopProjects();
  renderDomains();
  renderAllProjects();
  renderPapers();
}

// Render systems
function renderSystems() {
  document.getElementById('topSystems').innerHTML = data.systems.map(s => `
    <div class="system-row">
      <div>
        <a href="${s.url}" target="_blank" style="color: var(--text); text-decoration: none; font-weight: 500;">${s.name}</a>
        <div style="font-size: 0.6875rem; color: var(--text-muted);">${s.desc[lang]}</div>
      </div>
      <div class="system-company">${s.company}</div>
      <span class="system-status ${s.status}">${s.status === 'open' ? '✅ Open' : '🔒 Closed'}</span>
    </div>
  `).join('');
}

// Render timeline
function renderTimeline() {
  document.getElementById('timeline').innerHTML = data.timeline.map(t => `
    <div class="timeline-item">
      <div class="timeline-date">${t.date}</div>
      <div>
        <div class="timeline-event">${t.event[lang]}</div>
        <div class="timeline-source">${t.source}</div>
      </div>
    </div>
  `).join('');
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
