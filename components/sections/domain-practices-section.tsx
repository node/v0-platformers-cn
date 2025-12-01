"use client"

import type React from "react"

import { useState } from "react"
import { domainPractices, domainCategories } from "@/data/domain-practices"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ExternalLink,
  Code,
  Database,
  Brain,
  Layout,
  Bot,
  Globe,
  Smile,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  PackageOpen,
} from "lucide-react"

interface DomainPracticesSectionProps {
  selectedPractice?: string | null
  onSelectPractice?: (id: string | null) => void
}

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Brain: <Brain className="h-5 w-5" />,
  Layout: <Layout className="h-5 w-5" />,
  Bot: <Bot className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />,
  Smile: <Smile className="h-5 w-5" />,
}

export function DomainPracticesSection({ selectedPractice, onSelectPractice }: DomainPracticesSectionProps) {
  const [activeDomain, setActiveDomain] = useState<string>("all")
  const [localSelectedPractice, setLocalSelectedPractice] = useState<string | null>(null)

  const currentSelectedId = selectedPractice ?? localSelectedPractice
  const handleSelectPractice = onSelectPractice ?? setLocalSelectedPractice

  const filteredPractices =
    activeDomain === "all" ? domainPractices : domainPractices.filter((p) => p.domain === activeDomain)

  const selected = domainPractices.find((p) => p.id === currentSelectedId)

  return (
    <section id="domain-practices" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">领域平台实践</h2>
          <p className="max-w-2xl text-muted-foreground">
            探索不同领域的平台工程实践，从软件开发到 AI、数据、前端等各个技术领域的平台建设经验。
          </p>
        </div>

        <Tabs value={activeDomain} onValueChange={setActiveDomain} className="mb-8">
          <TabsList className="flex-wrap h-auto">
            {domainCategories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPractices.map((practice) => (
            <Card
              key={practice.id}
              className="cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              onClick={() => handleSelectPractice(practice.id)}
            >
              <CardHeader>
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">{iconMap[practice.icon]}</div>
                  <Badge variant="secondary" className="text-xs">
                    {practice.domain}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{practice.title}</CardTitle>
                <CardDescription className="line-clamp-2">{practice.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {practice.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Practice Detail Sheet */}
        <Sheet open={!!selected} onOpenChange={(open) => !open && handleSelectPractice(null)}>
          <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
            {selected && (
              <>
                <SheetHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">{iconMap[selected.icon]}</div>
                    <Badge variant="secondary">{selected.domain}</Badge>
                  </div>
                  <SheetTitle className="text-2xl">{selected.title}</SheetTitle>
                  <p className="text-sm text-muted-foreground">{selected.description}</p>
                </SheetHeader>

                <ScrollArea className="mt-6 h-[calc(100vh-220px)] px-6">
                  {/* Main Content */}
                  <div className="prose prose-invert prose-sm max-w-none">
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {selected.content.split("\n").map((line, i) => {
                        if (line.startsWith("## ")) {
                          return (
                            <h3 key={i} className="mt-6 mb-3 text-lg font-semibold text-foreground">
                              {line.replace("## ", "")}
                            </h3>
                          )
                        }
                        if (line.startsWith("### ")) {
                          return (
                            <h4 key={i} className="mt-4 mb-2 text-base font-medium text-foreground">
                              {line.replace("### ", "")}
                            </h4>
                          )
                        }
                        if (line.startsWith("- ")) {
                          return (
                            <li key={i} className="ml-4 text-muted-foreground">
                              {line.replace("- ", "")}
                            </li>
                          )
                        }
                        if (line.match(/^\d+\./)) {
                          return (
                            <li key={i} className="ml-4 text-muted-foreground">
                              {line}
                            </li>
                          )
                        }
                        if (line.trim() === "") {
                          return <br key={i} />
                        }
                        return (
                          <p key={i} className="text-muted-foreground">
                            {line}
                          </p>
                        )
                      })}
                    </div>
                  </div>

                  {/* Key Capabilities */}
                  <div className="mt-8 border-t border-border pt-6">
                    <div className="mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">核心能力</h4>
                    </div>
                    <ul className="space-y-2">
                      {selected.keyCapabilities.map((capability, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Stack */}
                  <div className="mt-8 border-t border-border pt-6">
                    <div className="mb-4 flex items-center gap-2">
                      <PackageOpen className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">技术栈</h4>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {selected.technicalStack.map((tech, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <Badge variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div className="mt-8 border-t border-border pt-6">
                    <div className="mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      <h4 className="font-semibold">主要挑战</h4>
                    </div>
                    <ul className="space-y-2">
                      {selected.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Practices */}
                  <div className="mt-8 border-t border-border pt-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">最佳实践</h4>
                    </div>
                    <ul className="space-y-2">
                      {selected.bestPractices.map((practice, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* References */}
                  {selected.references && selected.references.length > 0 && (
                    <div className="mt-8 border-t border-border pt-6">
                      <h4 className="mb-4 font-semibold">参考资料</h4>
                      <div className="space-y-2">
                        {selected.references.map((ref, i) => (
                          <a
                            key={i}
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {ref.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </ScrollArea>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </section>
  )
}
