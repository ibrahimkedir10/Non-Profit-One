function showPage(page)
{
    // Hide all sections
    document.querySelectorAll('.page').forEach(section =>
    {
        section.classList.add('hidden');
    });

    // Show the selected page
    document.getElementById(page).classList.remove('hidden');
}

// Initially show the Home page
window.onload = function ()
{
    showPage('home');
};
