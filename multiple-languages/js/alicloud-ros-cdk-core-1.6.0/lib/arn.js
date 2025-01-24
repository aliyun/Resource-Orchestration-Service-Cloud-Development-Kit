"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arn = exports.ArnFormat = void 0;
const ros_fn_1 = require("./ros-fn");
const token_1 = require("./token");
const util_1 = require("./util");
/**
 * An enum representing the various ARN formats that different services use.
 */
var ArnFormat;
(function (ArnFormat) {
    /**
     * This represents a format where there is no 'resourceName' part.
     * Everything after the last colon is considered the 'resource',
     * even if it contains slashes.
     * For some resource types, e.g. OSS buckets, 'resource' part defines the bucket name.
     */
    ArnFormat["NO_RESOURCE_NAME"] = "acs:service:region:account:resource";
    /**
     * This represents a format where the 'resource' and 'resourceName'
     * parts are separated with a colon.
     * Everything after the last colon is considered the 'resourceName',
     * even if it contains slashes.
     */
    ArnFormat["COLON_RESOURCE_NAME"] = "acs:service:region:account:resource:resourceName";
    /**
     * This represents a format where the 'resource' and 'resourceName'
     * parts are separated with a slash.
     * Like in: 'acs:ecs:cn-hangzhou:123456789012****:instance/i-12345678****'.
     * Everything after the separating slash is considered the 'resourceName',
     * even if it contains colons.
     * The region part can be omitted.
     * Like in: 'acs:ram::123456789012****:role/RoleName'.
     */
    ArnFormat["SLASH_RESOURCE_NAME"] = "acs:service:region:account:resource/resourceName";
    /**
     * This represents a format where the 'resource' and 'resourceName'
     * parts are seperated with a slash,
     * but there is also an additional slash after the colon separating 'account' from 'resource'.
     * Like in: 'acs:mns:cn-hangzhou:123456789012****:/topics/my-topic'.
     * Note that the leading slash is _not_ included in the parsed 'resource' part.
     */
    // eslint-disable-next-line @cdklabs/no-literal-partition
    ArnFormat["SLASH_RESOURCE_SLASH_RESOURCE_NAME"] = "acs:service:region:account:/resource/resourceName";
})(ArnFormat = exports.ArnFormat || (exports.ArnFormat = {}));
class Arn {
    /**
     * Creates an ARN from components.
     *
     * If `partition`, `region` or `account` are not specified, the stack's
     * partition, region and account will be used.
     *
     * If any component is the empty string, an empty string will be inserted
     * into the generated ARN at the location that component corresponds to.
     *
     * The ARN will be formatted as follows:
     *
     *   {partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}
     *
     * The required ARN pieces that are omitted will be taken from the stack that
     * the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
     * can be 'undefined'.
     */
    static format(components, stack) {
        const partition = components.partition ?? 'acs';
        const region = components.region ?? stack?.region;
        const account = components.account ?? stack?.account;
        // Catch both 'null' and 'undefined'
        if (account == null || account === '') {
            throw new Error(`Arn.format: account (${account}) must all be passed if stack is not passed.`);
        }
        const sep = components.arnFormat === ArnFormat.COLON_RESOURCE_NAME ? ':' : '/';
        const values = [
            partition, ':', components.service, ':', region, ':', account, ':',
            ...(components.arnFormat === ArnFormat.SLASH_RESOURCE_SLASH_RESOURCE_NAME ? ['/'] : []),
            components.resource,
        ];
        if (sep !== '/' && sep !== ':' && sep !== '') {
            throw new Error('resourcePathSep may only be ":", "/" or an empty string');
        }
        if (components.resourceName != null) {
            values.push(sep);
            values.push(components.resourceName);
        }
        return values.join('');
    }
    /**
     * Splits the provided ARN into its components.
     * Works both if 'arn' is a string like 'acs:oss:::bucket',
     * and a Token representing a dynamic CloudFormation expression
     * (in which case the returned components will also be dynamic ROS expressions,
     * encoded as Tokens).
     *
     * @param arn the ARN to split into its components
     * @param arnFormat the expected format of 'arn' - depends on what format the service 'arn' represents uses
     */
    static split(arn, arnFormat) {
        const components = parseArnShape(arn);
        if (components === 'token') {
            return parseTokenArn(arn, arnFormat);
        }
        const [partition, service, region, account, resourceTypeOrName, ...rest] = components;
        let resource;
        let resourceName;
        let sep;
        let resourcePartStartIndex = 0;
        let detectedArnFormat;
        let slashIndex = resourceTypeOrName.indexOf('/');
        if (slashIndex === 0) {
            slashIndex = resourceTypeOrName.indexOf('/', 1);
            resourcePartStartIndex = 1;
            detectedArnFormat = ArnFormat.SLASH_RESOURCE_SLASH_RESOURCE_NAME;
        }
        if (slashIndex !== -1) {
            // the slash is only a separator if ArnFormat is not NO_RESOURCE_NAME
            if (arnFormat === ArnFormat.NO_RESOURCE_NAME) {
                sep = undefined;
                slashIndex = -1;
                detectedArnFormat = ArnFormat.NO_RESOURCE_NAME;
            }
            else {
                sep = '/';
                detectedArnFormat = resourcePartStartIndex === 0
                    ? ArnFormat.SLASH_RESOURCE_NAME
                    // need to repeat this here, as otherwise the compiler thinks 'detectedArnFormat' is not initialized in all paths
                    : ArnFormat.SLASH_RESOURCE_SLASH_RESOURCE_NAME;
            }
        }
        else if (rest.length > 0) {
            sep = ':';
            slashIndex = -1;
            detectedArnFormat = ArnFormat.COLON_RESOURCE_NAME;
        }
        else {
            sep = undefined;
            detectedArnFormat = ArnFormat.NO_RESOURCE_NAME;
        }
        if (slashIndex !== -1) {
            resource = resourceTypeOrName.substring(resourcePartStartIndex, slashIndex);
            resourceName = resourceTypeOrName.substring(slashIndex + 1);
        }
        else {
            resource = resourceTypeOrName;
        }
        if (rest.length > 0) {
            if (!resourceName) {
                resourceName = '';
            }
            else {
                resourceName += ':';
            }
            resourceName += rest.join(':');
        }
        // "|| undefined" will cause empty strings to be treated as "undefined".
        // Optional ARN attributes (e.g. region, account) should return as empty string
        // if they are provided as such.
        return util_1.filterUndefined({
            service: service || undefined,
            resource: resource || undefined,
            partition: partition || undefined,
            region,
            account,
            resourceName,
            sep,
            arnFormat: detectedArnFormat,
        });
    }
    /**
     * Extract the full resource name from an ARN
     *
     * Necessary for resource names (paths) that may contain the separator, like
     * `acs:ram::123456789012****:role/adminrole/alice`.
     *
     * Only works if we statically know the expected `resourceType` beforehand, since we're going
     * to use that to split the string on ':<resourceType>/' (and take the right-hand side).
     *
     * We can't extract the 'resourceType' from the ARN at hand, because ROS Expressions
     * only allow literals in the 'separator' argument to `{ Fn::Split }`, and so it can't be
     * `{ Fn::Select: [5, { Fn::Split: [':', ARN] }}`.
     *
     * Only necessary for ARN formats for which the type-name separator is `/`.
     */
    static extractResourceName(arn, resourceType) {
        const components = parseArnShape(arn);
        if (components === 'token') {
            return ros_fn_1.Fn.select(1, ros_fn_1.Fn.split(`:${resourceType}/`, arn)).toString();
        }
        // Apparently we could just parse this right away. Validate that we got the right
        // resource type (to notify authors of incorrect assumptions right away).
        const parsed = Arn.split(arn, ArnFormat.SLASH_RESOURCE_NAME);
        if (!token_1.Token.isUnresolved(parsed.resource) && parsed.resource !== resourceType) {
            throw new Error(`Expected resource type '${resourceType}' in ARN, got '${parsed.resource}' in '${arn}'`);
        }
        if (!parsed.resourceName) {
            throw new Error(`Expected resource name in ARN, didn't find one: '${arn}'`);
        }
        return parsed.resourceName;
    }
    constructor() { }
}
exports.Arn = Arn;
/**
 * Given a Token evaluating to ARN, parses it and returns components.
 *
 * The ARN cannot be validated, since we don't have the actual value yet
 * at the time of this function call. You will have to know the separator
 * and the type of ARN.
 *
 * The resulting `ArnComponents` object will contain tokens for the
 * subexpressions of the ARN, not string literals.
 *
 * WARNING: this function cannot properly parse the complete final
 * 'resourceName' part if it contains colons.
 *
 * @param arnToken The input token that contains an ARN
 * @param arnFormat the expected format of 'arn' - depends on what format the service the ARN represents uses
 */
function parseTokenArn(arnToken, arnFormat) {
    // ARN looks like:
    // partition:service:region:account:resource
    // partition:service:region:account:resource:resourceName
    // partition:service:region:account:resource/resourceName
    // partition:service:region:account:/resource/resourceName
    const components = ros_fn_1.Fn.split(':', arnToken.toString());
    const partition = ros_fn_1.Fn.select(0, components).toString();
    const service = ros_fn_1.Fn.select(1, components).toString();
    const region = ros_fn_1.Fn.select(2, components).toString();
    const account = ros_fn_1.Fn.select(3, components).toString();
    let resource;
    let resourceName;
    if (arnFormat === ArnFormat.NO_RESOURCE_NAME || arnFormat === ArnFormat.COLON_RESOURCE_NAME) {
        // we know that the 'resource' part will always be the 5th segment in this case
        resource = ros_fn_1.Fn.select(4, components).toString();
        if (arnFormat === ArnFormat.COLON_RESOURCE_NAME) {
            resourceName = ros_fn_1.Fn.select(5, components).toString();
        }
        else {
            resourceName = undefined;
        }
    }
    else {
        // we know that the 'resource' and 'resourceName' parts are separated by slash here,
        // so we split the 5th segment from the colon-separated ones with a slash
        const lastComponents = ros_fn_1.Fn.split('/', ros_fn_1.Fn.select(4, components).toString());
        if (arnFormat === ArnFormat.SLASH_RESOURCE_NAME) {
            resource = ros_fn_1.Fn.select(0, lastComponents).toString();
            resourceName = ros_fn_1.Fn.select(1, lastComponents).toString();
        }
        else {
            // arnFormat is ArnFormat.SLASH_RESOURCE_SLASH_RESOURCE_NAME,
            // which means there's an extra slash there at the beginning that we need to skip
            resource = ros_fn_1.Fn.select(1, lastComponents).toString();
            resourceName = ros_fn_1.Fn.select(2, lastComponents).toString();
        }
    }
    return { partition, service, region, account, resource, resourceName, arnFormat };
}
/**
 * Validate that a string is either unparseable or looks mostly like an ARN
 */
function parseArnShape(arn) {
    if (token_1.Token.isUnresolved(arn)) {
        return 'token';
    }
    // If the ARN merely contains Tokens, but otherwise *looks* mostly like an ARN,
    // it's a string of the form 'arn:${partition}:service:${region}:${account}:resource/xyz'.
    // Parse fields out to the best of our ability.
    // Tokens won't contain ":", so this won't break them.
    const components = arn.split(':');
    const partition = components.length > 0 ? components[0] : undefined;
    if (!partition) {
        throw new Error('The `partition` component (1st component) of an ARN is required: ' + arn);
    }
    const service = components.length > 1 ? components[1] : undefined;
    if (!service) {
        throw new Error('The `service` component (2nd component) of an ARN is required: ' + arn);
    }
    const resource = components.length > 4 ? components[4] : undefined;
    if (!resource) {
        throw new Error('The `resource` component (5th component) of an ARN is required: ' + arn);
    }
    // Region can be missing in global ARNs (such as used by RAM)
    // Account can be missing in some ARN types (such as used for OSS buckets)
    return components;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUE4QjtBQUU5QixtQ0FBZ0M7QUFFaEMsaUNBQXlDO0FBRXpDOztHQUVHO0FBQ0gsSUFBWSxTQXFDWDtBQXJDRCxXQUFZLFNBQVM7SUFDakI7Ozs7O09BS0c7SUFDSCxxRUFBd0QsQ0FBQTtJQUV4RDs7Ozs7T0FLRztJQUNILHFGQUF3RSxDQUFBO0lBRXhFOzs7Ozs7OztPQVFHO0lBQ0gscUZBQXdFLENBQUE7SUFFeEU7Ozs7OztPQU1HO0lBQ0MseURBQXlEO0lBQzdELHFHQUF3RixDQUFBO0FBQzVGLENBQUMsRUFyQ1csU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFxQ3BCO0FBc0RELE1BQWEsR0FBRztJQUNaOzs7Ozs7Ozs7Ozs7Ozs7O09BZ0JHO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUF5QixFQUFFLEtBQWE7UUFDekQsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7UUFDaEQsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQ2xELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUVyRCxvQ0FBb0M7UUFDcEMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsT0FBTyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ2xHO1FBRUQsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRS9FLE1BQU0sTUFBTSxHQUFHO1lBQ1gsU0FBUyxFQUFFLEdBQUcsRUFBRSxV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QUcsR0FBRyxDQUFDLENBQUM7S0FDN0Y7SUFFRCw2REFBNkQ7SUFFN0QsMEVBQTBFO0lBRTFFLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbiB9IGZyb20gJy4vcm9zLWZuJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi9zdGFjayc7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IHsgSVJlc29sdmFibGUgfSBmcm9tIFwiLi9yZXNvbHZhYmxlXCI7XG5pbXBvcnQgeyBmaWx0ZXJVbmRlZmluZWQgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEFuIGVudW0gcmVwcmVzZW50aW5nIHRoZSB2YXJpb3VzIEFSTiBmb3JtYXRzIHRoYXQgZGlmZmVyZW50IHNlcnZpY2VzIHVzZS5cbiAqL1xuZXhwb3J0IGVudW0gQXJuRm9ybWF0IHtcbiAgICAvKipcbiAgICAgKiBUaGlzIHJlcHJlc2VudHMgYSBmb3JtYXQgd2hlcmUgdGhlcmUgaXMgbm8gJ3Jlc291cmNlTmFtZScgcGFydC5cbiAgICAgKiBFdmVyeXRoaW5nIGFmdGVyIHRoZSBsYXN0IGNvbG9uIGlzIGNvbnNpZGVyZWQgdGhlICdyZXNvdXJjZScsXG4gICAgICogZXZlbiBpZiBpdCBjb250YWlucyBzbGFzaGVzLlxuICAgICAqIEZvciBzb21lIHJlc291cmNlIHR5cGVzLCBlLmcuIE9TUyBidWNrZXRzLCAncmVzb3VyY2UnIHBhcnQgZGVmaW5lcyB0aGUgYnVja2V0IG5hbWUuXG4gICAgICovXG4gICAgTk9fUkVTT1VSQ0VfTkFNRSA9ICdhY3M6c2VydmljZTpyZWdpb246YWNjb3VudDpyZXNvdXJjZScsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHJlcHJlc2VudHMgYSBmb3JtYXQgd2hlcmUgdGhlICdyZXNvdXJjZScgYW5kICdyZXNvdXJjZU5hbWUnXG4gICAgICogcGFydHMgYXJlIHNlcGFyYXRlZCB3aXRoIGEgY29sb24uXG4gICAgICogRXZlcnl0aGluZyBhZnRlciB0aGUgbGFzdCBjb2xvbiBpcyBjb25zaWRlcmVkIHRoZSAncmVzb3VyY2VOYW1lJyxcbiAgICAgKiBldmVuIGlmIGl0IGNvbnRhaW5zIHNsYXNoZXMuXG4gICAgICovXG4gICAgQ09MT05fUkVTT1VSQ0VfTkFNRSA9ICdhY3M6c2VydmljZTpyZWdpb246YWNjb3VudDpyZXNvdXJjZTpyZXNvdXJjZU5hbWUnLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyByZXByZXNlbnRzIGEgZm9ybWF0IHdoZXJlIHRoZSAncmVzb3VyY2UnIGFuZCAncmVzb3VyY2VOYW1lJ1xuICAgICAqIHBhcnRzIGFyZSBzZXBhcmF0ZWQgd2l0aCBhIHNsYXNoLlxuICAgICAqIExpa2UgaW46ICdhY3M6ZWNzOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTAxMioqKio6aW5zdGFuY2UvaS0xMjM0NTY3OCoqKionLlxuICAgICAqIEV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIHNlcGFyYXRpbmcgc2xhc2ggaXMgY29uc2lkZXJlZCB0aGUgJ3Jlc291cmNlTmFtZScsXG4gICAgICogZXZlbiBpZiBpdCBjb250YWlucyBjb2xvbnMuXG4gICAgICogVGhlIHJlZ2lvbiBwYXJ0IGNhbiBiZSBvbWl0dGVkLlxuICAgICAqIExpa2UgaW46ICdhY3M6cmFtOjoxMjM0NTY3ODkwMTIqKioqOnJvbGUvUm9sZU5hbWUnLlxuICAgICAqL1xuICAgIFNMQVNIX1JFU09VUkNFX05BTUUgPSAnYWNzOnNlcnZpY2U6cmVnaW9uOmFjY291bnQ6cmVzb3VyY2UvcmVzb3VyY2VOYW1lJyxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgcmVwcmVzZW50cyBhIGZvcm1hdCB3aGVyZSB0aGUgJ3Jlc291cmNlJyBhbmQgJ3Jlc291cmNlTmFtZSdcbiAgICAgKiBwYXJ0cyBhcmUgc2VwZXJhdGVkIHdpdGggYSBzbGFzaCxcbiAgICAgKiBidXQgdGhlcmUgaXMgYWxzbyBhbiBhZGRpdGlvbmFsIHNsYXNoIGFmdGVyIHRoZSBjb2xvbiBzZXBhcmF0aW5nICdhY2NvdW50JyBmcm9tICdyZXNvdXJjZScuXG4gICAgICogTGlrZSBpbjogJ2FjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5MDEyKioqKjovdG9waWNzL215LXRvcGljJy5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGxlYWRpbmcgc2xhc2ggaXMgX25vdF8gaW5jbHVkZWQgaW4gdGhlIHBhcnNlZCAncmVzb3VyY2UnIHBhcnQuXG4gICAgICovXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAY2RrbGFicy9uby1saXRlcmFsLXBhcnRpdGlvblxuICAgIFNMQVNIX1JFU09VUkNFX1NMQVNIX1JFU09VUkNFX05BTUUgPSAnYWNzOnNlcnZpY2U6cmVnaW9uOmFjY291bnQ6L3Jlc291cmNlL3Jlc291cmNlTmFtZScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJuQ29tcG9uZW50cyB7XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnRpdGlvbiB0aGF0IHRoZSByZXNvdXJjZSBpcyBpbi5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGFjc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhcnRpdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2aWNlIG5hbWVzcGFjZSB0aGF0IGlkZW50aWZpZXMgdGhlIEFDUyBwcm9kdWN0IChmb3IgZXhhbXBsZSxcbiAgICAgKiAnZWNzJywgJ2ZjJywgJ3JhbScpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSByZWdpb24gdGhlIHJlc291cmNlIHJlc2lkZXMgaW4uIE5vdGUgdGhhdCB0aGUgQVJOcyBmb3Igc29tZSByZXNvdXJjZXNcbiAgICAgKiBkbyBub3QgcmVxdWlyZSBhIHJlZ2lvbiwgc28gdGhpcyBjb21wb25lbnQgbWlnaHQgYmUgb21pdHRlZC5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IFRoZSByZWdpb24gdGhlIHN0YWNrIGlzIGRlcGxveWVkIHRvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZ2lvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGUgQUNTIGFjY291bnQgdGhhdCBvd25zIHRoZSByZXNvdXJjZSwgd2l0aG91dCB0aGUgaHlwaGVucy5cbiAgICAgKiBGb3IgZXhhbXBsZSwgMTIzNDU2Nzg5MDEyLiBOb3RlIHRoYXQgdGhlIEFSTnMgZm9yIHNvbWUgcmVzb3VyY2VzIGRvbid0XG4gICAgICogcmVxdWlyZSBhbiBhY2NvdW50IG51bWJlciwgc28gdGhpcyBjb21wb25lbnQgbWlnaHQgYmUgb21pdHRlZC5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IFRoZSBhY2NvdW50IHRoZSBzdGFjayBpcyBkZXBsb3llZCB0by5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NvdW50Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUmVzb3VyY2UgdHlwZSAoZS5nLiBcImluc3RhbmNlXCIsIFwiZnVuY3Rpb25zXCIsIFwicm9sZVwiKS5cbiAgICAgKiBGb3Igc29tZSByZXNvdXJjZSB0eXBlcywgZS5nLiBPU1MgYnVja2V0cywgdGhpcyBmaWVsZCBkZWZpbmVzIHRoZSBidWNrZXQgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUmVzb3VyY2UgbmFtZSBvciBwYXRoIHdpdGhpbiB0aGUgcmVzb3VyY2UgKGkuZS4gT1NTIGJ1Y2tldCBvYmplY3Qga2V5KSBvclxuICAgICAqIGEgd2lsZGNhcmQgc3VjaCBhcyBgYFwiKlwiYGAuIFRoaXMgaXMgc2VydmljZS1kZXBlbmRlbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwZWNpZmljIEFSTiBmb3JtYXQgdG8gdXNlIGZvciB0aGlzIEFSTiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IC0gdXNlcyB2YWx1ZSBvZiBgc2VwYCBhcyB0aGUgc2VwYXJhdG9yIGZvciBmb3JtYXR0aW5nLFxuICAgICAqICAgYEFybkZvcm1hdC5TTEFTSF9SRVNPVVJDRV9OQU1FYCBpZiB0aGF0IHByb3BlcnR5IHdhcyBhbHNvIG5vdCBwcm92aWRlZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFybkZvcm1hdD86IEFybkZvcm1hdDtcbn1cblxuZXhwb3J0IGNsYXNzIEFybiB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBBUk4gZnJvbSBjb21wb25lbnRzLlxuICAgICAqXG4gICAgICogSWYgYHBhcnRpdGlvbmAsIGByZWdpb25gIG9yIGBhY2NvdW50YCBhcmUgbm90IHNwZWNpZmllZCwgdGhlIHN0YWNrJ3NcbiAgICAgKiBwYXJ0aXRpb24sIHJlZ2lvbiBhbmQgYWNjb3VudCB3aWxsIGJlIHVzZWQuXG4gICAgICpcbiAgICAgKiBJZiBhbnkgY29tcG9uZW50IGlzIHRoZSBlbXB0eSBzdHJpbmcsIGFuIGVtcHR5IHN0cmluZyB3aWxsIGJlIGluc2VydGVkXG4gICAgICogaW50byB0aGUgZ2VuZXJhdGVkIEFSTiBhdCB0aGUgbG9jYXRpb24gdGhhdCBjb21wb25lbnQgY29ycmVzcG9uZHMgdG8uXG4gICAgICpcbiAgICAgKiBUaGUgQVJOIHdpbGwgYmUgZm9ybWF0dGVkIGFzIGZvbGxvd3M6XG4gICAgICpcbiAgICAgKiAgIHtwYXJ0aXRpb259OntzZXJ2aWNlfTp7cmVnaW9ufTp7YWNjb3VudH06e3Jlc291cmNlfXtzZXB9e3Jlc291cmNlLW5hbWV9XG4gICAgICpcbiAgICAgKiBUaGUgcmVxdWlyZWQgQVJOIHBpZWNlcyB0aGF0IGFyZSBvbWl0dGVkIHdpbGwgYmUgdGFrZW4gZnJvbSB0aGUgc3RhY2sgdGhhdFxuICAgICAqIHRoZSAnc2NvcGUnIGlzIGF0dGFjaGVkIHRvLiBJZiBhbGwgQVJOIHBpZWNlcyBhcmUgc3VwcGxpZWQsIHRoZSBzdXBwbGllZCBzY29wZVxuICAgICAqIGNhbiBiZSAndW5kZWZpbmVkJy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdChjb21wb25lbnRzOiBBcm5Db21wb25lbnRzLCBzdGFjaz86IFN0YWNrKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcGFydGl0aW9uID0gY29tcG9uZW50cy5wYXJ0aXRpb24gPz8gJ2Fjcyc7XG4gICAgICAgIGNvbnN0IHJlZ2lvbiA9IGNvbXBvbmVudHMucmVnaW9uID8/IHN0YWNrPy5yZWdpb247XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBjb21wb25lbnRzLmFjY291bnQgPz8gc3RhY2s/LmFjY291bnQ7XG5cbiAgICAgICAgLy8gQ2F0Y2ggYm90aCAnbnVsbCcgYW5kICd1bmRlZmluZWQnXG4gICAgICAgIGlmIChhY2NvdW50ID09IG51bGwgfHwgYWNjb3VudCA9PT0gJycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXJuLmZvcm1hdDogYWNjb3VudCAoJHthY2NvdW50fSkgbXVzdCBhbGwgYmUgcGFzc2VkIGlmIHN0YWNrIGlzIG5vdCBwYXNzZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZXAgPSBjb21wb25lbnRzLmFybkZvcm1hdCA9PT0gQXJuRm9ybWF0LkNPTE9OX1JFU09VUkNFX05BTUUgPyAnOicgOiAnLyc7XG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0gW1xuICAgICAgICAgICAgcGFydGl0aW9uLCAnOicsIGNvbXBvbmVudHMuc2VydmljZSwgJzonLCByZWdpb24sICc6JywgYWNjb3VudCwgJzonLFxuICAgICAgICAgICAgLi4uKGNvbXBvbmVudHMuYXJuRm9ybWF0ID09PSBBcm5Gb3JtYXQuU0xBU0hfUkVTT1VSQ0VfU0xBU0hfUkVTT1VSQ0VfTkFNRSA/IFsnLyddIDogW10pLFxuICAgICAgICAgICAgY29tcG9uZW50cy5yZXNvdXJjZSxcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoc2VwICE9PSAnLycgJiYgc2VwICE9PSAnOicgJiYgc2VwICE9PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXNvdXJjZVBhdGhTZXAgbWF5IG9ubHkgYmUgXCI6XCIsIFwiL1wiIG9yIGFuIGVtcHR5IHN0cmluZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudHMucmVzb3VyY2VOYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHNlcCk7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaChjb21wb25lbnRzLnJlc291cmNlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVzLmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwbGl0cyB0aGUgcHJvdmlkZWQgQVJOIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICogV29ya3MgYm90aCBpZiAnYXJuJyBpcyBhIHN0cmluZyBsaWtlICdhY3M6b3NzOjo6YnVja2V0JyxcbiAgICAgKiBhbmQgYSBUb2tlbiByZXByZXNlbnRpbmcgYSBkeW5hbWljIENsb3VkRm9ybWF0aW9uIGV4cHJlc3Npb25cbiAgICAgKiAoaW4gd2hpY2ggY2FzZSB0aGUgcmV0dXJuZWQgY29tcG9uZW50cyB3aWxsIGFsc28gYmUgZHluYW1pYyBST1MgZXhwcmVzc2lvbnMsXG4gICAgICogZW5jb2RlZCBhcyBUb2tlbnMpLlxuICAgICAqXG4gICAgICogQHBhcmFtIGFybiB0aGUgQVJOIHRvIHNwbGl0IGludG8gaXRzIGNvbXBvbmVudHNcbiAgICAgKiBAcGFyYW0gYXJuRm9ybWF0IHRoZSBleHBlY3RlZCBmb3JtYXQgb2YgJ2FybicgLSBkZXBlbmRzIG9uIHdoYXQgZm9ybWF0IHRoZSBzZXJ2aWNlICdhcm4nIHJlcHJlc2VudHMgdXNlc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc3BsaXQoYXJuOiBzdHJpbmcgfCBJUmVzb2x2YWJsZSwgYXJuRm9ybWF0OiBBcm5Gb3JtYXQpOiBBcm5Db21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHBhcnNlQXJuU2hhcGUoYXJuKTtcbiAgICAgICAgaWYgKGNvbXBvbmVudHMgPT09ICd0b2tlbicpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVRva2VuQXJuKGFybiwgYXJuRm9ybWF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFtwYXJ0aXRpb24sIHNlcnZpY2UsIHJlZ2lvbiwgYWNjb3VudCwgcmVzb3VyY2VUeXBlT3JOYW1lLCAuLi5yZXN0XSA9IGNvbXBvbmVudHM7XG5cbiAgICAgICAgbGV0IHJlc291cmNlOiBzdHJpbmc7XG4gICAgICAgIGxldCByZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHNlcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgcmVzb3VyY2VQYXJ0U3RhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBkZXRlY3RlZEFybkZvcm1hdDogQXJuRm9ybWF0O1xuXG4gICAgICAgIGxldCBzbGFzaEluZGV4ID0gcmVzb3VyY2VUeXBlT3JOYW1lLmluZGV4T2YoJy8nKTtcbiAgICAgICAgaWYgKHNsYXNoSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHNsYXNoSW5kZXggPSByZXNvdXJjZVR5cGVPck5hbWUuaW5kZXhPZignLycsIDEpO1xuICAgICAgICAgICAgcmVzb3VyY2VQYXJ0U3RhcnRJbmRleCA9IDE7XG4gICAgICAgICAgICBkZXRlY3RlZEFybkZvcm1hdCA9IEFybkZvcm1hdC5TTEFTSF9SRVNPVVJDRV9TTEFTSF9SRVNPVVJDRV9OQU1FO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzbGFzaEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gdGhlIHNsYXNoIGlzIG9ubHkgYSBzZXBhcmF0b3IgaWYgQXJuRm9ybWF0IGlzIG5vdCBOT19SRVNPVVJDRV9OQU1FXG4gICAgICAgICAgICBpZiAoYXJuRm9ybWF0ID09PSBBcm5Gb3JtYXQuTk9fUkVTT1VSQ0VfTkFNRSkge1xuICAgICAgICAgICAgICAgIHNlcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBzbGFzaEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRBcm5Gb3JtYXQgPSBBcm5Gb3JtYXQuTk9fUkVTT1VSQ0VfTkFNRTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VwID0gJy8nO1xuICAgICAgICAgICAgICAgIGRldGVjdGVkQXJuRm9ybWF0ID0gcmVzb3VyY2VQYXJ0U3RhcnRJbmRleCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA/IEFybkZvcm1hdC5TTEFTSF9SRVNPVVJDRV9OQU1FXG4gICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gcmVwZWF0IHRoaXMgaGVyZSwgYXMgb3RoZXJ3aXNlIHRoZSBjb21waWxlciB0aGlua3MgJ2RldGVjdGVkQXJuRm9ybWF0JyBpcyBub3QgaW5pdGlhbGl6ZWQgaW4gYWxsIHBhdGhzXG4gICAgICAgICAgICAgICAgICAgIDogQXJuRm9ybWF0LlNMQVNIX1JFU09VUkNFX1NMQVNIX1JFU09VUkNFX05BTUU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXAgPSAnOic7XG4gICAgICAgICAgICBzbGFzaEluZGV4ID0gLTE7XG4gICAgICAgICAgICBkZXRlY3RlZEFybkZvcm1hdCA9IEFybkZvcm1hdC5DT0xPTl9SRVNPVVJDRV9OQU1FO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VwID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZGV0ZWN0ZWRBcm5Gb3JtYXQgPSBBcm5Gb3JtYXQuTk9fUkVTT1VSQ0VfTkFNRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzbGFzaEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSByZXNvdXJjZVR5cGVPck5hbWUuc3Vic3RyaW5nKHJlc291cmNlUGFydFN0YXJ0SW5kZXgsIHNsYXNoSW5kZXgpO1xuICAgICAgICAgICAgcmVzb3VyY2VOYW1lID0gcmVzb3VyY2VUeXBlT3JOYW1lLnN1YnN0cmluZyhzbGFzaEluZGV4ICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlVHlwZU9yTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghcmVzb3VyY2VOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZSArPSAnOic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc291cmNlTmFtZSArPSByZXN0LmpvaW4oJzonKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFwifHwgdW5kZWZpbmVkXCIgd2lsbCBjYXVzZSBlbXB0eSBzdHJpbmdzIHRvIGJlIHRyZWF0ZWQgYXMgXCJ1bmRlZmluZWRcIi5cbiAgICAgICAgLy8gT3B0aW9uYWwgQVJOIGF0dHJpYnV0ZXMgKGUuZy4gcmVnaW9uLCBhY2NvdW50KSBzaG91bGQgcmV0dXJuIGFzIGVtcHR5IHN0cmluZ1xuICAgICAgICAvLyBpZiB0aGV5IGFyZSBwcm92aWRlZCBhcyBzdWNoLlxuICAgICAgICByZXR1cm4gZmlsdGVyVW5kZWZpbmVkKHtcbiAgICAgICAgICAgIHNlcnZpY2U6IHNlcnZpY2UgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVzb3VyY2U6IHJlc291cmNlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBhcnRpdGlvbjogcGFydGl0aW9uIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlZ2lvbixcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICByZXNvdXJjZU5hbWUsXG4gICAgICAgICAgICBzZXAsXG4gICAgICAgICAgICBhcm5Gb3JtYXQ6IGRldGVjdGVkQXJuRm9ybWF0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBmdWxsIHJlc291cmNlIG5hbWUgZnJvbSBhbiBBUk5cbiAgICAgKlxuICAgICAqIE5lY2Vzc2FyeSBmb3IgcmVzb3VyY2UgbmFtZXMgKHBhdGhzKSB0aGF0IG1heSBjb250YWluIHRoZSBzZXBhcmF0b3IsIGxpa2VcbiAgICAgKiBgYWNzOnJhbTo6MTIzNDU2Nzg5MDEyKioqKjpyb2xlL2FkbWlucm9sZS9hbGljZWAuXG4gICAgICpcbiAgICAgKiBPbmx5IHdvcmtzIGlmIHdlIHN0YXRpY2FsbHkga25vdyB0aGUgZXhwZWN0ZWQgYHJlc291cmNlVHlwZWAgYmVmb3JlaGFuZCwgc2luY2Ugd2UncmUgZ29pbmdcbiAgICAgKiB0byB1c2UgdGhhdCB0byBzcGxpdCB0aGUgc3RyaW5nIG9uICc6PHJlc291cmNlVHlwZT4vJyAoYW5kIHRha2UgdGhlIHJpZ2h0LWhhbmQgc2lkZSkuXG4gICAgICpcbiAgICAgKiBXZSBjYW4ndCBleHRyYWN0IHRoZSAncmVzb3VyY2VUeXBlJyBmcm9tIHRoZSBBUk4gYXQgaGFuZCwgYmVjYXVzZSBST1MgRXhwcmVzc2lvbnNcbiAgICAgKiBvbmx5IGFsbG93IGxpdGVyYWxzIGluIHRoZSAnc2VwYXJhdG9yJyBhcmd1bWVudCB0byBgeyBGbjo6U3BsaXQgfWAsIGFuZCBzbyBpdCBjYW4ndCBiZVxuICAgICAqIGB7IEZuOjpTZWxlY3Q6IFs1LCB7IEZuOjpTcGxpdDogWyc6JywgQVJOXSB9fWAuXG4gICAgICpcbiAgICAgKiBPbmx5IG5lY2Vzc2FyeSBmb3IgQVJOIGZvcm1hdHMgZm9yIHdoaWNoIHRoZSB0eXBlLW5hbWUgc2VwYXJhdG9yIGlzIGAvYC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZXNvdXJjZU5hbWUoYXJuOiBzdHJpbmcsIHJlc291cmNlVHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHBhcnNlQXJuU2hhcGUoYXJuKTtcbiAgICAgICAgaWYgKGNvbXBvbmVudHMgPT09ICd0b2tlbicpIHtcbiAgICAgICAgICAgIHJldHVybiBGbi5zZWxlY3QoMSwgRm4uc3BsaXQoYDoke3Jlc291cmNlVHlwZX0vYCwgYXJuKSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGFyZW50bHkgd2UgY291bGQganVzdCBwYXJzZSB0aGlzIHJpZ2h0IGF3YXkuIFZhbGlkYXRlIHRoYXQgd2UgZ290IHRoZSByaWdodFxuICAgICAgICAvLyByZXNvdXJjZSB0eXBlICh0byBub3RpZnkgYXV0aG9ycyBvZiBpbmNvcnJlY3QgYXNzdW1wdGlvbnMgcmlnaHQgYXdheSkuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEFybi5zcGxpdChhcm4sIEFybkZvcm1hdC5TTEFTSF9SRVNPVVJDRV9OQU1FKTtcbiAgICAgICAgaWYgKCFUb2tlbi5pc1VucmVzb2x2ZWQocGFyc2VkLnJlc291cmNlKSAmJiBwYXJzZWQucmVzb3VyY2UgIT09IHJlc291cmNlVHlwZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCByZXNvdXJjZSB0eXBlICcke3Jlc291cmNlVHlwZX0nIGluIEFSTiwgZ290ICcke3BhcnNlZC5yZXNvdXJjZX0nIGluICcke2Fybn0nYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJzZWQucmVzb3VyY2VOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHJlc291cmNlIG5hbWUgaW4gQVJOLCBkaWRuJ3QgZmluZCBvbmU6ICcke2Fybn0nYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZC5yZXNvdXJjZU5hbWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgVG9rZW4gZXZhbHVhdGluZyB0byBBUk4sIHBhcnNlcyBpdCBhbmQgcmV0dXJucyBjb21wb25lbnRzLlxuICpcbiAqIFRoZSBBUk4gY2Fubm90IGJlIHZhbGlkYXRlZCwgc2luY2Ugd2UgZG9uJ3QgaGF2ZSB0aGUgYWN0dWFsIHZhbHVlIHlldFxuICogYXQgdGhlIHRpbWUgb2YgdGhpcyBmdW5jdGlvbiBjYWxsLiBZb3Ugd2lsbCBoYXZlIHRvIGtub3cgdGhlIHNlcGFyYXRvclxuICogYW5kIHRoZSB0eXBlIG9mIEFSTi5cbiAqXG4gKiBUaGUgcmVzdWx0aW5nIGBBcm5Db21wb25lbnRzYCBvYmplY3Qgd2lsbCBjb250YWluIHRva2VucyBmb3IgdGhlXG4gKiBzdWJleHByZXNzaW9ucyBvZiB0aGUgQVJOLCBub3Qgc3RyaW5nIGxpdGVyYWxzLlxuICpcbiAqIFdBUk5JTkc6IHRoaXMgZnVuY3Rpb24gY2Fubm90IHByb3Blcmx5IHBhcnNlIHRoZSBjb21wbGV0ZSBmaW5hbFxuICogJ3Jlc291cmNlTmFtZScgcGFydCBpZiBpdCBjb250YWlucyBjb2xvbnMuXG4gKlxuICogQHBhcmFtIGFyblRva2VuIFRoZSBpbnB1dCB0b2tlbiB0aGF0IGNvbnRhaW5zIGFuIEFSTlxuICogQHBhcmFtIGFybkZvcm1hdCB0aGUgZXhwZWN0ZWQgZm9ybWF0IG9mICdhcm4nIC0gZGVwZW5kcyBvbiB3aGF0IGZvcm1hdCB0aGUgc2VydmljZSB0aGUgQVJOIHJlcHJlc2VudHMgdXNlc1xuICovXG5mdW5jdGlvbiBwYXJzZVRva2VuQXJuKGFyblRva2VuOiBzdHJpbmcgfCBJUmVzb2x2YWJsZSwgYXJuRm9ybWF0OiBBcm5Gb3JtYXQpOiBBcm5Db21wb25lbnRzIHtcbiAgICAvLyBBUk4gbG9va3MgbGlrZTpcbiAgICAvLyBwYXJ0aXRpb246c2VydmljZTpyZWdpb246YWNjb3VudDpyZXNvdXJjZVxuICAgIC8vIHBhcnRpdGlvbjpzZXJ2aWNlOnJlZ2lvbjphY2NvdW50OnJlc291cmNlOnJlc291cmNlTmFtZVxuICAgIC8vIHBhcnRpdGlvbjpzZXJ2aWNlOnJlZ2lvbjphY2NvdW50OnJlc291cmNlL3Jlc291cmNlTmFtZVxuICAgIC8vIHBhcnRpdGlvbjpzZXJ2aWNlOnJlZ2lvbjphY2NvdW50Oi9yZXNvdXJjZS9yZXNvdXJjZU5hbWVcblxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBGbi5zcGxpdCgnOicsIGFyblRva2VuLnRvU3RyaW5nKCkpO1xuXG4gICAgY29uc3QgcGFydGl0aW9uID0gRm4uc2VsZWN0KDAsIGNvbXBvbmVudHMpLnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgc2VydmljZSA9IEZuLnNlbGVjdCgxLCBjb21wb25lbnRzKS50b1N0cmluZygpO1xuICAgIGNvbnN0IHJlZ2lvbiA9IEZuLnNlbGVjdCgyLCBjb21wb25lbnRzKS50b1N0cmluZygpO1xuICAgIGNvbnN0IGFjY291bnQgPSBGbi5zZWxlY3QoMywgY29tcG9uZW50cykudG9TdHJpbmcoKTtcbiAgICBsZXQgcmVzb3VyY2U6IHN0cmluZztcbiAgICBsZXQgcmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoYXJuRm9ybWF0ID09PSBBcm5Gb3JtYXQuTk9fUkVTT1VSQ0VfTkFNRSB8fCBhcm5Gb3JtYXQgPT09IEFybkZvcm1hdC5DT0xPTl9SRVNPVVJDRV9OQU1FKSB7XG4gICAgICAgIC8vIHdlIGtub3cgdGhhdCB0aGUgJ3Jlc291cmNlJyBwYXJ0IHdpbGwgYWx3YXlzIGJlIHRoZSA1dGggc2VnbWVudCBpbiB0aGlzIGNhc2VcbiAgICAgICAgcmVzb3VyY2UgPSBGbi5zZWxlY3QoNCwgY29tcG9uZW50cykudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKGFybkZvcm1hdCA9PT0gQXJuRm9ybWF0LkNPTE9OX1JFU09VUkNFX05BTUUpIHtcbiAgICAgICAgICAgIHJlc291cmNlTmFtZSA9IEZuLnNlbGVjdCg1LCBjb21wb25lbnRzKS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb3VyY2VOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2Uga25vdyB0aGF0IHRoZSAncmVzb3VyY2UnIGFuZCAncmVzb3VyY2VOYW1lJyBwYXJ0cyBhcmUgc2VwYXJhdGVkIGJ5IHNsYXNoIGhlcmUsXG4gICAgICAgIC8vIHNvIHdlIHNwbGl0IHRoZSA1dGggc2VnbWVudCBmcm9tIHRoZSBjb2xvbi1zZXBhcmF0ZWQgb25lcyB3aXRoIGEgc2xhc2hcbiAgICAgICAgY29uc3QgbGFzdENvbXBvbmVudHMgPSBGbi5zcGxpdCgnLycsIEZuLnNlbGVjdCg0LCBjb21wb25lbnRzKS50b1N0cmluZygpKTtcblxuICAgICAgICBpZiAoYXJuRm9ybWF0ID09PSBBcm5Gb3JtYXQuU0xBU0hfUkVTT1VSQ0VfTkFNRSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSBGbi5zZWxlY3QoMCwgbGFzdENvbXBvbmVudHMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXNvdXJjZU5hbWUgPSBGbi5zZWxlY3QoMSwgbGFzdENvbXBvbmVudHMpLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhcm5Gb3JtYXQgaXMgQXJuRm9ybWF0LlNMQVNIX1JFU09VUkNFX1NMQVNIX1JFU09VUkNFX05BTUUsXG4gICAgICAgICAgICAvLyB3aGljaCBtZWFucyB0aGVyZSdzIGFuIGV4dHJhIHNsYXNoIHRoZXJlIGF0IHRoZSBiZWdpbm5pbmcgdGhhdCB3ZSBuZWVkIHRvIHNraXBcbiAgICAgICAgICAgIHJlc291cmNlID0gRm4uc2VsZWN0KDEsIGxhc3RDb21wb25lbnRzKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmVzb3VyY2VOYW1lID0gRm4uc2VsZWN0KDIsIGxhc3RDb21wb25lbnRzKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGFydGl0aW9uLCBzZXJ2aWNlLCByZWdpb24sIGFjY291bnQsIHJlc291cmNlLCByZXNvdXJjZU5hbWUsIGFybkZvcm1hdCB9O1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHRoYXQgYSBzdHJpbmcgaXMgZWl0aGVyIHVucGFyc2VhYmxlIG9yIGxvb2tzIG1vc3RseSBsaWtlIGFuIEFSTlxuICovXG5mdW5jdGlvbiBwYXJzZUFyblNoYXBlKGFybjogc3RyaW5nIHwgSVJlc29sdmFibGUpOiAndG9rZW4nIHwgc3RyaW5nW10ge1xuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQoYXJuKSkge1xuICAgICAgICByZXR1cm4gJ3Rva2VuJztcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgQVJOIG1lcmVseSBjb250YWlucyBUb2tlbnMsIGJ1dCBvdGhlcndpc2UgKmxvb2tzKiBtb3N0bHkgbGlrZSBhbiBBUk4sXG4gICAgLy8gaXQncyBhIHN0cmluZyBvZiB0aGUgZm9ybSAnYXJuOiR7cGFydGl0aW9ufTpzZXJ2aWNlOiR7cmVnaW9ufToke2FjY291bnR9OnJlc291cmNlL3h5eicuXG4gICAgLy8gUGFyc2UgZmllbGRzIG91dCB0byB0aGUgYmVzdCBvZiBvdXIgYWJpbGl0eS5cbiAgICAvLyBUb2tlbnMgd29uJ3QgY29udGFpbiBcIjpcIiwgc28gdGhpcyB3b24ndCBicmVhayB0aGVtLlxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSAoYXJuIGFzIHN0cmluZykuc3BsaXQoJzonKTtcblxuICAgIGNvbnN0IHBhcnRpdGlvbiA9IGNvbXBvbmVudHMubGVuZ3RoID4gMCA/IGNvbXBvbmVudHNbMF0gOiB1bmRlZmluZWQ7XG4gICAgaWYgKCFwYXJ0aXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHBhcnRpdGlvbmAgY29tcG9uZW50ICgxc3QgY29tcG9uZW50KSBvZiBhbiBBUk4gaXMgcmVxdWlyZWQ6ICcgKyBhcm4pO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZpY2UgPSBjb21wb25lbnRzLmxlbmd0aCA+IDEgPyBjb21wb25lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIGlmICghc2VydmljZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgc2VydmljZWAgY29tcG9uZW50ICgybmQgY29tcG9uZW50KSBvZiBhbiBBUk4gaXMgcmVxdWlyZWQ6ICcgKyBhcm4pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc291cmNlID0gY29tcG9uZW50cy5sZW5ndGggPiA0ID8gY29tcG9uZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGByZXNvdXJjZWAgY29tcG9uZW50ICg1dGggY29tcG9uZW50KSBvZiBhbiBBUk4gaXMgcmVxdWlyZWQ6ICcgKyBhcm4pO1xuICAgIH1cblxuICAgIC8vIFJlZ2lvbiBjYW4gYmUgbWlzc2luZyBpbiBnbG9iYWwgQVJOcyAoc3VjaCBhcyB1c2VkIGJ5IFJBTSlcblxuICAgIC8vIEFjY291bnQgY2FuIGJlIG1pc3NpbmcgaW4gc29tZSBBUk4gdHlwZXMgKHN1Y2ggYXMgdXNlZCBmb3IgT1NTIGJ1Y2tldHMpXG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbn1cbiJdfQ==