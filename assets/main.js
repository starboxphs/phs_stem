document.addEventListener('DOMContentLoaded', () => {
    const loadIncludes = () => {
        document.querySelectorAll('[data-include]').forEach(async (el) => {
            const filePath = el.getAttribute('data-include');
            try {
                const response = await fetch(filePath);
                if (response.ok) {
                    const content = await response.text();
                    el.innerHTML = content;
                } else {
                    console.error(`Failed to load ${filePath}: ${response.status} ${response.statusText}`);
                    el.innerHTML = `<p>Error loading ${filePath}</p>`;
                }
            } catch (error) {
                console.error(`Error fetching ${filePath}:`, error);
                el.innerHTML = `<p>Error loading ${filePath}</p>`;
            }
        });
    };

    loadIncludes();
});
