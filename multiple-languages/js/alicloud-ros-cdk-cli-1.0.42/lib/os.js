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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBK0M7QUFDL0Msc0NBQXNDO0FBQ3RDLHVDQUFrQztBQU1sQzs7Ozs7R0FLRztBQUNJLEtBQUssVUFBVSxLQUFLLENBQUMsT0FBaUIsRUFBRSxVQUF3QixFQUFFO0lBQ3ZFLGVBQUssQ0FBQyxhQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUQsTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM5RCxHQUFHLE9BQU87UUFDVixLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztLQUNyQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzdDLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFFaEMsbUNBQW1DO1FBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNsQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU1QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDZCxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNsRDtpQkFBTTtnQkFDTCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNuRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBNUJELHNCQTRCQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLGlCQUFpQixDQUFDLEdBQWE7SUFDdEMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtRQUNoQyxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ3BGO1NBQU07UUFDTCxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUMzRTtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsUUFBUSxDQUFDLEdBQWEsRUFBRSxhQUFxQyxFQUFFLFFBQStCO0lBQ3JHLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxXQUFXLENBQUMsR0FBRyxLQUFlO0lBQ3JDLE9BQU8sQ0FBQyxHQUFXLEVBQUUsRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsV0FBVyxDQUFDLENBQVM7SUFDNUIsa0JBQWtCO0lBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDbEIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsYUFBYSxDQUFDLENBQVM7SUFDOUIscUVBQXFFO0lBQ3JFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2Isb0NBQW9DO0lBQ3BDLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RCxPQUFPLENBQUM7U0FDTCxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ1QsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnLi9sb2dnaW5nJztcblxuZXhwb3J0IGludGVyZmFjZSBTaGVsbE9wdGlvbnMgZXh0ZW5kcyBjaGlsZF9wcm9jZXNzLlNwYXduT3B0aW9ucyB7XG4gIHF1aWV0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBPUyBoZWxwZXJzXG4gKlxuICogU2hlbGwgZnVuY3Rpb24gd2hpY2ggYm90aCBwcmludHMgdG8gc3Rkb3V0IGFuZCBjb2xsZWN0cyB0aGUgb3V0cHV0IGludG8gYVxuICogc3RyaW5nLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hlbGwoY29tbWFuZDogc3RyaW5nW10sIG9wdGlvbnM6IFNoZWxsT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgZGVidWcoYEV4ZWN1dGluZyAke2NvbG9ycy5ibHVlKHJlbmRlckNvbW1hbmRMaW5lKGNvbW1hbmQpKX1gKTtcbiAgY29uc3QgY2hpbGQgPSBjaGlsZF9wcm9jZXNzLnNwYXduKGNvbW1hbmRbMF0sIGNvbW1hbmQuc2xpY2UoMSksIHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSxcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHN0ZG91dCA9IG5ldyBBcnJheTxhbnk+KCk7XG5cbiAgICAvLyBCb3RoIHdyaXRlIHRvIHN0ZG91dCBhbmQgY29sbGVjdFxuICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLnF1aWV0KSB7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGNodW5rKTtcbiAgICAgIH1cbiAgICAgIHN0ZG91dC5wdXNoKGNodW5rKTtcbiAgICB9KTtcblxuICAgIGNoaWxkLm9uY2UoJ2Vycm9yJywgcmVqZWN0KTtcblxuICAgIGNoaWxkLm9uY2UoJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgICAgaWYgKGNvZGUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KHN0ZG91dCkudG9TdHJpbmcoJ3V0Zi04JykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgJHtyZW5kZXJDb21tYW5kTGluZShjb21tYW5kKX0gZXhpdGVkIHdpdGggZXJyb3IgY29kZSAke2NvZGV9YCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGNvbW1hbmQgbGluZSBhcyBhIHN0cmluZ1xuICpcbiAqIFByb2JhYmx5IG1pc3Npbmcgc29tZSBjYXNlcyBidXQgZ2l2aW5nIGl0IGEgZ29vZCBlZmZvcnQuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbW1hbmRMaW5lKGNtZDogc3RyaW5nW10pIHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICd3aW4zMicpIHtcbiAgICByZXR1cm4gZG9SZW5kZXIoY21kLCBoYXNBbnlDaGFycygnICcsICdcXFxcJywgJyEnLCAnXCInLCBcIidcIiwgJyYnLCAnJCcpLCBwb3NpeEVzY2FwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvUmVuZGVyKGNtZCwgaGFzQW55Q2hhcnMoJyAnLCAnXCInLCAnJicsICdeJywgJyUnKSwgd2luZG93c0VzY2FwZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW5kZXIgYSBVTklYIGNvbW1hbmQgbGluZVxuICovXG5mdW5jdGlvbiBkb1JlbmRlcihjbWQ6IHN0cmluZ1tdLCBuZWVkc0VzY2FwaW5nOiAoeDogc3RyaW5nKSA9PiBib29sZWFuLCBkb0VzY2FwZTogKHg6IHN0cmluZykgPT4gc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNtZC5tYXAoKHgpID0+IChuZWVkc0VzY2FwaW5nKHgpID8gZG9Fc2NhcGUoeCkgOiB4KSkuam9pbignICcpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIHByZWRpY2F0ZSB0aGF0IGNoZWNrcyBpZiBhIHN0cmluZyBoYXMgYW55IG9mIHRoZSBpbmRpY2F0ZWQgY2hhcnMgaW4gaXRcbiAqL1xuZnVuY3Rpb24gaGFzQW55Q2hhcnMoLi4uY2hhcnM6IHN0cmluZ1tdKTogKHg6IHN0cmluZykgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gY2hhcnMuc29tZSgoYykgPT4gc3RyLmluZGV4T2YoYykgIT09IC0xKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBzaGVsbCBhcmd1bWVudCBmb3IgUE9TSVggc2hlbGxzXG4gKlxuICogV3JhcHBpbmcgaW4gc2luZ2xlIHF1b3RlcyBhbmQgZXNjYXBpbmcgc2luZ2xlIHF1b3RlcyBpbnNpZGUgd2lsbCBkbyBpdCBmb3IgdXMuXG4gKi9cbmZ1bmN0aW9uIHBvc2l4RXNjYXBlKHg6IHN0cmluZykge1xuICAvLyBUdXJuICcgLT4gJ1wiJ1wiJ1xuICB4ID0geC5yZXBsYWNlKFwiJ1wiLCBcIidcXFwiJ1xcXCInXCIpO1xuICByZXR1cm4gYCcke3h9J2A7XG59XG5cbi8qKlxuICogRXNjYXBlIGEgc2hlbGwgYXJndW1lbnQgZm9yIGNtZC5leGVcbiAqXG4gKiBUaGlzIGlzIGhvdyB0byBkbyBpdCByaWdodCwgYnV0IEknbSBub3QgZm9sbG93aW5nIGV2ZXJ5dGhpbmc6XG4gKlxuICogaHR0cHM6Ly9ibG9ncy5tc2RuLm1pY3Jvc29mdC5jb20vdHdpc3R5bGl0dGxlcGFzc2FnZXNhbGxhbGlrZS8yMDExLzA0LzIzL2V2ZXJ5b25lLXF1b3Rlcy1jb21tYW5kLWxpbmUtYXJndW1lbnRzLXRoZS13cm9uZy13YXkvXG4gKi9cbmZ1bmN0aW9uIHdpbmRvd3NFc2NhcGUoeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gRmlyc3Qgc3Vycm91bmQgYnkgZG91YmxlIHF1b3RlcywgaWdub3JlIHRoZSBwYXJ0IGFib3V0IGJhY2tzbGFzaGVzXG4gIHggPSBgXCIke3h9XCJgO1xuICAvLyBOb3cgZXNjYXBlIGFsbCBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgY29uc3Qgc2hlbGxNZXRhID0gbmV3IFNldDxzdHJpbmc+KFsnXCInLCAnJicsICdeJywgJyUnXSk7XG4gIHJldHVybiB4XG4gICAgLnNwbGl0KCcnKVxuICAgIC5tYXAoKGMpID0+IChzaGVsbE1ldGEuaGFzKHgpID8gJ14nICsgYyA6IGMpKVxuICAgIC5qb2luKCcnKTtcbn1cbiJdfQ==