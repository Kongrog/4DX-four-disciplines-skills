# Populate the ready-made HTML form

assets/dashboard.html is self-contained: no libraries, network, or installation. Read it as a template, replace CONFIG with the user's data, and deliver a separate dashboard.html. Do not modify the installed skill for a personal goal. lang selects ru or en. A built-in visual artifact may reproduce this form while preserving its behavior.

## Data model

- schemaVersion: 1; cycleId is the stable cycle ID; revision is a positive integer; updatedAt is the update date; approval is draft or agreed.
- wig: statement (first person), baseline (number or null), baselinePeriod, target (number or null), unit, deadline, successCriterion, lagName, direction (higher/lower/range), range (lower/upper bounds for range).
- stages: array of {id, title, deadline, status: proposed/active/completed, acceptance, steps}. currentStageId references an existing stage. There is no fixed stage count.
- steps: {id, title, unitIds}. Use first-person titles and stable IDs for verifiable units.
- units: {id, label, quality, leadId, status: unknown/done/missed}. Each unit exists once. Weekly cells and stage steps reference the same ID.
- pairs: optional compound outcomes [{label, groups: [[component 1 ID, component 2 ID], ...]}]. Components count only when the matching group is complete, not any two marks.
- weeks: {id, start, end, unitIds, closed, snapshot, review, planStatus: proposed/agreed}. An open week uses current unit marks; a closed week uses snapshot statuses in unitIds order.
- measurements: [{period, plan, actual, source, date}]. plan and actual are numbers or null, never empty strings or invented zeros.
- changes: change-log array. Preserve previous entries when continuing.

Empty strings and null in the source template are fields to populate, not a finished user deliverable. Keep unknowns unknown. Use agreed only for agreed definitions; retain stage acceptance agreement in its description. Mark a stage completed only after acceptance, not automatically from a counter.

## Preparation and use

1. Formulate the ultimate WIG, then the route and current stage. Do not import personal goals from examples.
2. Fit weekly actions to capacity and link them to stage units. Split compound actions when their parts can be completed separately. A recurring action in a new week receives a new ID; repeated records of one unit must not inflate the stage's finite outcome.
3. Populate weeks with real dates; proposals remain proposed. Preserve existing reports.
4. Serialize CONFIG safely using JSON.stringify/json.dumps, then replace < with the literal sequence \\u003c and U+2028/U+2029 with their JSON escape sequences so user text cannot close the script. UI strings are rendered through textContent.
5. Open the HTML and check marks, weekly counts, stage progress, week closing, JSON export, and restore. Describing the interface is not an opening test.
6. Deliver the file and briefly explain marks, closing a week, saving JSON, and giving the report to the assistant.

## Template boundaries

This is a working base populated at setup, not a universal domain model. Built-in lag entry supports a numeric plan and actual for a named period. For proportions, add numerator/denominator inputs and nonzero-denominator checks before delivery, or explicitly retain underlying counts in the source; do not replace a proportion with a cell count.

The new-week button selects existing unfinished units. For new/recurring actions, the assistant adds unique units to the next version while preserving the user's export. Creating a new week archives an open current week; historical snapshots remain unchanged. The assistant separately checks consecutive-period criteria from observations: the template never automatically declares the WIG achieved.

State is held in the open tab. Persistence across openings uses explicit JSON export/import, not automatic synchronization. Files for a different cycleId are rejected. Do not promise reminders or automatic data collection.
