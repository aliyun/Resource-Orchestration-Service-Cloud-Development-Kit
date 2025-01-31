import { Stack } from './stack';
import { IResolvable } from "./resolvable";
/**
 * An enum representing the various ARN formats that different services use.
 */
export declare enum ArnFormat {
    /**
     * This represents a format where there is no 'resourceName' part.
     * Everything after the last colon is considered the 'resource',
     * even if it contains slashes.
     * For some resource types, e.g. OSS buckets, 'resource' part defines the bucket name.
     */
    NO_RESOURCE_NAME = "acs:service:region:account:resource",
    /**
     * This represents a format where the 'resource' and 'resourceName'
     * parts are separated with a colon.
     * Everything after the last colon is considered the 'resourceName',
     * even if it contains slashes.
     */
    COLON_RESOURCE_NAME = "acs:service:region:account:resource:resourceName",
    /**
     * This represents a format where the 'resource' and 'resourceName'
     * parts are separated with a slash.
     * Like in: 'acs:ecs:cn-hangzhou:123456789012****:instance/i-12345678****'.
     * Everything after the separating slash is considered the 'resourceName',
     * even if it contains colons.
     * The region part can be omitted.
     * Like in: 'acs:ram::123456789012****:role/RoleName'.
     */
    SLASH_RESOURCE_NAME = "acs:service:region:account:resource/resourceName",
    /**
     * This represents a format where the 'resource' and 'resourceName'
     * parts are seperated with a slash,
     * but there is also an additional slash after the colon separating 'account' from 'resource'.
     * Like in: 'acs:mns:cn-hangzhou:123456789012****:/topics/my-topic'.
     * Note that the leading slash is _not_ included in the parsed 'resource' part.
     */
    SLASH_RESOURCE_SLASH_RESOURCE_NAME = "acs:service:region:account:/resource/resourceName"
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
export declare class Arn {
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
    static format(components: ArnComponents, stack?: Stack): string;
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
    static split(arn: string | IResolvable, arnFormat: ArnFormat): ArnComponents;
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
    static extractResourceName(arn: string, resourceType: string): string;
    private constructor();
}
