export function R(system) {
  const a = system.axis;
  return `ℛ(${system.name}:${a.x},${a.y},${a.z},${a.th})`;
}
