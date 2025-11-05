// lib/auth.ts - Updated to use MongoDB backend API

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface User {
  id: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  message: string;
}

// Helper function to get token from localStorage
const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
};

// Helper function to set token in localStorage
const setToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

// Helper function to remove token from localStorage
const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
};

// Sign In
export async function login(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to login');
    }

    // Store token
    setToken(data.token);

    return data;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to login');
  }
}

// Sign Up
export async function register(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to register');
    }

    // Store token
    setToken(data.token);

    return data;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to register');
  }
}

// Sign Out
export async function logout(): Promise<void> {
  try {
    const token = getToken();
    
    if (token) {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    }

    // Remove token from localStorage
    removeToken();
  } catch (error) {
    console.error('Logout error:', error);
    // Still remove token even if API call fails
    removeToken();
  }
}

// Get current user
export async function getCurrentUser(): Promise<User | null> {
  try {
    const token = getToken();
    
    if (!token) {
      return null;
    }

    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      removeToken();
      return null;
    }

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Get current user error:', error);
    removeToken();
    return null;
  }
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return getToken() !== null;
}
