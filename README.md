# React Native FlatList Data Update Issue

This repository demonstrates a common issue encountered when using `FlatList` in React Native with large datasets.  The problem revolves around inconsistent data updates when modifying the data source.

## Problem Description

The provided `bug.js` file contains a simple `FlatList` example. When you tap on an item, it's supposed to update its title to 'Updated'. However, with a large dataset, the update might not reflect correctly in the `FlatList` rendering.

## Solution

The solution, found in `bugSolution.js`, addresses this by ensuring data immutability and using appropriate keys for efficient updates.  This involves using functional updates and correctly defining keys for each item in the data array.  This method prevents re-renders of unnecessary list items, resulting in smoother and accurate updates.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` (or `npx react-native run-ios`) to run the app.
4. Observe the inconsistent updates on items in the list when using `bug.js`.
5. Switch to `bugSolution.js` to see the fix in action.

## Key improvements in the solution:

*   **Data Immutability:** The solution leverages functional updates with `setItems((prevItems) => ...)` to ensure data immutability. This prevents React from incorrectly comparing data and optimizing updates. 
*   **Efficient Key Usage:** Utilizing unique `item.id` as the key efficiently tells the `FlatList` which item has changed and what exactly needs to be updated on screen.