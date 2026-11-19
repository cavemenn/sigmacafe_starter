# Sigma Café: Debug Lab

Sigma Café is a small café website. It has three pages, and **each page has one bug**.
Your job is to find each bug, fix it, and report it as a GitHub issue.

You are working solo, and you cannot ask for help during the lab. Your tool is `console.log()`.

## Project structure

```
sigmacafe_starter/
├── index.html            Home page
├── pages/
│   ├── bill.html         Split the bill
│   ├── menu.html         Menu
│   └── team.html         Team
├── css/
│   ├── base.css          Colours, fonts, reset
│   └── components.css    Buttons, cards, forms
├── js/
│   ├── bill.js           Logic for the bill page
│   ├── menu.js           Logic for the menu page
│   └── team.js           Logic for the team page
├── data/
│   ├── menu.js           The menu items
│   └── staff.js          The team members
├── lib/
│   └── rounding.js       A library written by someone else (do not edit)
├── assets/images/        Logo and illustrations
├── .github/              GitHub settings (hidden folder)
└── README.md             You are here
```

Each page has its own JavaScript file. A bug on one page never needs a fix on another.
You should not need to edit anything in `lib/`, `css/` or `data/`.

## Setup

1. **Fork the project.** Open https://github.com/teamsigmaschool/sigmacafe_starter and click **Fork**
   (top right). On the next page, click **Create fork**. You can keep the name `sigmacafe_starter`,
   or rename it if you want.
2. **Copy the link to your fork.** GitHub now shows your own copy, under your username.
   Click the green **Code** button, make sure **HTTPS** is selected, then click the copy icon.
3. **Open VS Code and a terminal.** Go to Terminal, then New Terminal.
   On Windows, click the small arrow next to the **+** in the terminal panel and choose **Git Bash**.
4. **Go to the folder where you want to save the project.** For example, your Desktop:

```
cd Desktop
```

5. **Clone your fork.** Paste the link you copied (use your own username):

```
git clone https://github.com/<your-username>/sigmacafe_starter.git
```

6. **Open the project.** Move into the folder and open it in VS Code:

```
cd sigmacafe_starter
code .
```

A new VS Code window opens with the project in the Explorer on the left. 7. Open `index.html` with **Live Server** (right-click, Open with Live Server). 8. Open the browser console: press **F12**, then click the **Console** tab. 9. **Turn on Issues in your fork.** GitHub switches Issues off on forks.
Go to your fork, then Settings, then General, then scroll to Features and tick **Issues**.

## The bugs

Nothing crashes and nothing turns red in the console. Each page runs, but gives a wrong result.

| Page           | What you will see                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| Split the bill | Enter 80, tip 15%, 2 people, then click Calculate. Total and Each person pays do not show a real amount. |
| Menu           | The page starts with all 8 items. Click any category button and the list changes to the wrong thing.     |
| Team           | Click the Sort A to Z button. The order does not change.                                                 |

The code on each page looks reasonable. Staring at it will not tell you what is wrong,
because the problem is in what the program is _doing_, not in how the code looks.

## How to debug

1. **Reproduce it.** Make the bug happen every time with the same steps.
2. **Isolate it.** Decide which file to look at. Each page has its own file in `js/`.
   Do not read the same lines over and over. If the code looks right, make it show you what it is doing.
3. **Inspect it.** Add `console.log()` lines to see what is really going on. A log can answer three questions:
   - _What is actually in this variable?_ `console.log('result:', result);`
   - _Did this code run at all?_ `console.log('handler ran');`
   - _Which element did I get?_ `console.log(button);`
     Use a label so you can tell the lines apart in the console.
4. **Fix it.** Change the line that is wrong. Save and reload.
5. **Verify it.** Repeat the steps from step 1. When it works, delete your `console.log` lines.
   Guessing is slower than logging. If you are not sure what a value is, print it.

## Report each bug as a GitHub issue

File **one issue per bug** in your own fork, so three issues in total.

1. In your fork, click the **Issues** tab, then **New issue**.
2. Choose **Bug report**. The form opens with the template already filled in.
3. If the issue is blank, copy the template below into it.
4. Fill in every section. Paste your real `console.log` lines and what they printed.
5. Click **Submit new issue**, copy the URL, and paste it in the Google chat.
   Use this issue title format: `Bug: <page> - <short description>`

### Issue template (copy this if your issue is blank)

```markdown
## Description

One sentence: what is wrong?

## Steps to reproduce

1.
2.
3.

## Expected result

What should happen?

## Actual result

What happens instead? Paste the wrong numbers or describe the screen.
```
