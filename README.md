# ts-canvas

# 学习 ing....

## 添加 githook 插件 husky

步骤：

```
  1. 执行yarn add husky -D
  2. 通过命令npx husky add .husky/pre-commit "yarn lint-staged"(hook 名称与对应的执行时机可参阅 githooks)
  3. 在对应的hook文件中添加命令
  4. 提交代码后可看到lint-staged信息，lint未通过会提示错误信息
  5. 可通过git commit --no-verify强制提交
```
