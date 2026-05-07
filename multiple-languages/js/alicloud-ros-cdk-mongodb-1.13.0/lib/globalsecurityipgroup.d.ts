import * as ros from '@alicloud/ros-cdk-core';
import { RosGlobalSecurityIPGroup } from './mongodb.generated';
export { RosGlobalSecurityIPGroup as GlobalSecurityIPGroupProperty };
/**
 * Properties for defining a `GlobalSecurityIPGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
 */
export interface GlobalSecurityIPGroupProps {
    /**
     * Property globalIgName: The name of the IP whitelist template.
     */
    readonly globalIgName: string | ros.IResolvable;
    /**
     * Property globalSecurityIpList: The IP address in the whitelist template.
     */
    readonly globalSecurityIpList: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `GlobalSecurityIPGroup`.
 */
export interface IGlobalSecurityIPGroup extends ros.IResource {
    readonly props: GlobalSecurityIPGroupProps;
    /**
     * Attribute GlobalIgName: The name of the IP whitelist template.
     */
    readonly attrGlobalIgName: ros.IResolvable | string;
    /**
     * Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.
     */
    readonly attrGlobalSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute GlobalSecurityIpList: The IP address in the whitelist template.
     */
    readonly attrGlobalSecurityIpList: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MONGODB::GlobalSecurityIPGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGlobalSecurityIPGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
 */
export declare class GlobalSecurityIPGroup extends ros.Resource implements IGlobalSecurityIPGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GlobalSecurityIPGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GlobalIgName: The name of the IP whitelist template.
     */
    readonly attrGlobalIgName: ros.IResolvable | string;
    /**
     * Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.
     */
    readonly attrGlobalSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute GlobalSecurityIpList: The IP address in the whitelist template.
     */
    readonly attrGlobalSecurityIpList: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GlobalSecurityIPGroupProps, enableResourcePropertyConstraint?: boolean);
}
