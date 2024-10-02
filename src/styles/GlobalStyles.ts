import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset and box-sizing */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Scroll behavior for smoother navigation */
  html {
    scroll-behavior: smooth;
    font-size: 100%; /* Base font size: 16px */
  }

  /* Body Styling */
  body {
    font-family: 'Inter', sans-serif; /* Updated font for better readability */
    background-color: #1a202c; /* Dark background */
    color: #f7fafc; /* Light text for better contrast */
    line-height: 1.7;
    overflow-x: hidden;
    font-size: 16px;
    padding-bottom: 0; /* Ensure no extra padding at the bottom */
    margin-bottom: 0; /* Remove any margin at the bottom */
  }

  /* Sections */
  section {
    padding-top: 80px;
    padding-bottom: 0; /* Remove bottom padding */
    margin-bottom: 0;  /* Remove bottom margin */
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: #edf2f7;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  /* Paragraph Styling */
  p {
    line-height: 1.8;
    font-size: 1rem;
    color: #e2e8f0;
  }

  /* Image Styling */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Anchor Links */
  a {
    color: #63b3ed;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #4299e1;
    text-decoration: underline;
  }

  /* Button Styling */
  button {
    cursor: pointer;
    border: none;
    background-color: #3182ce;
    color: #fff;
    border-radius: 0.375rem;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #2b6cb0;
  }

  /* Responsive Media Queries */
  @media (max-width: 768px) {
    body {
      font-size: 15px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;
