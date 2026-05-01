export type DocNavItem = {
  title: string;
  href: string;
};

export type DocNavSection = {
  title: string;
  items: DocNavItem[];
};

export const DOCS_NAV: DocNavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "Notes Location", href: "/docs/getting-started/notes-location" },
      { title: "Navigation Basics", href: "/docs/getting-started/navigation" }
    ],
  },
  {
    title: "Editor",
    items: [
      { title: "Live Preview", href: "/docs/editor/live-preview" },
      { title: "Preview & Split View", href: "/docs/editor/preview" },
      { title: "Images", href: "/docs/editor/images" },
      { title: "Markdown Features", href: "/docs/editor/markdown" },
      { title: "PDF Export", href: "/docs/editor/pdf-export" }
    ],
  },
  {
    title: "Organization",
    items: [
      { title: "Status & Tags", href: "/docs/organization/status-tags" },
      { title: "Search", href: "/docs/organization/search" },
      { title: "Task Progress", href: "/docs/organization/task-progress" }
    ],
  },
  {
    title: "Canvas",
    items: [
      { title: "Overview", href: "/docs/canvas/overview" },
      { title: "Export to PDF", href: "/docs/canvas/export" }
    ],
  },
  {
    title: "Kanban",
    items: [{ title: "Overview", href: "/docs/kanban/overview" }],
  },
  {
    title: "Terminal",
    items: [{ title: "Overview", href: "/docs/terminal/overview" }],
  },
  {
    title: "Settings",
    items: [{ title: "Editor & UI Settings", href: "/docs/settings/overview" }],
  },
  {
    title: "Shortcuts",
    items: [{ title: "Keyboard Shortcuts", href: "/docs/shortcuts" }],
  },
  {
    title: "Troubleshooting",
    items: [{ title: "FAQ", href: "/docs/troubleshooting/faq" }],
  },
  {
    title: "Developer Docs",
    items: [
      { title: "Architecture", href: "/docs/developer/architecture" },
      { title: "Run Locally", href: "/docs/developer/run-locally" }
    ],
  }
];

export function findNavItemByHref(href: string): DocNavItem | undefined {
  for (const section of DOCS_NAV) {
    const match = section.items.find((i) => i.href === href);
    if (match) return match;
  }
  return undefined;
}

