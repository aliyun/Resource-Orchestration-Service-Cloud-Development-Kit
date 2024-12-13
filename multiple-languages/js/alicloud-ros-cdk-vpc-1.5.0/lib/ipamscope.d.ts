import * as ros from '@alicloud/ros-cdk-core';
import { RosIpamScope } from './vpc.generated';
export { RosIpamScope as IpamScopeProperty };
/**
 * Properties for defining a `IpamScope`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamscope
 */
export interface IpamScopeProps {
    /**
     * Property ipamId: The id of the Ipam instance.
     */
    readonly ipamId: string | ros.IResolvable;
    /**
     * Property ipamScopeDescription: The description of the IPAM's scope of action.
     * It must be 2 to 256 characters in length and must start with a lowercase letter, but cannot start with 'http:\/\/ 'or 'https. If it is not filled in, it is empty. The default value is empty.
     */
    readonly ipamScopeDescription?: string | ros.IResolvable;
    /**
     * Property ipamScopeName: The name of the IPAM scope.
     */
    readonly ipamScopeName?: string | ros.IResolvable;
    /**
     * Property ipamScopeType: IPAM scope of action type:
     * **private**.
     *
     * > Currently, only the role scope of the private network is supported.
     */
    readonly ipamScopeType?: string | ros.IResolvable;
    /**
     * Property tags: Tags of ipam scope.
     */
    readonly tags?: RosIpamScope.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::IpamScope`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpamScope`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamscope
 */
export declare class IpamScope extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: IpamScopeProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the IPAM scope.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute IpamId: The id of the Ipam instance.
     */
    readonly attrIpamId: ros.IResolvable;
    /**
     * Attribute IpamScopeDescription: The description of the IPAM's scope of action.
     */
    readonly attrIpamScopeDescription: ros.IResolvable;
    /**
     * Attribute IpamScopeId: The ID of the IPAM scope.
     */
    readonly attrIpamScopeId: ros.IResolvable;
    /**
     * Attribute IpamScopeName: The name of the IPAM scope.
     */
    readonly attrIpamScopeName: ros.IResolvable;
    /**
     * Attribute IpamScopeType: IPAM scope of action type.
     */
    readonly attrIpamScopeType: ros.IResolvable;
    /**
     * Attribute Tags: The tag of the IPAM scope.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpamScopeProps, enableResourcePropertyConstraint?: boolean);
}
