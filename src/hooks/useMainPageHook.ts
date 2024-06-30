import { SERVER_URL } from "../../api/requests.tsx";
import { User } from "../interfaces/interfaces.ts";
import { useEffect, useState } from "react";
import { mockUser } from "../mock/mock-data.ts";
import WebApp from '@twa-dev/sdk'

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
				WebApp.showAlert('Tg inited!');
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
        // Assuming user ID is obtained from another source or context
        const telegramUserId = "example_user_id"; // Replace this with actual user ID
        const response = await fetch<User[]>(`${SERVER_URL}/users`);
        const users = await response.json();
        let resUser = users.find((user: User) => user.id === telegramUserId);

        if (!resUser) {
            resUser = { id: telegramUserId, ...mockUser }; // Використовуйте mockUser для створення нового користувача
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
