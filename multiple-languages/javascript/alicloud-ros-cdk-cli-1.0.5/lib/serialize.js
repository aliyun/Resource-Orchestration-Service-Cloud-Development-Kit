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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VyaWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFFN0IsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyx3Q0FBeUM7QUFDekMsbUJBQW1CO0FBRW5COztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEdBQVE7SUFDN0IsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3BELElBQUk7UUFDRixTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUNwRDtZQUFTO1FBQ1IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztLQUMvQztBQUNILENBQUM7QUFSRCx3QkFRQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEdBQVc7SUFDbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFGRCw0QkFFQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUMsR0FBVztJQUM5QyxJQUFJO1FBQ0YsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLHlGQUF5RjtRQUN6RixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEI7QUFDSCxDQUFDO0FBUEQsb0RBT0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLGtCQUFrQixDQUFDLE1BQVcsRUFBRSxJQUFhO0lBQzNELElBQUksSUFBSSxFQUFFO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0M7U0FBTTtRQUNMLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQztBQU5ELGdEQU1DO0FBRUQ7O0dBRUc7QUFDSSxLQUFLLFVBQVUsa0JBQWtCLENBQUMsUUFBZ0I7SUFDdkQsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUhELGdEQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xyXG5pbXBvcnQgKiBhcyBZQU1MIGZyb20gJ3lhbWwnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXZhci1yZXF1aXJlc1xyXG5pbXBvcnQgeWFtbFR5cGVzID0gcmVxdWlyZSgneWFtbC90eXBlcycpO1xyXG4vKiBlc2xpbnQtZW5hYmxlICovXHJcblxyXG4vKipcclxuICogU3RyaW5naWZ5IHRvIFlBTUxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1lBTUwob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gIGNvbnN0IG9sZEZvbGQgPSB5YW1sVHlwZXMuc3RyT3B0aW9ucy5mb2xkLmxpbmVXaWR0aDtcclxuICB0cnkge1xyXG4gICAgeWFtbFR5cGVzLnN0ck9wdGlvbnMuZm9sZC5saW5lV2lkdGggPSAwO1xyXG4gICAgcmV0dXJuIFlBTUwuc3RyaW5naWZ5KG9iaiwgeyBzY2hlbWE6ICd5YW1sLTEuMScgfSk7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIHlhbWxUeXBlcy5zdHJPcHRpb25zLmZvbGQubGluZVdpZHRoID0gb2xkRm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBZQU1MXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZnJvbVlBTUwoc3RyOiBzdHJpbmcpOiBhbnkge1xyXG4gIHJldHVybiBZQU1MLnBhcnNlKHN0ciwgeyBzY2hlbWE6ICd5YW1sLTEuMScgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBlaXRoZXIgWUFNTCBvciBKU09OXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVTdHJ1Y3R1cmUoc3RyOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGZyb21ZQU1MKHN0cik7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgcmVhbGx5IGV2ZXIgaGFwcGVuIEkgdGhpbmssIGJ1dCBpdCdzIHRoZSBjb2RlIHdlIGhhZCBzbyBJJ20gbGVhdmluZyBpdC5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogU2VyaWFsaXplIHRvIGVpdGhlciBZQU1MIG9yIEpTT05cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVTdHJ1Y3R1cmUob2JqZWN0OiBhbnksIGpzb246IGJvb2xlYW4pIHtcclxuICBpZiAoanNvbikge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCwgdW5kZWZpbmVkLCAyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHRvWUFNTChvYmplY3QpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIExvYWQgYSBZQU1MIG9yIEpTT04gZmlsZSBmcm9tIGRpc2tcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU3RydWN0dXJlZEZpbGUoZmlsZU5hbWU6IHN0cmluZykge1xyXG4gIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZU5hbWUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XHJcbiAgcmV0dXJuIGRlc2VyaWFsaXplU3RydWN0dXJlKGNvbnRlbnRzKTtcclxufVxyXG4iXX0=