import * as ros from '@alicloud/ros-cdk-core';
import { RosIpamScope } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class IpamScope extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: IpamScopeProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the IPAM scope.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute IpamId: The id of the Ipam instance.
     */
    public readonly attrIpamId: ros.IResolvable;

    /**
     * Attribute IpamScopeDescription: The description of the IPAM's scope of action.
     */
    public readonly attrIpamScopeDescription: ros.IResolvable;

    /**
     * Attribute IpamScopeId: The ID of the IPAM scope.
     */
    public readonly attrIpamScopeId: ros.IResolvable;

    /**
     * Attribute IpamScopeName: The name of the IPAM scope.
     */
    public readonly attrIpamScopeName: ros.IResolvable;

    /**
     * Attribute IpamScopeType: IPAM scope of action type.
     */
    public readonly attrIpamScopeType: ros.IResolvable;

    /**
     * Attribute Tags: The tag of the IPAM scope.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpamScopeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIpamScope = new RosIpamScope(this, id,  {
            ipamScopeName: props.ipamScopeName,
            ipamId: props.ipamId,
            ipamScopeDescription: props.ipamScopeDescription,
            ipamScopeType: props.ipamScopeType,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpamScope;
        this.attrCreateTime = rosIpamScope.attrCreateTime;
        this.attrIpamId = rosIpamScope.attrIpamId;
        this.attrIpamScopeDescription = rosIpamScope.attrIpamScopeDescription;
        this.attrIpamScopeId = rosIpamScope.attrIpamScopeId;
        this.attrIpamScopeName = rosIpamScope.attrIpamScopeName;
        this.attrIpamScopeType = rosIpamScope.attrIpamScopeType;
        this.attrTags = rosIpamScope.attrTags;
    }
}
