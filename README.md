# Pagination in React

## Project Details

### Features:

1. **Navigation with Buttons:**
   - Use "Right" and "Left" buttons to move between pages.
   
2. **Items Per Page:**
   - Only **10 items** displayed per page.
   
3. **Button States:**
   - If the current page number is **0**, the "Left" button will be **disabled**.
   - If the current page is the **last page**, the "Right" button will be **disabled**.

### Implementation Outline:

1. **State Management:**
   - Use React state to track the current page.
   
2. **Button Handlers:**
   - Increment page number on "Right" button click (if not on last page).
   - Decrement page number on "Left" button click (if not on first page).

3. **Data Handling:**
   - Slice the array of items to show only the relevant 10 items for the current page.
---
### Screenshot ###

![Screenshot of my project](https://github.com/siddharth6164/pagination/blob/main/public/Pagination.jpeg)

---
