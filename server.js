const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/check-scam", (req, res) => {
    const message = (req.body.message || "").toLowerCase();

    const keywords = [
        "urgent", "prize", "otp",
        "click here", "free money",
        "password", "bank details"
    ];

    const warnings = keywords.filter(word =>
        message.includes(word)
    );

    res.json({
        risk: warnings.length ?
            "Suspicious" : "No obvious warning signs",
        warnings
    });
});

app.listen(3000, () => {
    console.log("ScamShield running at http://localhost:3000");
});