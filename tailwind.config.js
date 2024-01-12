module.exports = {
    mode: "jit",
    darkMode: "class", // manual dark mode
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark mode pallet (500 is default)
                "dark-bg": {
                    "50": "#555b78",
                    "100": "#4b516e",
                    "200": "#414764",
                    "300": "#373d5a",
                    "400": "#2d3350",
                    "500": "#232946",
                    "600": "#191f3c",
                    "700": "#0f1532",
                    "800": "#050b28",
                    "900": "#00011e"
                },
                "dark-headline": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#fffffe",
                    "600": "#f5f5f4",
                    "700": "#ebebea",
                    "800": "#e1e1e0",
                    "900": "#d7d7d6"
                },
                "dark-p": {
                    "50": "#eaf3ff",
                    "100": "#e0e9ff",
                    "200": "#d6dfff",
                    "300": "#ccd5ff",
                    "400": "#c2cbf6",
                    "500": "#b8c1ec",
                    "600": "#aeb7e2",
                    "700": "#a4add8",
                    "800": "#9aa3ce",
                    "900": "#9099c4"
                },
                "dark-button-text":{
                    "50": "#555b78",
                    "100": "#4b516e",
                    "200": "#414764",
                    "300": "#373d5a",
                    "400": "#2d3350",
                    "500": "#232946",
                    "600": "#191f3c",
                    "700": "#0f1532",
                    "800": "#050b28",
                    "900": "#00011e"
                },
                "dark-highlight": {
                    "50": "#ffedf5",
                    "100": "#ffe3eb",
                    "200": "#ffd9e1",
                    "300": "#ffcfd7",
                    "400": "#f8c5cd",
                    "500": "#eebbc3",
                    "600": "#e4b1b9",
                    "700": "#daa7af",
                    "800": "#d09da5",
                    "900": "#c6939b"
                },
                "dark-secondary": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#fffffe",
                    "600": "#f5f5f4",
                    "700": "#ebebea",
                    "800": "#e1e1e0",
                    "900": "#d7d7d6"
                },
                "dark-tertiary": {
                    "50": "#ffedf5",
                    "100": "#ffe3eb",
                    "200": "#ffd9e1",
                    "300": "#ffcfd7",
                    "400": "#f8c5cd",
                    "500": "#eebbc3",
                    "600": "#e4b1b9",
                    "700": "#daa7af",
                    "800": "#d09da5",
                    "900": "#c6939b"
                },
                "dark-stroke": {
                    "50": "#44485b",
                    "100": "#3a3e51",
                    "200": "#303447",
                    "300": "#262a3d",
                    "400": "#1c2033",
                    "500": "#121629",
                    "600": "#080c1f",
                    "700": "#000215",
                    "800": "#00000b",
                    "900": "#000001"
                },

                // Light mode pallet (500 is default)
                "bg": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#fffffe",
                    "600": "#f5f5f4",
                    "700": "#ebebea",
                    "800": "#e1e1e0",
                    "900": "#d7d7d6"
                },
                "headline": {
                    "50": "#32537f",
                    "100": "#284975",
                    "200": "#1e3f6b",
                    "300": "#143561",
                    "400": "#0a2b57",
                    "500": "#00214d",
                    "600": "#001743",
                    "700": "#000d39",
                    "800": "#00032f",
                    "900": "#000025"
                },
                "p": {
                    "50": "#4d5f77",
                    "100": "#43556d",
                    "200": "#394b63",
                    "300": "#2f4159",
                    "400": "#25374f",
                    "500": "#1b2d45",
                    "600": "#11233b",
                    "700": "#071931",
                    "800": "#000f27",
                    "900": "#00051d"
                },
                "button-text":{
                    "50": "#32537f",
                    "100": "#284975",
                    "200": "#1e3f6b",
                    "300": "#143561",
                    "400": "#0a2b57",
                    "500": "#00214d",
                    "600": "#001743",
                    "700": "#000d39",
                    "800": "#00032f",
                    "900": "#000025"
                },
                "highlight": {
                    "50": "#32fff9",
                    "100": "#28ffef",
                    "200": "#1effe5",
                    "300": "#14ffdb",
                    "400": "#0af5d1",
                    "500": "#00ebc7",
                    "600": "#00e1bd",
                    "700": "#00d7b3",
                    "800": "#00cda9",
                    "900": "#00c39f"
                },
                "secondary": {
                    "50": "#ff86a2",
                    "100": "#ff7c98",
                    "200": "#ff728e",
                    "300": "#ff6884",
                    "400": "#ff5e7a",
                    "500": "#ff5470",
                    "600": "#f54a66",
                    "700": "#eb405c",
                    "800": "#e13652",
                    "900": "#d72c48"
                },
                "tertiary": {
                    "50": "#ffff81",
                    "100": "#ffff77",
                    "200": "#ffff6d",
                    "300": "#fff663",
                    "400": "#ffec59",
                    "500": "#fde24f",
                    "600": "#f3d845",
                    "700": "#e9ce3b",
                    "800": "#dfc431",
                    "900": "#d5ba27"
                },
                "stroke": {
                    "50": "#32537f",
                    "100": "#284975",
                    "200": "#1e3f6b",
                    "300": "#143561",
                    "400": "#0a2b57",
                    "500": "#00214d",
                    "600": "#001743",
                    "700": "#000d39",
                    "800": "#00032f",
                    "900": "#000025"
                }
            },
            backgroundImage: {
                'hero-pattern-dark': "url('/assets/hero/pattern-dark.svg')",
                'hero-spacer-dark': "url('/assets/hero/spacer-dark.svg')",
                'hero-pattern': "url('/assets/hero/pattern.svg')",
                'hero-spacer': "url('/assets/hero/spacer.svg')",
                '404': "url('/assets/404/blob-dark.svg')",
                '404-v': "url('/assets/404/blob-dark-vertical.svg')",
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        module.exports = {
            theme: {
                extend: {
                    flavors: {
                        light: "Latte",
                        dark: "Macchiato",
                    },
                },
            },
            variants: {},
            plugins: [
                require('@tailwindcss/forms'),
                require("@catppuccin/tailwindcss"),
            ],
        }
    ],
}
