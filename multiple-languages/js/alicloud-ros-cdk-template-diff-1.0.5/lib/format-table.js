"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTable = void 0;
const colors = require("colors/safe");
const stringWidth = require("string-width");
const table = require("table");
/**
 * Render a two-dimensional array to a visually attractive table
 *
 * First row is considered the table header.
 */
function formatTable(cells, columns) {
    return table
        .table(cells, {
        border: TABLE_BORDER_CHARACTERS,
        columns: buildColumnConfig(columns !== undefined ? calculcateColumnWidths(cells, columns) : undefined),
        drawHorizontalLine: (line) => {
            // Numbering like this: [line 0] [header = row[0]] [line 1] [row 1] [line 2] [content 2] [line 3]
            return line < 2 || line === cells.length || lineBetween(cells[line - 1], cells[line]);
        },
    })
        .trimRight();
}
exports.formatTable = formatTable;
/**
 * Whether we should draw a line between two rows
 *
 * Draw horizontal line if 2nd column values are different.
 */
function lineBetween(rowA, rowB) {
    return rowA[1] !== rowB[1];
}
function buildColumnConfig(widths) {
    if (widths === undefined) {
        return undefined;
    }
    const ret = {};
    widths.forEach((width, i) => {
        ret[i] = { width, useWordWrap: true }; // 'useWordWrap' is not in @types/table
        if (width === undefined) {
            delete ret[i].width;
        }
    });
    return ret;
}
/**
 * Calculate column widths given a terminal width
 *
 * We do this by calculating a fair share for every column. Extra width smaller
 * than the fair share is evenly distributed over all columns that exceed their
 * fair share.
 */
function calculcateColumnWidths(rows, terminalWidth) {
    // The terminal is sometimes reported to be 0. Also if the terminal is VERY narrow,
    // just assume a reasonable minimum size.
    terminalWidth = Math.max(terminalWidth, 40);
    // use 'string-width' to not count ANSI chars as actual character width
    const columns = rows[0].map((_, i) => Math.max(...rows.map((row) => stringWidth(String(row[i])))));
    // If we have no terminal width, do nothing
    const contentWidth = terminalWidth - 2 - columns.length * 3;
    // If we don't exceed the terminal width, do nothing
    if (sum(columns) <= contentWidth) {
        return columns;
    }
    const fairShare = Math.min(contentWidth / columns.length);
    const smallColumns = columns.filter((w) => w < fairShare);
    let distributableWidth = contentWidth - sum(smallColumns);
    const fairDistributable = Math.floor(distributableWidth / (columns.length - smallColumns.length));
    const ret = new Array();
    for (const requestedWidth of columns) {
        if (requestedWidth < fairShare) {
            // Small column gets what they want
            ret.push(requestedWidth);
        }
        else {
            // Last column gets all remaining, otherwise get fair redist share
            const width = distributableWidth < 2 * fairDistributable ? distributableWidth : fairDistributable;
            ret.push(width);
            distributableWidth -= width;
        }
    }
    return ret;
}
function sum(xs) {
    let total = 0;
    for (const x of xs) {
        total += x;
    }
    return total;
}
// What color the table is going to be
const tableColor = colors.gray;
// Unicode table characters with a color
const TABLE_BORDER_CHARACTERS = {
    topBody: tableColor('─'),
    topJoin: tableColor('┬'),
    topLeft: tableColor('┌'),
    topRight: tableColor('┐'),
    bottomBody: tableColor('─'),
    bottomJoin: tableColor('┴'),
    bottomLeft: tableColor('└'),
    bottomRight: tableColor('┘'),
    bodyLeft: tableColor('│'),
    bodyRight: tableColor('│'),
    bodyJoin: tableColor('│'),
    joinBody: tableColor('─'),
    joinLeft: tableColor('├'),
    joinRight: tableColor('┤'),
    joinJoin: tableColor('┼'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybWF0LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFzQztBQUN0Qyw0Q0FBNEM7QUFDNUMsK0JBQStCO0FBRS9COzs7O0dBSUc7QUFDSCxTQUFnQixXQUFXLENBQUMsS0FBaUIsRUFBRSxPQUEyQjtJQUN4RSxPQUFPLEtBQUs7U0FDVCxLQUFLLENBQUMsS0FBSyxFQUFFO1FBQ1osTUFBTSxFQUFFLHVCQUF1QjtRQUMvQixPQUFPLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEcsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMzQixpR0FBaUc7WUFDakcsT0FBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7S0FDRixDQUFDO1NBQ0QsU0FBUyxFQUFFLENBQUM7QUFDakIsQ0FBQztBQVhELGtDQVdDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsV0FBVyxDQUFDLElBQWMsRUFBRSxJQUFjO0lBQ2pELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUE0QjtJQUNyRCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDeEIsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCxNQUFNLEdBQUcsR0FBNEMsRUFBRSxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQVMsQ0FBQyxDQUFDLHVDQUF1QztRQUNyRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLHNCQUFzQixDQUFDLElBQWdCLEVBQUUsYUFBcUI7SUFDckUsbUZBQW1GO0lBQ25GLHlDQUF5QztJQUN6QyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFNUMsdUVBQXVFO0lBQ3ZFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5HLDJDQUEyQztJQUMzQyxNQUFNLFlBQVksR0FBRyxhQUFhLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRTVELG9EQUFvRDtJQUNwRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxZQUFZLEVBQUU7UUFDaEMsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBRTFELElBQUksa0JBQWtCLEdBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRWxHLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7SUFDaEMsS0FBSyxNQUFNLGNBQWMsSUFBSSxPQUFPLEVBQUU7UUFDcEMsSUFBSSxjQUFjLEdBQUcsU0FBUyxFQUFFO1lBQzlCLG1DQUFtQztZQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFCO2FBQU07WUFDTCxrRUFBa0U7WUFDbEUsTUFBTSxLQUFLLEdBQUcsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7WUFDbEcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixrQkFBa0IsSUFBSSxLQUFLLENBQUM7U0FDN0I7S0FDRjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLEVBQVk7SUFDdkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDbEIsS0FBSyxJQUFJLENBQUMsQ0FBQztLQUNaO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsc0NBQXNDO0FBQ3RDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFFL0Isd0NBQXdDO0FBQ3hDLE1BQU0sdUJBQXVCLEdBQUc7SUFDOUIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDeEIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDeEIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDeEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0IsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0IsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0IsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDNUIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsU0FBUyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDMUIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsU0FBUyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDMUIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7Q0FDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgKiBhcyBzdHJpbmdXaWR0aCBmcm9tICdzdHJpbmctd2lkdGgnO1xuaW1wb3J0ICogYXMgdGFibGUgZnJvbSAndGFibGUnO1xuXG4vKipcbiAqIFJlbmRlciBhIHR3by1kaW1lbnNpb25hbCBhcnJheSB0byBhIHZpc3VhbGx5IGF0dHJhY3RpdmUgdGFibGVcbiAqXG4gKiBGaXJzdCByb3cgaXMgY29uc2lkZXJlZCB0aGUgdGFibGUgaGVhZGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGFibGUoY2VsbHM6IHN0cmluZ1tdW10sIGNvbHVtbnM6IG51bWJlciB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIHJldHVybiB0YWJsZVxuICAgIC50YWJsZShjZWxscywge1xuICAgICAgYm9yZGVyOiBUQUJMRV9CT1JERVJfQ0hBUkFDVEVSUyxcbiAgICAgIGNvbHVtbnM6IGJ1aWxkQ29sdW1uQ29uZmlnKGNvbHVtbnMgIT09IHVuZGVmaW5lZCA/IGNhbGN1bGNhdGVDb2x1bW5XaWR0aHMoY2VsbHMsIGNvbHVtbnMpIDogdW5kZWZpbmVkKSxcbiAgICAgIGRyYXdIb3Jpem9udGFsTGluZTogKGxpbmUpID0+IHtcbiAgICAgICAgLy8gTnVtYmVyaW5nIGxpa2UgdGhpczogW2xpbmUgMF0gW2hlYWRlciA9IHJvd1swXV0gW2xpbmUgMV0gW3JvdyAxXSBbbGluZSAyXSBbY29udGVudCAyXSBbbGluZSAzXVxuICAgICAgICByZXR1cm4gbGluZSA8IDIgfHwgbGluZSA9PT0gY2VsbHMubGVuZ3RoIHx8IGxpbmVCZXR3ZWVuKGNlbGxzW2xpbmUgLSAxXSwgY2VsbHNbbGluZV0pO1xuICAgICAgfSxcbiAgICB9KVxuICAgIC50cmltUmlnaHQoKTtcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHdlIHNob3VsZCBkcmF3IGEgbGluZSBiZXR3ZWVuIHR3byByb3dzXG4gKlxuICogRHJhdyBob3Jpem9udGFsIGxpbmUgaWYgMm5kIGNvbHVtbiB2YWx1ZXMgYXJlIGRpZmZlcmVudC5cbiAqL1xuZnVuY3Rpb24gbGluZUJldHdlZW4ocm93QTogc3RyaW5nW10sIHJvd0I6IHN0cmluZ1tdKSB7XG4gIHJldHVybiByb3dBWzFdICE9PSByb3dCWzFdO1xufVxuXG5mdW5jdGlvbiBidWlsZENvbHVtbkNvbmZpZyh3aWR0aHM6IG51bWJlcltdIHwgdW5kZWZpbmVkKTogeyBbaW5kZXg6IG51bWJlcl06IHRhYmxlLkNvbHVtbkNvbmZpZyB9IHwgdW5kZWZpbmVkIHtcbiAgaWYgKHdpZHRocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHJldDogeyBbaW5kZXg6IG51bWJlcl06IHRhYmxlLkNvbHVtbkNvbmZpZyB9ID0ge307XG4gIHdpZHRocy5mb3JFYWNoKCh3aWR0aCwgaSkgPT4ge1xuICAgIHJldFtpXSA9IHsgd2lkdGgsIHVzZVdvcmRXcmFwOiB0cnVlIH0gYXMgYW55OyAvLyAndXNlV29yZFdyYXAnIGlzIG5vdCBpbiBAdHlwZXMvdGFibGVcbiAgICBpZiAod2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsZXRlIHJldFtpXS53aWR0aDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIGNvbHVtbiB3aWR0aHMgZ2l2ZW4gYSB0ZXJtaW5hbCB3aWR0aFxuICpcbiAqIFdlIGRvIHRoaXMgYnkgY2FsY3VsYXRpbmcgYSBmYWlyIHNoYXJlIGZvciBldmVyeSBjb2x1bW4uIEV4dHJhIHdpZHRoIHNtYWxsZXJcbiAqIHRoYW4gdGhlIGZhaXIgc2hhcmUgaXMgZXZlbmx5IGRpc3RyaWJ1dGVkIG92ZXIgYWxsIGNvbHVtbnMgdGhhdCBleGNlZWQgdGhlaXJcbiAqIGZhaXIgc2hhcmUuXG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGNhdGVDb2x1bW5XaWR0aHMocm93czogc3RyaW5nW11bXSwgdGVybWluYWxXaWR0aDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAvLyBUaGUgdGVybWluYWwgaXMgc29tZXRpbWVzIHJlcG9ydGVkIHRvIGJlIDAuIEFsc28gaWYgdGhlIHRlcm1pbmFsIGlzIFZFUlkgbmFycm93LFxuICAvLyBqdXN0IGFzc3VtZSBhIHJlYXNvbmFibGUgbWluaW11bSBzaXplLlxuICB0ZXJtaW5hbFdpZHRoID0gTWF0aC5tYXgodGVybWluYWxXaWR0aCwgNDApO1xuXG4gIC8vIHVzZSAnc3RyaW5nLXdpZHRoJyB0byBub3QgY291bnQgQU5TSSBjaGFycyBhcyBhY3R1YWwgY2hhcmFjdGVyIHdpZHRoXG4gIGNvbnN0IGNvbHVtbnMgPSByb3dzWzBdLm1hcCgoXywgaSkgPT4gTWF0aC5tYXgoLi4ucm93cy5tYXAoKHJvdykgPT4gc3RyaW5nV2lkdGgoU3RyaW5nKHJvd1tpXSkpKSkpO1xuXG4gIC8vIElmIHdlIGhhdmUgbm8gdGVybWluYWwgd2lkdGgsIGRvIG5vdGhpbmdcbiAgY29uc3QgY29udGVudFdpZHRoID0gdGVybWluYWxXaWR0aCAtIDIgLSBjb2x1bW5zLmxlbmd0aCAqIDM7XG5cbiAgLy8gSWYgd2UgZG9uJ3QgZXhjZWVkIHRoZSB0ZXJtaW5hbCB3aWR0aCwgZG8gbm90aGluZ1xuICBpZiAoc3VtKGNvbHVtbnMpIDw9IGNvbnRlbnRXaWR0aCkge1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgY29uc3QgZmFpclNoYXJlID0gTWF0aC5taW4oY29udGVudFdpZHRoIC8gY29sdW1ucy5sZW5ndGgpO1xuICBjb25zdCBzbWFsbENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcigodykgPT4gdyA8IGZhaXJTaGFyZSk7XG5cbiAgbGV0IGRpc3RyaWJ1dGFibGVXaWR0aCA9IGNvbnRlbnRXaWR0aCAtIHN1bShzbWFsbENvbHVtbnMpO1xuICBjb25zdCBmYWlyRGlzdHJpYnV0YWJsZSA9IE1hdGguZmxvb3IoZGlzdHJpYnV0YWJsZVdpZHRoIC8gKGNvbHVtbnMubGVuZ3RoIC0gc21hbGxDb2x1bW5zLmxlbmd0aCkpO1xuXG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gIGZvciAoY29uc3QgcmVxdWVzdGVkV2lkdGggb2YgY29sdW1ucykge1xuICAgIGlmIChyZXF1ZXN0ZWRXaWR0aCA8IGZhaXJTaGFyZSkge1xuICAgICAgLy8gU21hbGwgY29sdW1uIGdldHMgd2hhdCB0aGV5IHdhbnRcbiAgICAgIHJldC5wdXNoKHJlcXVlc3RlZFdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGFzdCBjb2x1bW4gZ2V0cyBhbGwgcmVtYWluaW5nLCBvdGhlcndpc2UgZ2V0IGZhaXIgcmVkaXN0IHNoYXJlXG4gICAgICBjb25zdCB3aWR0aCA9IGRpc3RyaWJ1dGFibGVXaWR0aCA8IDIgKiBmYWlyRGlzdHJpYnV0YWJsZSA/IGRpc3RyaWJ1dGFibGVXaWR0aCA6IGZhaXJEaXN0cmlidXRhYmxlO1xuICAgICAgcmV0LnB1c2god2lkdGgpO1xuICAgICAgZGlzdHJpYnV0YWJsZVdpZHRoIC09IHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHN1bSh4czogbnVtYmVyW10pOiBudW1iZXIge1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IHggb2YgeHMpIHtcbiAgICB0b3RhbCArPSB4O1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn1cblxuLy8gV2hhdCBjb2xvciB0aGUgdGFibGUgaXMgZ29pbmcgdG8gYmVcbmNvbnN0IHRhYmxlQ29sb3IgPSBjb2xvcnMuZ3JheTtcblxuLy8gVW5pY29kZSB0YWJsZSBjaGFyYWN0ZXJzIHdpdGggYSBjb2xvclxuY29uc3QgVEFCTEVfQk9SREVSX0NIQVJBQ1RFUlMgPSB7XG4gIHRvcEJvZHk6IHRhYmxlQ29sb3IoJ+KUgCcpLFxuICB0b3BKb2luOiB0YWJsZUNvbG9yKCfilKwnKSxcbiAgdG9wTGVmdDogdGFibGVDb2xvcign4pSMJyksXG4gIHRvcFJpZ2h0OiB0YWJsZUNvbG9yKCfilJAnKSxcbiAgYm90dG9tQm9keTogdGFibGVDb2xvcign4pSAJyksXG4gIGJvdHRvbUpvaW46IHRhYmxlQ29sb3IoJ+KUtCcpLFxuICBib3R0b21MZWZ0OiB0YWJsZUNvbG9yKCfilJQnKSxcbiAgYm90dG9tUmlnaHQ6IHRhYmxlQ29sb3IoJ+KUmCcpLFxuICBib2R5TGVmdDogdGFibGVDb2xvcign4pSCJyksXG4gIGJvZHlSaWdodDogdGFibGVDb2xvcign4pSCJyksXG4gIGJvZHlKb2luOiB0YWJsZUNvbG9yKCfilIInKSxcbiAgam9pbkJvZHk6IHRhYmxlQ29sb3IoJ+KUgCcpLFxuICBqb2luTGVmdDogdGFibGVDb2xvcign4pScJyksXG4gIGpvaW5SaWdodDogdGFibGVDb2xvcign4pSkJyksXG4gIGpvaW5Kb2luOiB0YWJsZUNvbG9yKCfilLwnKSxcbn07XG4iXX0=