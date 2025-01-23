import { Fn } from './ros-fn';
import { Stack } from './stack';
import { Token } from './token';
import { IResolvable } from "./resolvable";
import { filterUndefined } from './util';

/**
 * An enum representing the various ARN formats that different services use.
 */
export enum ArnFormat {
    /**
     * This represents a format where there is no 'resourceName' part.
     * Everything after the last colon is considered the 'resource',
     * even if it contains slashes.
     * For some resource types, e.g. OSS buckets, 'resource' part defines the bucket name.
     */
    NO_RESOURCE_NAME = 'acs:service:region:account:resource',

    /**
     * This represents a format where the 'resource' and 'resourceName'
     * parts are separated with a colon.
     * Everything after the last colon is considered the 'resourceName',
     * even if it contains slashes.
     */
    COLON_RESOURCE_NAME = 'acs:service:region:account:resource:resourceName',

    /**
     * This represents a format where the 'resource' and 'resourceName'
     * parts are separated with a slash.
     * Like in: 'acs:ecs:cn-hangzhou:123456789012****:instance/i-12345678****'.
     * Everything after the separating slash is considered the 'resourceName',
     * even if it contains colons.
     * The region part can be omitted.
     * Like in: 'acs:ram::123456789012****:role/RoleName'.
     */
    SLASH_RESOURCE_NAME = 'acs:service:region:account:resource/resourceName',

    /**
     * This represents a format where the 'resource' and 'resourceName'
     * parts are seperated with a slash,
     * but there is also an additional slash after the colon separating 'account' from 'resource'.
     * Like in: 'acs:mns:cn-hangzhou:123456789012****:/topics/my-topic'.
     * Note that the leading slash is _not_ included in the parsed 'resource' part.
     */
        // eslint-disable-next-line @cdklabs/no-literal-partition
    SLASH_RESOURCE_SLASH_RESOURCE_NAME = 'acs:service:region:account:/resource/resourceName',
}

export interface ArnComponents {
    /**
     * The partition that the resource is in.
     *
     * @default acs
     */
    readonly partition?: string;

    /**
     * The service namespace that identifies the ACS product (for example,
     * 'ecs', 'fc', 'ram').
     */
    readonly service: string;

    /**
     * The region the resource resides in. Note that the ARNs for some resources
     * do not require a region, so this component might be omitted.
     *
     * @default The region the stack is deployed to.
     */
    readonly region?: string;

    /**
     * The ID of the ACS account that owns the resource, without the hyphens.
     * For example, 123456789012. Note that the ARNs for some resources don't
     * require an account number, so this component might be omitted.
     *
     * @default The account the stack is deployed to.
     */
    readonly account?: string;

    /**
     * Resource type (e.g. "instance", "functions", "role").
     * For some resource types, e.g. OSS buckets, this field defines the bucket name.
     */
    readonly resource: string;

    /**
     * Resource name or path within the resource (i.e. OSS bucket object key) or
     * a wildcard such as ``"*"``. This is service-dependent.
     */
    readonly resourceName?: string;

    /**
     * The specific ARN format to use for this ARN value.
     *
     * @default - uses value of `sep` as the separator for formatting,
     *   `ArnFormat.SLASH_RESOURCE_NAME` if that property was also not provided
     */
    readonly arnFormat?: ArnFormat;
}

export class Arn {
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
    public static format(components: ArnComponents, stack?: Stack): string {
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
    public static split(arn: string | IResolvable, arnFormat: ArnFormat): ArnComponents {
        const components = parseArnShape(arn);
        if (components === 'token') {
            return parseTokenArn(arn, arnFormat);
        }

        const [partition, service, region, account, resourceTypeOrName, ...rest] = components;

        let resource: string;
        let resourceName: string | undefined;
        let sep: string | undefined;
        let resourcePartStartIndex = 0;
        let detectedArnFormat: ArnFormat;

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
            } else {
                sep = '/';
                detectedArnFormat = resourcePartStartIndex === 0
                    ? ArnFormat.SLASH_RESOURCE_NAME
                    // need to repeat this here, as otherwise the compiler thinks 'detectedArnFormat' is not initialized in all paths
                    : ArnFormat.SLASH_RESOURCE_SLASH_RESOURCE_NAME;
            }
        } else if (rest.length > 0) {
            sep = ':';
            slashIndex = -1;
            detectedArnFormat = ArnFormat.COLON_RESOURCE_NAME;
        } else {
            sep = undefined;
            detectedArnFormat = ArnFormat.NO_RESOURCE_NAME;
        }

        if (slashIndex !== -1) {
            resource = resourceTypeOrName.substring(resourcePartStartIndex, slashIndex);
            resourceName = resourceTypeOrName.substring(slashIndex + 1);
        } else {
            resource = resourceTypeOrName;
        }

        if (rest.length > 0) {
            if (!resourceName) {
                resourceName = '';
            } else {
                resourceName += ':';
            }

            resourceName += rest.join(':');
        }

        // "|| undefined" will cause empty strings to be treated as "undefined".
        // Optional ARN attributes (e.g. region, account) should return as empty string
        // if they are provided as such.
        return filterUndefined({
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
    public static extractResourceName(arn: string, resourceType: string): string {
        const components = parseArnShape(arn);
        if (components === 'token') {
            return Fn.select(1, Fn.split(`:${resourceType}/`, arn)).toString();
        }

        // Apparently we could just parse this right away. Validate that we got the right
        // resource type (to notify authors of incorrect assumptions right away).
        const parsed = Arn.split(arn, ArnFormat.SLASH_RESOURCE_NAME);
        if (!Token.isUnresolved(parsed.resource) && parsed.resource !== resourceType) {
            throw new Error(`Expected resource type '${resourceType}' in ARN, got '${parsed.resource}' in '${arn}'`);
        }
        if (!parsed.resourceName) {
            throw new Error(`Expected resource name in ARN, didn't find one: '${arn}'`);
        }
        return parsed.resourceName;
    }

    private constructor() { }
}

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
function parseTokenArn(arnToken: string | IResolvable, arnFormat: ArnFormat): ArnComponents {
    // ARN looks like:
    // partition:service:region:account:resource
    // partition:service:region:account:resource:resourceName
    // partition:service:region:account:resource/resourceName
    // partition:service:region:account:/resource/resourceName

    const components = Fn.split(':', arnToken.toString());

    const partition = Fn.select(0, components).toString();
    const service = Fn.select(1, components).toString();
    const region = Fn.select(2, components).toString();
    const account = Fn.select(3, components).toString();
    let resource: string;
    let resourceName: string | undefined;

    if (arnFormat === ArnFormat.NO_RESOURCE_NAME || arnFormat === ArnFormat.COLON_RESOURCE_NAME) {
        // we know that the 'resource' part will always be the 5th segment in this case
        resource = Fn.select(4, components).toString();
        if (arnFormat === ArnFormat.COLON_RESOURCE_NAME) {
            resourceName = Fn.select(5, components).toString();
        } else {
            resourceName = undefined;
        }
    } else {
        // we know that the 'resource' and 'resourceName' parts are separated by slash here,
        // so we split the 5th segment from the colon-separated ones with a slash
        const lastComponents = Fn.split('/', Fn.select(4, components).toString());

        if (arnFormat === ArnFormat.SLASH_RESOURCE_NAME) {
            resource = Fn.select(0, lastComponents).toString();
            resourceName = Fn.select(1, lastComponents).toString();
        } else {
            // arnFormat is ArnFormat.SLASH_RESOURCE_SLASH_RESOURCE_NAME,
            // which means there's an extra slash there at the beginning that we need to skip
            resource = Fn.select(1, lastComponents).toString();
            resourceName = Fn.select(2, lastComponents).toString();
        }
    }

    return { partition, service, region, account, resource, resourceName, arnFormat };
}

/**
 * Validate that a string is either unparseable or looks mostly like an ARN
 */
function parseArnShape(arn: string | IResolvable): 'token' | string[] {
    if (Token.isUnresolved(arn)) {
        return 'token';
    }

    // If the ARN merely contains Tokens, but otherwise *looks* mostly like an ARN,
    // it's a string of the form 'arn:${partition}:service:${region}:${account}:resource/xyz'.
    // Parse fields out to the best of our ability.
    // Tokens won't contain ":", so this won't break them.
    const components = (arn as string).split(':');

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
