import * as ros from '@alicloud/ros-cdk-core';
import { RosGlobalSecurityIPGroup } from './polardb.generated';
export { RosGlobalSecurityIPGroup as GlobalSecurityIPGroupProperty };
/**
 * Properties for defining a `GlobalSecurityIPGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup
 */
export interface GlobalSecurityIPGroupProps {
    /**
     * Property gIpList: The IP addresses in the whitelist template.
     * You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
     */
    readonly gIpList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property globalIgName: The name of the IP whitelist template. The name must meet the following requirements:
     * The name can contain lowercase letters, digits, and underscores (_).
     * The name must start with a letter and end with a letter or digit.
     * The name must be 2 to 120 characters in length.
     */
    readonly globalIgName: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `GlobalSecurityIPGroup`.
 */
export interface IGlobalSecurityIPGroup extends ros.IResource {
    readonly props: GlobalSecurityIPGroupProps;
    /**
     * Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.
     */
    readonly attrGlobalSecurityGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::GlobalSecurityIPGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGlobalSecurityIPGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup
 */
export declare class GlobalSecurityIPGroup extends ros.Resource implements IGlobalSecurityIPGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GlobalSecurityIPGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.
     */
    readonly attrGlobalSecurityGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GlobalSecurityIPGroupProps, enableResourcePropertyConstraint?: boolean);
}
