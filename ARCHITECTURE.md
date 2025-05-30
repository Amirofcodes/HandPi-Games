# HandPi-Games Architecture - Portfolio Demo

This project demonstrates a modern multi-container web application architecture designed for portfolio showcasing and VPS deployment. Originally an IoT hackathon project, it has evolved into a production-ready demo showcasing full-stack development, AI/ML integration, and DevOps best practices.

## Project Architecture Overview

**HandPi Games** is a containerized web application featuring real-time AI-powered hand gesture recognition. The architecture follows microservices principles with modern DevOps practices, making it an excellent portfolio demonstration of cloud-native development skills.

## Tech Stack Summary

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Python Flask + OpenCV + TensorFlow
- **Infrastructure**: Docker + Kubernetes + Nginx
- **Deployment**: VPS + K3s + Traefik + ArgoCD
- **CI/CD**: GitHub Actions + GitHub Container Registry

## Project Structure

```
HandPi-Games/
├── backend/                    # Flask API with AI/ML processing
│   ├── app/                   # Application modules
│   │   ├── models/           # Data models
│   │   ├── routes/           # API endpoints
│   │   ├── services/         # Business logic
│   │   └── utils/            # Utility functions
│   ├── requirements.txt       # Python dependencies
│   └── run.py                # Application entry point
├── frontend/                   # Modern React application
│   ├── src/                  # Source code
│   │   ├── components/       # React components
│   │   ├── pages/           # Application pages
│   │   └── assets/          # Static assets
│   ├── public/              # Public assets
│   └── package.json         # Node.js dependencies
├── docker/                     # Containerization
│   ├── backend/
│   │   ├── Dockerfile       # Development backend image
│   │   └── Dockerfile.prod  # Production backend image
│   ├── frontend/
│   │   ├── Dockerfile       # Development frontend image
│   │   └── Dockerfile.prod  # Production frontend image
│   └── router/
│       ├── Dockerfile       # Development nginx image
│       └── Dockerfile.prod  # Production nginx image
├── compose/                    # Local development environment
│   ├── docker-compose.yml   # Multi-container development setup
│   ├── .env                 # Environment variables (gitignored)
│   └── .env.example         # Environment template
├── config/
│   └── nginx/               # Web server configurations
│       ├── default.conf     # Development routing
│       └── default.prod.conf # Production routing
├── deploy/                     # Kubernetes production manifests
│   ├── namespace.yaml       # K8s namespace
│   ├── kustomization.yaml   # Kustomize configuration
│   ├── configmap.yaml       # Non-sensitive config
│   ├── secret.yaml          # Sensitive data template
│   ├── *-deploy.yaml        # Service deployments
│   ├── *-service.yaml       # Service definitions
│   └── ingress.yaml         # Traffic ingress
└── .github/
    └── workflows/
        └── build.yml          # CI/CD automation
```

## Architecture Components

### 1. Frontend Service (React + Vite)

**Purpose**: Modern, responsive web interface

**Key Features**:

- **React 18**: Latest React with concurrent features
- **Vite**: Lightning-fast development and build
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Real-time Updates**: WebSocket integration for live camera feed

**Development**: Hot module replacement at http://localhost:3000
**Production**: Optimized static build served by Nginx

### 2. Backend Service (Flask + AI/ML)

**Purpose**: API server with real-time computer vision

**Key Features**:

- **Flask**: Lightweight Python web framework
- **OpenCV**: Real-time video processing
- **TensorFlow/Keras**: Deep learning inference
- **MediaPipe**: Hand landmark detection
- **RESTful API**: Clean endpoint design
- **Health Monitoring**: Built-in health checks

**Endpoints**:

- `/healthz` - Health check
- `/api/game/*` - Game logic
- `/api/video_feed` - Real-time video stream
- `/ws` - WebSocket support

### 3. Router Service (Nginx)

**Purpose**: Reverse proxy and load balancer

**Routing Logic**:

- `/` → Frontend service (React app)
- `/api/*` → Backend service (Flask API)
- `/ws` → WebSocket support for real-time features

**Benefits**:

- Single entry point for all traffic
- SSL termination in production
- Static asset optimization
- Request/response caching

## Development Workflow

### Local Development Setup

```bash
# Quick start
git clone <repository>
cd HandPi-Games
cp compose/.env.example compose/.env
cd compose && docker-compose up -d
```

**Development URLs**:

- **Full Application**: http://localhost (through nginx router)
- **Frontend Direct**: http://localhost:3000 (Vite dev server)
- **Backend Direct**: http://localhost:5001 (Flask API)
- **API via Router**: http://localhost/api (production-like routing)

### Development Features

- **Hot Reload**: Both frontend and backend support live reloading
- **Volume Mounts**: Source code mounted for instant updates
- **Health Checks**: All services monitored for availability
- **Logging**: Centralized log access via `docker-compose logs`

### Making Changes

1. **Frontend Changes**: Edit files in `frontend/` → Vite auto-reloads
2. **Backend Changes**: Edit files in `backend/` → Flask auto-restarts
3. **Config Changes**: Edit `config/nginx/` → Restart router container

## Production Deployment Architecture

### VPS Deployment Stack

```
Internet → Traefik (SSL/Routing) → K3s Cluster → Pods
                                        ↓
                              [Router][Backend][Frontend]
```

### Kubernetes Architecture

**Cluster**: Lightweight K3s for VPS deployment
**Ingress**: Traefik with automatic SSL (Let's Encrypt)
**GitOps**: ArgoCD for automated deployments
**Registry**: GitHub Container Registry for images

### Production Components

1. **K3s Cluster**: Lightweight Kubernetes distribution
2. **Traefik Ingress**: Automatic SSL and routing
3. **ArgoCD**: GitOps continuous deployment
4. **GitHub Registry**: Container image storage
5. **Sealed Secrets**: Secure secret management

### Deployment Pipeline

```
Code Push → GitHub Actions → Build Images → Update Manifests → ArgoCD Sync → Live Update
```

**Automation Steps**:

1. **Trigger**: Push to main branch
2. **Build**: Multi-arch Docker images for all services
3. **Push**: Images to GitHub Container Registry
4. **Update**: Kubernetes manifests with new image tags
5. **Deploy**: ArgoCD detects changes and deploys automatically

## Security & Best Practices

### Container Security

- **Non-root Users**: All production containers run as non-privileged users
- **Minimal Base Images**: Alpine Linux for reduced attack surface
- **Resource Limits**: CPU and memory constraints in Kubernetes
- **Health Checks**: Automated service health monitoring

### Network Security

- **Service Mesh**: All internal communication through Kubernetes networking
- **SSL/TLS**: Automatic HTTPS with Traefik and Let's Encrypt
- **Firewall**: VPS-level firewall rules
- **Secrets Management**: Kubernetes secrets with Sealed Secrets

### Development Security

- **Environment Isolation**: Separate development and production configurations
- **Secret Management**: `.env` files excluded from git
- **Access Control**: Production secrets managed via Kubernetes

## Monitoring & Observability

### Health Monitoring

- **Kubernetes Probes**: Liveness and readiness checks
- **Application Health**: Custom health endpoints
- **Service Discovery**: Automatic service registration

### Logging Strategy

- **Centralized Logs**: All container logs available via Kubernetes
- **Application Logs**: Structured logging in Flask backend
- **Access Logs**: Nginx request/response logging

### Performance Monitoring

- **Resource Usage**: CPU/Memory tracking per service
- **Response Times**: API endpoint performance
- **Real-time Metrics**: Camera processing performance

## Scalability & Performance

### Horizontal Scaling

- **Stateless Design**: All services can scale horizontally
- **Load Balancing**: Nginx distributes traffic across pods
- **Auto-scaling**: Kubernetes HPA based on CPU/memory usage

### Performance Optimizations

- **CDN Ready**: Static assets optimized for CDN delivery
- **Image Optimization**: Multi-stage Docker builds
- **Caching**: Nginx caching for static content
- **Compression**: Gzip compression enabled

## Portfolio Showcase Value

### Technical Skills Demonstrated

**Full-Stack Development**:

- Modern React with hooks and context
- Python Flask RESTful API design
- Real-time WebSocket communication

**AI/ML Integration**:

- Computer vision with OpenCV
- TensorFlow model inference
- Real-time video processing

**DevOps & Infrastructure**:

- Docker containerization
- Kubernetes orchestration
- CI/CD pipeline automation
- GitOps deployment practices

**Modern Web Practices**:

- Microservices architecture
- Health check endpoints
- Structured logging
- Security best practices

### Business Value

- **Scalable**: Ready for production traffic
- **Maintainable**: Clean code structure and documentation
- **Observable**: Comprehensive monitoring and logging
- **Secure**: Production-ready security practices

## Troubleshooting Guide

### Common Development Issues

**Container Won't Start**:

```bash
docker-compose logs <service-name>
docker-compose build --no-cache <service-name>
```

**Port Conflicts**:

```bash
# Check .env file for port configurations
# Ensure no other services using ports 80, 3000, 5001
```

**Camera Access Issues**:

- Ensure browser permissions granted
- Check `/dev/video*` device availability (Linux/Mac)
- Verify HTTPS in production (required for camera access)

**Frontend Build Failures**:

```bash
# Clean node_modules and rebuild
docker-compose exec frontend rm -rf node_modules
docker-compose restart frontend
```

### Production Debugging

**Service Health**:

```bash
kubectl get pods -n handpi-games
kubectl describe pod <pod-name> -n handpi-games
kubectl logs <pod-name> -n handpi-games
```

**Ingress Issues**:

```bash
kubectl get ingress -n handpi-games
kubectl describe ingress handpi-ingress -n handpi-games
```

**ArgoCD Sync Issues**:

- Check ArgoCD dashboard for sync status
- Verify image tags in kustomization.yaml
- Review GitHub Actions build logs

## Future Architecture Enhancements

### Planned Improvements

1. **Database Integration**: PostgreSQL for user sessions and game statistics
2. **Redis Caching**: Session management and real-time data caching
3. **Prometheus Monitoring**: Detailed metrics collection
4. **Grafana Dashboards**: Visual monitoring interface
5. **Multi-region Deployment**: Geographic distribution for performance

### Scalability Roadmap

1. **Message Queue**: Redis/RabbitMQ for async processing
2. **CDN Integration**: Global content delivery
3. **Database Sharding**: Horizontal database scaling
4. **Microservices Split**: Further service decomposition

---

This architecture demonstrates modern web application development practices suitable for portfolio presentation and production deployment on VPS infrastructure.
