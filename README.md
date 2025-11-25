# Nx Monorepo - App One & App Two

This is an Nx monorepo containing two React applications with CI/CD and Docker support.

## 🚀 Quick Start

### Prerequisites
- Node.js 20.11.0 or higher
- Docker (optional, for containerization)

### Local Development

```bash
# Install dependencies
npm install

# Start app-one
npm run start:app-one
# or
npx nx serve app-one

# Start app-two
npm run start:app-two
# or
npx nx serve app-two
```

## 🐳 Docker

### Using Docker Compose

```bash
# Build and run both apps
docker-compose up --build

# Access the apps
# App One: http://localhost:8081
# App Two: http://localhost:8082
```

### Building Individual Images

```bash
# Build app-one
npx nx run app-one:docker-build

# Build app-two
npx nx run app-two:docker-build
```

### Pulling from GitHub Container Registry

After CI builds, images are available at:
- `ghcr.io/richusimmatty/app-one:latest`
- `ghcr.io/richusimmatty/app-one:<commit-sha>`
- `ghcr.io/richusimmatty/app-two:latest`
- `ghcr.io/richusimmatty/app-two:<commit-sha>`

```bash
# Pull and run app-one
docker pull ghcr.io/richusimmatty/app-one:latest
docker run -p 8081:80 ghcr.io/richusimmatty/app-one:latest

# Pull and run app-two
docker pull ghcr.io/richusimmatty/app-two:latest
docker run -p 8082:80 ghcr.io/richusimmatty/app-two:latest
```

## 🔧 Available Commands

```bash
# Type checking
npx nx run-many -t typecheck

# Build all projects
npx nx run-many -t build

# Build Docker images for all projects
npx nx run-many -t docker-build

# Build only affected projects
npx nx affected -t build
npx nx affected -t docker-build
```

## 📦 Project Structure

```
monorepo/
├── apps/
│   ├── app-one/          # React app with dummy data
│   └── app-two/          # React app with dummy data
├── .github/
│   └── workflows/
│       └── ci.yml        # CI/CD pipeline
├── docker-compose.yml    # Multi-container setup
└── package.json
```

## 🔄 CI/CD Pipeline

The GitHub Actions workflow automatically:
1. Runs type checking on all projects
2. Builds all projects
3. Builds Docker images for affected projects only
4. **Pushes images to GitHub Container Registry** (on push to `main`)

### Required GitHub Settings

For Docker push to work, ensure:
1. Go to: **Settings → Actions → General → Workflow permissions**
2. Select **"Read and write permissions"**
3. Save

### Image Tagging Strategy

Each image is tagged with:
- `latest` - Always points to the most recent build
- `<commit-sha>` - Specific version for rollbacks

## 🎯 Nx Affected

When you push changes to only one app, Nx intelligently:
- Type checks all projects
- Builds all projects
- **Only builds Docker image for the affected app**

This saves time and resources in CI/CD.

## 📝 License

MIT
