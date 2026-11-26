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

## Dashboard form established during testing

The required top-to-bottom order is **my WIG → overall path to the WIG → current stage and its steps → my weekly actions**. This is a presentation structure, not a requirement to have exactly three stages or seven actions.

### User voice and outcome levels

Phrase personal goals and measures in the first person: “I achieved…”, “I watched the lesson and took notes”, “I reviewed the assignment and corrected my notes.” For teams, use “We…”. The user owns the action, not the assistant. Label proposed actions “proposed”; a ✓ requires actual user-reported completion.

Do not replace the ultimate WIG with a convenient stage goal. Show separately:
- WIG: baseline, target, final deadline, achievement/sustained-result criterion, and actual lag.
- Path: stages, completed stages, and the highlighted current stage; label proposed stages.
- Current stage: its outcome, deadline, steps, acceptance criteria, and counts of verified units.
- Week: influenceable actions and a clear execution verdict.

If the user requires a result in each of several consecutive periods, check every period individually, continuity, and completion of the whole sequence by the deadline. An average does not meet that criterion. Do not add this requirement unless the user chose it.

### Cells and an honest weekly score

Use clickable action cells: **✓ done — green; × missed — red; · unreported — neutral**. Include text and accessible labels; color alone is insufficient. Allow changing and correcting a mark. Future and unknown actions do not automatically turn red.

Show “I completed N of M,” with missed and unreported counts separately. After closing a seven-action week with 2 ✓ and 5 ×, say “I completed 2 of 7. Weekly plan not met.” With 2 ✓ and 5 unknowns, say “I completed 2 of 7; 5 actions remain unreported.” Do not label missing evidence a failure or hide confirmed misses. If every cell is unknown, show “— / M; no marks,” not a false measured zero.

Derive the number of cells from agreed scope and capacity. Seven cells do not imply seven large tasks or seven lessons. A lesson, assignment review, and recap can be separate actions with distinct quality criteria. Hours constrain capacity; elapsed time alone does not prove an outcome.

### Linked counts and history

Each completed unit has a stable ID. Its weekly cell and overall inventory share one record: a mark updates both views. Do not count a unit twice. A compound outcome (such as material plus practice) requires all matching component IDs to be completed; do not use the minimum of two aggregate counts.

Closing a week preserves a snapshot. Record late completion in a new period rather than rewriting a past miss as on-time completion. Record corrections to erroneous input separately. Starting a new weekly plan must not erase overall progress.

All stage steps done means “ready for acceptance,” not automatic WIG achievement. Stage completion requires its acceptance criteria. Keep weekly execution, stage progress, and final outcome distinct; course completion percentages must not masquerade as progress toward income, health, or another ultimate outcome.

### Ready-made form

For file mode use [assets/dashboard.html](../assets/dashboard.html): WIG card, path, steps, linked cells, weekly verdict, actual lag entry, export/import, and a report. The lang field selects RU/EN UI. Populate CONFIG with user answers following [dashboard-schema.md](dashboard-schema.md) before delivery; do not leave it blank or include test data. Built-in artifacts must preserve this structure and behavior; text mode must reproduce it using tables and symbols.
