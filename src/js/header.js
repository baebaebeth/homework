apply_stickies()

window.addEventListener('scroll', function() {
    apply_stickies()
})

function apply_stickies() {
    var _$stickies = [].slice.call(document.querySelectorAll(".masthead"))
    _$stickies.forEach(function(_$sticky) {
        if (CSS.supports && CSS.supports('position', 'sticky')) {
            apply_sticky_class(_$sticky)
        }
    })
}

function apply_sticky_class(_$sticky) {
    var currentOffset = _$sticky.getBoundingClientRect().top
    var stickyOffset = parseInt(getComputedStyle(_$sticky).top.replace('px', ''))
    var isStuck = currentOffset <= stickyOffset

    _$sticky.classList.toggle('isSticky', isStuck)
}