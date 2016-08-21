$('#container').XSwitch({
    selectors: {
        sections: '.sections',
        section: '.section',
        page: '.pages',
        active: '.active'
    },
    index: 0,
    easing: 'ease',
    duration: 700,
    loop: false,
    pagination: true,
    keyboard: true,
    direction: 'vertical',
    callback: ''
});