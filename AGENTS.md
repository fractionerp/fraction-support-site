# FractionERP Support Docs - Jekyll

## Overview
Support documentation site for FractionERP users.

## Access
- **Production**: https://support.fractionerp.com
- **Local Dev**: http://localhost:8080/fraction-support

## Build Commands
```bash
# Build for local development
docker compose exec jekyll jekyll build --config _config.yml,_config_dev.yml

# Watch mode
docker compose exec jekyll jekyll build --config _config.yml,_config_dev.yml --watch
```

## Structure
```
_pages/                    # Documentation pages (Markdown)
_data/navigation.yml       # Sidebar navigation structure
_includes/sidebar.html     # Sidebar partial
```

## Content Guidelines
- Write in Markdown with GFM (GitHub Flavored Markdown)
- Use clear headings and step-by-step instructions
- Include screenshots where helpful
- Target audience: FractionERP end users (manufacturers)
