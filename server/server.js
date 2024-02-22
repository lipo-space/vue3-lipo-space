const express = require('express');
const app = express();
const port = 3000; // 选择一个可用的端口号

app.get('/api/sidebar/menu', (req, res) => {
    res.json(
        {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "icon": "Headset",
                    "name": "唱跳rap",
                    "link": "/SingSongRap/TheStar"
                },
                {
                    "id": 2,
                    "icon": "KnifeFork",
                    "name": "好吃",
                    "link": "/GoodEat/MyHomeFood"
                },
                {
                    "id": 3,
                    "icon": "Money",
                    "name": "搬砖",
                    "link": "/MakeMoney/DoWhere"
                },
                {
                    "id": 4,
                    "icon": "Guide",
                    "name": "出去玩",
                    "link": "/GoOut/HappyOutside"
                },
                {
                    "id": 5,
                    "icon": "SwitchFilled",
                    "name": "菜就多练！",
                    "link": "/PlayGame/NowGame"
                },
                {
                    "id": 6,
                    "icon": "Setting",
                    "name": "设置",
                    "link": "/Setting/SettingThis"
                },
            ]

        }
    );
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
