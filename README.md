<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

![](https://img.shields.io/badge/Hackathon-blueviolet)

# VoteLink

### Brief Description

VoteLink was conceived out of the urgent need for a secure, transparent, and decentralized voting system in Nigeria And Other Africa Countries.

Traditional centralized voting systems have often been marred by controversies, distrust, and doubts about election outcomes.

Recognizing these issues, VoteLink offers a solution that ensures secure voting, eliminates biases, and automates result verification through smart contracts.

## Features

- **Voter Registration**: Secure registration, enabling eligible voting.
- **Poll Management**: Admins can easily create and manage polls.
- **Secure Voting**: Votes are cast securely.
- **Results Display**: Transparent display of poll results after the voting phase concludes.
- **Admin Dashboard**: Comprehensive admin interface for poll oversight, including current status and results analytics.

#### **N/B**: All PRs should be made to the [staging](https://github.com/Ayodeji63/VoteLink./tree/staging) branch

The Frontend project was bootstrapped with [`create-t3-app`](https://create.t3.gg/).

## Technology Stack & Tools

- React
- NextJS
- Typescript
- Hardhat
- Solidity

## Quickstart

Jumpstart your development with these simple steps:

1. **Clone and Set Up the Project**

```bash
git clone https://github.com/Ayodeji63/VoteLink..git
cd VoteLink.
yarn install
```

2. **Update the environment variables**

Copy the env example files to env files

```bash
cp packages/frontend/.env.example packages/frontend/.env
```

3. **Launch the NextJS Application**

In a third terminal, start the NextJS frontend:

```bash
yarn dev
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

### Creating Branches

1. **Create a new branch for your changes**

   ```bash
   git checkout -b feature/my-new-feature
   ```

### Installing a new dependencies

if you need to add a new dependency in any package, use:

```bash
yarn workspace <package-name> add <dependency>
```

for example, to add react-query into the frontend package,

```bash
yarn workspace @votelink/frontend add react-query
```

### Committing and Pushing Changes

1. **Stage changes:**

```bash
git add .
```
2. **Commit changes:**

Make your changes and commit them following the conventional commit message format. We use @commitlint/config-conventional for commit message validation. Example of a valid commit message:

   ```bash
   feat: add new feature
   fix: resolve issue #123
   chore: update dependencies
   ```
3. **Push changes:**
```bash
git push origin feature/my-new-feature

```

### Creating Pull Requests
1. Go to the repository on GitHub.
2. Click on the "Pull Requests" tab.
3. Click "New Pull Request."
4. Select the branch you worked on and the base branch(staging) you want to merge into.
5. Fill out the pull request template, providing detailed information about the changes.
6. Submit the pull request.

## Show your support

Give a ⭐ if you like this project!
