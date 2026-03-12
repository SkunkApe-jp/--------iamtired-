# Performance Optimization Plan

## Critical Issues (High Impact)

### 1. Selected Nodes Memoization
**Problem**: `nodes.filter(n => n.selected)` runs repeatedly
**Fix**: Create memoized selector
```typescript
const selectedNodes = useMemo(() => nodes.filter(n => n.selected), [nodes]);
```

### 2. Node Lookup Optimization  
**Problem**: `nodes.find(n => n.id === id)` O(n) lookups
**Fix**: Create Map for O(1) lookups
```typescript
const nodeMap = useMemo(() => new Map(nodes.map(n => [n.id, n])), [nodes]);
```

### 3. Z-Index Tracking
**Problem**: `Math.max(...nodes.map(...))` recalculates every time
**Fix**: Track max Z-index separately
```typescript
const [maxZIndex, setMaxZIndex] = useState(1);
```

### 4. Connection Performance
**Problem**: Each connection does O(n) node lookups
**Fix**: Pre-compute positions or use nodeMap

### 5. React Component Optimization
**Problem**: WikiNode re-renders when allNodes changes
**Fix**: Pass only necessary props or use context

## Medium Impact

### 6. Viewport Culling
**Problem**: Renders off-screen nodes
**Fix**: Only render visible nodes

### 7. Event Handler Optimization
**Problem**: New function instances on each render
**Fix**: Use useCallback properly

## Implementation Priority
1. Selected nodes memoization (2 min)
2. Node lookup Map (5 min)  
3. Z-index tracking (3 min)
4. Connection optimization (10 min)
5. Component props optimization (15 min)
