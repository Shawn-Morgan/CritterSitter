$(document).ready(() => {
    // Getting references to our form and input
    const newTripForm = $("form.newtrip");
    const tripNameInput = $("input#tripName");
    const fromDateInput = $("input#fromDate");
    const toDateInput = $("input#toDate");
    const emergencyContactInput = $("input#emergencyContact");
    const commentsInput = $("textarea#tripComments");

    // When the signup button is clicked, we validate the email and password are not blank
    newTripForm.on("submit", event => {
        event.preventDefault();
        const tripData = {
            tripName: tripNameInput.val().trim(),
            from: fromDateInput.val().trim(),
            to: toDateInput.val().trim(),
            emergencyContact: emergencyContactInput.val().trim(),
            comments: commentsInput.val().trim()
        };

        // if (!userData.email || !userData.password) {
        //     return;
        // }
        // If we have an email and password, run the signUpUser function
        createTrip(
            tripData.tripName,
            tripData.from,
            tripData.to,
            tripData.emergencyContact,
            tripData.comments
        );
        // emailInput.val("");
        // passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createTrip(
        tripName,
        fromDate,
        toDate,
        emergencyContact,
        comments
    ) {
        $.post("/api/newtrip", {
            TripName: tripName,
            FromDate: fromDate,
            ToDate: toDate,
            EmergencyContact: emergencyContact,
            Comments: comments
        })
            .then(() => {
                // window.location.replace("/members")
                // if (userRole === "pet-owner") {
                //     window.location.replace("/owner");
                // } else if (userRole === "pet-sitter") {
                //     window.location.replace("/sitter");
                // }
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleNewTripErr);
    }

    function handleNewTripErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});