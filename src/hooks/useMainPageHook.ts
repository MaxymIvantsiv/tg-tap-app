import { SERVER_URL } from "../../api/requests.tsx";
import { User } from "../interfaces/interfaces.ts";
import { useEffect, useState } from "react";
import { mockUser } from "../mock/mock-data.ts";
import WebApp from '@twa-dev/sdk'

export const useMainPageHook = () => {
    const [user, setUser] = useState<User>(mockUser);
    const saveCurrentUser = async () => {
        try {
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
        } catch (error) {
            console.error("Error saving user:", error);
        }
    };

    const sendMessage = async (message: string) => {
        try {
            const response = await fetch(`${SERVER_URL}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response from server:', data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleButtonTapClick = async () => {
        try {
            if (user && user.energyPercent >= 1) {
                user.balance += user.oneTapIncome;
                user.energyPercent -= 1;
                setUser({ ...user });
                await saveCurrentUser();
            }
        } catch (error) {
            console.error('Error handling button tap click:', error);
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
            sendMessage(data);
        } catch (error) {
            console.error('Error checking connection:', error);
        }
    };

    const loadOrCreateUser = async () => {
        try {
            WebApp.expand();
            console.log(WebApp.initData);
            console.log(WebApp.initDataUnsafe);
            let telegramUserId = WebApp.initDataUnsafe.user?.id;
            let telegramUserName = WebApp.initDataUnsafe.user?.first_name;
            sendMessage('telegram id ' + telegramUserId);
            const response = await fetch<User[]>(`${SERVER_URL}/users`);
            const users = await response.json();
            let resUser = users.find((user: User) => user.id === telegramUserId);

            if (!resUser) {
                resUser = { id: telegramUserId, ...mockUser };
                resUser.name = telegramUserName;
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
        } catch (error) {
            console.error('Error loading or creating user:', error);
        }
    };

    useEffect(() => {
        const initialize = async () => {
            try {
                await loadOrCreateUser();
                WebApp.ready();
                sendMessage('telegram ready');
            } catch (error) {
                console.error('Error during initialization:', error);
            }
        };

        initialize();
    }, []);
	
    return { user, handleButtonTapClick };
}

export const UserID = () => {
    return WebApp.initDataUnsafe.user?.id;
};

export const OpenLink = (link) => {
WebApp.openTelegramLink(link);
    return link;
};
