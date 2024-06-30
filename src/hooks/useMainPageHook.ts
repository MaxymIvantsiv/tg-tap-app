import { useEffect, useState } from 'react';
import { WebApp } from '@twa-dev/sdk';
import { SERVER_URL } from "../../api/requests";
import { User } from "../interfaces/interfaces";
import { mockUser } from "../mock/mock-data";

export const useMainPageHook = () => {
    const [user, setUser] = useState<User>(mockUser);

    const saveCurrentUser = async () => {
        if (user) {
            await fetch(`${SERVER_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            console.log("User saved successfully.");
        } else {
            console.error("No user to save.");
        }
    };

    const handleButtonTapClick = async () => {
        if (user) {
            if (user.energyPercent >= 1) {
                user.balance = user.balance + user.oneTapIncome;
                user.energyPercent = user.energyPercent - 1;
                setUser({ ...user });
                await saveCurrentUser();
            }
        } else {
            alert("Empty");
        }
    };

    const checkConnection = async () => {
        try {
            const response = await fetch(SERVER_URL + "/test-connection", {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
        } catch (error) {
            console.error('Error checking connection:', error);
        }
    };

    const loadOrCreateUser = async () => {
        const tgData = WebApp.initDataUnsafe;
        if (!tgData || !tgData.user) {
            console.error("Telegram WebApp object is not initialized or user data is not available.");
            return;
        }

        const telegramUserId = tgData.user.id;
        const response = await fetch<User[]>(`${SERVER_URL}/users`);
        const users = await response.json();
        let resUser = users.find((user: User) => user.id === telegramUserId);

        if (!resUser) {
            resUser = { id: telegramUserId, ...mockUser }; // Use mockUser to create a new user
            await fetch(`${SERVER_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resUser),
            });
        }
        setUser(resUser);
        await saveCurrentUser();
    };

    useEffect(() => {
        checkConnection();
        loadOrCreateUser();
    }, []);

    return { user, handleButtonTapClick };
}
