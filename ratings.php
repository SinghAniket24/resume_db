<?php
// Start the session to manage email storage
session_start();

$success_message = "";
$error_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database credentials
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "contact_db"; // Make sure this DB exists in your XAMPP

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve the email and rating from POST data
    $email = $_POST['email'];
    $rating = $_POST['rating'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO ratings (email, rating) VALUES (?, ?)");
    $stmt->bind_param("si", $email, $rating);

    // Execute the statement
    if ($stmt->execute()) {
        $success_message = "Rating successfully submitted!";
    } else {
        $error_message = "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rating Form</title>
    <style>
        body {
            background-color: black;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .rating-container {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            text-align: center;
            max-width: 500px;
      
            width: 100%;
        }

        .rating-container h2 {
            margin-bottom: 20px;
            font-size: 24px;
        }

        .stars {
            position: relative;
            display: inline-block;
            direction: rtl; /* Change direction to right-to-left */
        }

        .stars input[type="radio"] {
            display: none;
        }

        .stars label {
            font-size: 40px;
            color: #ccc;
            cursor: pointer;
            transition: color 0.2s;
        }

        .stars input[type="radio"]:checked {
            display: none; /* Hide the checked radio */
        }

        .stars input[type="radio"]:checked ~ label {
            color: gold; /* Fill stars to the right when checked */
        }

        .stars input[type="radio"]:checked + label {
            color: gold; /* Fill current star */
        }

        .stars label:hover,
        .stars label:hover ~ label {
            color: gold; /* Highlight on hover */
        }

        input[type="email"] {
            padding: 10px;
            width: calc(100% - 22px);
            margin-top: 15px;
            border: none;
            border-radius: 5px;
        }

        button {
            background-color: #0077b6;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            margin-top: 15px;
        }

        button:hover {
            background-color: #005f87;
        }

        p.error {
            color: red;
        }

        p.description {
            margin-bottom: 10px;
            font-size: 16px;
        }
    </style>
    <script>
        function handleFormSubmit(event) {
            const successMessage = "<?php echo $success_message; ?>";
            const errorMessage = "<?php echo $error_message; ?>";

            if (successMessage) {
                alert(successMessage);
                return true; // Allow form submission
            } else if (errorMessage) {
                alert(errorMessage);
                event.preventDefault(); // Prevent form submission
                return false; // Prevent form submission
            }
        }
    </script>
</head>

<body>

    <div class="rating-container">
        <h2>Rate My Resume</h2>
        <p class="description">Please enter your email and select a rating from 1 to 5 stars.</p>
        <form method="POST" action="" onsubmit="handleFormSubmit(event)">
            <input type="email" name="email" placeholder="Enter your email" required>
            <div class="stars">
                <input type="radio" id="star5" name="rating" value="5">
                <label for="star5">&#9733;</label>
                <input type="radio" id="star4" name="rating" value="4">
                <label for="star4">&#9733;</label>
                <input type="radio" id="star3" name="rating" value="3">
                <label for="star3">&#9733;</label>
                <input type="radio" id="star2" name="rating" value="2">
                <label for="star2">&#9733;</label>
                <input type="radio" id="star1" name="rating" value="1">
                <label for="star1">&#9733;</label>
            </div>

            <br>
            <button type="submit" name="submit">Submit Rating</button>
        </form>

        <?php if (!empty($error_message)): ?>
            <p class="error"><?php echo $error_message; ?></p>
        <?php endif; ?>
    </div>

</body>

</html>
