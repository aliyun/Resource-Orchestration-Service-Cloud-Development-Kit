"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadStructuredFile = exports.serializeStructure = exports.deserializeStructure = exports.fromYAML = exports.toYAML = void 0;
const fs = require("fs-extra");
const YAML = require("yaml");
/* eslint-disable @typescript-eslint/no-require-imports */
// tslint:disable-next-line: no-var-requires
const yamlTypes = require("yaml/types");
/* eslint-enable */
/**
 * Stringify to YAML
 */
function toYAML(obj) {
    const oldFold = yamlTypes.strOptions.fold.lineWidth;
    try {
        yamlTypes.strOptions.fold.lineWidth = 0;
        return YAML.stringify(obj, { schema: 'yaml-1.1' });
    }
    finally {
        yamlTypes.strOptions.fold.lineWidth = oldFold;
    }
}
exports.toYAML = toYAML;
/**
 * Parse YAML
 */
function fromYAML(str) {
    return YAML.parse(str, { schema: 'yaml-1.1' });
}
exports.fromYAML = fromYAML;
/**
 * Parse either YAML or JSON
 */
function deserializeStructure(str) {
    try {
        return fromYAML(str);
    }
    catch (e) {
        // This shouldn't really ever happen I think, but it's the code we had so I'm leaving it.
        return JSON.parse(str);
    }
}
exports.deserializeStructure = deserializeStructure;
/**
 * Serialize to either YAML or JSON
 */
function serializeStructure(object, json) {
    if (json) {
        return JSON.stringify(object, undefined, 2);
    }
    else {
        return toYAML(object);
    }
}
exports.serializeStructure = serializeStructure;
/**
 * Load a YAML or JSON file from disk
 */
async function loadStructuredFile(fileName) {
    const contents = await fs.readFile(fileName, { encoding: 'utf-8' });
    return deserializeStructure(contents);
}
exports.loadStructuredFile = loadStructuredFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VyaWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFFN0IsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyx3Q0FBeUM7QUFDekMsbUJBQW1CO0FBRW5COztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEdBQVE7SUFDN0IsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3BELElBQUk7UUFDRixTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUNwRDtZQUFTO1FBQ1IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztLQUMvQztBQUNILENBQUM7QUFSRCx3QkFRQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEdBQVc7SUFDbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFGRCw0QkFFQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUMsR0FBVztJQUM5QyxJQUFJO1FBQ0YsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLHlGQUF5RjtRQUN6RixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEI7QUFDSCxDQUFDO0FBUEQsb0RBT0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLGtCQUFrQixDQUFDLE1BQVcsRUFBRSxJQUFhO0lBQzNELElBQUksSUFBSSxFQUFFO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0M7U0FBTTtRQUNMLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQztBQU5ELGdEQU1DO0FBRUQ7O0dBRUc7QUFDSSxLQUFLLFVBQVUsa0JBQWtCLENBQUMsUUFBZ0I7SUFDdkQsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUhELGdEQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0ICogYXMgWUFNTCBmcm9tICd5YW1sJztcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby12YXItcmVxdWlyZXNcbmltcG9ydCB5YW1sVHlwZXMgPSByZXF1aXJlKCd5YW1sL3R5cGVzJyk7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbi8qKlxuICogU3RyaW5naWZ5IHRvIFlBTUxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvWUFNTChvYmo6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IG9sZEZvbGQgPSB5YW1sVHlwZXMuc3RyT3B0aW9ucy5mb2xkLmxpbmVXaWR0aDtcbiAgdHJ5IHtcbiAgICB5YW1sVHlwZXMuc3RyT3B0aW9ucy5mb2xkLmxpbmVXaWR0aCA9IDA7XG4gICAgcmV0dXJuIFlBTUwuc3RyaW5naWZ5KG9iaiwgeyBzY2hlbWE6ICd5YW1sLTEuMScgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgeWFtbFR5cGVzLnN0ck9wdGlvbnMuZm9sZC5saW5lV2lkdGggPSBvbGRGb2xkO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgWUFNTFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVlBTUwoc3RyOiBzdHJpbmcpOiBhbnkge1xuICByZXR1cm4gWUFNTC5wYXJzZShzdHIsIHsgc2NoZW1hOiAneWFtbC0xLjEnIH0pO1xufVxuXG4vKipcbiAqIFBhcnNlIGVpdGhlciBZQU1MIG9yIEpTT05cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplU3RydWN0dXJlKHN0cjogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyb21ZQU1MKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBUaGlzIHNob3VsZG4ndCByZWFsbHkgZXZlciBoYXBwZW4gSSB0aGluaywgYnV0IGl0J3MgdGhlIGNvZGUgd2UgaGFkIHNvIEknbSBsZWF2aW5nIGl0LlxuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdG8gZWl0aGVyIFlBTUwgb3IgSlNPTlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplU3RydWN0dXJlKG9iamVjdDogYW55LCBqc29uOiBib29sZWFuKSB7XG4gIGlmIChqc29uKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCwgdW5kZWZpbmVkLCAyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdG9ZQU1MKG9iamVjdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkIGEgWUFNTCBvciBKU09OIGZpbGUgZnJvbSBkaXNrXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU3RydWN0dXJlZEZpbGUoZmlsZU5hbWU6IHN0cmluZykge1xuICBjb25zdCBjb250ZW50cyA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVOYW1lLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICByZXR1cm4gZGVzZXJpYWxpemVTdHJ1Y3R1cmUoY29udGVudHMpO1xufVxuIl19