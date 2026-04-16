# 🛡️ Image Filter Extension

![Version](https://img.shields.io/badge/version-1.0-blue)
![Platform](https://img.shields.io/badge/platform-Chromium%20(Edge)-green)
![Manifest](https://img.shields.io/badge/manifest-v3-orange)
![Privacy](https://img.shields.io/badge/privacy-local--only-brightgreen)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A lightweight, privacy-focused browser extension that filters search queries in real time using configurable keyword rules.

---

## 🚀 Overview

The **Image Filter Extension** enhances browsing safety and focus by intercepting search queries and blocking or redirecting requests that match restricted keywords.

✔ Fully client-side  
✔ No data collection  
✔ No external dependencies  
✔ Configurable without redeploying  

---

## ✨ Features

🔍 **Real-time filtering** of search queries  
🧠 **Config-driven rules** via JSON (no code changes needed)  
🔒 **Privacy-first design** (no tracking, no telemetry)  
⚡ **Lightweight performance** (runs at page load)  
🏠 Ideal for **family-safe browsing** and **personal discipline**

---

## 🏗️ Architecture

### High-Level Flow
User Request  
↓  
Content Script  
↓  
Background Service Worker  
↓  
keywords.json (config)  
↓  
Decision Engine  
↓  
Allow ✅ | Block ❌ (Redirect)

---

### 📁 Project Structure

ImageFilterExtension  
* ├── manifest.json  
* ├── background.js  
* ├── content.js  
* └──| config/  
   * └── keywords.json

---

## ⚙️ How It Works

1. User performs a search (e.g., Google)
2. `content.js` runs at page load
3. It requests keyword rules from `background.js`
4. Background loads rules from `keywords.json`
5. URL is evaluated:
   - Match → ❌ Block + redirect
   - No match → ✅ Allow

---

## 🧩 Configuration

### `config/keywords.json`

```json
{
  "blocked": ["cows", "beef", "bull"]
}
```

## ✅ Update rules anytime
- No extension rebuild required
- No store resubmission needed

## 🔒 Privacy

This extension is designed with strict privacy guarantees:

❌ No data collection  
❌ No analytics  
❌ No external communication  
✔ All processing is local

For more details see 📄 ![Privacy Policy ](https://diggerydoo68.github.io/Productivity-Assistant/)


## 🛠️ Installation (Development)
1. Clone the repo
2. Open your browser:
>edge://extensions/
3. Enable Developer Mode
4. Click Load unpacked
5. Select the project folder

## 🧪 Testing

Try navigating to:

>https://www.google.com/search?q=cows

Expected:

- 🚫 Redirect to homepage

Try:

>https://www.google.com/search?q=chickens

Expected:

- Loads normally
- Limitations
- URL-based filtering only (v1)
- Does not inspect dynamic DOM content
- Can be bypassed by advanced users
- Dependent on search engine URL structure
- Roadmap

## Planned enhancements:

- [ ] DOM-level filtering (hide images dynamically)
- [ ] Category-based filtering
- [ ] Allowlist support
- [ ] Regex-based matching
- [ ] Centralized config (local server)
- [ ] Admin enforcement improvements

## 🧠 Design Philosophy

This project follows a policy-driven architecture:

Logic(code) → stable → Rules (JSON) → dynamic

This enables:

:racing_car: fast updates  
:wrench: minimal maintenance  
:straight_ruler: scalable filtering  
📊 Performance  
:runner: Runs at document_start  
:brain: Minimal memory footprint  
:floppy_disk: Asynchronous config loading  
:calling: No blocking network calls  
🤝 Contributing

- Contributions are welcome. 

## Suggested areas:

- [ ] Filtering improvements
- [ ] Performance optimization
- [ ] UI/UX enhancements
- [ ] Security hardening
- [ ] License

## MIT License

🙌 Acknowledgements

## Built for

✔️ safer browsing environments  
✔️ focused digital habits  
✔️ controlled family internet use

## ⭐ Support

If you find this useful:

⭐ Star the repo
🛠️ Fork and improve
🧠 Share ideas
