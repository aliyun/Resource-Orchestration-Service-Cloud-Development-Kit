import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessRule } from './nas.generated';
export { RosAccessRule as AccessRuleProperty };
/**
 * Properties for defining a `AccessRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
 */
export interface AccessRuleProps {
    /**
     * Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * Property fileSystemType: The type of file system. Values:
     * standard: the general NAS
     * extreme: the extreme NAS
     */
    readonly fileSystemType?: string | ros.IResolvable;
    /**
     * Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. IP addresses in CIDR format and IPv6 format are supported.
     * Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     * Only VPC private network is supported.
     * IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
     */
    readonly ipv6SourceCidrIp?: string | ros.IResolvable;
    /**
     * Property priority: Priority level. Range: 1-100. Default value: 1
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    readonly rwAccessType?: string | ros.IResolvable;
    /**
     * Property sourceCidrIp: Address or address segment
     */
    readonly sourceCidrIp?: string | ros.IResolvable;
    /**
     * Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    readonly userAccessType?: string | ros.IResolvable;
}
/**
 * Represents a `AccessRule`.
 */
export interface IAccessRule extends ros.IResource {
    readonly props: AccessRuleProps;
    /**
     * Attribute AccessRuleId: Rule serial number
     */
    readonly attrAccessRuleId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::AccessRule`, which is used to create a rule for a permission group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
 */
export declare class AccessRule extends ros.Resource implements IAccessRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccessRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessRuleId: Rule serial number
     */
    readonly attrAccessRuleId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessRuleProps, enableResourcePropertyConstraint?: boolean);
}
