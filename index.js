const views = ["#menu"]

function switchView(newView) {
    for (let view of views) {
        if (view != newView) $(view).hide()
    }
    $(newView).show()
}


function modeSelected(event) {
    console.log(event.target)
}

$(() => {

    $(".mode-button").click(modeSelected)

})