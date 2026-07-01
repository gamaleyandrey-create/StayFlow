#!/bin/bash
mkdir -p releases
zip -r releases/stayflow-docs-v0.2.zip docs README.md ROADMAP.md CHANGELOG.md TODO.md
zip -r releases/stayflow-backend-v0.2.zip backend
zip -r releases/stayflow-owner-v0.2.zip owner
zip -r releases/stayflow-worker-v0.2.zip worker
zip -r releases/stayflow-guest-v0.2.zip guest
echo "Release ZIP files created."
