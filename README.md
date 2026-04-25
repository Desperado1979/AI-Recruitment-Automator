# AI-Recruitment-Solutions
An automated end-to-end recruitment screening system integrated with Gmail, DeepSeek LLM, and Zapier to streamline candidate data extraction and job matching.
🚀 Overview
An end-to-end hyper-automation system that monitors incoming job applications, extracts candidate data using LLMs, and performs intelligent job matching—all without human intervention.

🛠 Tech Stack
Automation: Zapier (Complex multi-step workflows)

Intelligence: DeepSeek AI (API-based NLP & Extraction)

Database: Google Sheets (Centralized tracking)

Communication: Gmail API (Auto-notifications)

Logic: Custom JavaScript snippets for data cleaning

💡 Key Features
Dual-Path Processing: Automatically detects if a resume is an attachment (PDF) or written in the email body.

Intelligent Matching: Matches candidates against 24+ open roles based on skills and experience, not just keywords.

Zero-Error Entry: Automated JSON validation ensures 100% data integrity in the database.

📊 Business Impact
Speed: Reduced per-candidate processing from 10 mins to 30 seconds.

Accuracy: Achieved 95%+ data extraction accuracy.

ROI: Estimated saving of $5 USD per application in labor costs.

🔧 Architecture
Gmail Trigger -> Filter (Job Keywords) -> Code by Zapier (JSON Prep) -> LLM Analysis -> Google Sheets -> Auto-Reply
