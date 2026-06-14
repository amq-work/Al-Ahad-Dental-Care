const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) results.push(file);
        }
    });
    return results;
}

const files = walk('d:/Projects/Al-Ahad-Dental-Care/src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    // Safely replace src="/assets/..." with src={`${import.meta.env.BASE_URL}assets/...`}
    content = content.replace(/src=["']\/assets\/([^"']+)["']/g, 'src={`${import.meta.env.BASE_URL}assets/$1`}');
    // For Blog.tsx where we have img: '/assets/...'
    content = content.replace(/img:\s*['"]\/assets\/([^'"]+)['"]/g, 'img: `${import.meta.env.BASE_URL}assets/$1`');
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated assets in ${file}`);
    }
});
console.log('Asset paths prepared for GitHub Pages');
