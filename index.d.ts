declare module 'get-link-target' {
  function getLinkTarget(linkPath: string): Promise<string>;

  export = getLinkTarget;
}
