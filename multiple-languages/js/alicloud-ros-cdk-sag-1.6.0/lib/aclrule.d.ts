import * as ros from '@alicloud/ros-cdk-core';
import { RosACLRule } from './sag.generated';
export { RosACLRule as ACLRuleProperty };
/**
 * Properties for defining a `ACLRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule
 */
export interface ACLRuleProps {
    /**
     * Property aclId: Access control ID.
     */
    readonly aclId: string | ros.IResolvable;
    /**
     * Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    readonly destCidr: string | ros.IResolvable;
    /**
     * Property destPortRange: Destination port range, 80\/80.
     */
    readonly destPortRange: string | ros.IResolvable;
    /**
     * Property direction: Regular direction.
     * Value: in|out
     */
    readonly direction: string | ros.IResolvable;
    /**
     * Property ipProtocol: Protocol, not case sensitive.
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * Property policy: Access: accept|drop
     */
    readonly policy: string | ros.IResolvable;
    /**
     * Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    readonly sourceCidr: string | ros.IResolvable;
    /**
     * Property sourcePortRange: Source port range, 80\/80.
     */
    readonly sourcePortRange: string | ros.IResolvable;
    /**
     * Property description: Rule description information, ranging from 1 to 512 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    readonly dpiGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    readonly dpiSignatureIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property name: The name of the ACL rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * Property type: The type of the ACL rule: Valid values:
     * LAN: The ACL rule controls traffic of private IP addresses. This is the default value.
     * WAN: The ACL rule controls traffic of public IP addresses.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * Represents a `ACLRule`.
 */
export interface IACLRule extends ros.IResource {
    readonly props: ACLRuleProps;
    /**
     * Attribute AcrId: Access control rule ID.
     */
    readonly attrAcrId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::ACLRule`, which is used to add an access control list (ACL) rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosACLRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule
 */
export declare class ACLRule extends ros.Resource implements IACLRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ACLRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AcrId: Access control rule ID.
     */
    readonly attrAcrId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ACLRuleProps, enableResourcePropertyConstraint?: boolean);
}
