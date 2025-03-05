// This file exports TypeScript types and interfaces used in the application for type safety.

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    author: User;
}

export type ApiResponse<T> = {
    data: T;
    error?: string;
};