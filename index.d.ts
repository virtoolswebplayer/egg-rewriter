declare module 'egg' {
    // extend your config
    interface EggAppConfig {
      rewriter: {
        index?: string; // 默认 'index.html'
        rewriteRule?: { from: RegExp; to: string }[]; // 重写规则覆盖 index
        verbose?: boolean; // 是否显示日志
        whiteList?: RegExp; // 白民单正则表达式，符合正则的url一律不重写
    };
  }
}