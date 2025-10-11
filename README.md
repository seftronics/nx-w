# NX-W Monorepo

> Modern monorepo dengan Nx, Next.js, dan Atomic Design UI components

## 📋 Overview

Monorepo ini menggunakan **Nx workspace** dengan arsitektur **Atomic Design** untuk membangun aplikasi web yang scalable dan maintainable.

### Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Workspace**: Nx 21.6+
- **UI Library**: Custom components dengan Atomic Design
- **Styling**: TailwindCSS 4+
- **Component Docs**: Storybook
- **Testing**: Jest, Playwright
- **TypeScript**: 5.9+

## 🏗️ Struktur Project

```
nx-w/
├── apps/
│   ├── website/              # Next.js application
│   │   ├── src/
│   │   │   ├── app/         # App Router pages
│   │   │   └── components/  # App-specific components
│   │   ├── .env.development
│   │   └── project.json
│   └── website-e2e/         # E2E tests
├── libs/
│   ├── ui/                  # UI component library (Atomic Design)
│   │   ├── src/
│   │   │   ├── atoms/       # Basic UI elements (Button, Input)
│   │   │   ├── molecules/   # Composite components
│   │   │   ├── organisms/   # Complex components (Sidebar, etc)
│   │   │   └── hooks/       # Custom React hooks
│   │   └── .storybook/      # Storybook configuration
│   └── utils/               # Shared utilities
└── packages/                # Additional packages
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone repository
git clone <repository-url>
cd nx-w

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run start:dev

# Or run directly with Nx
nx serve website

# Start Storybook
nx run ui:storybook
```

## 📦 Available Scripts

```bash
# Development
npm run start:dev          # Start website dengan environment development

# Building
nx build website           # Build production website
nx build ui               # Build UI library

# Testing
nx test                   # Run unit tests
nx e2e website-e2e        # Run E2E tests

# Linting
nx lint                   # Run ESLint
nx affected:lint          # Lint affected projects

# Storybook
nx run ui:storybook       # Start Storybook dev server
nx run ui:build-storybook # Build Storybook static files
```

## 🎨 UI Component Library

Library UI menggunakan **Atomic Design** methodology:

### Atoms
- `Button` - Basic button component dengan variants
- `Input` - Form input elements
- `Badge` - Status badges

### Molecules  
- `FormField` - Label + Input combinations
- `InputOTP` - OTP input component

### Organisms
- `Sidebar` - Navigation sidebar
- `Carousel` - Image/content carousel

### Usage Example

```tsx
import { Button, Input, Sidebar } from '@nx-w/ui';

export default function Page() {
  return (
    <Sidebar>
      <form>
        <Input placeholder="Enter your name" />
        <Button variant="destructive">Submit</Button>
      </form>
    </Sidebar>
  );
}
```

## 🔧 Configuration

### Environment Variables

Copy environment files untuk development:

```bash
# Website environment
cp apps/website/.env.development.example apps/website/.env.development
```

Environment variables yang tersedia:
- `NODE_ENV` - Environment mode
- `NEXT_PUBLIC_API_URL` - Public API URL
- `DATABASE_URL` - Database connection string

### TypeScript

Project menggunakan TypeScript dengan konfigurasi strict mode dan path mapping:

```json
{
  "paths": {
    "@nx-w/ui": ["./libs/ui/src/index.ts"],
    "@nx-w/utils": ["./libs/utils/src/index.ts"]
  }
}
```

## 📚 Documentation

- **Storybook**: Jalankan `nx run ui:storybook` untuk melihat dokumentasi komponen
- **Component API**: Lihat file `.stories.tsx` untuk usage examples
- **Nx Documentation**: [nx.dev](https://nx.dev)

## 🧪 Testing

### Unit Tests
```bash
nx test ui              # Test UI components
nx test website         # Test website app
nx affected:test        # Test affected projects
```

### E2E Tests
```bash
nx e2e website-e2e      # Run all E2E tests
nx e2e website-e2e --ui # Run dengan Playwright UI
```

## 🚢 Deployment

### Build for Production

```bash
# Build all projects
nx run-many --target=build --all

# Build specific project
nx build website
```

### Environment Setup

1. Copy environment variables
2. Configure database connections  
3. Set up domain dan SSL certificates

## 📖 Development Guidelines

### Code Style
- Gunakan **Atomic Design** untuk struktur UI components
- Follow **SOLID principles** untuk architecture
- Implement **TypeScript strict mode**
- Use **ESLint** dan **Prettier** untuk code formatting

### Component Guidelines
- Setiap component harus punya `.stories.tsx` file
- Gunakan `forwardRef` untuk components yang menerima ref
- Export named exports, bukan default exports
- Include proper TypeScript interfaces

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/component-name

# Commit changes
git commit -m "feat(ui): add new button variants"

# Push dan create PR
git push origin feature/component-name
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes dengan tests
4. Submit pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Troubleshooting

### Common Issues

**Error: Cannot find configuration for task**
```bash
# Pastikan project.json ada dan valid
nx show projects
```

**Module boundaries error**
```bash
# Build dependencies dulu
nx build utils
nx build ui
```

**Environment variables tidak terbaca**
```bash
# Pastikan path file env benar
npm run start:dev
```

### Need Help?

- Check [Nx Documentation](https://nx.dev)
- Review Storybook untuk component usage
- Open issue di repository ini

---

**Happy coding! 🎉**

To version and release the library use

```
npx nx release
```

Pass `--dry-run` to see what would happen without actually releasing the library.

[Learn more about Nx release &raquo;](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Keep TypeScript project references up to date

Nx automatically updates TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in `tsconfig.json` files to ensure they remain accurate based on your project dependencies (`import` or `require` statements). This sync is automatically done when running tasks such as `build` or `typecheck`, which require updated references to function correctly.

To manually trigger the process to sync the project graph dependencies information to the TypeScript project references, run the following command:

```sh
npx nx sync
```

You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
npx nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/js?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
