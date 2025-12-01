// 平台工程方法与框架数据
export interface Framework {
  id: string
  title: string
  description: string
  category: "methodology" | "framework" | "pattern"
  tags: string[]
  content: string
  references?: { title: string; url: string }[]
}

export const frameworks: Framework[] = [
  {
    id: "team-topologies",
    title: "团队拓扑 (Team Topologies)",
    description: "一种组织设计和团队交互的方法论，定义了四种基本团队类型和三种交互模式",
    category: "methodology",
    tags: ["组织设计", "团队协作", "康威定律"],
    content: `## 核心概念

团队拓扑定义了四种基本团队类型：

1. **流对齐团队 (Stream-aligned Team)**: 与业务流程对齐，负责端到端的价值交付
2. **赋能团队 (Enabling Team)**: 帮助其他团队克服障碍，传播知识和能力
3. **复杂子系统团队 (Complicated Subsystem Team)**: 处理需要专业知识的复杂领域
4. **平台团队 (Platform Team)**: 提供内部服务，减少其他团队的认知负荷

## 三种交互模式

- **协作 (Collaboration)**: 紧密合作，共同发现新解决方案
- **服务即产品 (X-as-a-Service)**: 提供标准化服务，最小化协调成本
- **促进 (Facilitating)**: 帮助团队学习和成长`,
    references: [
      { title: "Team Topologies 官网", url: "https://teamtopologies.com/" },
      { title: "相关书籍", url: "https://teamtopologies.com/book" },
    ],
  },
  {
    id: "platform-as-product",
    title: "平台即产品 (Platform as a Product)",
    description: "将内部开发者平台视为产品来运营，关注用户体验和价值交付",
    category: "framework",
    tags: ["产品思维", "开发者体验", "平台运营"],
    content: `## 核心理念

平台即产品将内部开发者平台视为面向内部用户（开发者）的产品，强调：

- **用户中心**: 深入了解开发者的需求和痛点
- **价值驱动**: 关注平台为组织带来的实际价值
- **持续迭代**: 采用产品管理实践进行持续改进

## 关键实践

1. **建立产品团队**: 配备产品经理、设计师和工程师
2. **用户研究**: 定期收集开发者反馈
3. **度量驱动**: 建立关键指标体系
4. **文档优先**: 提供优秀的文档和自助服务`,
    references: [{ title: "CNCF Platform Engineering", url: "https://platformengineering.org/" }],
  },
  {
    id: "platform-product-way",
    title: "平台产品之道",
    description: "以产品思维运营内部平台，将开发者视为客户，通过持续迭代提升平台价值和采用率",
    category: "methodology",
    tags: ["产品管理", "客户思维", "价值度量", "迭代优化"],
    content: `## 核心原则

### 1. 开发者即客户
将开发者视为真正的客户，而非仅仅是用户：
- 深入理解他们的问题、偏好和工作流程
- 定期进行对话，了解真实需求
- 优先考虑开发者体验，而非技术优雅性

### 2. 以采用率衡量价值
平台的价值不在于功能数量，而在于使用程度：
- 少量功能被多数开发者使用，比大量功能被少数人使用更有价值
- 追踪使用率、满意度和平台如何帮助开发者更快交付
- 关注实际业务影响，而非技术指标

### 3. 基于用户需求迭代
根据用户最需要的内容调整优先级：
- 采用敏捷产品管理方法，而非固定技术路线图
- 快速验证假设，小步快跑
- 建立快速反馈循环

## 关键实践

### 自助服务能力
- 提供按需更改的能力，无需等待其他团队
- 降低使用门槛，提高开发者自主性
- 通过自动化减少人工干预

### 可访问性设计
- 平台支持和知识易于获取
- 简化平台理解和使用难度
- 提供清晰的文档和示例

### 打造吸引力
- 让平台成为开发者完成工作的最简单选择
- 促进自愿使用，而非强制推行
- 创建内部品牌，向同事"推销"平台价值

### 产品经理职责
- 路线图规划和优先级排序
- 收集和分析使用指标数据
- 质量监控和持续改进
- 平衡多方利益相关者需求

## 度量体系

### 满意度指标
- **NPS (净推荐值)**: 衡量开发者推荐平台的意愿（-100 到 +100）
- **CSAT (客户满意度)**: 直接衡量对平台或特定功能的满意度（1-5分）
- **CES (客户费力度)**: 衡量使用平台所需的努力程度

### 使用指标
- 平台采用率和活跃用户数
- 功能使用频率和覆盖率
- 新用户入职时间
- 自助服务完成率

### 价值指标
- 开发者生产力提升
- 交付速度改善
- 事故响应时间缩短
- 基础设施成本优化

## 平台团队组织

### 团队所有制
平台工程团队应对特定平台部分负责：
- 创建内部可见的品牌标识
- 明确所有权和责任边界
- 建立支持和反馈机制

### 跨职能协作
- 产品经理：定义愿景和路线图
- 设计师：优化用户体验
- 工程师：构建和维护平台
- 支持协调员：管理反馈和问题

## 成功要素

1. **理解开发者工作流程**: 深入了解日常工作模式和痛点
2. **构建他们想用的解决方案**: 关注真实需求，而非自认为的需求
3. **基于使用情况持续改进**: 数据驱动决策，快速响应反馈
4. **平衡创新与稳定**: 在快速迭代和系统稳定性之间找到平衡
5. **获得高层支持**: 确保组织层面的认可和资源投入`,
    references: [
      {
        title: "Platform as a Product Guide - Jellyfish",
        url: "https://jellyfish.co/library/platform-engineering/platform-as-a-product/",
      },
      { title: "Platform Engineering Org", url: "https://platformengineering.org/talks-library/platform-as-a-product" },
    ],
  },
  {
    id: "platform-architecture-way",
    title: "平台架构之道",
    description: "构建可扩展、可靠、安全的平台架构，通过分层设计和模式复用支撑企业级应用",
    category: "methodology",
    tags: ["架构设计", "分层架构", "设计模式", "可扩展性"],
    content: `## 核心原则

### 1. 平衡创新与稳定
现代企业架构面临的核心挑战：
- 支持快速创新和新功能交付
- 维护系统稳定性和可靠性
- 在敏捷性和一致性之间找到平衡点

### 2. 标准化解决方案
采用经过验证的架构模式：
- 为常见结构问题提供可复用解决方案
- 指导开发者和架构师构建应用
- 满足复杂业务需求并保持灵活性

### 3. 关注点分离
通过分层架构实现关注点分离：
- 提高系统模块化程度
- 降低组件耦合度，提高内聚性
- 便于独立扩展和维护

## 平台架构分层模型

### 第一层：基础设施层 (Infrastructure Services)
提供基础的计算、存储和网络资源：
- **IaaS 提供商**: AWS、GCP、Azure 或私有云 OpenStack
- **核心资源**: 虚拟机、容器、块存储、对象存储、虚拟网络
- **特性**: 可扩展的基础环境，按需分配资源

### 第二层：系统服务层 (System Services)
处理底层系统管理、编排和安全：
- **容器编排**: Kubernetes、Nomad、Docker Swarm
- **服务网格**: Istio、Linkerd、Consul Connect
- **网络服务**: VPN、DNS、负载均衡
- **安全基础**: 身份认证、授权、密钥管理

### 第三层：平台服务层 (Platform Services)
提供应用开发所需的中间件和工具：
- **数据服务**: 数据库、缓存、消息队列
- **CI/CD 流水线**: 自动化构建、测试、部署
- **可观测性**: 日志、监控、追踪、告警
- **服务目录**: API 网关、服务注册与发现
- **配置管理**: 配置中心、特性开关

### 第四层：应用服务层 (Application Services)
面向业务的应用和服务：
- **业务应用**: 微服务、API、前端应用
- **开发者门户**: Backstage、内部文档
- **自助服务界面**: 资源申请、环境管理

## 关键架构模式

### 微服务架构
将应用拆分为松耦合的服务：
- **优势**: 可扩展性、故障隔离、独立部署
- **适用场景**: 大型复杂系统，需要灵活性和持续演进
- **考虑因素**: 服务治理、数据一致性、网络延迟

### 事件驱动架构
基于事件的异步通信：
- **模式**: Event Sourcing、CQRS、Saga
- **优势**: 解耦、可扩展、弹性
- **组件**: 消息队列、事件总线、流处理

### 云原生设计模式
构建云环境中可靠高效的应用：
- **Ambassador 模式**: 代理客户端网络连接
- **Anti-Corruption Layer**: 隔离遗留系统
- **Backends for Frontends**: 为不同客户端优化后端
- **Circuit Breaker**: 防止级联失败
- **Retry/Timeout**: 处理瞬时故障
- **Bulkhead**: 隔离资源池

### 分布式系统模式
确保系统可扩展、弹性和高效：
- **状态管理**: 分区、复制、分片
- **一致性**: 最终一致性、Gossip 协议
- **流量控制**: 限流、熔断、降级
- **故障恢复**: 自动重试、补偿事务

## 架构设计要点

### 可扩展性 (Scalability)
- 水平扩展优于垂直扩展
- 无状态服务设计
- 数据分片和缓存策略
- 弹性伸缩机制

### 可靠性 (Reliability)
- 多可用区部署
- 自动故障检测和恢复
- 优雅降级和限流
- 数据备份和灾难恢复

### 安全性 (Security)
- 零信任网络架构
- 最小权限原则
- 加密传输和存储
- 安全扫描和合规检查

### 可维护性 (Maintainability)
- 清晰的代码结构和文档
- 自动化测试覆盖
- 标准化的部署流程
- 版本管理和回滚机制

### 可观测性 (Observability)
- 统一的日志聚合
- 全链路追踪
- 关键指标监控
- 智能告警和根因分析

## IDP 核心组件架构

### 应用配置管理
- 定义应用期望状态
- 声明式配置
- GitOps 工作流

### 基础设施编排
- Infrastructure as Code
- 自动化资源配置
- 多云抽象层

### 环境管理
- 开发、测试、生产环境一致性
- 环境隔离和复制
- 临时环境快速创建

### 部署流水线
- 自动化 CI/CD
- 渐进式交付（金丝雀、蓝绿）
- 自动化测试和质量门

### 服务目录
- API 和服务发现
- 文档自动生成
- 版本管理和兼容性

## 架构决策考虑

### 技术选型
- 评估业务需求和技术成熟度
- 考虑团队技能和学习曲线
- 权衡成本和收益
- 避免过度工程

### 迁移策略
- 采用绞杀者模式（Strangler Pattern）
- 逐步迁移，降低风险
- 建立防腐层隔离遗留系统
- 保证业务连续性

### 演进路径
- 从简单开始，逐步复杂化
- 基于实际需求演进
- 定期架构审查和重构
- 持续学习和改进`,
    references: [
      { title: "Azure Cloud Design Patterns", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/" },
      { title: "Platform Specification", url: "https://platformspec.io/" },
      {
        title: "The Complete Guide to Platform Engineering",
        url: "https://jellyfish.co/library/platform-engineering/",
      },
    ],
  },
  {
    id: "internal-developer-platform",
    title: "内部开发者平台 (IDP)",
    description: "为开发者提供自助服务能力的工具链和工作流程",
    category: "framework",
    tags: ["自助服务", "开发者工具", "自动化"],
    content: `## 什么是 IDP

内部开发者平台是一套集成的工具和服务，帮助开发者：

- 快速创建和部署应用
- 管理基础设施和环境
- 监控和调试应用
- 遵循组织最佳实践

## 核心组件

1. **应用配置管理**: 定义应用的期望状态
2. **基础设施编排**: 自动化资源配置
3. **环境管理**: 开发、测试、生产环境一致性
4. **部署流水线**: CI/CD 自动化
5. **可观测性**: 日志、指标、追踪一体化`,
    references: [
      { title: "Backstage", url: "https://backstage.io/" },
      { title: "Port", url: "https://getport.io/" },
    ],
  },
  {
    id: "golden-paths",
    title: "黄金路径 (Golden Paths)",
    description: "为开发者提供经过验证的最佳实践路径，降低认知负荷",
    category: "pattern",
    tags: ["最佳实践", "标准化", "开发者体验"],
    content: `## 概念

黄金路径是组织推荐的、经过验证的技术选择和实践方式。它们：

- 不是强制性的，而是推荐性的
- 经过优化，能够快速交付价值
- 降低开发者的决策负担

## 实施要点

1. **模板化**: 提供项目模板和脚手架
2. **自动化**: 集成 CI/CD 和基础设施即代码
3. **文档化**: 清晰说明使用方法和原因
4. **可扩展**: 允许在需要时偏离黄金路径`,
    references: [],
  },
  {
    id: "platform-maturity-model",
    title: "平台成熟度模型",
    description: "评估和规划平台工程实践成熟度的框架",
    category: "methodology",
    tags: ["成熟度评估", "路线图", "能力建设"],
    content: `## 成熟度级别

### Level 1: 临时性 (Ad-hoc)
- 没有统一的平台战略
- 工具选择分散
- 手动流程为主

### Level 2: 基础性 (Basic)
- 开始建立平台团队
- 基础的 CI/CD 流水线
- 部分自动化

### Level 3: 标准化 (Standardized)
- 统一的开发者门户
- 标准化的黄金路径
- 自助服务能力

### Level 4: 优化 (Optimized)
- 数据驱动的决策
- 持续优化开发者体验
- 高度自动化

### Level 5: 创新 (Innovative)
- 平台赋能业务创新
- 行业领先实践
- 开源贡献`,
    references: [],
  },
]
