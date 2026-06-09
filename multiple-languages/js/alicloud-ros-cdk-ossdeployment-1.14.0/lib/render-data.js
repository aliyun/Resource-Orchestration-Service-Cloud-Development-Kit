"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderData = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Renders the given string data as deployable content with markers substituted
 * for all "Ref" and "Fn::GetAtt" objects.
 *
 * @param scope Construct scope
 * @param data The input data
 * @returns The markered text (`text`) and a map that maps marker names to their
 * values (`markers`).
 */
function renderData(scope, data) {
    const obj = ros.Stack.of(scope).resolve(data);
    if (typeof (obj) === 'string') {
        return { text: obj, markers: {} };
    }
    if (typeof (obj) !== 'object') {
        throw new Error(`Unexpected: after resolve() data must either be a string or a ROS intrinsic. Got: ${JSON.stringify(obj)}`);
    }
    let markerIndex = 0;
    const markers = {};
    const result = new Array();
    const fnJoin = obj['Fn::Join'];
    if (fnJoin) {
        const sep = fnJoin[0];
        const parts = fnJoin[1];
        if (sep !== '') {
            throw new Error(`Unexpected "Fn::Join", expecting separator to be an empty string but got "${sep}"`);
        }
        for (const part of parts) {
            if (typeof (part) === 'string') {
                result.push(part);
                continue;
            }
            if (typeof (part) === 'object') {
                addMarker(part);
                continue;
            }
            throw new Error(`Unexpected "Fn::Join" part, expecting string or object but got ${typeof (part)}`);
        }
    }
    else if (obj.Ref || obj['Fn::GetAtt'] || obj['Fn::Select']) {
        addMarker(obj);
    }
    else {
        throw new Error('Unexpected: Expecting `resolve()` to return "Fn::Join", "Ref" or "Fn::GetAtt"');
    }
    function addMarker(part) {
        const keys = Object.keys(part);
        const acceptedRosFns = ['Ref', 'Fn::GetAtt', 'Fn::Select'];
        if (keys.length !== 1 || !acceptedRosFns.includes(keys[0])) {
            const stringifiedAcceptedRosFns = acceptedRosFns.map((fn) => `"${fn}"`).join(' or ');
            throw new Error(`Invalid ROS reference. Key must start with any of ${stringifiedAcceptedRosFns}. Got ${JSON.stringify(part)}`);
        }
        const marker = `<<marker:0xbaba:${markerIndex++}>>`;
        result.push(marker);
        markers[marker] = part;
    }
    return { text: result.join(''), markers };
}
exports.renderData = renderData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW5kZXItZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFPOUM7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixVQUFVLENBQUMsS0FBb0IsRUFBRSxJQUFZO0lBQzNELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDNUIsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQ25DO0lBRUQsSUFBSSxPQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMscUZBQXFGLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzdIO0lBRUQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sT0FBTyxHQUErQixFQUFFLENBQUM7SUFDL0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztJQUNuQyxNQUFNLE1BQU0sR0FBdUIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRW5ELElBQUksTUFBTSxFQUFFO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDZFQUE2RSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3RHO1FBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDeEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixTQUFTO2FBQ1Y7WUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsU0FBUzthQUNWO1lBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwRztLQUVGO1NBQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDNUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hCO1NBQU07UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLCtFQUErRSxDQUFDLENBQUM7S0FDbEc7SUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUE2QjtRQUM5QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLE1BQU0sY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxRCxNQUFNLHlCQUF5QixHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckYsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQseUJBQXlCLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDaEk7UUFFRCxNQUFNLE1BQU0sR0FBRyxtQkFBbUIsV0FBVyxFQUFFLElBQUksQ0FBQztRQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBekRELGdDQXlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50IHtcbiAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICByZWFkb25seSBtYXJrZXJzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIHN0cmluZyBkYXRhIGFzIGRlcGxveWFibGUgY29udGVudCB3aXRoIG1hcmtlcnMgc3Vic3RpdHV0ZWRcbiAqIGZvciBhbGwgXCJSZWZcIiBhbmQgXCJGbjo6R2V0QXR0XCIgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0gc2NvcGUgQ29uc3RydWN0IHNjb3BlXG4gKiBAcGFyYW0gZGF0YSBUaGUgaW5wdXQgZGF0YVxuICogQHJldHVybnMgVGhlIG1hcmtlcmVkIHRleHQgKGB0ZXh0YCkgYW5kIGEgbWFwIHRoYXQgbWFwcyBtYXJrZXIgbmFtZXMgdG8gdGhlaXJcbiAqIHZhbHVlcyAoYG1hcmtlcnNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRhdGEoc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGRhdGE6IHN0cmluZyk6IENvbnRlbnQge1xuICBjb25zdCBvYmogPSByb3MuU3RhY2sub2Yoc2NvcGUpLnJlc29sdmUoZGF0YSk7XG4gIGlmICh0eXBlb2Yob2JqKSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4geyB0ZXh0OiBvYmosIG1hcmtlcnM6IHt9IH07XG4gIH1cblxuICBpZiAodHlwZW9mKG9iaikgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkOiBhZnRlciByZXNvbHZlKCkgZGF0YSBtdXN0IGVpdGhlciBiZSBhIHN0cmluZyBvciBhIFJPUyBpbnRyaW5zaWMuIEdvdDogJHtKU09OLnN0cmluZ2lmeShvYmopfWApO1xuICB9XG5cbiAgbGV0IG1hcmtlckluZGV4ID0gMDtcbiAgY29uc3QgbWFya2VyczogUmVjb3JkPHN0cmluZywgRm5Kb2luUGFydD4gPSB7fTtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgY29uc3QgZm5Kb2luOiBGbkpvaW4gfCB1bmRlZmluZWQgPSBvYmpbJ0ZuOjpKb2luJ107XG5cbiAgaWYgKGZuSm9pbikge1xuICAgIGNvbnN0IHNlcCA9IGZuSm9pblswXTtcbiAgICBjb25zdCBwYXJ0cyA9IGZuSm9pblsxXTtcblxuICAgIGlmIChzZXAgIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgXCJGbjo6Sm9pblwiLCBleHBlY3Rpbmcgc2VwYXJhdG9yIHRvIGJlIGFuIGVtcHR5IHN0cmluZyBidXQgZ290IFwiJHtzZXB9XCJgKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIGlmICh0eXBlb2YgKHBhcnQpID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXN1bHQucHVzaChwYXJ0KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgKHBhcnQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBhZGRNYXJrZXIocGFydCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgXCJGbjo6Sm9pblwiIHBhcnQsIGV4cGVjdGluZyBzdHJpbmcgb3Igb2JqZWN0IGJ1dCBnb3QgJHt0eXBlb2YgKHBhcnQpfWApO1xuICAgIH1cblxuICB9IGVsc2UgaWYgKG9iai5SZWYgfHwgb2JqWydGbjo6R2V0QXR0J10gfHwgb2JqWydGbjo6U2VsZWN0J10pIHtcbiAgICBhZGRNYXJrZXIob2JqKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQ6IEV4cGVjdGluZyBgcmVzb2x2ZSgpYCB0byByZXR1cm4gXCJGbjo6Sm9pblwiLCBcIlJlZlwiIG9yIFwiRm46OkdldEF0dFwiJyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRNYXJrZXIocGFydDogUmVmIHwgR2V0QXR0IHwgRm5TZWxlY3QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGFydCk7XG4gICAgY29uc3QgYWNjZXB0ZWRSb3NGbnMgPSBbJ1JlZicsICdGbjo6R2V0QXR0JywgJ0ZuOjpTZWxlY3QnXTtcbiAgICBpZiAoa2V5cy5sZW5ndGggIT09IDEgfHwgIWFjY2VwdGVkUm9zRm5zLmluY2x1ZGVzKGtleXNbMF0pKSB7XG4gICAgICBjb25zdCBzdHJpbmdpZmllZEFjY2VwdGVkUm9zRm5zID0gYWNjZXB0ZWRSb3NGbnMubWFwKChmbikgPT4gYFwiJHtmbn1cImApLmpvaW4oJyBvciAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBST1MgcmVmZXJlbmNlLiBLZXkgbXVzdCBzdGFydCB3aXRoIGFueSBvZiAke3N0cmluZ2lmaWVkQWNjZXB0ZWRSb3NGbnN9LiBHb3QgJHtKU09OLnN0cmluZ2lmeShwYXJ0KX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXIgPSBgPDxtYXJrZXI6MHhiYWJhOiR7bWFya2VySW5kZXgrK30+PmA7XG4gICAgcmVzdWx0LnB1c2gobWFya2VyKTtcbiAgICBtYXJrZXJzW21hcmtlcl0gPSBwYXJ0O1xuICB9XG5cbiAgcmV0dXJuIHsgdGV4dDogcmVzdWx0LmpvaW4oJycpLCBtYXJrZXJzIH07XG59XG5cbnR5cGUgRm5Kb2luID0gW3N0cmluZywgRm5Kb2luUGFydFtdXTtcbnR5cGUgRm5Kb2luUGFydCA9IHN0cmluZyB8IFJlZiB8IEdldEF0dCB8IEZuU2VsZWN0O1xudHlwZSBSZWYgPSB7IFJlZjogc3RyaW5nIH07XG50eXBlIEdldEF0dCA9IHsgJ0ZuOjpHZXRBdHQnOiBbc3RyaW5nLCBzdHJpbmddIH07XG50eXBlIEZuU3BsaXQgPSB7ICdGbjo6U3BsaXQnOiBbc3RyaW5nLCBzdHJpbmcgfCBSZWZdIH07XG50eXBlIEZuU2VsZWN0ID0geyAnRm46OlNlbGVjdCc6IFtudW1iZXIsIHN0cmluZ1tdIHwgRm5TcGxpdF0gfTsiXX0=