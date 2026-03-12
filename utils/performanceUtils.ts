import React from 'react';
import { WikiNode, Connection } from '../types';

// Performance optimization utilities
export const useNodeMap = (nodes: WikiNode[]) => {
  return React.useMemo(() => new Map(nodes.map(n => [n.id, n])), [nodes]);
};

export const useSelectedNodes = (nodes: WikiNode[]) => {
  return React.useMemo(() => nodes.filter(n => n.selected), [nodes]);
};

export const useConnectionMap = (connections: Connection[]) => {
  return React.useMemo(() => new Map(connections.map(c => [c.id, c])), [connections]);
};

// Fast node lookup O(1) instead of O(n)
export const getNodeById = (nodeMap: Map<string, WikiNode>, id: string) => {
  return nodeMap.get(id);
};

// Batch operations for better performance
export const batchNodeUpdates = (nodes: WikiNode[], updates: Array<{id: string, changes: Partial<WikiNode>}>) => {
  const updateMap = new Map(updates.map(u => [u.id, u.changes]));
  return nodes.map(node => {
    const changes = updateMap.get(node.id);
    return changes ? { ...node, ...changes } : node;
  });
};
