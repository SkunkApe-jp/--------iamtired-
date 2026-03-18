<div align="center">

<img src="icon.png" alt="iamtired icon" width="120" height="120" />

</div>

---

## amitired?

![https://www.alanwake.com/wp-content/uploads/2023/05/Alan_Wake-1.jpg](screenshots/screenshot1.png)

---

## Changelog

### v1.1 - Event Handler Updates (Mar 2026)
- **Key Handlers**: Temporarily commented out delete key handlers for stability
- **Event System**: Improved useEventHandlers.ts for better user interaction

### v1.2 - Enhanced UI Components (Mar 2026)
- **Canvas System**: Enhanced Canvas.tsx with improved rendering
- **Visual Effects**: Added HUDStars.tsx and StarsBackground.tsx components with animated star fields
- **Node System**: Improved WikiNode.tsx with 180+ lines of enhancements
- **Connection Layer**: Enhanced ConnectionLayer.tsx with 51 new features
- **Grid System**: Improved gridUtils.ts with 26 enhancements
- **Styling**: Enhanced index.css with 40+ styling improvements
- **Background Effects**: Multi-layer animated star backgrounds with parallax effects
- **Zap Icon Functions**: Added Zap icon for fast performance indicator and content aggregation testing

### v1.3 - Content & AI Features (Mar 2026)
- **Content Aggregation**: Multi-source node synthesis capability
- **AI Title Generation**: Generate titles from node content via context menu
- **Hotkeys**: Shift+H for complete HUD hiding
- **Visual Design**: Upgraded arrowheads to Figma-style smooth design
- **Performance**: Added performance optimization utilities
- **Toolbar**: Test aggregation button added

### v1.4 - Connection System Overhaul (Mar 2026)
- **Visual Design**: Replaced curved bezier paths with clean straight lines
- **Connection Markers**: Removed directional arrowheads, use simple circular dots
- **Professional Appearance**: Eliminated auto-bending behavior
- **Performance**: Simplified marker system with single dot endpoint
- **Code Cleanup**: Removed unused directional logic

### v1.5 - Critical Bug Fixes (Mar 2026)
- **Memory Management**: Fixed memory leaks in useTabGraph timeout cleanup with proper ref management
- **Connection Validation**: Improved validation logic to check for null/undefined positions
- **Resource Management**: Enhanced file reader resource management with proper cleanup
- **Type Safety**: Replaced unsafe type assertions with specific type casting
- **Dependencies**: Added missing addToast dependency to useGraphAI useCallback

### v1.6 - Latest Updates (Mar 2026)
- **Native Desktop App**: Full Electron desktop application with portable distribution
- **UI Enhancements**: Clean interface without menu bar distraction
- **Build System**: Improved packaging with electron-packager for better portability
- **Bug Fixes**: 
  - Fixed memory leaks and resource management
  - Improved connection validation system
  - Enhanced straight-line connections with dots
- **New Features**:
  - Content aggregation capabilities
  - Automatic title generation
  - Enhanced UI components

### v1.7 - Theme System Overhaul (Mar 2026)
- **Green Color Scheme**: Implemented `rgb(34 197 94)` green theme across all components
- **Typography System**: Added PP Editorial Old and Atkinson Hyperlegible Next fonts
- **Fullscreen Component**: New FullscreenOverlay.tsx with proper markdown rendering
- **Theme Documentation**: Added comprehensive THEME.md with architecture notes
- **Tailwind Integration**: Fixed dual Tailwind v3/v4 configuration conflicts
- **CSS Architecture**: Resolved CDN vs build-time Tailwind inconsistencies
- **Font System**: Implemented proper font hierarchy with CSS variables
- **Component Updates**: 40+ components updated with green color scheme

### v1.8 - Keyboard Shortcut Fix (Mar 2026)
- **Critical Bug Fix**: Resolved Shift+H keyboard shortcut conflict that caused unintended PAN mode activation
- **User Experience**: Fixed cursor switching to grab mode when hiding sidebar with Shift+H
- **Event Handling**: Modified useEventHandlers.ts to prevent H key from activating PAN mode when Shift is pressed
- **Interaction Fix**: Users can now select text and interact with nodes normally after hiding sidebar