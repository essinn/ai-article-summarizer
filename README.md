# ai-article-summarizer
# Sumz - AI Summarizer Webapp

Simplify your reading with Sumz, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

Sumz is a web application designed to make reading easier by summarizing lengthy articles into brief and comprehensible summaries. Built with React for the frontend, Tailwind CSS for styling, and OpenAI's GPT-4 for generating summaries, Sumz aims to enhance your reading efficiency and comprehension.

## Features

- Summarize long articles into concise summaries
- User-friendly interface built with React
- Responsive design using Tailwind CSS
- Leverages the power of OpenAI's GPT-4 for accurate summaries
- Open-source project

## Demo

Check out a live demo of the app [here](#).

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/essinn/ai-article-summarizer.git
   cd ai-article-summarizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up OpenAI API Key**
   - Create a `.env` file in the root of the project
   - Add your OpenAI API key to the `.env` file
     ```env
     REACT_APP_OPENAI_API_KEY=your_openai_api_key
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## Usage

1. **Enter the article URL or paste the article text**
2. **Click the "Summarize" button**
3. **Read the generated summary**

## Contributing

We welcome contributions to improve Sumz! To contribute:

1. **Fork the repository**
2. **Create a new branch**
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add new feature"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature-branch
   ```
6. **Create a Pull Request**

Please ensure your code follows our coding guidelines and is well-documented.

## License

Sumz is released under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI](https://www.openai.com/)

---

Thank you for using Sumz! If you have any questions or feedback, please open an issue on the [GitHub repository](https://github.com/essinn/ai-article-summarizer).