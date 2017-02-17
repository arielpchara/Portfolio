module.exports = {
    "dest": "dest",
    "styles": {
        "task": "styles",
        "watch": ["src/styles/**/*.js"],
        "src": [
            "src/styles/*.scss"
        ],
        "dest": "dest/styles"
    },
    "scripts": {
        "task": "scripts",
        "watch": ["src/scripts/**/*.js"],
        "src": "src/scripts/main.js",
        "bundle": "bundle.js",
        "dest": "dest/scripts"
    },
    "templates": {
        "task": "templates",
        "watch": ["src/templates/**/*.html"],
        "src": ["src/templates/**/*.html", "!src/templates/layout/*", "!src/templates/parts/*"],
        "dest": "dest",
        "paths": ["src/templates"]
    },
    "watch": {
        "task": "watch",
        "tasks": ["styles", "scripts", "templates"]
    },
    "server": {
        "task": "server",
        "port": 3000,
        "path": "dest/",
        "watch": ['dest/styles/*.css', 'dest/scripts/*.js', 'dest/*.html']
    }
};