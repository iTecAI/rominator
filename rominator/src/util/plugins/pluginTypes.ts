import { PlatformIDs } from "../platforms";

export type Plugin = {
    id: string;
    name: string;
    icon: string;
    platforms?: (string | PlatformIDs)[];
    search: (
        query: string,
        platforms: (string | PlatformIDs)[],
        tags: string[],
        onResult: (...results: PluginSearchResult[]) => void,
    ) => Promise<void>;
    getDownloadOptions: (
        item: PluginSearchResult,
    ) => Promise<{
        url: string;
        filename: string;
        headers?: Map<string, string>;
    } | null>;
};

export type PluginSearchResult = {
    id: string;
    plugin: string;
    name: string;
    platform?: string | PlatformIDs;
    image?: string;
    meta: Partial<{
        description: string;
        rating: number; // Ratio 0-1
        genre: string;
        release_year: string;
    }>;
    tags: string[];
    extra?: any;
};
