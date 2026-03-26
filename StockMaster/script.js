function showView(viewId, btn) {

    document.querySelectorAll('.view')
        .forEach(view => view.classList.remove('active'));

    document.querySelectorAll('.nav-btn')
        .forEach(button => button.classList.remove('active'));

    document.getElementById(viewId)
        .classList.add('active');

    btn.classList.add('active');
}
