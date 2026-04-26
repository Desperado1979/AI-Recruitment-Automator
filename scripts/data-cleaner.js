/**
 * This script cleans the raw output from DeepSeek AI to ensure stable JSON parsing.
 * It removes Markdown formatting artifacts (like ```json) before data insertion.
 */

let rawOutput = inputData.json_string || "{}";

// Step 1: Strip Markdown code block delimiters and 'json' identifiers
let cleanJson = rawOutput.replace(/```json|```/g, "").trim();

try {
    // Step 2: Attempt to parse the cleaned string into a JSON object
    let parsedData = JSON.parse(cleanJson);
    return parsedData;
} catch (e) {
    // Error Handling: Return error flag and raw text for debugging if parsing fails
    return { 
        "status": "error",
        "message": "JSON Parse Failed",
        "raw_content": rawOutput 
    };
}
