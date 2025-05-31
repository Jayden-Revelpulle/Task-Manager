declare const axios: {
    get<T = any>(url: string): Promise<{ data: T }>;
    post<T = any>(url: string, data?: any): Promise<{ data: T }>;
    patch<T = any>(url: string, data?: any): Promise<{ data: T }>;
    delete(url: string): Promise<any>;
}; 