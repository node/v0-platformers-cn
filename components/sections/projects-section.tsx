"use client"

import { useState, useMemo } from "react"
import { projects, projectCategories, type ProjectCategory, type ProjectType } from "@/data/projects"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Kbd } from "@/components/ui/kbd"
import { LayoutGrid, List, ExternalLink, Github, Star, Filter, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ViewMode = "grid" | "list"

const typeLabels: Record<ProjectType, string> = {
  opensource: "开源",
  commercial: "商业",
  hybrid: "混合",
}

const typeColors: Record<ProjectType, string> = {
  opensource: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  commercial: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  hybrid: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
}

export function ProjectsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [selectedCategories, setSelectedCategories] = useState<ProjectCategory[]>([])
  const [selectedTypes, setSelectedTypes] = useState<ProjectType[]>([])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(project.category)
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(project.type)
      return categoryMatch && typeMatch
    })
  }, [selectedCategories, selectedTypes])

  const toggleCategory = (category: ProjectCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleType = (type: ProjectType) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedTypes([])
  }

  const hasFilters = selectedCategories.length > 0 || selectedTypes.length > 0

  const formatStars = (stars: number) => {
    if (stars >= 1000) {
      return `${(stars / 1000).toFixed(1)}k`
    }
    return stars.toString()
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">项目</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            平台工程领域相关的开源和商业项目集合，助你构建内部开发者平台
          </p>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>快捷键</span>
            <Kbd>g p</Kbd>
          </div>
        </div>

        {/* 工具栏 */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* 筛选器 */}
          <div className="flex flex-wrap items-center gap-2">
            {/* 分类筛选 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  分类
                  {selectedCategories.length > 0 && (
                    <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
                      {selectedCategories.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>按分类筛选</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {projectCategories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  >
                    {category.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 类型筛选 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  类型
                  {selectedTypes.length > 0 && (
                    <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
                      {selectedTypes.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>按类型筛选</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={selectedTypes.includes("opensource")}
                  onCheckedChange={() => toggleType("opensource")}
                >
                  开源项目
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedTypes.includes("commercial")}
                  onCheckedChange={() => toggleType("commercial")}
                >
                  商业项目
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedTypes.includes("hybrid")}
                  onCheckedChange={() => toggleType("hybrid")}
                >
                  混合模式
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 清除筛选 */}
            {hasFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground">
                <X className="h-4 w-4" />
                清除筛选
              </Button>
            )}

            {/* 结果计数 */}
            <span className="text-sm text-muted-foreground">共 {filteredProjects.length} 个项目</span>
          </div>

          {/* 视图切换 */}
          <div className="flex items-center gap-1 rounded-lg border bg-background p-1">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="gap-2"
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="hidden sm:inline">宫格</span>
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="gap-2"
            >
              <List className="h-4 w-4" />
              <span className="hidden sm:inline">列表</span>
            </Button>
          </div>
        </div>

        {/* 项目列表 - 宫格视图 */}
        {viewMode === "grid" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50"
              >
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      推荐
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                      {project.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
                      <div className="mt-1.5 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className={typeColors[project.type]}>
                          {typeLabels[project.type]}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {projectCategories.find((c) => c.id === project.category)?.name}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="line-clamp-2 min-h-[2.5rem]">{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-3">
                      {project.stars && (
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          {formatStars(project.stars)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* 项目列表 - 列表视图 */}
        {viewMode === "list" && (
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group transition-all hover:shadow-md hover:border-primary/50">
                <div className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                    {project.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold truncate">{project.name}</h3>
                      {project.featured && (
                        <Badge variant="default" className="bg-primary text-primary-foreground text-xs">
                          推荐
                        </Badge>
                      )}
                      <Badge variant="outline" className={`text-xs ${typeColors[project.type]}`}>
                        {typeLabels[project.type]}
                      </Badge>
                      <Badge variant="outline" className="text-xs hidden sm:inline-flex">
                        {projectCategories.find((c) => c.id === project.category)?.name}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    {project.stars && (
                      <span className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        {formatStars(project.stars)}
                      </span>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" className="gap-1.5 hidden sm:flex bg-transparent" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="gap-1.5 bg-transparent" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="hidden sm:inline">访问</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* 空状态 */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">没有找到符合条件的项目</p>
            <Button variant="link" onClick={clearFilters} className="mt-2">
              清除筛选条件
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
