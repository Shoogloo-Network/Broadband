import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Log the error or perform any necessary actions
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Display a fallback UI or an error message
      return <div>Something went wrong.</div>;
    }

    // Render the children components as-is
    return this.props.children;
  }
}

export default ErrorBoundary;
