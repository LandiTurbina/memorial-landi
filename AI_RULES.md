# AI Rules for Landi Turbina Project

This document outlines the core technologies used in this project and provides guidelines for their usage to ensure consistency, maintainability, and adherence to best practices.

## Tech Stack Overview

*   **Frontend Framework**: React for building dynamic and interactive user interfaces.
*   **Language**: TypeScript for type safety, improved code quality, and better developer experience.
*   **Build Tool**: Vite for a fast development server and optimized production builds.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, enabling rapid and responsive UI development.
*   **UI Components**: shadcn/ui, built on Radix UI, providing a collection of accessible and customizable UI components.
*   **Routing**: React Router DOM for declarative client-side routing.
*   **Data Fetching & State Management**: TanStack Query for efficient server state management, caching, and synchronization.
*   **Form Handling**: React Hook Form combined with Zod for robust and schema-based form validation.
*   **Icons**: Lucide React for a comprehensive and customizable icon library.
*   **Toast Notifications**: Sonner for elegant and accessible toast messages.
*   **Carousel**: Embla Carousel React for touch-friendly and customizable carousels.

## Library Usage Rules

To maintain a consistent and high-quality codebase, please adhere to the following rules when developing:

1.  **React**: All user interface components must be built using React.
2.  **TypeScript**: All new code and modifications must be written in TypeScript (`.tsx` or `.ts`).
3.  **Styling (Tailwind CSS)**:
    *   Use Tailwind CSS classes exclusively for all component styling.
    *   Ensure all designs are responsive by utilizing Tailwind's responsive utility classes.
    *   Avoid inline styles or separate CSS files for component-specific styling; `src/index.css` is reserved for global styles and Tailwind directives.
4.  **UI Components (shadcn/ui)**:
    *   Prioritize using existing shadcn/ui components whenever possible.
    *   If a required component is not available in shadcn/ui, create a new component in `src/components/` that follows shadcn/ui's design principles and uses Tailwind CSS.
    *   **Do not modify the files within `src/components/ui/` directly.**
5.  **Routing (React Router DOM)**:
    *   Manage all client-side navigation and routing using `react-router-dom`.
    *   Define all main application routes within `src/App.tsx`.
6.  **Data Fetching (TanStack Query)**:
    *   Use `@tanstack/react-query` for all asynchronous data operations, including fetching, caching, and updating server state.
7.  **Forms (React Hook Form + Zod)**:
    *   Implement all forms using `react-hook-form` for state management and validation.
    *   Utilize `zod` with `@hookform/resolvers` for defining and enforcing form validation schemas.
8.  **Icons (Lucide React)**:
    *   All icons used in the application should come from the `lucide-react` library.
9.  **Toast Notifications (Sonner)**:
    *   Use the `sonner` library for displaying all toast notifications to the user.
10. **File Structure**:
    *   New components should be placed in `src/components/`.
    *   New pages should be placed in `src/pages/`.
    *   New hooks should be placed in `src/hooks/`.
    *   New utility functions should be placed in `src/utils/`.
    *   All directory names must be lowercase (e.g., `src/components`, `src/pages`).