"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAsBanner = void 0;
const colors = require("colors/safe");
/**
 * Returns a set of strings when printed on the console produces a banner msg. The message is in the following format -
 * ********************
 * *** msg line x   ***
 * *** msg line xyz ***
 * ********************
 *
 * Spec:
 * - The width of every line is equal, dictated by the longest message string
 * - The first and last lines are '*'s for the full length of the line
 * - Each line in between is prepended with '*** ' and appended with ' ***'
 * - The text is indented left, i.e. whitespace is right-padded when the length is shorter than the longest.
 *
 * @param msgs array of strings containing the message lines to be printed in the banner. Returns empty string if array
 * is empty.
 * @returns array of strings containing the message formatted as a banner
 */
function formatAsBanner(msgs) {
    const printLen = (str) => colors.strip(str).length;
    if (msgs.length === 0) {
        return [];
    }
    const leftPad = '*** ';
    const rightPad = ' ***';
    const bannerWidth = printLen(leftPad) + printLen(rightPad) + msgs.reduce((acc, msg) => Math.max(acc, printLen(msg)), 0);
    const bannerLines = [];
    bannerLines.push('*'.repeat(bannerWidth));
    // Improvement: If any 'msg' is wider than the terminal width, wrap message across lines.
    msgs.forEach((msg) => {
        const padding = ' '.repeat(bannerWidth - (printLen(msg) + printLen(leftPad) + printLen(rightPad)));
        bannerLines.push(''.concat(leftPad, msg, padding, rightPad));
    });
    bannerLines.push('*'.repeat(bannerWidth));
    return bannerLines;
}
exports.formatAsBanner = formatAsBanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS1mb3JtYXR0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc29sZS1mb3JtYXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFzQztBQUV0Qzs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxJQUFjO0lBQzNDLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUUzRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdkIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLE1BQU0sV0FBVyxHQUNmLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRHLE1BQU0sV0FBVyxHQUFhLEVBQUUsQ0FBQztJQUNqQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUxQyx5RkFBeUY7SUFDekYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ25CLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQXZCRCx3Q0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuXG4vKipcbiAqIFJldHVybnMgYSBzZXQgb2Ygc3RyaW5ncyB3aGVuIHByaW50ZWQgb24gdGhlIGNvbnNvbGUgcHJvZHVjZXMgYSBiYW5uZXIgbXNnLiBUaGUgbWVzc2FnZSBpcyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdCAtXG4gKiAqKioqKioqKioqKioqKioqKioqKlxuICogKioqIG1zZyBsaW5lIHggICAqKipcbiAqICoqKiBtc2cgbGluZSB4eXogKioqXG4gKiAqKioqKioqKioqKioqKioqKioqKlxuICpcbiAqIFNwZWM6XG4gKiAtIFRoZSB3aWR0aCBvZiBldmVyeSBsaW5lIGlzIGVxdWFsLCBkaWN0YXRlZCBieSB0aGUgbG9uZ2VzdCBtZXNzYWdlIHN0cmluZ1xuICogLSBUaGUgZmlyc3QgYW5kIGxhc3QgbGluZXMgYXJlICcqJ3MgZm9yIHRoZSBmdWxsIGxlbmd0aCBvZiB0aGUgbGluZVxuICogLSBFYWNoIGxpbmUgaW4gYmV0d2VlbiBpcyBwcmVwZW5kZWQgd2l0aCAnKioqICcgYW5kIGFwcGVuZGVkIHdpdGggJyAqKionXG4gKiAtIFRoZSB0ZXh0IGlzIGluZGVudGVkIGxlZnQsIGkuZS4gd2hpdGVzcGFjZSBpcyByaWdodC1wYWRkZWQgd2hlbiB0aGUgbGVuZ3RoIGlzIHNob3J0ZXIgdGhhbiB0aGUgbG9uZ2VzdC5cbiAqXG4gKiBAcGFyYW0gbXNncyBhcnJheSBvZiBzdHJpbmdzIGNvbnRhaW5pbmcgdGhlIG1lc3NhZ2UgbGluZXMgdG8gYmUgcHJpbnRlZCBpbiB0aGUgYmFubmVyLiBSZXR1cm5zIGVtcHR5IHN0cmluZyBpZiBhcnJheVxuICogaXMgZW1wdHkuXG4gKiBAcmV0dXJucyBhcnJheSBvZiBzdHJpbmdzIGNvbnRhaW5pbmcgdGhlIG1lc3NhZ2UgZm9ybWF0dGVkIGFzIGEgYmFubmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBc0Jhbm5lcihtc2dzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgY29uc3QgcHJpbnRMZW4gPSAoc3RyOiBzdHJpbmcpID0+IGNvbG9ycy5zdHJpcChzdHIpLmxlbmd0aDtcblxuICBpZiAobXNncy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZWZ0UGFkID0gJyoqKiAnO1xuICBjb25zdCByaWdodFBhZCA9ICcgKioqJztcbiAgY29uc3QgYmFubmVyV2lkdGggPVxuICAgIHByaW50TGVuKGxlZnRQYWQpICsgcHJpbnRMZW4ocmlnaHRQYWQpICsgbXNncy5yZWR1Y2UoKGFjYywgbXNnKSA9PiBNYXRoLm1heChhY2MsIHByaW50TGVuKG1zZykpLCAwKTtcblxuICBjb25zdCBiYW5uZXJMaW5lczogc3RyaW5nW10gPSBbXTtcbiAgYmFubmVyTGluZXMucHVzaCgnKicucmVwZWF0KGJhbm5lcldpZHRoKSk7XG5cbiAgLy8gSW1wcm92ZW1lbnQ6IElmIGFueSAnbXNnJyBpcyB3aWRlciB0aGFuIHRoZSB0ZXJtaW5hbCB3aWR0aCwgd3JhcCBtZXNzYWdlIGFjcm9zcyBsaW5lcy5cbiAgbXNncy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICBjb25zdCBwYWRkaW5nID0gJyAnLnJlcGVhdChiYW5uZXJXaWR0aCAtIChwcmludExlbihtc2cpICsgcHJpbnRMZW4obGVmdFBhZCkgKyBwcmludExlbihyaWdodFBhZCkpKTtcbiAgICBiYW5uZXJMaW5lcy5wdXNoKCcnLmNvbmNhdChsZWZ0UGFkLCBtc2csIHBhZGRpbmcsIHJpZ2h0UGFkKSk7XG4gIH0pO1xuXG4gIGJhbm5lckxpbmVzLnB1c2goJyonLnJlcGVhdChiYW5uZXJXaWR0aCkpO1xuICByZXR1cm4gYmFubmVyTGluZXM7XG59XG4iXX0=