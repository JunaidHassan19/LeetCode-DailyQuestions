/*

There is an undirected tree with n nodes labeled from 0 to n - 1, rooted at node 0. You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

At every node i, there is a gate. You are also given an array of even integers amount, where amount[i] represents:

the price needed to open the gate at node i, if amount[i] is negative, or,
the cash reward obtained on opening the gate at node i, otherwise.
The game goes on as follows:

Initially, Alice is at node 0 and Bob is at node bob.
At every second, Alice and Bob each move to an adjacent node. Alice moves towards some leaf node, while Bob moves towards node 0.
For every node along their path, Alice and Bob either spend money to open the gate at that node, or accept the reward. Note that:
If the gate is already open, no price will be required, nor will there be any cash reward.
If Alice and Bob reach the node simultaneously, they share the price/reward for opening the gate there. In other words, if the price to open the gate is c, then both Alice and Bob pay c / 2 each. Similarly, if the reward at the gate is c, both of them receive c / 2 each.
If Alice reaches a leaf node, she stops moving. Similarly, if Bob reaches node 0, he stops moving. Note that these events are independent of each other.


*/


function mostProfitablePath(edges, bob, amount) {
  const n = amount.length;
  
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  
  const parent = Array(n).fill(-1);
  const depth = Array(n).fill(0);

  function dfs(u, par) {
    parent[u] = par;
    for (const v of graph[u]) {
      if (v === par) continue;
      depth[v] = depth[u] + 1;
      dfs(v, u);
    }
  }
  dfs(0, -1);
  
  const bobTime = Array(n).fill(Infinity);
  let t = 0;
  let cur = bob;
  while (cur !== -1) {
    bobTime[cur] = t;
    cur = parent[cur];
    t++;
  }
  
  let maxProfit = -Infinity;
  
  function dfsAlice(u, par, time, profit) {
    let newProfit;
    if (time < bobTime[u]) {
      newProfit = profit + amount[u];
    } else if (time === bobTime[u]) {
      newProfit = profit + amount[u] / 2;
    } else {
      newProfit = profit; 
    }
    
    let isLeaf = true;
    for (const v of graph[u]) {
      if (v === par) continue;
      isLeaf = false;
      dfsAlice(v, u, time + 1, newProfit);
    }
    if (isLeaf) {
      maxProfit = Math.max(maxProfit, newProfit);
    }
  }
  dfsAlice(0, -1, 0, 0);
  
  return maxProfit;
}
