# tud-cs-master-notes

An open knowledge hub for M.Sc. Computer Science students at TU Dresden, featuring curated course notes and exam-focused study materials.

---

### 🌐 Live Demo / 效果访问
**[👉 点击进入项目主页 / Visit Website](https://yifrain.github.io/tud-cs-master-notes/)**

---

### 🙌 Call for Contribution / 欢迎贡献

希望大家能分享自己的学习体会QWQ 无论是**课程印象、复习经验、上课体验还是历年真题**，只要是对选课或备考有帮助的信息，请不要犹豫。
* **多样性：** 即便你的观点与已有内容不同也完全没关系，不同背景的体会更有参考价值，能帮他人选到合适的课或成功避坑。
* **形式自由：** 文档结构不限，你可以自由发挥：增改标题、自建组件，只要认为不破坏整体 UI 风格且表达清晰就可以。
* **参与方式：** 欢迎提交 Issue 或 Pull Request。如果不方便，可以直接在 **微信上联系我 (ID: yfrainx)**，发送 Markdown 或纯文本，我看到后会尽快更新。


> *“感谢每一位贡献者的付出！ 🎓”*

---

### 🛠 Development & Contribution Flow / 开发者指南

本项目基于 [VitePress](https://vitepress.dev/) 构建。

#### 1. 常用命令 (Commands)
```bash
# 安装依赖
npm install

# 本地启动开发服务器
npm run docs:dev

# 项目打包
npm run docs:build
```
#### 2. 目录与路由 (Docs & Routing)

VitePress 的路由是基于文件系统的映射。

* **文件路径**：所有文档存放在 /docs 文件夹下。例如创建 /docs/courses/distributed-systems.md，对应的访问路径就是 /courses/distributed-systems。

* **侧边栏与导航**：如果你新增了页面，需要同步更新 .vitepress/config.mts 中的 sidebar 或 nav 部分，否则页面不会显示在菜单里。

#### 3. 开发注意事项 (Important Notes)

由于本项目部署在 GitHub Pages 的子目录下，config.mts 中配置了 base: '/tud-cs-master-notes/'。在本地调试时开启 base ，本地预览可能会导致图片加载失败或样式错乱，因此请务必注意：

1. 开发时：建议临时将 base 行注释掉。

2. 提交前：务必取消注释。如果 base 没开，提交后的线上页面将失去所有 CSS 样式。
```ts
// docs/.vitepress/config.mts
export default defineConfig({
  // base: '/tud-cs-master-notes/', // <--- 本地调试先注释，Git Commit 前必还原
  ...
})
```