#!/bin/bash
echo "Creating StayFlow release ZIP files..."
mkdir -p releases
zip -r releases/stayflow-docs-v0.1.zip docs README.md ROADMAP.md CHANGELOG.md TODO.md
echo "Done."
