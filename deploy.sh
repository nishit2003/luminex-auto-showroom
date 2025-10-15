#!/bin/bash

# 🚀 Luminex AutoTech Deployment Script
echo "🚀 Starting Luminex AutoTech deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    print_error "Failed to install dependencies"
    exit 1
fi

print_status "Running linting..."
npm run lint

print_status "Building production version..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Build failed"
    exit 1
fi

print_success "Production build completed successfully!"

# Check build output
if [ -d "dist" ]; then
    print_success "Build output directory 'dist' created"
    
    # Show build statistics
    echo ""
    print_status "Build Statistics:"
    echo "📁 Total files: $(find dist -type f | wc -l)"
    echo "📦 Total size: $(du -sh dist | cut -f1)"
    echo ""
    
    # List main files
    print_status "Main files created:"
    ls -la dist/
    echo ""
    
    print_success "🎉 Your website is ready for deployment!"
    echo ""
    print_status "Next steps:"
    echo "1. 🌐 Register your domain at cheapdomain.com"
    echo "2. 🚀 Choose a hosting platform:"
    echo "   - Vercel (Recommended): https://vercel.com"
    echo "   - Netlify: https://netlify.com"
    echo "   - GitHub Pages: https://pages.github.com"
    echo "3. 📁 Upload the 'dist' folder contents to your hosting platform"
    echo "4. 🔗 Configure your domain DNS settings"
    echo "5. ✅ Test your live website"
    echo ""
    print_status "📖 Read DEPLOYMENT_GUIDE.md for detailed instructions"
    
else
    print_error "Build output directory 'dist' not found"
    exit 1
fi

print_success "🚀 Deployment preparation complete!"
