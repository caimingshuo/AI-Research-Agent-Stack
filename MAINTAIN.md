# AI-Research-Agent-Stack 维护指南

## 仓库信息

- **仓库名**: AI-Research-Agent-Stack
- **所有者**: caimingshuo
- **URL**: https://github.com/caimingshuo/AI-Research-Agent-Stack
- **本地路径**: /Users/cms/.openclaw/workspace/AI-Research-Agent-Stack
- **定位**: 🌟 期待 AI 科研自动化的真正实现

## 收录范围

| 类型 | 来源 | 更新频率 |
|------|------|----------|
| 📦 GitHub 项目 | GitHub API | 每日 |
| 📄 论文 | ArXiv API | 每日 |
| 📰 新闻报道 | Twitter/X, Reddit, HN | 每日 |
| 💻 开源软件 | PyPI, npm, Docker Hub | 每日 |

## 维护任务

### 每日任务（自动执行）

1. **扫描新项目**
   - GitHub API: 搜索 `ai+research+agent`, `automated+science`, `paper+writing+agent`
   - ArXiv API: cs.AI 目录最新论文
   - HuggingFace: 科研相关模型

2. **更新现有项目**
   - 同步 Star 数量
   - 检查项目活跃状态
   - 更新描述信息

3. **生成周报**
   - 文件名: `trends/YYYY-MM-WeekN.md`
   - 内容: 本周亮点、数据变化、趋势预测

4. **归档不活跃项目**
   - 标准: 超过6个月未更新
   - 操作: 移至 Legacy/Archived 板块

## Git 提交规范

| 操作 | 格式 |
|------|------|
| 新增项目 | `feat: add [Project Name] to [Category]` |
| 更新数据 | `docs: update star count and descriptions` |
| 周报生成 | `chrono: generate weekly research trend [Date]` |
| 归档项目 | `chore: archive [Project Name] (inactive for 6+ months)` |

## 标签系统

- `#OpenSource` - 开源项目
- `#Multi-Agent` - 多Agent架构
- `#RAG-Based` - 基于RAG
- `#Writing-Helper` - 论文写作辅助
- `#Benchmark` - 评估基准
- `#SingleGPU` - 单GPU可运行
- `#End-to-End` - 端到端解决方案

## 筛选标准

1. **相关性**: 必须直接服务于科研流程
2. **新颖性**: 优先最近3个月内有更新
3. **质量**: GitHub项目需有清晰README
4. **活跃度**: Star增长快或代码更新频繁

## 自动化配置

由 OpenClaw 定时任务驱动，每周一 09:00 自动执行。
