# Fotograph: User Stories and Features

## Purpose

This document defines a useful target scope for Fotograph and a backlog of behaviors for the front-end testing experiment in *Study Plan 2*. It separates the small baseline that exists in the code from the proposed features that should be implemented before testing. The proposed stories are the intended product behavior; they are not claims that the features already exist.

## Product goal

Fotograph lets a visitor build and browse a small photo collection in the browser. They can add image files, find a photo by name, narrow the collection by file type, change the order, inspect a selected photo, and remove unwanted photos. The experiment will test pure collection logic, interactive components, and complete user journeys.

## Users

- **Gallery user:** selects and manages a local collection of photographs.
- **Visitor:** browses the example gallery without needing an account.

## Feature status

| ID | Feature | Status in current code | Planned test layer(s) |
|---|---|---|---|
| F-01 | Featured home gallery and delayed welcome message | Exists | Component, E2E |
| F-02 | Open collection with three bundled photos | Exists | Component, E2E |
| F-03 | Next/previous carousel with wraparound | Exists; current index after collection changes needs reliable handling | Unit, component, E2E |
| F-04 | Add multiple images from file picker | Exists; explicit validation and feedback are missing | Unit, component, E2E |
| F-05 | Remove a photo and show empty state | Exists | Unit, component, E2E |
| F-06 | Search photos by filename | Proposed | Unit, component, E2E |
| F-07 | Filter by image type and clear the filter | Proposed | Unit, component, E2E |
| F-08 | Sort by filename or date added | Proposed | Unit, component, E2E |
| F-09 | Photo details / selected photo view | Proposed | Component, E2E |
| F-10 | Upload validation and visible error feedback | Proposed | Unit, component, E2E |
| F-11 | Empty, no-results, loading, and error states | Partly exists; extend for search/upload | Component, E2E |

## User stories

### Existing baseline stories

These describe behavior already represented in the application and provide a starting point for regression tests.

#### US-01 — See the featured gallery

**As a** visitor, **I want** to see featured photographs and their camera information, **so that** I can understand what the gallery contains.

- Given I open the home page, then I see the Fotograph heading, featured photos with alternative text, and camera/lens information.
- Given the home page stays open for two seconds, then the welcome message appears.
- Given I leave before the delay completes, then the pending timer is cleared on unmount.

#### US-02 — Open the collection

**As a** visitor, **I want** to open the photo collection, **so that** I can manage and browse its photos.

- Given the collection is closed, when I choose **Open photo collection**, then the collection appears.
- While its lazy-loaded content is loading, a loading message is shown.
- The initial collection contains three bundled photos and shows the correct count.

#### US-03 — Move through collection photos

**As a** gallery user, **I want** to move to the next and previous photo, **so that** I can inspect the collection one photo at a time.

- Selecting **Next photo** shows the next photo.
- Selecting next on the last photo wraps to the first photo; selecting previous on the first wraps to the last.
- The image alternative text matches the displayed photo.
- The carousel is absent when the collection is empty.
- If a photo is removed while displayed, the carousel selects a valid remaining photo (or becomes hidden when none remain).

#### US-04 — Add photos

**As a** gallery user, **I want** to choose one or more image files, **so that** they are added to the collection.

- Selecting valid image files adds one collection item per file and updates the count.
- The file name and preview are shown for each added photo.
- The input is reset after selection so the same file can be selected again if it was removed.

#### US-05 — Remove photos

**As a** gallery user, **I want** to remove a photo, **so that** I can control what remains in the collection.

- Selecting a photo's **Remove** button removes only that photo and updates the count.
- Removing the last photo displays the empty state and hides the carousel.

### Proposed feature stories

These are the additional behaviors that make the app useful for a meaningful unit, component, and end-to-end testing exercise. Implement them before treating their acceptance criteria as test expectations.

#### US-06 — Search by filename

**As a** gallery user, **I want** to search photos by filename, **so that** I can find a photo in a large collection quickly.

- Given the collection has photos, when I type a query, then only photos whose names contain the query are shown.
- Matching is case-insensitive and ignores leading/trailing whitespace in the query.
- Given the query matches no photos, then a **No photos match your search** message is shown, distinct from the empty collection message.
- Given I clear the query, then all photos allowed by the current filter are shown again.
- Removing a visible search result removes it from the underlying collection and updates the count.

#### US-07 — Filter by image type

**As a** gallery user, **I want** to filter photos by file type, **so that** I can focus on a particular format.

- The type selector includes **All types** and the image types supported by the collection (at minimum JPEG, PNG, and WebP).
- Selecting a type shows only photos with that type; comparison is case-insensitive.
- Selecting **All types** restores all items that match the current search.
- When the search and type filter together produce no results, the no-results state is shown.
- The total collection count remains the count of all photos; a separate visible-results count may be shown if the UI needs it.

#### US-08 — Sort the collection

**As a** gallery user, **I want** to sort photos by name or date added, **so that** I can choose an order that helps me browse.

- The sort control offers **Name (A–Z)**, **Name (Z–A)**, **Newest first**, and **Oldest first**.
- Name sorting is case-insensitive and deterministic when two names compare equally.
- Date sorting uses the time a photo was added; bundled photos have a stable defined order/date.
- Search and type filtering keep working after the sort order changes.
- Sorting the collection does not change its membership or total count.

#### US-09 — Inspect a photo

**As a** gallery user, **I want** to select a photo and see it larger with its name and file information, **so that** I can inspect the image before deciding to keep it.

- Selecting a photo card opens a detail view containing the larger image and filename.
- The detail view can be closed with a clearly named close control and the Escape key.
- Closing returns focus to the card that opened the view.
- Removing the photo from its detail view closes the view and updates the collection.

#### US-10 — Validate uploaded files

**As a** gallery user, **I want** clear feedback when a selected file cannot be used, **so that** I know why it was not added.

- Supported image types are JPEG, PNG, and WebP; unsupported formats are not added.
- Files larger than 10 MB are not added.
- Valid files in a mixed selection are still added even when another selected file is invalid.
- A visible, accessible message identifies each rejected filename and the reason (unsupported type or too large).
- A valid later selection clears or replaces the old error message according to a consistent rule.
- A rejected file does not increment the collection count or create a preview.

#### US-11 — Handle collection states clearly

**As a** gallery user, **I want** the collection to explain empty and unsuccessful results, **so that** I know what action I can take next.

- An empty collection shows guidance to add photos.
- A non-empty collection with no search/filter matches shows a separate no-results message and offers a way to clear criteria.
- Upload validation errors are announced to assistive technology and remain visible long enough to read.
- If an image preview fails to load, the UI indicates that the preview is unavailable while preserving the filename and remove action.

## Key journeys for end-to-end tests

1. **Find and inspect:** open the collection → search by part of a filename → open a result → close the detail view.
2. **Organize:** open the collection → filter by PNG → sort by name Z–A → clear the filter.
3. **Upload and remove:** add a valid image → verify its preview and count → remove it → verify it is gone.
4. **Reject invalid files:** select a valid image, unsupported file, and oversized image together → verify only the valid image is added and both errors are explained.
5. **Empty state:** remove all photos → verify the empty state → add a valid image → verify the collection recovers.
6. **Carousel resilience:** browse to a photo → remove that photo → verify the carousel still displays a valid remaining photo.

## Unit-test candidates

- Search normalization and filename matching.
- File-type inference and validation, including uppercase extensions, MIME types, and missing MIME types.
- File size boundary at exactly 10 MB and just over 10 MB.
- Filter composition and clearing behavior.
- Stable name sorting and date sorting.
- Add/remove collection transformations and count consistency.
- Carousel index wrapping and index correction after removal or sorting.

## Component-test candidates

- Search field, clear control, filter selector, and sort selector render and update visible results.
- Upload control accepts multiple files, reports rejected files, and adds valid files.
- Cards open detail view; close button and Escape close it accessibly.
- Collection, no-results, upload-error, image-error, and empty states render correctly.
- Carousel responds to previous/next and remains valid after collection changes.

## Non-functional expectations

- Interactive controls have labels usable by screen readers and keyboard users.
- Search, filter, and sort can be combined without changing the underlying collection.
- User-selected photos remain session-only unless persistence is deliberately added later.
- Object URLs created for local previews are revoked when their photos are removed or the collection unmounts.
- Tests assert observable behavior and avoid depending on styling classes or incidental component structure.

## Scope decisions and assumptions

- This is a local, single-user gallery; accounts, cloud upload, sharing, editing, and permanent storage are out of scope.
- Proposed limits are 10 MB per file and JPEG/PNG/WebP support. Keep these values in one place so implementation and tests use the same rule.
- Search applies to filenames. Type filter and sorting apply to the current collection view and can be combined with search.
- Date-added order is based on upload time; bundled starter photos need a stable order for deterministic tests.
- Header Description and Contact links are not useful core stories for this experiment and are excluded until those pages have actual product behavior.

## Experiment sequence

1. Choose and configure the test tools for the existing React application.
2. Implement the proposed collection logic and define its boundaries.
3. Add unit tests for validation, search, filtering, sorting, collection updates, and carousel index behavior.
4. Add component tests for controls, visible states, upload feedback, and photo details.
5. Add browser tests for the journeys listed above.
6. Re-run tests to look for flakiness, restructure code to assess test fragility, and use mutation testing to see whether the suite catches deliberate faults.
7. Keep a learning log of bugs caught, setup/run time, maintenance cost, and limits at each layer.
