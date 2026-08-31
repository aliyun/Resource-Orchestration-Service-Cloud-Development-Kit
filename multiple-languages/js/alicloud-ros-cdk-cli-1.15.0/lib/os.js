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
    (0, logging_1.debug)(`Executing ${colors.blue(renderCommandLine(command))}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBK0M7QUFDL0Msc0NBQXNDO0FBQ3RDLHVDQUFrQztBQU1sQzs7Ozs7R0FLRztBQUNJLEtBQUssVUFBVSxLQUFLLENBQUMsT0FBaUIsRUFBRSxVQUF3QixFQUFFO0lBQ3ZFLElBQUEsZUFBSyxFQUFDLGFBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RCxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzlELEdBQUcsT0FBTztRQUNWLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO0tBQ3JDLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUVoQyxtQ0FBbUM7UUFDbkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUIsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ25GO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUE1QkQsc0JBNEJDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsaUJBQWlCLENBQUMsR0FBYTtJQUN0QyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1FBQ2hDLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDcEY7U0FBTTtRQUNMLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0tBQzNFO0FBQ0gsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxRQUFRLENBQUMsR0FBYSxFQUFFLGFBQXFDLEVBQUUsUUFBK0I7SUFDckcsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFdBQVcsQ0FBQyxHQUFHLEtBQWU7SUFDckMsT0FBTyxDQUFDLEdBQVcsRUFBRSxFQUFFO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBUyxXQUFXLENBQUMsQ0FBUztJQUM1QixrQkFBa0I7SUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNsQixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxhQUFhLENBQUMsQ0FBUztJQUM5QixxRUFBcUU7SUFDckUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDYixvQ0FBb0M7SUFDcEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE9BQU8sQ0FBQztTQUNMLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDVCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICcuL2xvZ2dpbmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoZWxsT3B0aW9ucyBleHRlbmRzIGNoaWxkX3Byb2Nlc3MuU3Bhd25PcHRpb25zIHtcbiAgcXVpZXQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIE9TIGhlbHBlcnNcbiAqXG4gKiBTaGVsbCBmdW5jdGlvbiB3aGljaCBib3RoIHByaW50cyB0byBzdGRvdXQgYW5kIGNvbGxlY3RzIHRoZSBvdXRwdXQgaW50byBhXG4gKiBzdHJpbmcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaGVsbChjb21tYW5kOiBzdHJpbmdbXSwgb3B0aW9uczogU2hlbGxPcHRpb25zID0ge30pOiBQcm9taXNlPHN0cmluZz4ge1xuICBkZWJ1ZyhgRXhlY3V0aW5nICR7Y29sb3JzLmJsdWUocmVuZGVyQ29tbWFuZExpbmUoY29tbWFuZCkpfWApO1xuICBjb25zdCBjaGlsZCA9IGNoaWxkX3Byb2Nlc3Muc3Bhd24oY29tbWFuZFswXSwgY29tbWFuZC5zbGljZSgxKSwge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgc3RkaW86IFsnaWdub3JlJywgJ3BpcGUnLCAnaW5oZXJpdCddLFxuICB9KTtcblxuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgc3Rkb3V0ID0gbmV3IEFycmF5PGFueT4oKTtcblxuICAgIC8vIEJvdGggd3JpdGUgdG8gc3Rkb3V0IGFuZCBjb2xsZWN0XG4gICAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMucXVpZXQpIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoY2h1bmspO1xuICAgICAgfVxuICAgICAgc3Rkb3V0LnB1c2goY2h1bmspO1xuICAgIH0pO1xuXG4gICAgY2hpbGQub25jZSgnZXJyb3InLCByZWplY3QpO1xuXG4gICAgY2hpbGQub25jZSgnZXhpdCcsIChjb2RlKSA9PiB7XG4gICAgICBpZiAoY29kZSA9PT0gMCkge1xuICAgICAgICByZXNvbHZlKEJ1ZmZlci5jb25jYXQoc3Rkb3V0KS50b1N0cmluZygndXRmLTgnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGAke3JlbmRlckNvbW1hbmRMaW5lKGNvbW1hbmQpfSBleGl0ZWQgd2l0aCBlcnJvciBjb2RlICR7Y29kZX1gKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gY29tbWFuZCBsaW5lIGFzIGEgc3RyaW5nXG4gKlxuICogUHJvYmFibHkgbWlzc2luZyBzb21lIGNhc2VzIGJ1dCBnaXZpbmcgaXQgYSBnb29kIGVmZm9ydC5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29tbWFuZExpbmUoY21kOiBzdHJpbmdbXSkge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJykge1xuICAgIHJldHVybiBkb1JlbmRlcihjbWQsIGhhc0FueUNoYXJzKCcgJywgJ1xcXFwnLCAnIScsICdcIicsIFwiJ1wiLCAnJicsICckJyksIHBvc2l4RXNjYXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZG9SZW5kZXIoY21kLCBoYXNBbnlDaGFycygnICcsICdcIicsICcmJywgJ14nLCAnJScpLCB3aW5kb3dzRXNjYXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbmRlciBhIFVOSVggY29tbWFuZCBsaW5lXG4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKGNtZDogc3RyaW5nW10sIG5lZWRzRXNjYXBpbmc6ICh4OiBzdHJpbmcpID0+IGJvb2xlYW4sIGRvRXNjYXBlOiAoeDogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gY21kLm1hcCgoeCkgPT4gKG5lZWRzRXNjYXBpbmcoeCkgPyBkb0VzY2FwZSh4KSA6IHgpKS5qb2luKCcgJyk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgcHJlZGljYXRlIHRoYXQgY2hlY2tzIGlmIGEgc3RyaW5nIGhhcyBhbnkgb2YgdGhlIGluZGljYXRlZCBjaGFycyBpbiBpdFxuICovXG5mdW5jdGlvbiBoYXNBbnlDaGFycyguLi5jaGFyczogc3RyaW5nW10pOiAoeDogc3RyaW5nKSA9PiBib29sZWFuIHtcbiAgcmV0dXJuIChzdHI6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBjaGFycy5zb21lKChjKSA9PiBzdHIuaW5kZXhPZihjKSAhPT0gLTEpO1xuICB9O1xufVxuXG4vKipcbiAqIEVzY2FwZSBhIHNoZWxsIGFyZ3VtZW50IGZvciBQT1NJWCBzaGVsbHNcbiAqXG4gKiBXcmFwcGluZyBpbiBzaW5nbGUgcXVvdGVzIGFuZCBlc2NhcGluZyBzaW5nbGUgcXVvdGVzIGluc2lkZSB3aWxsIGRvIGl0IGZvciB1cy5cbiAqL1xuZnVuY3Rpb24gcG9zaXhFc2NhcGUoeDogc3RyaW5nKSB7XG4gIC8vIFR1cm4gJyAtPiAnXCInXCInXG4gIHggPSB4LnJlcGxhY2UoXCInXCIsIFwiJ1xcXCInXFxcIidcIik7XG4gIHJldHVybiBgJyR7eH0nYDtcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBzaGVsbCBhcmd1bWVudCBmb3IgY21kLmV4ZVxuICpcbiAqIFRoaXMgaXMgaG93IHRvIGRvIGl0IHJpZ2h0LCBidXQgSSdtIG5vdCBmb2xsb3dpbmcgZXZlcnl0aGluZzpcbiAqXG4gKiBodHRwczovL2Jsb2dzLm1zZG4ubWljcm9zb2Z0LmNvbS90d2lzdHlsaXR0bGVwYXNzYWdlc2FsbGFsaWtlLzIwMTEvMDQvMjMvZXZlcnlvbmUtcXVvdGVzLWNvbW1hbmQtbGluZS1hcmd1bWVudHMtdGhlLXdyb25nLXdheS9cbiAqL1xuZnVuY3Rpb24gd2luZG93c0VzY2FwZSh4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBGaXJzdCBzdXJyb3VuZCBieSBkb3VibGUgcXVvdGVzLCBpZ25vcmUgdGhlIHBhcnQgYWJvdXQgYmFja3NsYXNoZXNcbiAgeCA9IGBcIiR7eH1cImA7XG4gIC8vIE5vdyBlc2NhcGUgYWxsIHNwZWNpYWwgY2hhcmFjdGVyc1xuICBjb25zdCBzaGVsbE1ldGEgPSBuZXcgU2V0PHN0cmluZz4oWydcIicsICcmJywgJ14nLCAnJSddKTtcbiAgcmV0dXJuIHhcbiAgICAuc3BsaXQoJycpXG4gICAgLm1hcCgoYykgPT4gKHNoZWxsTWV0YS5oYXMoeCkgPyAnXicgKyBjIDogYykpXG4gICAgLmpvaW4oJycpO1xufVxuIl19