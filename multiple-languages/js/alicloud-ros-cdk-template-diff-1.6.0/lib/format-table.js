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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybWF0LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFzQztBQUN0Qyw0Q0FBNEM7QUFDNUMsK0JBQStCO0FBRS9COzs7O0dBSUc7QUFDSCxTQUFnQixXQUFXLENBQUMsS0FBaUIsRUFBRSxPQUEyQjtJQUN4RSxPQUFPLEtBQUs7U0FDVCxLQUFLLENBQUMsS0FBSyxFQUFFO1FBQ1osTUFBTSxFQUFFLHVCQUF1QjtRQUMvQixPQUFPLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEcsa0JBQWtCLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUNuQyxpR0FBaUc7WUFDakcsT0FBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7S0FDRixDQUFDO1NBQ0QsU0FBUyxFQUFFLENBQUM7QUFDakIsQ0FBQztBQVhELGtDQVdDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsV0FBVyxDQUFDLElBQWMsRUFBRSxJQUFjO0lBQ2pELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUE0QjtJQUNyRCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDeEIsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCxNQUFNLEdBQUcsR0FBNEMsRUFBRSxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFL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eEIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDeEIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDeEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0IsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0IsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0IsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDNUIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsU0FBUyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDMUIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDekIsU0FBUyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDMUIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7Q0FDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgKiBhcyBzdHJpbmdXaWR0aCBmcm9tICdzdHJpbmctd2lkdGgnO1xuaW1wb3J0ICogYXMgdGFibGUgZnJvbSAndGFibGUnO1xuXG4vKipcbiAqIFJlbmRlciBhIHR3by1kaW1lbnNpb25hbCBhcnJheSB0byBhIHZpc3VhbGx5IGF0dHJhY3RpdmUgdGFibGVcbiAqXG4gKiBGaXJzdCByb3cgaXMgY29uc2lkZXJlZCB0aGUgdGFibGUgaGVhZGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGFibGUoY2VsbHM6IHN0cmluZ1tdW10sIGNvbHVtbnM6IG51bWJlciB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIHJldHVybiB0YWJsZVxuICAgIC50YWJsZShjZWxscywge1xuICAgICAgYm9yZGVyOiBUQUJMRV9CT1JERVJfQ0hBUkFDVEVSUyxcbiAgICAgIGNvbHVtbnM6IGJ1aWxkQ29sdW1uQ29uZmlnKGNvbHVtbnMgIT09IHVuZGVmaW5lZCA/IGNhbGN1bGNhdGVDb2x1bW5XaWR0aHMoY2VsbHMsIGNvbHVtbnMpIDogdW5kZWZpbmVkKSxcbiAgICAgIGRyYXdIb3Jpem9udGFsTGluZTogKGxpbmU6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyBOdW1iZXJpbmcgbGlrZSB0aGlzOiBbbGluZSAwXSBbaGVhZGVyID0gcm93WzBdXSBbbGluZSAxXSBbcm93IDFdIFtsaW5lIDJdIFtjb250ZW50IDJdIFtsaW5lIDNdXG4gICAgICAgIHJldHVybiBsaW5lIDwgMiB8fCBsaW5lID09PSBjZWxscy5sZW5ndGggfHwgbGluZUJldHdlZW4oY2VsbHNbbGluZSAtIDFdLCBjZWxsc1tsaW5lXSk7XG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRyaW1SaWdodCgpO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgd2Ugc2hvdWxkIGRyYXcgYSBsaW5lIGJldHdlZW4gdHdvIHJvd3NcbiAqXG4gKiBEcmF3IGhvcml6b250YWwgbGluZSBpZiAybmQgY29sdW1uIHZhbHVlcyBhcmUgZGlmZmVyZW50LlxuICovXG5mdW5jdGlvbiBsaW5lQmV0d2Vlbihyb3dBOiBzdHJpbmdbXSwgcm93Qjogc3RyaW5nW10pIHtcbiAgcmV0dXJuIHJvd0FbMV0gIT09IHJvd0JbMV07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQ29sdW1uQ29uZmlnKHdpZHRoczogbnVtYmVyW10gfCB1bmRlZmluZWQpOiB7IFtpbmRleDogbnVtYmVyXTogdGFibGUuQ29sdW1uQ29uZmlnIH0gfCB1bmRlZmluZWQge1xuICBpZiAod2lkdGhzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgcmV0OiB7IFtpbmRleDogbnVtYmVyXTogdGFibGUuQ29sdW1uQ29uZmlnIH0gPSB7fTtcbiAgd2lkdGhzLmZvckVhY2goKHdpZHRoLCBpKSA9PiB7XG4gICAgcmV0W2ldID0geyB3aWR0aCwgdXNlV29yZFdyYXA6IHRydWUgfSBhcyBhbnk7IC8vICd1c2VXb3JkV3JhcCcgaXMgbm90IGluIEB0eXBlcy90YWJsZVxuICAgIGlmICh3aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWxldGUgcmV0W2ldLndpZHRoO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgY29sdW1uIHdpZHRocyBnaXZlbiBhIHRlcm1pbmFsIHdpZHRoXG4gKlxuICogV2UgZG8gdGhpcyBieSBjYWxjdWxhdGluZyBhIGZhaXIgc2hhcmUgZm9yIGV2ZXJ5IGNvbHVtbi4gRXh0cmEgd2lkdGggc21hbGxlclxuICogdGhhbiB0aGUgZmFpciBzaGFyZSBpcyBldmVubHkgZGlzdHJpYnV0ZWQgb3ZlciBhbGwgY29sdW1ucyB0aGF0IGV4Y2VlZCB0aGVpclxuICogZmFpciBzaGFyZS5cbiAqL1xuZnVuY3Rpb24gY2FsY3VsY2F0ZUNvbHVtbldpZHRocyhyb3dzOiBzdHJpbmdbXVtdLCB0ZXJtaW5hbFdpZHRoOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gIC8vIFRoZSB0ZXJtaW5hbCBpcyBzb21ldGltZXMgcmVwb3J0ZWQgdG8gYmUgMC4gQWxzbyBpZiB0aGUgdGVybWluYWwgaXMgVkVSWSBuYXJyb3csXG4gIC8vIGp1c3QgYXNzdW1lIGEgcmVhc29uYWJsZSBtaW5pbXVtIHNpemUuXG4gIHRlcm1pbmFsV2lkdGggPSBNYXRoLm1heCh0ZXJtaW5hbFdpZHRoLCA0MCk7XG5cbiAgLy8gdXNlICdzdHJpbmctd2lkdGgnIHRvIG5vdCBjb3VudCBBTlNJIGNoYXJzIGFzIGFjdHVhbCBjaGFyYWN0ZXIgd2lkdGhcbiAgY29uc3QgY29sdW1ucyA9IHJvd3NbMF0ubWFwKChfLCBpKSA9PiBNYXRoLm1heCguLi5yb3dzLm1hcCgocm93KSA9PiBzdHJpbmdXaWR0aChTdHJpbmcocm93W2ldKSkpKSk7XG5cbiAgLy8gSWYgd2UgaGF2ZSBubyB0ZXJtaW5hbCB3aWR0aCwgZG8gbm90aGluZ1xuICBjb25zdCBjb250ZW50V2lkdGggPSB0ZXJtaW5hbFdpZHRoIC0gMiAtIGNvbHVtbnMubGVuZ3RoICogMztcblxuICAvLyBJZiB3ZSBkb24ndCBleGNlZWQgdGhlIHRlcm1pbmFsIHdpZHRoLCBkbyBub3RoaW5nXG4gIGlmIChzdW0oY29sdW1ucykgPD0gY29udGVudFdpZHRoKSB7XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICBjb25zdCBmYWlyU2hhcmUgPSBNYXRoLm1pbihjb250ZW50V2lkdGggLyBjb2x1bW5zLmxlbmd0aCk7XG4gIGNvbnN0IHNtYWxsQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKCh3KSA9PiB3IDwgZmFpclNoYXJlKTtcblxuICBsZXQgZGlzdHJpYnV0YWJsZVdpZHRoID0gY29udGVudFdpZHRoIC0gc3VtKHNtYWxsQ29sdW1ucyk7XG4gIGNvbnN0IGZhaXJEaXN0cmlidXRhYmxlID0gTWF0aC5mbG9vcihkaXN0cmlidXRhYmxlV2lkdGggLyAoY29sdW1ucy5sZW5ndGggLSBzbWFsbENvbHVtbnMubGVuZ3RoKSk7XG5cbiAgY29uc3QgcmV0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgZm9yIChjb25zdCByZXF1ZXN0ZWRXaWR0aCBvZiBjb2x1bW5zKSB7XG4gICAgaWYgKHJlcXVlc3RlZFdpZHRoIDwgZmFpclNoYXJlKSB7XG4gICAgICAvLyBTbWFsbCBjb2x1bW4gZ2V0cyB3aGF0IHRoZXkgd2FudFxuICAgICAgcmV0LnB1c2gocmVxdWVzdGVkV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMYXN0IGNvbHVtbiBnZXRzIGFsbCByZW1haW5pbmcsIG90aGVyd2lzZSBnZXQgZmFpciByZWRpc3Qgc2hhcmVcbiAgICAgIGNvbnN0IHdpZHRoID0gZGlzdHJpYnV0YWJsZVdpZHRoIDwgMiAqIGZhaXJEaXN0cmlidXRhYmxlID8gZGlzdHJpYnV0YWJsZVdpZHRoIDogZmFpckRpc3RyaWJ1dGFibGU7XG4gICAgICByZXQucHVzaCh3aWR0aCk7XG4gICAgICBkaXN0cmlidXRhYmxlV2lkdGggLT0gd2lkdGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gc3VtKHhzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgeCBvZiB4cykge1xuICAgIHRvdGFsICs9IHg7XG4gIH1cbiAgcmV0dXJuIHRvdGFsO1xufVxuXG4vLyBXaGF0IGNvbG9yIHRoZSB0YWJsZSBpcyBnb2luZyB0byBiZVxuY29uc3QgdGFibGVDb2xvciA9IGNvbG9ycy5ncmF5O1xuXG4vLyBVbmljb2RlIHRhYmxlIGNoYXJhY3RlcnMgd2l0aCBhIGNvbG9yXG5jb25zdCBUQUJMRV9CT1JERVJfQ0hBUkFDVEVSUyA9IHtcbiAgdG9wQm9keTogdGFibGVDb2xvcign4pSAJyksXG4gIHRvcEpvaW46IHRhYmxlQ29sb3IoJ+KUrCcpLFxuICB0b3BMZWZ0OiB0YWJsZUNvbG9yKCfilIwnKSxcbiAgdG9wUmlnaHQ6IHRhYmxlQ29sb3IoJ+KUkCcpLFxuICBib3R0b21Cb2R5OiB0YWJsZUNvbG9yKCfilIAnKSxcbiAgYm90dG9tSm9pbjogdGFibGVDb2xvcign4pS0JyksXG4gIGJvdHRvbUxlZnQ6IHRhYmxlQ29sb3IoJ+KUlCcpLFxuICBib3R0b21SaWdodDogdGFibGVDb2xvcign4pSYJyksXG4gIGJvZHlMZWZ0OiB0YWJsZUNvbG9yKCfilIInKSxcbiAgYm9keVJpZ2h0OiB0YWJsZUNvbG9yKCfilIInKSxcbiAgYm9keUpvaW46IHRhYmxlQ29sb3IoJ+KUgicpLFxuICBqb2luQm9keTogdGFibGVDb2xvcign4pSAJyksXG4gIGpvaW5MZWZ0OiB0YWJsZUNvbG9yKCfilJwnKSxcbiAgam9pblJpZ2h0OiB0YWJsZUNvbG9yKCfilKQnKSxcbiAgam9pbkpvaW46IHRhYmxlQ29sb3IoJ+KUvCcpLFxufTtcbiJdfQ==