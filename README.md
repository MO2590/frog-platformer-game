# 🐸 Frog Platformer Game

> A 2D platformer game with a frog character (Pepe-inspired) featuring Mario-style gameplay. Built with Phaser.js for web and iOS deployment.

## 🎮 Game Overview

This is a classic 2D side-scrolling platformer where you control a frog character through various levels, collecting items, stomping enemies, and reaching the goal flag.

### Features
- **Classic platformer mechanics**: Run, jump, double jump, and stomp enemies
- **Unique frog character**: Legally distinct, meme-inspired design
- **Power-ups and collectibles**: Coins/tokens, power-ups, and special items
- **Multiple levels**: Progressive difficulty with different themes
- **Mobile-ready**: Optimized for iOS deployment via Capacitor
- **Web-first**: Play directly in browser, no installation needed

## 🎯 Game Mechanics

- **Movement**: Arrow keys or WASD to move left/right
- **Jump**: Spacebar or W/Up Arrow (double jump available)
- **Stomp**: Land on enemies from above to defeat them
- **Collect**: Grab all coins and items for high score
- **Goal**: Reach the flag at the end of each level

## 🛠️ Tech Stack

- **Game Engine**: [Phaser 3](https://phaser.io/) - Fast, free, and fun HTML5 game framework
- **Language**: JavaScript (ES6+)
- **Mobile Deployment**: [Capacitor](https://capacitorjs.com/) for iOS/Android
- **Build Tools**: Node.js, npm/yarn
- **Version Control**: Git + GitHub

## 🚀 Getting Started

### Prerequisites

```bash
# Node.js 16+ and npm
node --version
npm --version
```

### Installation

```bash
# Clone the repository
git clone https://github.com/MO2590/frog-platformer-game.git
cd frog-platformer-game

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:8080` in your browser to play!

### Building for Production

```bash
# Build web version
npm run build

# The built game will be in /dist folder
```

### iOS Deployment (Coming Soon)

```bash
# Add iOS platform
npx cap add ios

# Build and sync
npm run build
npx cap sync

# Open in Xcode
npx cap open ios
```

## 📁 Project Structure

```
frog-platformer-game/
├── src/
│   ├── index.html          # Main HTML entry
│   ├── main.js             # Phaser game configuration
│   ├── scenes/             # Game scenes
│   │   ├── MenuScene.js    # Main menu
│   │   ├── GameScene.js    # Main gameplay
│   │   └── UIScene.js      # HUD overlay
│   ├── entities/           # Game objects
│   │   ├── Player.js       # Frog player character
│   │   ├── Enemy.js        # Enemy types
│   │   └── Collectible.js  # Coins and power-ups
│   └── assets/             # Game assets
│       ├── sprites/        # Character and object sprites
│       ├── tilesets/       # Level tile graphics
│       ├── audio/          # Sound effects and music
│       └── levels/         # Level data (Tiled JSON)
├── dist/                   # Built game files
├── ios/                    # iOS Capacitor project
├── package.json
└── README.md
```

## 🎨 Character Design

### The Frog Hero

Our main character is a **legally distinct** frog inspired by internet meme culture:
- **Color**: Bright green with lighter belly
- **Style**: Simple, clean pixel art or cartoon style
- **Personality**: Chill, determined, slightly goofy
- **Abilities**: High jump, double jump, stomp attack

**Important**: This character is NOT Pepe the Frog and does not use any copyrighted designs. It's an original creation for this game.

## 🎵 Assets & Credits

- **Sprites**: Custom pixel art (to be created)
- **Tiles**: Free platformer tilesets from [OpenGameArt](https://opengameart.org/)
- **Music**: Royalty-free tracks from [FreePD](https://freepd.com/)
- **Sound Effects**: [Freesound.org](https://freesound.org/) (CC0/CC-BY licensed)

## 📱 App Store Preparation

### Requirements for iOS App Store:
1. Apple Developer Account ($99/year)
2. App Store assets:
   - App icon (1024x1024)
   - Screenshots for iPhone/iPad
   - App description and keywords
   - Privacy policy URL
3. Age rating: 4+ (safe for kids)
4. Monetization: Free with optional ads/IAP

### Legal & Compliance:
- ✅ Original character design (not copyrighted)
- ✅ Licensed or original music/SFX
- ✅ No Nintendo branding or Mario references
- ✅ App Store guidelines compliant

## 🗺️ Development Roadmap

### Phase 1: Core Mechanics (Week 1-2)
- [x] Set up Phaser project structure
- [ ] Implement player movement and physics
- [ ] Create basic level with platforms
- [ ] Add jump and double jump
- [ ] Implement enemy behavior
- [ ] Add stomp mechanic

### Phase 2: Content & Polish (Week 3-4)
- [ ] Design frog character sprite
- [ ] Create 5-10 levels with increasing difficulty
- [ ] Add collectibles and scoring system
- [ ] Implement power-ups
- [ ] Add sound effects and music
- [ ] Create main menu and UI

### Phase 3: Mobile & Deployment (Week 5-6)
- [ ] Integrate Capacitor for iOS
- [ ] Add touch controls for mobile
- [ ] Optimize performance for devices
- [ ] Test on real iOS devices
- [ ] Prepare App Store assets
- [ ] Submit to App Store

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs via Issues
- Suggest features
- Submit pull requests
- Share level designs

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## ⚖️ Legal Notice

This game is an **original creation** and does not infringe on any copyrights:
- The frog character is NOT Pepe the Frog (copyrighted by Matt Furie)
- Game mechanics are inspired by classic platformers but use original implementation
- No Nintendo assets, sprites, sounds, or branding are used
- All assets are original or properly licensed

## 🔗 Links

- **Repository**: [github.com/MO2590/frog-platformer-game](https://github.com/MO2590/frog-platformer-game)
- **Demo**: Coming soon
- **Issues**: [Report bugs](https://github.com/MO2590/frog-platformer-game/issues)

## 📧 Contact

For questions or collaboration, open an issue on GitHub.

---

**Made with 💚 by MO2590** | Powered by Phaser.js
