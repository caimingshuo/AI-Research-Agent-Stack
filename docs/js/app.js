// ===== 数据 =====
const data = {
    metadata: {
        lastUpdated: "2026-03-12",
        totalProjects: 14,
        totalPapers: 3
    },
    highlights: [
        {
            rank: "🥇",
            name: "autoresearch",
            owner: "karpathy",
            url: "https://github.com/karpathy/autoresearch",
            stars: 26534,
            starsDisplay: "⭐ 26.5K",
            desc_zh: "Karpathy新作！单GPU自动研究Agent，节省80%实验配置时间",
            desc_en: "Karpathy's new release! Single-GPU auto-research agent, saves 80% experiment setup time",
            tags: ["OpenSource", "SingleGPU", "AutoML"]
        },
        {
            rank: "🥈",
            name: "AI-Scientist-v2",
            owner: "SakanaAI",
            url: "https://github.com/SakanaAI/AI-Scientist-v2",
            stars: 2257,
            starsDisplay: "⭐ 2.3K",
            desc_zh: "全链路科研自动化：idea→实验→论文",
            desc_en: "End-to-end research automation: idea→experiment→paper",
            tags: ["OpenSource", "Multi-Agent", "End-to-End"]
        },
        {
            rank: "🥉",
            name: "last30days-skill",
            owner: "mvanhorn",
            url: "https://github.com/mvanhorn/last30days-skill",
            stars: 4031,
            starsDisplay: "⭐ 4.0K",
            desc_zh: "跨平台研究聚合，覆盖Reddit/X/YouTube/HN",
            desc_en: "Cross-platform research aggregation, covers Reddit/X/YouTube/HN",
            tags: ["OpenSource", "Multi-Source", "RAG-Based"]
        }
    ],
    projects: [
        { name: "autoresearch", owner: "karpathy", url: "https://github.com/karpathy/autoresearch", stars: 26534, starsDisplay: "26.5K", category: "full-stack-research", desc_zh: "单GPU自动研究Agent", desc_en: "Single-GPU auto-research agent", tags: ["开源", "单GPU"], updated: "2026-03-12" },
        { name: "AI-Scientist-v2", owner: "SakanaAI", url: "https://github.com/SakanaAI/AI-Scientist-v2", stars: 2257, starsDisplay: "2.3K", category: "full-stack-research", desc_zh: "全链路科研自动化", desc_en: "End-to-end research automation", tags: ["开源", "多Agent"], updated: "2026-03-11" },
        { name: "auto-research", owner: "openags", url: "https://github.com/openags/auto-research", stars: 42, starsDisplay: "42", category: "full-stack-research", desc_zh: "通用自主科学家框架", desc_en: "General autonomous scientist framework", tags: ["开源", "框架"], updated: "2026-03-10" },
        { name: "open-coscientist", owner: "jataware", url: "https://github.com/jataware/open-coscientist", stars: 15, starsDisplay: "15", category: "full-stack-research", desc_zh: "Google AI Co-Scientist开源复现", desc_en: "Open-source reproduction of Google AI Co-Scientist", tags: ["开源", "复现"], updated: "2026-03-09" },
        { name: "last30days-skill", owner: "mvanhorn", url: "https://github.com/mvanhorn/last30days-skill", stars: 4031, starsDisplay: "4.0K", category: "literature-research", desc_zh: "跨平台研究聚合", desc_en: "Cross-platform research aggregation", tags: ["开源", "多源"], updated: "2026-03-12" },
        { name: "awesome-ai-agent-papers", owner: "VoltAgent", url: "https://github.com/VoltAgent/awesome-ai-agent-papers", stars: 289, starsDisplay: "289", category: "literature-research", desc_zh: "2026年AI Agent论文精选集", desc_en: "2026 AI Agent paper collection", tags: ["开源", "精选"], updated: "2026-03-11" },
        { name: "scholaraio", owner: "ZimoLiao", url: "https://github.com/ZimoLiao/scholaraio", stars: 98, starsDisplay: "98", category: "literature-research", desc_zh: "AI驱动的学术研究终端", desc_en: "AI-powered academic research terminal", tags: ["开源", "终端"], updated: "2026-03-12" },
        { name: "ResearchClaw", owner: "ymx10086", url: "https://github.com/ymx10086/ResearchClaw", stars: 97, starsDisplay: "97", category: "literature-research", desc_zh: "基于OpenClaw的个人研究助手", desc_en: "Personal research assistant built on OpenClaw", tags: ["开源", "OpenClaw"], updated: "2026-03-11" },
        { name: "airs-bench", owner: "facebookresearch", url: "https://github.com/facebookresearch/airs-bench", stars: 66, starsDisplay: "66", category: "benchmark", desc_zh: "Meta出品AI研究基准", desc_en: "Meta's AI research benchmark", tags: ["开源", "Benchmark"], updated: "2026-03-09" },
        { name: "SciEvalKit", owner: "InternScience", url: "https://github.com/InternScience/SciEvalKit", stars: 74, starsDisplay: "74", category: "benchmark", desc_zh: "科学智能评估工具包", desc_en: "Scientific intelligence evaluation toolkit", tags: ["开源", "排行榜"], updated: "2026-02-27" },
        { name: "ata", owner: "Agents2AgentsAI", url: "https://github.com/Agents2AgentsAI/ata", stars: 67, starsDisplay: "67", category: "workflow-tools", desc_zh: "端到端工程和研究问题解决", desc_en: "End-to-end engineering and research problem solving", tags: ["开源", "多Agent"], updated: "2026-03-11" },
        { name: "brenner_bot", owner: "Dicklesworthstone", url: "https://github.com/Dicklesworthstone/brenner_bot", stars: 65, starsDisplay: "65", category: "workflow-tools", desc_zh: "实现Sydney Brenner科学方法论", desc_en: "Implementing Sydney Brenner's scientific methodology", tags: ["开源", "方法论"], updated: "2026-03-07" },
        { name: "The-Library-of-AI-Scientist", owner: "FengxianJi", url: "https://github.com/FengxianJi/The-Library-of-AI-Scientist", stars: 3, starsDisplay: "3", category: "workflow-tools", desc_zh: "论文检索和组织系统", desc_en: "Paper retrieval and organization system", tags: ["开源", "论文管理"], updated: "2026-03-05" },
        { name: "PaperPilot", owner: "yumuzhihan", url: "https://github.com/yumuzhihan/PaperPilot", stars: 0, starsDisplay: "0", category: "paper-writing", desc_zh: "AI学术写作助手", desc_en: "AI academic writing assistant", tags: ["开源", "写作助手"], updated: "2026-02-20" }
    ],
    papers: [
        {
            title: "Nurture-First Agent Development: Building Domain-Expert AI Agents Through Conversational Knowledge Crystallization",
            url: "https://arxiv.org/abs/2603.10808",
            rating: 5,
            category_zh: "Agent开发范式",
            category_en: "Agent Development Paradigm",
            value_zh: "节省60% Agent开发时间",
            value_en: "Saves 60% Agent development time",
            highlights_zh: "三层认知架构、知识结晶周期",
            highlights_en: "Three-layer cognitive architecture, Knowledge Crystallization Cycle",
            published: "2026-03-11"
        },
        {
            title: "Emulating Clinician Cognition via Self-Evolving Deep Clinical Research",
            url: "https://arxiv.org/abs/2603.10677",
            rating: 5,
            category_zh: "自进化诊断Agent",
            category_en: "Self-Evolving Diagnostic Agent",
            value_zh: "诊断准确率提升11.2%",
            value_en: "Improves diagnostic accuracy by 11.2%",
            highlights_zh: "自主申请检查、临床经验外化",
            highlights_en: "Autonomous examination requisition, clinical experience externalization",
            published: "2026-03-11"
        },
        {
            title: "A Hybrid Knowledge-Grounded Framework for Safety and Traceability in Prescription Verification",
            url: "https://arxiv.org/abs/2603.10891",
            rating: 4,
            category_zh: "知识图谱",
            category_en: "Knowledge Graph",
            value_zh: "提升处方审核安全性",
            value_en: "Enhances prescription verification safety",
            highlights_zh: "虚拟知识图谱、验证链推理",
            highlights_en: "Virtual Knowledge Graph, Chain of Verification reasoning",
            published: "2026-03-11"
        }
    ]
};

// ===== 状态 =====
let currentLang = 'zh';
let currentTheme = 'dark';
let currentFilter = 'all';

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderHighlights();
    renderProjects();
    renderPapers();
    initParticles();
    initFilters();
    updateStats();
});

// ===== 主题切换 =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('themeIcon').textContent = theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ===== 语言切换 =====
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.getElementById('langText').textContent = currentLang === 'zh' ? 'EN' : '中文';
    
    // 更新所有带 data-zh 和 data-en 的元素
    document.querySelectorAll('[data-zh]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
    
    // 重新渲染内容
    renderHighlights();
    renderProjects();
    renderPapers();
}

// ===== 渲染热点 =====
function renderHighlights() {
    const container = document.getElementById('highlightsGrid');
    container.innerHTML = data.highlights.map((item, index) => `
        <div class="highlight-card fade-in-up" style="animation-delay: ${index * 0.1}s">
            <span class="highlight-rank">${item.rank}</span>
            <div class="highlight-header">
                <div class="highlight-info">
                    <div class="highlight-name">
                        <a href="${item.url}" target="_blank">${item.owner}/${item.name}</a>
                    </div>
                    <div class="highlight-stars">${item.starsDisplay}</div>
                </div>
            </div>
            <p class="highlight-desc">${currentLang === 'zh' ? item.desc_zh : item.desc_en}</p>
            <div class="highlight-tags">
                ${item.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ===== 渲染项目 =====
function renderProjects(filter = 'all') {
    const container = document.getElementById('projectsGrid');
    const filteredProjects = filter === 'all' 
        ? data.projects 
        : data.projects.filter(p => p.category === filter);
    
    container.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-header">
                <div class="project-name">
                    <a href="${project.url}" target="_blank">${project.owner}/${project.name}</a>
                </div>
                <span class="project-stars">⭐ ${project.starsDisplay}</span>
            </div>
            <p class="project-desc">${currentLang === 'zh' ? project.desc_zh : project.desc_en}</p>
            <div class="project-meta">
                <div class="project-tags">
                    ${project.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <span>${project.updated}</span>
            </div>
        </div>
    `).join('');
}

// ===== 渲染论文 =====
function renderPapers() {
    const container = document.getElementById('papersList');
    container.innerHTML = data.papers.map(paper => `
        <div class="paper-card">
            <div class="paper-rating">
                ${'⭐'.repeat(paper.rating)}
            </div>
            <h3 class="paper-title">
                <a href="${paper.url}" target="_blank">${paper.title}</a>
            </h3>
            <div class="paper-meta">
                <span><strong>${currentLang === 'zh' ? '类别' : 'Category'}:</strong> ${currentLang === 'zh' ? paper.category_zh : paper.category_en}</span>
                <span><strong>${currentLang === 'zh' ? '价值' : 'Value'}:</strong> <span class="paper-value">${currentLang === 'zh' ? paper.value_zh : paper.value_en}</span></span>
                <span>${paper.published}</span>
            </div>
        </div>
    `).join('');
}

// ===== 过滤器 =====
function initFilters() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

// ===== 更新统计 =====
function updateStats() {
    const totalStars = data.projects.reduce((sum, p) => sum + p.stars, 0);
    const avgStars = Math.round(totalStars / data.projects.length);
    
    document.getElementById('totalProjects').textContent = data.metadata.totalProjects;
    document.getElementById('totalPapers').textContent = data.metadata.totalPapers;
    document.getElementById('totalStars').textContent = (totalStars / 1000).toFixed(1) + 'K+';
    document.getElementById('avgStars').textContent = (avgStars / 1000).toFixed(1) + 'K';
    document.getElementById('lastUpdate').textContent = data.metadata.lastUpdated.slice(5);
    document.getElementById('updateTime').textContent = `更新于 ${data.metadata.lastUpdated}`;
}

// ===== 粒子效果 =====
function initParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        container.appendChild(particle);
    }
    
    // 添加浮动动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-10px) translateX(-10px); }
            75% { transform: translateY(-30px) translateX(5px); }
        }
    `;
    document.head.appendChild(style);
}

// ===== 滚动动画 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
