"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shell = void 0;
const child_process = require("child_process");
const colors = require("colors/safe");
const logging_1 = require("./logging");
/**
 * OS helpers
 *
 * Shell function which both prints to stdout and collects the output into a
 * string.
 */
async function shell(command, options = {}) {
    logging_1.debug(`Executing ${colors.blue(renderCommandLine(command))}`);
    const child = child_process.spawn(command[0], command.slice(1), {
        ...options,
        stdio: ['ignore', 'pipe', 'inherit'],
    });
    return new Promise((resolve, reject) => {
        const stdout = new Array();
        // Both write to stdout and collect
        child.stdout.on('data', (chunk) => {
            if (!options.quiet) {
                process.stdout.write(chunk);
            }
            stdout.push(chunk);
        });
        child.once('error', reject);
        child.once('exit', (code) => {
            if (code === 0) {
                resolve(Buffer.concat(stdout).toString('utf-8'));
            }
            else {
                reject(new Error(`${renderCommandLine(command)} exited with error code ${code}`));
            }
        });
    });
}
exports.shell = shell;
/**
 * Render the given command line as a string
 *
 * Probably missing some cases but giving it a good effort.
 */
function renderCommandLine(cmd) {
    if (process.platform !== 'win32') {
        return doRender(cmd, hasAnyChars(' ', '\\', '!', '"', "'", '&', '$'), posixEscape);
    }
    else {
        return doRender(cmd, hasAnyChars(' ', '"', '&', '^', '%'), windowsEscape);
    }
}
/**
 * Render a UNIX command line
 */
function doRender(cmd, needsEscaping, doEscape) {
    return cmd.map((x) => (needsEscaping(x) ? doEscape(x) : x)).join(' ');
}
/**
 * Return a predicate that checks if a string has any of the indicated chars in it
 */
function hasAnyChars(...chars) {
    return (str) => {
        return chars.some((c) => str.indexOf(c) !== -1);
    };
}
/**
 * Escape a shell argument for POSIX shells
 *
 * Wrapping in single quotes and escaping single quotes inside will do it for us.
 */
function posixEscape(x) {
    // Turn ' -> '"'"'
    x = x.replace("'", "'\"'\"'");
    return `'${x}'`;
}
/**
 * Escape a shell argument for cmd.exe
 *
 * This is how to do it right, but I'm not following everything:
 *
 * https://blogs.msdn.microsoft.com/twistylittlepassagesallalike/2011/04/23/everyone-quotes-command-line-arguments-the-wrong-way/
 */
function windowsEscape(x) {
    // First surround by double quotes, ignore the part about backslashes
    x = `"${x}"`;
    // Now escape all special characters
    const shellMeta = new Set(['"', '&', '^', '%']);
    return x
        .split('')
        .map((c) => (shellMeta.has(x) ? '^' + c : c))
        .join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBK0M7QUFDL0Msc0NBQXNDO0FBQ3RDLHVDQUFrQztBQU1sQzs7Ozs7R0FLRztBQUNJLEtBQUssVUFBVSxLQUFLLENBQUMsT0FBaUIsRUFBRSxVQUF3QixFQUFFO0lBQ3ZFLGVBQUssQ0FBQyxhQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUQsTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM5RCxHQUFHLE9BQU87UUFDVixLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztLQUNyQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzdDLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFFaEMsbUNBQW1DO1FBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNsQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU1QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDZCxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNsRDtpQkFBTTtnQkFDTCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNuRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBNUJELHNCQTRCQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLGlCQUFpQixDQUFDLEdBQWE7SUFDdEMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtRQUNoQyxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ3BGO1NBQU07UUFDTCxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUMzRTtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsUUFBUSxDQUFDLEdBQWEsRUFBRSxhQUFxQyxFQUFFLFFBQStCO0lBQ3JHLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxXQUFXLENBQUMsR0FBRyxLQUFlO0lBQ3JDLE9BQU8sQ0FBQyxHQUFXLEVBQUUsRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsV0FBVyxDQUFDLENBQVM7SUFDNUIsa0JBQWtCO0lBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDbEIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsYUFBYSxDQUFDLENBQVM7SUFDOUIscUVBQXFFO0lBQ3JFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2Isb0NBQW9DO0lBQ3BDLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RCxPQUFPLENBQUM7U0FDTCxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ1QsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xyXG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJy4vbG9nZ2luZyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNoZWxsT3B0aW9ucyBleHRlbmRzIGNoaWxkX3Byb2Nlc3MuU3Bhd25PcHRpb25zIHtcclxuICBxdWlldD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPUyBoZWxwZXJzXHJcbiAqXHJcbiAqIFNoZWxsIGZ1bmN0aW9uIHdoaWNoIGJvdGggcHJpbnRzIHRvIHN0ZG91dCBhbmQgY29sbGVjdHMgdGhlIG91dHB1dCBpbnRvIGFcclxuICogc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNoZWxsKGNvbW1hbmQ6IHN0cmluZ1tdLCBvcHRpb25zOiBTaGVsbE9wdGlvbnMgPSB7fSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgZGVidWcoYEV4ZWN1dGluZyAke2NvbG9ycy5ibHVlKHJlbmRlckNvbW1hbmRMaW5lKGNvbW1hbmQpKX1gKTtcclxuICBjb25zdCBjaGlsZCA9IGNoaWxkX3Byb2Nlc3Muc3Bhd24oY29tbWFuZFswXSwgY29tbWFuZC5zbGljZSgxKSwge1xyXG4gICAgLi4ub3B0aW9ucyxcclxuICAgIHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3Qgc3Rkb3V0ID0gbmV3IEFycmF5PGFueT4oKTtcclxuXHJcbiAgICAvLyBCb3RoIHdyaXRlIHRvIHN0ZG91dCBhbmQgY29sbGVjdFxyXG4gICAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XHJcbiAgICAgIGlmICghb3B0aW9ucy5xdWlldCkge1xyXG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGNodW5rKTtcclxuICAgICAgfVxyXG4gICAgICBzdGRvdXQucHVzaChjaHVuayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGlsZC5vbmNlKCdlcnJvcicsIHJlamVjdCk7XHJcblxyXG4gICAgY2hpbGQub25jZSgnZXhpdCcsIChjb2RlKSA9PiB7XHJcbiAgICAgIGlmIChjb2RlID09PSAwKSB7XHJcbiAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KHN0ZG91dCkudG9TdHJpbmcoJ3V0Zi04JykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYCR7cmVuZGVyQ29tbWFuZExpbmUoY29tbWFuZCl9IGV4aXRlZCB3aXRoIGVycm9yIGNvZGUgJHtjb2RlfWApKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGNvbW1hbmQgbGluZSBhcyBhIHN0cmluZ1xyXG4gKlxyXG4gKiBQcm9iYWJseSBtaXNzaW5nIHNvbWUgY2FzZXMgYnV0IGdpdmluZyBpdCBhIGdvb2QgZWZmb3J0LlxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyQ29tbWFuZExpbmUoY21kOiBzdHJpbmdbXSkge1xyXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnd2luMzInKSB7XHJcbiAgICByZXR1cm4gZG9SZW5kZXIoY21kLCBoYXNBbnlDaGFycygnICcsICdcXFxcJywgJyEnLCAnXCInLCBcIidcIiwgJyYnLCAnJCcpLCBwb3NpeEVzY2FwZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBkb1JlbmRlcihjbWQsIGhhc0FueUNoYXJzKCcgJywgJ1wiJywgJyYnLCAnXicsICclJyksIHdpbmRvd3NFc2NhcGUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmRlciBhIFVOSVggY29tbWFuZCBsaW5lXHJcbiAqL1xyXG5mdW5jdGlvbiBkb1JlbmRlcihjbWQ6IHN0cmluZ1tdLCBuZWVkc0VzY2FwaW5nOiAoeDogc3RyaW5nKSA9PiBib29sZWFuLCBkb0VzY2FwZTogKHg6IHN0cmluZykgPT4gc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gY21kLm1hcCgoeCkgPT4gKG5lZWRzRXNjYXBpbmcoeCkgPyBkb0VzY2FwZSh4KSA6IHgpKS5qb2luKCcgJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYSBwcmVkaWNhdGUgdGhhdCBjaGVja3MgaWYgYSBzdHJpbmcgaGFzIGFueSBvZiB0aGUgaW5kaWNhdGVkIGNoYXJzIGluIGl0XHJcbiAqL1xyXG5mdW5jdGlvbiBoYXNBbnlDaGFycyguLi5jaGFyczogc3RyaW5nW10pOiAoeDogc3RyaW5nKSA9PiBib29sZWFuIHtcclxuICByZXR1cm4gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gY2hhcnMuc29tZSgoYykgPT4gc3RyLmluZGV4T2YoYykgIT09IC0xKTtcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogRXNjYXBlIGEgc2hlbGwgYXJndW1lbnQgZm9yIFBPU0lYIHNoZWxsc1xyXG4gKlxyXG4gKiBXcmFwcGluZyBpbiBzaW5nbGUgcXVvdGVzIGFuZCBlc2NhcGluZyBzaW5nbGUgcXVvdGVzIGluc2lkZSB3aWxsIGRvIGl0IGZvciB1cy5cclxuICovXHJcbmZ1bmN0aW9uIHBvc2l4RXNjYXBlKHg6IHN0cmluZykge1xyXG4gIC8vIFR1cm4gJyAtPiAnXCInXCInXHJcbiAgeCA9IHgucmVwbGFjZShcIidcIiwgXCInXFxcIidcXFwiJ1wiKTtcclxuICByZXR1cm4gYCcke3h9J2A7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFc2NhcGUgYSBzaGVsbCBhcmd1bWVudCBmb3IgY21kLmV4ZVxyXG4gKlxyXG4gKiBUaGlzIGlzIGhvdyB0byBkbyBpdCByaWdodCwgYnV0IEknbSBub3QgZm9sbG93aW5nIGV2ZXJ5dGhpbmc6XHJcbiAqXHJcbiAqIGh0dHBzOi8vYmxvZ3MubXNkbi5taWNyb3NvZnQuY29tL3R3aXN0eWxpdHRsZXBhc3NhZ2VzYWxsYWxpa2UvMjAxMS8wNC8yMy9ldmVyeW9uZS1xdW90ZXMtY29tbWFuZC1saW5lLWFyZ3VtZW50cy10aGUtd3Jvbmctd2F5L1xyXG4gKi9cclxuZnVuY3Rpb24gd2luZG93c0VzY2FwZSh4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vIEZpcnN0IHN1cnJvdW5kIGJ5IGRvdWJsZSBxdW90ZXMsIGlnbm9yZSB0aGUgcGFydCBhYm91dCBiYWNrc2xhc2hlc1xyXG4gIHggPSBgXCIke3h9XCJgO1xyXG4gIC8vIE5vdyBlc2NhcGUgYWxsIHNwZWNpYWwgY2hhcmFjdGVyc1xyXG4gIGNvbnN0IHNoZWxsTWV0YSA9IG5ldyBTZXQ8c3RyaW5nPihbJ1wiJywgJyYnLCAnXicsICclJ10pO1xyXG4gIHJldHVybiB4XHJcbiAgICAuc3BsaXQoJycpXHJcbiAgICAubWFwKChjKSA9PiAoc2hlbGxNZXRhLmhhcyh4KSA/ICdeJyArIGMgOiBjKSlcclxuICAgIC5qb2luKCcnKTtcclxufVxyXG4iXX0=