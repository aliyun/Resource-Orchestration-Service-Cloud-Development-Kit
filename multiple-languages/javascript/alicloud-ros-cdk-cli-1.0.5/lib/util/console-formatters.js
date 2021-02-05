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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS1mb3JtYXR0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc29sZS1mb3JtYXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFzQztBQUV0Qzs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxJQUFjO0lBQzNDLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUUzRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdkIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLE1BQU0sV0FBVyxHQUNmLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRHLE1BQU0sV0FBVyxHQUFhLEVBQUUsQ0FBQztJQUNqQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUxQyx5RkFBeUY7SUFDekYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ25CLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQXZCRCx3Q0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzZXQgb2Ygc3RyaW5ncyB3aGVuIHByaW50ZWQgb24gdGhlIGNvbnNvbGUgcHJvZHVjZXMgYSBiYW5uZXIgbXNnLiBUaGUgbWVzc2FnZSBpcyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdCAtXHJcbiAqICoqKioqKioqKioqKioqKioqKioqXHJcbiAqICoqKiBtc2cgbGluZSB4ICAgKioqXHJcbiAqICoqKiBtc2cgbGluZSB4eXogKioqXHJcbiAqICoqKioqKioqKioqKioqKioqKioqXHJcbiAqXHJcbiAqIFNwZWM6XHJcbiAqIC0gVGhlIHdpZHRoIG9mIGV2ZXJ5IGxpbmUgaXMgZXF1YWwsIGRpY3RhdGVkIGJ5IHRoZSBsb25nZXN0IG1lc3NhZ2Ugc3RyaW5nXHJcbiAqIC0gVGhlIGZpcnN0IGFuZCBsYXN0IGxpbmVzIGFyZSAnKidzIGZvciB0aGUgZnVsbCBsZW5ndGggb2YgdGhlIGxpbmVcclxuICogLSBFYWNoIGxpbmUgaW4gYmV0d2VlbiBpcyBwcmVwZW5kZWQgd2l0aCAnKioqICcgYW5kIGFwcGVuZGVkIHdpdGggJyAqKionXHJcbiAqIC0gVGhlIHRleHQgaXMgaW5kZW50ZWQgbGVmdCwgaS5lLiB3aGl0ZXNwYWNlIGlzIHJpZ2h0LXBhZGRlZCB3aGVuIHRoZSBsZW5ndGggaXMgc2hvcnRlciB0aGFuIHRoZSBsb25nZXN0LlxyXG4gKlxyXG4gKiBAcGFyYW0gbXNncyBhcnJheSBvZiBzdHJpbmdzIGNvbnRhaW5pbmcgdGhlIG1lc3NhZ2UgbGluZXMgdG8gYmUgcHJpbnRlZCBpbiB0aGUgYmFubmVyLiBSZXR1cm5zIGVtcHR5IHN0cmluZyBpZiBhcnJheVxyXG4gKiBpcyBlbXB0eS5cclxuICogQHJldHVybnMgYXJyYXkgb2Ygc3RyaW5ncyBjb250YWluaW5nIHRoZSBtZXNzYWdlIGZvcm1hdHRlZCBhcyBhIGJhbm5lclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFzQmFubmVyKG1zZ3M6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gIGNvbnN0IHByaW50TGVuID0gKHN0cjogc3RyaW5nKSA9PiBjb2xvcnMuc3RyaXAoc3RyKS5sZW5ndGg7XHJcblxyXG4gIGlmIChtc2dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGVmdFBhZCA9ICcqKiogJztcclxuICBjb25zdCByaWdodFBhZCA9ICcgKioqJztcclxuICBjb25zdCBiYW5uZXJXaWR0aCA9XHJcbiAgICBwcmludExlbihsZWZ0UGFkKSArIHByaW50TGVuKHJpZ2h0UGFkKSArIG1zZ3MucmVkdWNlKChhY2MsIG1zZykgPT4gTWF0aC5tYXgoYWNjLCBwcmludExlbihtc2cpKSwgMCk7XHJcblxyXG4gIGNvbnN0IGJhbm5lckxpbmVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGJhbm5lckxpbmVzLnB1c2goJyonLnJlcGVhdChiYW5uZXJXaWR0aCkpO1xyXG5cclxuICAvLyBJbXByb3ZlbWVudDogSWYgYW55ICdtc2cnIGlzIHdpZGVyIHRoYW4gdGhlIHRlcm1pbmFsIHdpZHRoLCB3cmFwIG1lc3NhZ2UgYWNyb3NzIGxpbmVzLlxyXG4gIG1zZ3MuZm9yRWFjaCgobXNnKSA9PiB7XHJcbiAgICBjb25zdCBwYWRkaW5nID0gJyAnLnJlcGVhdChiYW5uZXJXaWR0aCAtIChwcmludExlbihtc2cpICsgcHJpbnRMZW4obGVmdFBhZCkgKyBwcmludExlbihyaWdodFBhZCkpKTtcclxuICAgIGJhbm5lckxpbmVzLnB1c2goJycuY29uY2F0KGxlZnRQYWQsIG1zZywgcGFkZGluZywgcmlnaHRQYWQpKTtcclxuICB9KTtcclxuXHJcbiAgYmFubmVyTGluZXMucHVzaCgnKicucmVwZWF0KGJhbm5lcldpZHRoKSk7XHJcbiAgcmV0dXJuIGJhbm5lckxpbmVzO1xyXG59XHJcbiJdfQ==