// 领域平台实践数据
export interface DomainPractice {
  id: string
  title: string
  description: string
  domain: string
  icon: string
  tags: string[]
  content: string
  keyCapabilities: string[]
  technicalStack: string[]
  challenges: string[]
  bestPractices: string[]
  references?: { title: string; url: string }[]
}

export const domainPractices: DomainPractice[] = [
  {
    id: "software-dev-platform",
    title: "软件开发平台工程",
    description: "构建支持应用开发全生命周期的内部开发者平台，提供自助服务能力和黄金路径",
    domain: "软件开发",
    icon: "Code",
    tags: ["IDP", "CI/CD", "自助服务", "黄金路径"],
    content: `软件开发平台工程是平台工程最核心的领域，专注于为应用开发者提供标准化、自动化的开发工具链和工作流程。通过内部开发者平台（IDP），开发者可以自助完成从代码提交到生产部署的全流程操作。

## 核心价值

- **提升开发效率**: 通过自动化和标准化减少重复性工作，让开发者专注于业务价值
- **降低认知负荷**: 提供开箱即用的最佳实践和预配置环境，减少技术选型和配置工作
- **确保一致性**: 统一的工具链和流程保证不同团队间的协作效率
- **加速交付**: 缩短从开发到生产的周期时间，支持快速迭代

## 平台架构

现代软件开发平台通常包含以下层次：

1. **开发者门户**: 统一的界面，提供服务目录、文档、API 参考等
2. **应用配置层**: 定义应用期望状态，如 Score、Acorn 等标准
3. **基础设施编排**: 自动化资源配置，如 Terraform、Pulumi
4. **CI/CD 流水线**: 自动化构建、测试、部署流程
5. **可观测性平台**: 日志、指标、追踪一体化`,
    keyCapabilities: [
      "自助服务的应用创建和部署",
      "标准化的项目模板和脚手架",
      "自动化的 CI/CD 流水线",
      "统一的开发者门户",
      "环境管理和配置管理",
      "集成的可观测性和监控",
      "安全和合规自动化",
      "文档和知识库",
    ],
    technicalStack: [
      "Backstage - 开发者门户",
      "GitLab/GitHub - 代码管理和 CI/CD",
      "ArgoCD/Flux - GitOps 部署",
      "Terraform/Pulumi - 基础设施即代码",
      "Kubernetes - 容器编排",
      "Prometheus/Grafana - 监控告警",
      "ELK/Loki - 日志聚合",
      "Vault - 密钥管理",
    ],
    challenges: [
      "平衡标准化与灵活性，避免过度约束创新",
      "管理不同技术栈和遗留系统的复杂性",
      "确保平台采纳率，避免开发者绕过平台",
      "持续维护和演进平台能力",
      "度量平台价值和开发者满意度",
    ],
    bestPractices: [
      "采用产品思维运营平台，将开发者视为客户",
      "建立快速反馈机制，定期收集开发者需求",
      "提供清晰的文档和培训材料",
      "实施渐进式推广，从试点团队开始",
      "建立平台 SLA 和支持渠道",
      "使用度量数据驱动平台优化决策",
    ],
    references: [
      { title: "Platform Engineering Best Practices", url: "https://platformengineering.org/" },
      { title: "Backstage Documentation", url: "https://backstage.io/docs/overview/what-is-backstage" },
      { title: "CNCF Platform Engineering Whitepaper", url: "https://tag-app-delivery.cncf.io/whitepapers/platforms/" },
    ],
  },
  {
    id: "data-platform",
    title: "数据开发平台工程",
    description: "构建现代数据栈，提供数据摄取、存储、转换、编排的完整能力，支持数据驱动决策",
    domain: "数据工程",
    icon: "Database",
    tags: ["现代数据栈", "ELT", "数据质量", "数据治理"],
    content: `数据开发平台工程专注于构建可扩展、可靠的数据基础设施，使数据工程师和分析师能够高效地处理和分析数据。现代数据平台采用模块化、云原生的架构，强调自助服务和数据质量。

## 现代数据栈架构

现代数据平台通常包含四个核心层次：

1. **数据摄取层**: 从各种数据源提取和加载数据
2. **数据存储层**: 云数据仓库或数据湖存储
3. **数据转换层**: 使用 ELT 模式进行数据清洗和建模
4. **数据编排层**: 调度和监控数据管道

## ELT vs ETL

现代数据平台普遍采用 ELT（提取-加载-转换）而非传统 ETL：

- **性能优势**: 利用云数据仓库的计算能力进行转换
- **灵活性**: 原始数据保留，支持多样化转换需求
- **简化架构**: 减少中间层，降低维护成本`,
    keyCapabilities: [
      "多源数据集成和同步",
      "云数据仓库管理",
      "数据转换和建模（dbt）",
      "数据质量监控和验证",
      "数据血缘和影响分析",
      "数据目录和元数据管理",
      "数据合约和 SLA 管理",
      "访问控制和安全治理",
    ],
    technicalStack: [
      "Airbyte/Fivetran - 数据摄取",
      "Snowflake/BigQuery/Redshift - 数据仓库",
      "dbt - 数据转换",
      "Airflow/Dagster/Prefect - 数据编排",
      "Great Expectations - 数据质量",
      "Apache Iceberg/Delta Lake - 数据湖",
      "Datahub/Amundsen - 数据目录",
      "Monte Carlo/Soda - 数据可观测性",
    ],
    challenges: [
      "数据质量管理，防止脏数据传播",
      "成本控制，避免云数据仓库费用失控",
      "数据治理和合规性要求",
      "跨团队的数据协作和共享",
      "实时数据处理需求",
    ],
    bestPractices: [
      "实施数据合约，明确数据生产者和消费者责任",
      "采用元数据驱动的架构，提升自动化和可观测性",
      "优先考虑数据质量和可观测性",
      "使用 Python + SQL 混合工作流",
      "建立数据 SLA 和监控告警",
      "推行自助服务的数据分析能力",
    ],
    references: [
      { title: "Modern Data Stack Guide", url: "https://www.getdbt.com/blog/data-engineering" },
      { title: "Data Platform Modernization", url: "https://blog.dataengineerthings.org/" },
      { title: "dbt Documentation", url: "https://docs.getdbt.com/" },
    ],
  },
  {
    id: "ai-platform",
    title: "AI开发平台工程",
    description: "构建 MLOps 平台，支持机器学习模型的训练、部署、监控全生命周期管理",
    domain: "AI/ML",
    icon: "Brain",
    tags: ["MLOps", "模型训练", "模型部署", "AI基础设施"],
    content: `AI开发平台工程（也称 MLOps 平台）将软件工程的最佳实践应用于机器学习工作流，实现 ML 模型的规模化、自动化部署和运维。现代 AI 平台需要提供从数据准备到模型服务的端到端能力。

## MLOps 生命周期

完整的 MLOps 平台覆盖以下阶段：

1. **数据管理**: 数据版本化、特征工程、数据验证
2. **模型开发**: 实验跟踪、超参数调优、模型版本管理
3. **模型训练**: 分布式训练、GPU/TPU 资源调度
4. **模型部署**: 模型注册、A/B 测试、渐进式发布
5. **模型监控**: 性能监控、数据漂移检测、模型再训练

## AI 基础设施

现代 AI 平台需要强大的硬件和软件基础设施：

- **计算资源**: GPU/TPU 集群、弹性伸缩
- **存储**: 高性能数据湖、模型仓库
- **框架**: TensorFlow、PyTorch、JAX
- **容器化**: Docker、Kubernetes for ML`,
    keyCapabilities: [
      "实验管理和跟踪",
      "分布式模型训练",
      "特征存储和管理",
      "模型版本控制和注册",
      "自动化模型部署",
      "在线和批量推理服务",
      "模型性能监控",
      "数据和模型漂移检测",
    ],
    technicalStack: [
      "MLflow/Weights & Biases - 实验跟踪",
      "Kubeflow/Ray - 分布式训练",
      "Feast - 特征存储",
      "Seldon/KServe - 模型服务",
      "TensorFlow Serving - 模型部署",
      "Evidently/WhyLabs - 模型监控",
      "DVC - 数据版本控制",
      "Airflow - ML 工作流编排",
    ],
    challenges: [
      "GPU 资源的高效调度和成本控制",
      "模型可解释性和公平性",
      "数据隐私和安全合规",
      "模型性能退化的检测和处理",
      "跨团队的模型共享和复用",
    ],
    bestPractices: [
      "建立标准化的 ML 流水线模板",
      "实施严格的模型版本管理",
      "自动化模型测试和验证",
      "建立模型监控和告警机制",
      "实施特征复用和共享",
      "建立模型治理和合规流程",
    ],
    references: [
      { title: "MLOps Platforms Guide", url: "https://www.qwak.com/post/top-mlops-end-to-end" },
      { title: "Kubeflow Documentation", url: "https://www.kubeflow.org/" },
      { title: "ML Infrastructure Best Practices", url: "https://rafay.co/ai-and-cloud-native-blog/" },
    ],
  },
  {
    id: "frontend-platform",
    title: "大前端平台工程",
    description: "构建前端基础设施，包括微前端、构建工具链、组件库、开发者工具等",
    domain: "前端工程",
    icon: "Layout",
    tags: ["微前端", "构建工具", "组件库", "开发者工具"],
    content: `大前端平台工程专注于提升前端开发效率和应用性能，通过统一的工具链、组件库和最佳实践，支持多团队独立开发和部署。微前端架构是现代大前端平台的核心模式之一。

## 微前端架构

微前端允许将单个应用拆分为多个独立部署的单元：

- **团队自治**: 每个团队独立选择技术栈和发布节奏
- **独立部署**: 各模块可独立发布，降低变更风险
- **技术栈灵活**: 支持不同框架共存
- **边缘路由**: 在 CDN 层面进行应用组合

## 构建工具链

现代前端平台需要高效的构建工具：

- **Turbopack**: 新一代打包工具，显著提升构建速度
- **Turborepo**: Monorepo 管理工具
- **Vite**: 快速的开发服务器和构建工具`,
    keyCapabilities: [
      "微前端应用编排和路由",
      "统一的组件库和设计系统",
      "快速构建和热更新",
      "代码质量和规范检查",
      "性能监控和优化",
      "多环境部署和灰度发布",
      "开发者工具和调试支持",
      "文档和示例平台",
    ],
    technicalStack: [
      "Single-SPA/Module Federation - 微前端框架",
      "Turbopack/Vite - 构建工具",
      "Turborepo/Nx - Monorepo 管理",
      "React/Vue/Angular - 前端框架",
      "Vercel/Netlify - 部署平台",
      "Storybook - 组件开发",
      "ESLint/Prettier - 代码规范",
      "Playwright/Cypress - 测试工具",
    ],
    challenges: ["微前端间的通信和状态共享", "样式冲突和隔离", "构建产物体积控制", "首屏加载性能优化", "跨框架兼容性"],
    bestPractices: [
      "采用 Monorepo 管理共享代码",
      "建立统一的设计系统和组件库",
      "使用特性标志控制功能发布",
      "优化构建流程，使用缓存和增量构建",
      "实施自动化测试和视觉回归测试",
      "建立性能预算和监控",
    ],
    references: [
      { title: "Microfrontends on Vercel", url: "https://vercel.com/docs/frameworks/microfrontends" },
      { title: "Turborepo Documentation", url: "https://turbo.build/repo" },
      { title: "Module Federation", url: "https://module-federation.io/" },
    ],
  },
  {
    id: "agent-platform",
    title: "Agent开发平台工程",
    description: "构建 AI Agent 开发和运行平台，支持多步骤、自主决策的智能代理系统",
    domain: "AI Agent",
    icon: "Bot",
    tags: ["LangChain", "LangGraph", "多智能体", "工作流编排"],
    content: `Agent开发平台工程是 2024 年快速兴起的新领域，专注于构建支持 AI Agent 开发、测试、部署和监控的基础设施。随着大语言模型能力的提升，AI Agent 正在从简单的对话式应用演进为能够自主完成复杂任务的智能系统。

## AI Agent 架构演进

从简单到复杂的 Agent 架构：

1. **单步 Agent**: 简单的提示-响应模式
2. **工具调用 Agent**: 能够调用外部 API 和工具
3. **多步推理 Agent**: ReAct 模式，思考-行动循环
4. **多智能体系统**: 多个 Agent 协作完成任务

## LangChain vs LangGraph

- **LangChain**: 适合线性工作流和简单集成
- **LangGraph**: 提供强大的状态管理、分支、循环能力，适合复杂多 Agent 场景`,
    keyCapabilities: [
      "Agent 工作流设计和编排",
      "工具和 API 集成管理",
      "对话上下文和记忆管理",
      "多智能体协作框架",
      "Agent 行为监控和调试",
      "安全和权限控制",
      "提示词版本管理",
      "性能和成本优化",
    ],
    technicalStack: [
      "LangChain - Agent 框架",
      "LangGraph - 复杂工作流编排",
      "AutoGPT - 自主 Agent",
      "OpenAI/Anthropic API - LLM 后端",
      "Vector Databases - 知识检索",
      "FastAPI/Flask - Agent 服务",
      "Redis - 会话状态管理",
      "LangSmith - 监控和调试",
    ],
    challenges: [
      "Agent 行为的可预测性和可靠性",
      "工具调用的安全性控制",
      "上下文窗口和成本管理",
      "Agent 决策的可解释性",
      "多 Agent 协作的复杂性",
    ],
    bestPractices: [
      "明确定义 Agent 的目标和边界",
      "实施严格的工具调用权限控制",
      "建立完善的测试和评估机制",
      "使用结构化输出提升可靠性",
      "实施成本监控和限流",
      "保留 Agent 决策日志用于审计",
    ],
    references: [
      { title: "LangChain Documentation", url: "https://python.langchain.com/" },
      { title: "LangGraph Guide", url: "https://langchain-ai.github.io/langgraph/" },
      { title: "Building Autonomous AI Agents", url: "https://www.incentius.com/blog-posts/" },
    ],
  },
  {
    id: "developer-portal",
    title: "开发者门户与平台工程",
    description: "构建统一的开发者门户，提供服务目录、文档、API 管理、自助服务等能力",
    domain: "开发者门户",
    icon: "Globe",
    tags: ["Backstage", "服务目录", "API 管理", "文档平台"],
    content: `开发者门户是平台工程的核心界面，为开发者提供统一的服务发现、文档查阅、资源申请入口。Backstage 是目前最流行的开源开发者门户框架，由 Spotify 开源并被 CNCF 孵化。

## 开发者门户的价值

- **提升可发现性**: 统一的服务目录，快速找到所需资源
- **减少重复**: 通过模板和最佳实践避免重复造轮子
- **标准化**: 统一的工具和流程，降低协作成本
- **自助服务**: 开发者自主完成常见任务，减少等待

## Backstage 核心能力

1. **软件目录**: 管理所有软件组件、服务、库的元数据
2. **软件模板**: 快速创建符合最佳实践的新项目
3. **TechDocs**: 文档即代码，与项目同步维护
4. **插件生态**: 丰富的插件系统，集成各类工具`,
    keyCapabilities: [
      "统一的服务和组件目录",
      "项目模板和脚手架",
      "集成文档平台",
      "API 目录和测试工具",
      "资源申请和审批流程",
      "插件市场和扩展性",
      "搜索和发现能力",
      "权限和访问控制",
    ],
    technicalStack: [
      "Backstage - 门户框架",
      "GitHub/GitLab - 代码仓库集成",
      "Kubernetes - 服务发现",
      "Swagger/OpenAPI - API 文档",
      "MkDocs/Docusaurus - 文档生成",
      "LDAP/OAuth - 身份认证",
      "PostgreSQL - 元数据存储",
      "各类 Backstage 插件",
    ],
    challenges: [
      "初期实施需要较大工程投入",
      "保持服务目录数据的准确性和时效性",
      "推动开发者采纳和使用",
      "插件集成和维护成本",
      "跨组织的数据治理",
    ],
    bestPractices: [
      "采用产品化思维运营门户",
      "自动化服务元数据的收集和更新",
      "提供清晰的入门指南和培训",
      "建立反馈机制，持续改进",
      "从核心功能开始，逐步扩展",
      "重视文档质量和搜索体验",
    ],
    references: [
      { title: "Backstage Official Site", url: "https://backstage.io/" },
      { title: "Backstage Documentation", url: "https://backstage.io/docs/" },
      {
        title: "Platform Engineering with Backstage",
        url: "https://www.forrester.com/blogs/how-backstage-is-transforming-platform-engineering/",
      },
    ],
  },
  {
    id: "devex-platform",
    title: "开发者体验平台工程",
    description: "通过度量和数据驱动的方法，持续优化开发者生产力和满意度",
    domain: "开发者体验",
    icon: "Smile",
    tags: ["DX 指标", "生产力", "DORA", "SPACE"],
    content: `开发者体验（DX）平台工程专注于度量和优化开发者的日常工作体验。通过结合定性和定量数据，识别瓶颈并转化为可衡量的业务价值。DX 平台由 DORA 和 SPACE 框架的研究者设计。

## DX Core 4 框架

平衡四个维度来衡量开发者生产力：

1. **速度 (Speed)**: 交付速度和周期时间
2. **效能 (Effectiveness)**: 任务完成质量和成功率
3. **质量 (Quality)**: 代码质量和系统可靠性
4. **业务影响 (Impact)**: 对业务目标的实际贡献

## 开发者体验指数 (DXI)

DXI 是一个综合性指标，衡量 14 个维度：

- 深度工作时间
- 本地迭代速度
- 发布便捷性
- 代码可维护性
- 文档质量
- 工具链效率
- ...

研究表明，DXI 每提高 1 分，每位工程师每周可节省 13 分钟。`,
    keyCapabilities: [
      "开发者满意度调查",
      "生产力指标采集和分析",
      "工具链性能监控",
      "流程瓶颈识别",
      "ROI 计算和报告",
      "团队对比和基准测试",
      "改进建议和优先级排序",
      "持续反馈循环",
    ],
    technicalStack: [
      "DX Platform - 开发者智能平台",
      "DORA Metrics - 交付性能指标",
      "SPACE Framework - 生产力框架",
      "Datadog/New Relic - 应用监控",
      "GitHub/GitLab Analytics - 代码分析",
      "Slack/Teams - 协作数据",
      "Jira/Linear - 项目管理数据",
      "自定义调查工具",
    ],
    challenges: [
      "选择正确的指标，避免度量误导",
      "平衡定量数据和定性反馈",
      "保护开发者隐私和信任",
      "将 DX 改进转化为业务价值",
      "跨团队和组织的对比公平性",
    ],
    bestPractices: [
      "结合定性和定量方法",
      "关注结果指标而非活动指标",
      "建立安全的反馈环境",
      "定期而非过度频繁地度量",
      "将 DX 改进与业务目标对齐",
      "持续迭代度量框架本身",
    ],
    references: [
      { title: "DX Platform", url: "https://getdx.com/" },
      { title: "Developer Productivity Guide", url: "https://getdx.com/blog/developer-productivity/" },
      { title: "Developer Experience Index", url: "https://getdx.com/report/developer-experience-index" },
    ],
  },
]

export const domainCategories = [
  { id: "all", name: "全部领域" },
  { id: "软件开发", name: "软件开发" },
  { id: "数据工程", name: "数据工程" },
  { id: "AI/ML", name: "AI/ML" },
  { id: "前端工程", name: "前端工程" },
  { id: "AI Agent", name: "AI Agent" },
  { id: "开发者门户", name: "开发者门户" },
  { id: "开发者体验", name: "开发者体验" },
]
