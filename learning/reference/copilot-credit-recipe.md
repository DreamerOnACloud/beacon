# Recipe: GitHub Copilot on a limited credit budget

Goal: spend fewer credits while staying in control of the process. VS Code agent mode.

## 1. Settings to keep
- Auto model routing, optimized for Efficiency (cheapest option; also carries a discount).
- Agent mode Interactive, permissions Manual. Leave Autopilot and Allow all off.
- Plan mode for anything touching more than a couple of files. Small edits skip it.

## 2. Stop unprompted terminal commands
Manual permissions still skips the prompt for commands approved before (saved "always allow" or terminal auto-approve rules).
- Search VS Code settings for "auto approve" and remove rules you don't want. (Exact setting names not verified; check the settings UI.)
- Run tests and builds yourself. Paste only the failing lines back into the chat, since output costs tokens on every later step.

## 3. The lean agent
Create with **Chat: New Custom Agent**, user level. Draft:

```markdown
---
name: lean
description: Cheap, narrow edits. Read, search, edit only.
tools: ['read', 'search', 'edit']
model: Claude Haiku 4.5
---
Change only the files I name. No refactoring, no extra files.
Do not run anything. Do not search beyond what the task needs.
Make the smallest change that works, then stop and summarize in 3 lines.
If the task is bigger than I described, say so and stop.
```

Verify: tool names (from community examples, see the [VS Code docs](https://code.visualstudio.com/docs/agent-customization/custom-agents.md)), that the terminal tool is really gone (ask it to run `ls`), and that the model name matches your picker.

## 4. Model choice
| Task | Choice |
|---|---|
| Small, scoped edit | Lean agent (Haiku 4.5) |
| Anything else | Built-in Agent on Auto and Efficiency |
| Hard problem | Opus, picked by hand, never the default |

## 5. Routine per task
1. New chat, so old history isn't re-sent.
2. Attach only the files that matter, and name them.
3. End the prompt with: "Change only these files. Stop when done."
4. Run tests yourself.

## 6. Tracking
Check usage weekly and after any session that felt expensive. Note which task type caused the spike, then adjust a rule.
