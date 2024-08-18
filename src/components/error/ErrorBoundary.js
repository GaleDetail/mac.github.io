import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Оновлює стан так, щоб при наступному рендері відображався запасний UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Ви можете також записати помилку в журнал звітів про помилки
        console.error("Error caught by ErrorBoundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Ви можете відрендерити будь-який запасний UI
            return <h1>Щось пішло не так.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
