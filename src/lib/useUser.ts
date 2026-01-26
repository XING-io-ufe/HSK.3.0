"use client";
import { useState } from 'react';

export type User = {
    name: string;
    plan: string;
    avatar?: string;
    avatarInitial?: string;
};

// Simple client-side hook to centralize user info for sidebars
export default function useUser(): User {
    const [user] = useState<User>({
        name: 'Батаа',
        plan: 'Pro Plan',
        avatar: undefined,
        avatarInitial: 'Б',
    });

    return user;
}
