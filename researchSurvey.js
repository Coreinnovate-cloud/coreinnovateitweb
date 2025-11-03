import React from "react"

/**
 * ResearchSurvey (class component)
 * - loginRequired=true -> must have FenixToken else redirect to '/'
 * - loginRequired not "true" -> stay (anonymous allowed)
 * - Family options come from API response Question.Answers only
 * - Intro (-101) advances without validation
 * - API base via process.env.API_ENDPOINT
 */

const API_BASE = String(
  process.env.API_ENDPOINT || "https://api.synkd.life"
).replace(/\/+$/, "")
const GRAPHQL_URL = "https://graphql-dev.synkd.life/"

function getCookie(name) {
  const m = document.cookie.match(new RegExp("(^|;\\s*)" + name + "=([^;]*)"))
  return m ? decodeURIComponent(m[2]) : null
}
function getQueryParam(name) {
  const sp = new URLSearchParams(window.location.search)
  return sp.get(name)
}
function extractResearchIdFromPath(pathname, BASE_PATH = "/researchsurvey") {
  try {
    const path = pathname.replace(/\/+$/, "")
    const base = BASE_PATH.replace(/\/+$/, "")

    // First try to match the pattern /researchsurvey/ID
    const re = new RegExp(`^${base}/([^/?#]+)`, "i")
    const m = path.match(re)

    if (!m) return null

    const extracted = decodeURIComponent(m[1])

    // If the extracted value is "researchsurvey", it means we have a duplicate
    // Try to extract the next segment instead
    if (extracted.toLowerCase() === "researchsurvey") {
      const re2 = new RegExp(`^${base}/researchsurvey/([^/?#]+)`, "i")
      const m2 = path.match(re2)
      return m2 ? decodeURIComponent(m2[1]) : null
    }

    return extracted
  } catch {
    return null
  }
}
function norm(s) {
  return (s || "")
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// --- CSS injected into the page ---
const STYLES = `
/* ---------------------------------------------------------------------------
BODY
--------------------------------------------------------------------------- */
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  color: #000000;
  background-color: #e7e7e8;
  font-family: Roboto,Helvetica,Arial,sans-serif;
}

/* ---------------------------------------------------------------------------
HEADER
--------------------------------------------------------------------------- */

#surveyHeader {
  width: 65%;
  margin: 15px auto 10px;
  height: auto;
  display: block;
}

/* ---------------------------------------------------------------------------
SURVEY CONTENT AREA
--------------------------------------------------------------------------- */

#surveyContent {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 83%;
}

/* ---------------------------------------------------------------------------
PROGRESS BAR
--------------------------------------------------------------------------- */

#surveyProgressBar {
  width: 100%;
  height: 20px;
  text-align: center;
  display: none;
  background-color: rgb(104, 104, 104);
  padding: 0px 20px;
}

#surveyProgressBarContent {
  color: #fff;
  background-color: rgb(164, 137, 172);
  border-right: 1px solid #757575;
  height: 20px;
  text-align: right;
  padding: 0 20px 0 10px;
  margin-left: -21px;
}

/* ---------------------------------------------------------------------------
SURVEY PAGES AREA
--------------------------------------------------------------------------- */

#surveyPages {
  padding: 10px;
  margin: 20px 5%;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: #fff;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.2);
  -moz-box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.2);
  box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.2);
}

/* ---------------------------------------------------------------------------
SURVEY NAVIGATION CONTROLS AREA
--------------------------------------------------------------------------- */

#surveyNavigation {
  width: 100%;
  margin-top: 50px;
}

.surveyNavigationButton {
  display: block;
  cursor: pointer;
  width: 33%;
  background-color: #BBBBBB;
  text-align: center;
  border-radius: 5px;
  line-height: 30px;
  transition: .3s;
  -o-transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -webkit-transition: .3s;
  -webkit-box-shadow: 0 2px 4px 0 rgba(184,184,184,.5);
  -moz-box-shadow: 0 2px 4px 0 rgba(184,184,184,.5);
  box-shadow: 0 2px 4px 0 rgba(184,184,184,.5);
}

  .surveyNavigationButton:hover {
      -webkit-box-shadow: 1px 4px 6px 1px rgba(184,184,184,1);
      -moz-box-shadow: 1px 4px 6px 1px rgba(184,184,184,1);
      box-shadow: 1px 4px 6px 1px rgba(184,184,184,1);
  }

.nextButton {
  color: white;
  right: 0;
  width: 20%;
  margin-right: 30px;
  max-width: 300px;
  padding: 5px 0;
  background:rgb(164, 137, 172);
  position: absolute;
  bottom: 15px;
}

/* ---------------------------------------------------------------------------
SPECIFIC PAGE STYLES (intro, finish, question)
--------------------------------------------------------------------------- */

.surveyPage {
  display: block;
  background-color: #FFFFFF;
  padding: 10px 5px;
}

div#surveyCompletePage {
  text-align: center;
  padding: 50px 0;
  font-size: 1.2em;
  line-height: 150%;
}

#surveyCompletePage b {
  color: rgb(164, 137, 172);
  font-size: 1.3em;
}

/* ---------------------------------------------------------------------------
QUESTION AREA
--------------------------------------------------------------------------- */

.surveyQuestion {
  background-color: #FFFFFF;
}

.questionText {
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
}

/* Different question types (hooks) */
/*
.singleChoiceQuestion {}
.multipleChoiceQuestion {}
.openEndedQuestion {}
*/

/* ---------------------------------------------------------------------------
ANSWERS AREA
--------------------------------------------------------------------------- */
/* .answers {} */
/* .answerLabel {} */

.singleChoiceAnswerContainer {
  margin: 4px 0;
  padding: 8px 10px;
  background: #e1ebf7;
  transition: .3s;
  -o-transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -webkit-transition: .3s;
  border-radius: 5px;
}
  .singleChoiceAnswerContainer.checked {
      background: #7cabdc;
  }

.singleChoiceAnswer {
  background-color: #FFFFFF;
}

.multipleChoiceAnswerContainer {
  margin: 4px 0;
  padding: 8px 10px;
  background: #e1ebf7;
  transition: .3s;
  -o-transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -webkit-transition: .3s;
  border-radius: 5px;
}

  .multipleChoiceAnswerContainer.checked {
      background: #7cabdc;
  }

.multipleChoiceAnswer {
  background-color: #FFFFFF;
}

.openEndedAnswerContainer {
  background-color: #FFFFFF;
}

.openEndedAnswer {
  background-color: #e7e7e8;
  border: none;
  width: 100%;
  height: 40px;
  resize: none;
  padding: 7px 5px;
  -webkit-box-shadow: inset 3px 3px 5px 0px rgba(50, 50, 50, 0.15);
  -moz-box-shadow: inset 3px 3px 5px 0px rgba(50, 50, 50, 0.15);
  box-shadow: inset 3px 3px 5px 0px rgba(50, 50, 50, 0.15);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

/* ---------------------------------------------------------------------------
INSPIRED LOGO
--------------------------------------------------------------------------- */

#inspired_logo {
  background: no-repeat url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAABXCAYAAAA0wOGCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDgtMDdUMTU6MzM6MjErMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDgtMDdUMTU6MzM6MjErMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA4LTA3VDE1OjMzOjIxKzAxOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQwNzRhYTQ4LTJkYmUtNGUwZS1hZTE4LWNjZDIyOTBlYTI1OCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjE0ODUxYTBlLTRiZTktODU0MC1hOGYyLTgzOWE0ZGU3OWNkZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkxNjMwYTUwLTAwOWItNGM2Ny05NWE2LTU3MGQ0N2RmZGQxNCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTE2MzBhNTAtMDA5Yi00YzY3LTk1YTYtNTcwZDQ3ZGZkZDE0IiBzdEV2dDp3aGVuPSIyMDIwLTA4LTA3VDE1OjMzOjIxKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA3NGFhNDgtMmRiZS00ZTBlLWFlMTgtY2NkMjI5MGVhMjU4IiBzdEV2dDp3aGVuPSIyMDIwLTA4LTA3VDE1OjMzOjIxKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7k4srxAAAuFElEQVR4nO2de... (truncated base64)
  width: 100px;
  height: 30px;
  background-size: 80%;
  left: 0;
  margin-left: 30px;
  margin-top: 8px;
  position: absolute;
  bottom: 30px;
}

/* ---------------------------------------------------------------------------
GENERIC CONTROL CUSTOMISATION (radios, etc)
--------------------------------------------------------------------------- */

.radio label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 15px;
  font-size: 1em;
  width: 100%;
}

.radio input[type=radio], .radio input[type=checkbox] {
  display: none;
}

.radio label:before {
  content: "";
  display: inline-block;
  width: 17px;
  height: 16px;
  margin-right: 10px;
  position: absolute;
  left: 0;
  bottom: 1px;
  background-color: #FFF;
  box-shadow: inset 0px 2px 3px 0px rgba(0, 0, 0, .3), 0px 1px 0px 0px rgba(255, 255, 255, .8);
}

.radio label:before {
  border-radius: 8px;
}

.radio input[type=radio]:checked + label:before, .radio input[type=checkbox]:checked + label:before {
  content: "\\2022";
  color: #2B2B2B;
  font-size: 30px;
  text-align: center;
  line-height: 20px;
}

.android .radio input[type=radio]:checked + label:before,
.android .radio input[type=checkbox]:checked + label:before {
    font-size: 2em;
    line-height: 64%;
}

@media only screen and (max-width: 150px) {
  #surveyContent { font-size: 10px; }
  .radio label { font-size: 11px; }
  #surveyPages { padding: 5px; }
  .iiDivSingleChoiceAnswer { margin: 10px 0; }
  input { width: 100%; }
}

@media only screen and (max-width: 300px) {
  .nextButton { margin-right: 10px; }
  #inspired_logo {
      background-size: 90%;
      margin-left: 10px;
      margin-top: 6px;
  }
}
`

export default class ResearchSurvey extends React.Component {
  constructor(props) {
    super(props)
    const researchID =
      props.researchId ||
      extractResearchIdFromPath(window.location.pathname, "/researchsurvey")

    this.state = {
      // resources
      introPageText: "",
      finishPageText: "",
      nextButtonCaption: "Next",
      answersRequiredMsg: "You must provide an answer before proceeding.",
      // survey
      researchID,
      sessionID: this.generateSessionID(),
      currentQuestion: -101,
      currentPageData: null,
      // user/family
      currentUserId: null,
      familyOptions: null,
      // fp
      fpData: null,
    }
  }

  componentDidMount() {
    console.log("🚀 Component mounted")
    const loginRequired =
      (getQueryParam("loginRequired") || "").toLowerCase() === "true"
    const token = getCookie("FenixToken")
    console.log(
      "🚀 loginRequired:",
      loginRequired,
      "token:",
      token ? "EXISTS" : "MISSING"
    )

    // if loginRequired and no token -> redirect to '/'
    if (loginRequired && !token) {
      console.log("🚀 No token but login required, redirecting to /")
      window.location.replace("/")
      return
    }

    // fingerprint
    if (typeof window.inspiredFP === "function") {
      try {
        window.inspiredFP((data) => this.setState({ fpData: data }))
      } catch {}
    }

    if (!this.state.researchID) {
      alert("Missing research ID in URL (/researchsurvey/:id).")
      return
    }

    console.log("🚀 ResearchID:", this.state.researchID)
    console.log("🚀 Starting survey...")

    // Check if there's a questionId in URL to restore state
    const questionId = getQueryParam("questionId")
    if (questionId) {
      console.log("🚀 Found questionId in URL:", questionId)
      this.loadResources()
      this.loadQuestionById(questionId)
    } else {
      // resources + intro
      this.startSurvey()
    }
  }

  // ---------------- utils ----------------
  generateSessionID() {
    const chars = []
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < 25; i++) {
      chars.push(possible.charAt(Math.floor(Math.random() * possible.length)))
    }
    return chars.join("") + new Date().valueOf()
  }
  setStateAsync(upd) {
    return new Promise((resolve) => this.setState(upd, resolve))
  }
  escapeHtml = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")

  // ---------------- flow ----------------
  startSurvey = () => {
    this.loadResources()
    this.setState({ currentQuestion: -101 })
  }

  endSurvey = () => {
    const elNext = document.getElementById("nextButton")
    if (elNext) elNext.style.display = "none"
    this.setState({ currentQuestion: -102 })
  }

  loadQuestionById = async (questionId) => {
    console.log("🔍 loadQuestionById called with:", questionId)
    const url = `${API_BASE}/research/question/${encodeURIComponent(
      questionId
    )}`
    console.log("🔍 Request URL:", url)

    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onload = () => {
      console.log("🔍 Response received, status:", xhr.status)
      if (xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText)
          console.log("🔍 Parsed response data:", data)
          this.setState({ currentPageData: data }, this.loadPage)
        } catch (e) {
          console.error("loadQuestionById.parse", e, xhr.responseText)
          alert("Could not load the question from URL.")
          this.startSurvey()
        }
      } else {
        console.error("loadQuestionById.http", xhr.status, xhr.responseText)
        alert(
          "Could not load the question from URL. Starting from the beginning."
        )
        this.startSurvey()
      }
    }
    xhr.onerror = (err) => {
      console.error("loadQuestionById.net", err)
      alert(
        "Network error while loading the question. Starting from the beginning."
      )
      this.startSurvey()
    }
    xhr.send()
  }

  updateURLWithQuestion = (questionId) => {
    if (!questionId || questionId === -101 || questionId === -102) return

    const url = new URL(window.location)
    url.searchParams.set("questionId", questionId)
    window.history.pushState({}, "", url)
    console.log("📍 Updated URL with questionId:", questionId)
  }

  loadPage = async () => {
    console.log("📄 loadPage called")
    const pageData = this.state.currentPageData
    console.log("📄 currentPageData:", pageData)

    if (!pageData) {
      console.log("📄 No page data found, returning early")
      return
    }

    // Check if this is the intro or complete page based on QuestionIndex
    // Intro page: QuestionIndex = 1 and no Question property
    // Complete page: Question = -102 or no more questions
    const cq = pageData.Question
    console.log("📄 Question object:", cq)

    // Handle intro page (no Question property and QuestionIndex = 1)
    if (!cq && pageData.QuestionIndex === 1 && pageData.TotalQuestions === 0) {
      console.log("📄 Intro page detected, staying on intro")
      await this.setStateAsync({ currentQuestion: -101 })
      return
    }

    // Handle case where Question property is missing but we have data
    if (!cq) {
      console.log(
        "📄 No question found, but have page data - might be transitioning"
      )
      return
    }

    if (cq === -101) {
      console.log("📄 Intro page, starting survey")
      this.startSurvey()
      return
    }
    if (cq === -102) {
      console.log("📄 Complete page, ending survey")
      this.endSurvey()
      return
    }

    console.log("📄 Setting current question to:", cq)
    await this.setStateAsync({ currentQuestion: cq })

    // Update URL with question ID for shareability
    const questionId = cq._id || cq
    this.updateURLWithQuestion(questionId)

    console.log("📄 Checking if this is 'who on behalf' question...")
    const isBehalfQuestion = this.isWhoOnBehalfFirstQuestion()
    console.log("📄 isWhoOnBehalfFirstQuestion result:", isBehalfQuestion)

    console.log("📄 Rendering page HTML FIRST...")
    this.renderCurrentPageHtml()

    if (isBehalfQuestion) {
      console.log(
        "📄 This IS the behalf question, NOW injecting family answers AFTER render..."
      )
      await this.ensureFamilyAnswersInjected()
    } else {
      console.log(
        "📄 This is NOT the behalf question, skipping family injection"
      )
    }
  }

  // ---------------- REST resources & pages ----------------
  loadResources = () => {
    const { researchID } = this.state
    const url = `${API_BASE}/research/${encodeURIComponent(
      researchID
    )}/resources`
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText)
          this.setState({
            introPageText: data.IntroPageText || "",
            finishPageText: data.FinishPageText || "",
            nextButtonCaption: data.NextButtonCaption || "Next",
            answersRequiredMsg:
              data.AnswersRequiredMsg ||
              "You must provide an answer before proceeding.",
          })
        } catch (e) {
          console.error("resources.parse", e, xhr.responseText)
          alert("Could not parse survey resources.")
        }
      } else {
        console.error("resources.get", xhr.status, xhr.responseText)
        alert("Could not load survey resources.")
      }
    }
    xhr.onerror = (err) => {
      console.error("resources.net", err)
      alert("Network error while loading resources.")
    }
    xhr.send()
  }

  makeHttpRequest = (payload) => {
    console.log("🌐 makeHttpRequest called with payload:", payload)
    const url = `${API_BASE}/research/${this.getCurrentQuestionId()}`
    console.log("🌐 Request URL:", url)
    const xhr = new XMLHttpRequest()
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onload = () => {
      console.log("🌐 Response received, status:", xhr.status)
      if (xhr.status === 200) {
        try {
          const nextData = JSON.parse(xhr.responseText)
          console.log("🌐 Parsed response data:", nextData)
          console.log("🌐 Calling loadPage with new data...")
          this.setState({ currentPageData: nextData }, this.loadPage)
        } catch (e) {
          console.error("post.parse", e, xhr.responseText)
          alert("Unexpected server response.")
        }
      } else {
        console.error("post.http", xhr.status, xhr.responseText)
        alert("Could not submit your answer. Please try again.")
      }
    }
    xhr.onerror = (err) => {
      console.error("post.net", err)
      alert("Network error while submitting your answer.")
    }
    xhr.send(JSON.stringify(payload))
  }

  // ---------------- Family Members GraphQL API ----------------
  fetchMeJSON = async () => {
    const token = getCookie("FenixToken")
    const headers = { "Content-Type": "application/json" }
    if (token) headers["Authorization"] = "Bearer " + token

    const body = JSON.stringify({ query: `query MeBasics { me }` })

    const res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers,
      body,
      credentials: "include",
    })
    if (!res.ok) throw new Error("GraphQL / MeBasics failed: " + res.status)
    const json = await res.json()
    if (json.errors)
      throw new Error("GraphQL errors: " + JSON.stringify(json.errors))
    return json.data?.me || null
  }

  ensureCurrentUserId = async () => {
    if (this.state.currentUserId) return this.state.currentUserId

    try {
      const me = await this.fetchMeJSON()
      const userId = me && typeof me === "object" ? me.id : null
      this.setState({ currentUserId: userId })
      return userId
    } catch (error) {
      console.warn(
        "👤 Failed to fetch user ID (user not logged in):",
        error.message
      )
      return null
    }
  }

  fetchFamilyMembers = async () => {
    const token = getCookie("FenixToken")
    if (!token) {
      console.log("⚠️ No token found, cannot fetch family members")
      return []
    }

    try {
      const userId = await this.ensureCurrentUserId()
      console.log("👤 UserId:", userId)
      if (!userId) {
        console.log("⚠️ No userId found (not logged in)")
        return []
      }

      console.log("👨‍👩‍👧‍👦 Fetching family members from GraphQL")

      const headers = { "Content-Type": "application/json" }
      if (token) headers["Authorization"] = "Bearer " + token

      const body = JSON.stringify({
        query: `
          query familyMemberInUser($userID: String!) {
            familyMemberInUser(data: { userID: $userID })
          }
        `,
        variables: { userID: userId },
      })

      const res = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers,
        body,
        credentials: "include",
      })

      if (!res.ok)
        throw new Error("GraphQL familyMemberInUser failed: " + res.status)

      const json = await res.json()
      console.log("👨‍👩‍👧‍👦 familyMemberInUser response:", json)

      if (json.errors) {
        throw new Error("GraphQL errors: " + JSON.stringify(json.errors))
      }

      const relationships = json.data?.familyMemberInUser || []
      console.log("👨‍👩‍👧‍👦 Parsed relationships:", relationships)
      return Array.isArray(relationships) ? relationships : []
    } catch (e) {
      console.error("❌ fetchFamilyMembers error:", e)
      return []
    }
  }

  // ---------------- Family injection on first question ----------------
  ensureFamilyAnswersInjected = async () => {
    console.log("🔍 ensureFamilyAnswersInjected called")

    // ALWAYS fetch from GraphQL familyMemberInUser for the "on behalf of" question
    // Ignore any answers that came from the -101 response
    console.log("👨‍👩‍👧‍👦 Fetching family members from GraphQL")

    const familyMembers = await this.fetchFamilyMembers()
    console.log("👨‍👩‍👧‍👦 Fetched family members:", familyMembers)

    if (familyMembers.length === 0) {
      console.log("⚠️ No family members found")
      this.setState({ familyOptions: [] })
      return
    }

    // Get current user ID to filter out the current user
    const userId = await this.ensureCurrentUserId()
    console.log("👤 Current userId:", userId)

    // Filter only CONFIRMED relationships
    const confirmed = familyMembers.filter(
      (r) => String(r.status).toUpperCase() === "CONFIRMED"
    )
    console.log("✅ Confirmed relationships:", confirmed.length)

    if (confirmed.length === 0) {
      console.log("⚠️ No confirmed family members, adding Yourself option")
      this.injectCustomAnswers(
        [{ id: "yourself", label: "Yourself" }],
        "single"
      )
      this.setState({ familyOptions: [] })
      return
    }

    // Convert family members to answer options
    const options = confirmed.map((rel) => {
      // Find the other user (not the current user)
      const otherUser = rel.users?.find((u) => u.userId !== userId)
      const userName = otherUser?.user
        ? `${otherUser.user.firstName} ${otherUser.user.lastName}`
        : "Family Member"
      const type = rel.type || "Family"

      return {
        id: rel.id,
        label: `${userName} (${type})`,
        raw: rel,
      }
    })

    // Add "Yourself" option at the end
    options.push({ id: "yourself", label: "Yourself" })

    console.log("💉 Injecting family member options:", options)
    this.injectCustomAnswers(options, "single")
    this.setState({ familyOptions: options })
  }

  injectCustomAnswers = (options, type /* 'single' | 'multiple' */) => {
    console.log(
      "💉 injectCustomAnswers called with options:",
      options,
      "type:",
      type
    )
    const q = this.state.currentPageData?.Question
    if (!q) {
      console.log("💉 No question found, returning")
      return
    }
    console.log("💉 Question ID:", q._id)

    const container = document
      .getElementById("surveyQuestionPageContent")
      ?.querySelector(".answers")
    console.log("💉 Container found:", !!container)

    if (!container) {
      console.log("💉 No container found, returning")
      return
    }

    const html = container.innerHTML
    console.log("💉 Current container HTML:", html.substring(0, 200) + "...")

    const marker = '<label class="questionText">Answers: </label>'
    const cut = html.lastIndexOf(marker)
    const prefix = cut >= 0 ? html.slice(0, cut + marker.length) : html
    console.log("💉 Marker found at position:", cut)

    let answersHtml = ""
    if (type === "single") {
      options.forEach((opt, idx) => {
        answersHtml +=
          '<div class="singleChoiceAnswerContainer radio">' +
          `<input type="radio" id="fam_${idx}" name="q_${
            q._id
          }" value="${this.escapeHtml(
            opt.label
          )}" class="singleChoiceAnswer" />` +
          `<label for="fam_${idx}" class="answerLabel singleChoiceAnswerLabel">${this.escapeHtml(
            opt.label
          )}</label>` +
          "</div>"
      })
    } else {
      options.forEach((opt, idx) => {
        answersHtml +=
          '<div class="multipleChoiceAnswerContainer radio">' +
          `<input type="checkbox" id="fam_${idx}" name="q_${
            q._id
          }" value="${this.escapeHtml(
            opt.label
          )}" class="multipleChoiceAnswer" />` +
          `<label for="fam_${idx}" class="answerLabel multipleChoiceAnswerLabel">${this.escapeHtml(
            opt.label
          )}</label>` +
          "</div>"
      })
    }

    console.log(
      "💉 Generated answers HTML:",
      answersHtml.substring(0, 200) + "..."
    )
    container.innerHTML = `${prefix}${answersHtml}`
    console.log(
      "💉 Injection complete! New container HTML:",
      container.innerHTML.substring(0, 200) + "..."
    )
  }

  // ---------------- Render page content (DOM injection) ----------------
  renderCurrentPageHtml = () => {
    const container = document.getElementById("surveyQuestionPageContent")
    if (!container) return

    const q = this.state.currentPageData?.Question
    if (!q) return

    if (q.Type === "single choice") {
      let qHtml =
        '<label class="questionText">Question: </label>' +
        `<label class="questionText">${q.Question || ""}</label>`

      // Check if this is the "on behalf of" question
      // If so, skip rendering answers from the -101 response
      // They will be replaced by GraphQL family member data
      const isBehalfQuestion = this.isWhoOnBehalfFirstQuestion()

      let answersHtml = ""
      if (!isBehalfQuestion) {
        // Only render answers from response if it's NOT the behalf question
        ;(q.Answers || []).forEach((a, index) => {
          answersHtml +=
            '<div class="singleChoiceAnswerContainer radio">' +
            `<input type="radio" id="a_${index}" name="q_${q._id}" value="${
              a.Answer || ""
            }" class="singleChoiceAnswer" />` +
            `<label for="a_${index}" class="answerLabel singleChoiceAnswerLabel">${
              a.Answer || ""
            }</label>` +
            "</div>"
        })
      }

      container.innerHTML = `
        <div id="question_${q._id}" class="surveyQuestion singleChoiceQuestion">
          <div class="answers">${qHtml}<br/><label class="questionText">Answers: </label>${answersHtml}</div>
        </div>`
    } else if (q.Type === "multiple choice") {
      let qHtml =
        '<label class="questionText">Question: </label>' +
        `<label class="questionText">${q.Question || ""}</label>`
      let answersHtml = ""
      ;(q.Answers || []).forEach((a, index) => {
        answersHtml +=
          '<div class="multipleChoiceAnswerContainer radio">' +
          `<input type="checkbox" id="a_${index}" name="q_${q._id}" value="${
            a.Answer || ""
          }" class="multipleChoiceAnswer" />` +
          `<label for="a_${index}" class="answerLabel multipleChoiceAnswerLabel">${
            a.Answer || ""
          }</label>` +
          "</div>"
      })
      container.innerHTML = `
        <div id="question_${q._id}" class="surveyQuestion multipleChoiceQuestion">
          <div class="answers">${qHtml}<br/><label class="questionText">Answers: </label>${answersHtml}</div>
        </div>`
    } else {
      container.innerHTML = `
        <div id="question_${q._id}" class="surveyQuestion openEndedQuestion">
          <label class="questionText">${q.Question || ""}</label>
          <div class="openEndedAnswerContainer">
            <textarea type="text" id="textArea_${q._id}" name="q_${
        q._id
      }" class="openEndedAnswer"></textarea>
          </div>
          <br/>
        </div>`
      try {
        const ta = document.getElementById(`textArea_${q._id}`)
        const heightStr = getComputedStyle(ta).height
        let heightInt = parseInt(heightStr.slice(0, -2))
        let lines = q.TextAreaHeight == null ? 1 : parseInt(q.TextAreaHeight)
        heightInt = heightInt * (isNaN(lines) ? 1 : lines)
        ta.style.height = `${heightInt}px`
      } catch {}
    }

    this.showPercentage()
  }

  showPercentage = () => {
    try {
      const pct = (
        this.state.currentPageData?.PercentageCompleted ?? 0
      ).toString()
      const el = document.getElementById("surveyProgressBarContent")
      if (el) {
        el.innerHTML = pct + "%"
        el.style.width = pct + "%"
      }
    } catch {}
  }

  // ---------------- Buttons + answers ----------------
  onClickNext = () => this.goToNextPage()

  goToNextPage = () => {
    // Intro page: always advance, no validation
    if (this.state.currentQuestion === -101) {
      const { fpData, sessionID, researchID } = this.state
      const payload = {
        SessionID: sessionID,
        ResearchID: researchID,
        Fingerprint: fpData?.fingerprint,
        Browser: fpData?.browser,
        Languages: fpData?.os?.languages,
        Brand: null,
        Bot: false,
        OS_version: fpData?.os?.version,
        OS: fpData?.os?.name,
        Type: fpData?.type,
        Answers: [],
      }
      this.makeHttpRequest(payload)
      return
    }

    if (this.answersMissing()) {
      alert(this.state.answersRequiredMsg)
      return
    }

    const { fpData, sessionID, researchID } = this.state
    const payload = {
      SessionID: sessionID,
      ResearchID: researchID,
      Fingerprint: fpData?.fingerprint,
      Browser: fpData?.browser,
      Languages: fpData?.os?.languages,
      Brand: null,
      Bot: false,
      OS_version: fpData?.os?.version,
      OS: fpData?.os?.name,
      Type: fpData?.type,
      Answers: this.getAnswers(),
    }
    this.makeHttpRequest(payload)
  }

  getAnswers = () => {
    const q = this.state.currentPageData?.Question
    if (
      !q ||
      this.state.currentQuestion === -101 ||
      this.state.currentQuestion === -102
    )
      return []
    if (q.Type === "single choice") {
      const result = []
      document
        .querySelectorAll("#surveyQuestionPageContent .singleChoiceAnswer")
        .forEach((r) => r.checked && result.push(r.value))
      return result
    } else if (q.Type === "multiple choice") {
      const result = []
      document
        .querySelectorAll("#surveyQuestionPageContent .multipleChoiceAnswer")
        .forEach((c) => c.checked && result.push(c.value))
      return result
    } else {
      const ta = document.getElementById(`textArea_${q._id}`)
      return [ta ? ta.value : ""]
    }
  }

  answersMissing = () => {
    const q = this.state.currentPageData?.Question
    if (!q) return true
    const answers = this.getAnswers()
    if (
      this.state.currentQuestion === -101 ||
      this.state.currentQuestion === -102
    )
      return false
    if (q.Type === "single choice") return answers.length === 0
    if (q.Type === "multiple choice")
      return q.AnswerRequired === true ? answers.length === 0 : false
    // open ended
    if (q.AnswerRequired !== true) return false
    if (answers.length === 0) return true
    return (answers[0] || "").trim() === ""
  }

  getCurrentQuestionId = () => {
    const cq = this.state.currentQuestion
    if (cq === -101 || cq === -102) return cq
    return cq?._id || cq
  }

  // ---------------- question detector ----------------
  isWhoOnBehalfFirstQuestion = () => {
    const d = this.state.currentPageData
    const q = d?.Question
    if (!q) {
      console.log("❓ isWhoOnBehalfFirstQuestion: No question found")
      return false
    }
    const combined = norm((q.Label || "") + " " + (q.Question || ""))
    const isFirst =
      d?.PercentageCompleted === 0 ||
      q?.Order === 1 ||
      q?.Index === 0 ||
      q?.Sequence === 1
    const matches =
      /who are you answering on behalf of/.test(combined) ||
      /on behalf of/.test(combined)

    console.log("❓ Question detection:", {
      questionText: q.Question,
      label: q.Label,
      combined,
      isFirst,
      matches,
      result: !!(isFirst && matches),
    })

    return !!(isFirst && matches)
  }

  // ---------------- render static frame ----------------
  render() {
    const {
      introPageText,
      finishPageText,
      nextButtonCaption,
      currentQuestion,
    } = this.state

    return (
      <div id="surveyContent">
        {/* Inject CSS here */}
        <style>{STYLES}</style>

        <div id="surveyProgressBar">
          <div id="surveyProgressBarContent"></div>
        </div>

        <div id="surveyHeader" className="surveyHeader">
          <div id="surveyHeaderContent"></div>
        </div>

        <div id="surveyPages">
          {/* Intro page */}
          <div
            id="surveyIntroPage"
            className="surveyPage"
            style={{ display: currentQuestion === -101 ? "block" : "none" }}
          >
            <div
              id="surveyIntroPageContent"
              dangerouslySetInnerHTML={{ __html: introPageText || "" }}
            />
          </div>

          {/* Complete page */}
          <div
            id="surveyCompletePage"
            className="surveyPage"
            style={{ display: currentQuestion === -102 ? "block" : "none" }}
          >
            <div
              id="surveyCompletePageContent"
              dangerouslySetInnerHTML={{ __html: finishPageText || "" }}
            />
          </div>

          {/* Question page */}
          <div
            id="surveyQuestionPage"
            className="surveyPage"
            style={{
              display:
                currentQuestion !== -101 && currentQuestion !== -102
                  ? "block"
                  : "none",
            }}
          >
            <div id="surveyQuestionPageContent"></div>
          </div>
        </div>

        {/* Nav */}
        <div id="surveyNavigation">
          <div id="inspired_logo"></div>
          <div
            id="nextButton"
            className="surveyNavigationButton nextButton"
            onClick={this.onClickNext}
            style={{ display: currentQuestion === -102 ? "none" : "block" }}
          >
            <div id="nextButtonContent">{nextButtonCaption || "Next"}</div>
          </div>
        </div>
      </div>
    )
  }
}
