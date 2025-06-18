$(document).ready(function () {
    $(".btn").click(function () {
        // jo data filter hai usko variable mein store krwaliya
        let filter = $(this).data("filter");
        // remove the class from all buttons
        $(".btn").removeClass("btn-success").addClass("btn-outline-success");
        // curent wale button per click krein to primary add hojaye
        $(this).removeClass("btn-outline-primary").addClass("btn-success");
        if (filter === "all") {
            $(".card-item").show();
        } else {
            $(".card-item").hide();
            $(`.card-item[data-religion="${filter}"]`).show();
        }
    });
});