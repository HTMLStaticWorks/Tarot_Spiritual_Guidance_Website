const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1590076215667-873d3950b7fd?q=80&w=1000&fm=jpg&fit=crop" class="img-fluid rounded-4 shadow-lg" alt="Mystical Tarot">',
    '<img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&fm=jpg&fit=crop" class="img-fluid rounded-4 shadow-lg w-100" style="height: 450px; object-fit: cover;" alt="Mystical Tarot">'
);

c = c.replace(
    '<div class="position-absolute bottom-0 end-0 bg-secondary p-4 rounded-4 m-3 shadow d-none d-md-block text-primary">',
    '<div class="position-absolute bottom-0 end-0 bg-secondary p-4 rounded-4 m-3 shadow d-none d-md-block" style="color: #2D0B5A !important;">'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&fm=jpg&fit=crop" alt="Intuitive Tarot">',
    '<img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&fm=jpg&fit=crop" class="w-100" style="height: 250px; object-fit: cover;" alt="Intuitive Tarot">'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&fm=jpg&fit=crop" alt="Energy Healing">',
    '<img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&fm=jpg&fit=crop" class="w-100" style="height: 250px; object-fit: cover;" alt="Energy Healing">'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=600&fm=jpg&fit=crop" alt="Lunar Guides">',
    '<img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=600&fm=jpg&fit=crop" class="w-100" style="height: 250px; object-fit: cover;" alt="Lunar Guides">'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&fm=jpg&fit=crop" class="card-img-top" alt="Mentor">',
    '<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&fm=jpg&fit=crop" class="card-img-top" alt="Mentor" style="height: 300px; object-fit: cover;">'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&fm=jpg&fit=crop" class="card-img-top" alt="Mentor">',
    '<img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&fm=jpg&fit=crop" class="card-img-top" alt="Mentor" style="height: 300px; object-fit: cover;">'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&fm=jpg&fit=crop" class="card-img-top" alt="Mentor">',
    '<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&fm=jpg&fit=crop" class="card-img-top" alt="Mentor" style="height: 300px; object-fit: cover;">'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1542127201395-535359b85c2c?q=80&w=800&fm=jpg&fit=crop" class="img-fluid rounded-4 shadow-sm" alt="Today\'s Guidance" style="max-height: 400px; width: auto;">',
    '<img src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=800&fm=jpg&fit=crop" class="img-fluid rounded-4 shadow-sm w-100" alt="Today\'s Guidance" style="height: 400px; object-fit: cover;">'
);

c = c.replace(
    '<button class="btn btn-secondary btn-lg px-5 text-primary border-0 shadow fw-bold">Draw Your Card</button>',
    '<button class="btn btn-lg px-5 border-0 shadow fw-bold" style="background-color: #E0C097; color: #2D0B5A !important;">Draw Your Card</button>'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=400&fm=jpg&fit=crop" class="img-fluid hover-zoom" alt="Blog">',
    '<img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=600&fm=jpg&fit=crop" class="img-fluid hover-zoom w-100" alt="Blog" style="height: 220px; object-fit: cover;">'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1542127201395-535359b85c2c?q=80&w=400&fm=jpg&fit=crop" class="img-fluid hover-zoom" alt="Blog">',
    '<img src="https://images.unsplash.com/photo-1629737107872-fd60a5d28b18?q=80&w=600&fm=jpg&fit=crop" class="img-fluid hover-zoom w-100" alt="Blog" style="height: 220px; object-fit: cover;">'
);

c = c.replace(
    '<img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&fm=jpg&fit=crop" class="img-fluid hover-zoom" alt="Blog">',
    '<img src="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4c5?q=80&w=600&fm=jpg&fit=crop" class="img-fluid hover-zoom w-100" alt="Blog" style="height: 220px; object-fit: cover;">'
);

// Fix Core Offering card flexbox and button alignment securely
c = c.replace(/<div class="card offering-card">/g, '<div class="card offering-card h-100 d-flex flex-column">');
c = c.replace(/<div class="offering-card-body">/g, '<div class="offering-card-body d-flex flex-column flex-grow-1">');
c = c.replace(/<p class="opacity-75">/g, '<p class="opacity-75 flex-grow-1">');

fs.writeFileSync('index.html', c);
console.log('Successfully applied precise string replacements to index.html');
