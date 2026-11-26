# Create and maintain the dashboard

## When to create it

Immediately after the interview ends, or as soon as there is enough information for a meaningful proposed system. This is a required setup deliverable; do not seek separate permission to prepare it. Populate it from the user's answers instead of asking them to fill out a blank template. When resuming, update the existing dashboard.

## One-screen overview

Use [assets/dashboard.md](../assets/dashboard.md) as the content template and fill in:

- WIG card: owner, X, Y, unit, deadline, approval status, and baseline period.
- Separate “Outcome / lag” and “Actions / lead” sections. For each measure: definition, improvement direction, standard/plan, actual for the same period, source, date, and a text status.
- Plan-versus-actual history by date when comparable observations exist. With one or zero observations, show the initial point or “no measurements yet”; do not fabricate a trend.
- The first week's plan and one or two commitments with owner, deadline, completion criterion, and link to a lead. Clearly distinguish proposed from accepted commitments.
- Next session, unresolved decisions, and clear instructions for entering the next observation.

Include the initial period and rows for the next period, with real dates when known. If a session time is undecided, say “not agreed.” Do not infer today's date from a book example.

## Deliverable format

1. If the environment supports visible interactive artifacts, create and show the dashboard as one.
2. If file tools are available but a suitable built-in artifact is not, create a self-contained `dashboard.html` that opens in a browser without installing dependencies. Give the user a working file link and a short overview in the response. Preparing a local file is part of building the system; internet publication and external integrations need a separate instruction.
3. If neither creation tool is available, immediately show a fully populated Markdown dashboard in the response. Explicitly identify this as text mode: the user supplies new measurements in chat and the assistant updates the scoreboard. Do not promise an interactive file or present raw code as an opened dashboard.

Respect the user's explicit format choice. Do not delay delivery over colors or library selection. State and session notes remain portable records; they do not replace the visible dashboard.

## Minimum interactive capabilities

- Enter an observation: measure, period, value or numerator/denominator, date, and source.
- Update plan, actual, and status without editing code; preserve earlier periods.
- View history and mark commitment completion; changes to plans or definitions require a reason and a new version.
- Export and restore data through a file, such as JSON. For local HTML, explain that editing the page does not overwrite the original HTML file; offer a data download and import on reopening. Do not rely solely on tab or browser memory.
- Clear labels, a layout usable on narrow screens, and text labels as well as colors for statuses.

Treat user data as text, not executable HTML or scripts. Do not add network uploads or analytics. Do not promise synchronization with system state unless implemented: for a separate HTML file, the exported data must be provided to the assistant at the next session.

## Calculation rules

Use the definitions and improvement direction from setup.md. An unknown actual is “no data,” not zero. A zero denominator means “no observations.” An unconfirmed standard is “draft,” without a winning/losing judgment. Show stale observations with their dates, separately from the current period.

A green lead does not turn a red lag green. Show outcomes and actions separately; do not invent a combined success percentage. Goal progress percentages are permitted only with comparable, known X, Y, and actual and a nonzero Y−X; they do not replace comparison with the period plan. Preserve underlying counts and quality requirements.

## Check before delivery

Verify that the user can see their goal and both measure types, understand the score, and enter the next result. For an interactive file, check opening, observation entry, recalculation, and export/restore using available tools. Do not claim interface testing if it could not be performed; still provide a usable text view.

At the end of each weekly session, show the updated dashboard alongside state and session notes. If the environment cannot update the previous artifact, create a dated new version and link while preserving history.
