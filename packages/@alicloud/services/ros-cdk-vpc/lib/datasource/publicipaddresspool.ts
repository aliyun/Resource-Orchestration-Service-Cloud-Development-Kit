import * as ros from '@alicloud/ros-cdk-core';
import { RosPublicIpAddressPool } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPublicIpAddressPool as PublicIpAddressPoolProperty };

/**
 * Properties for defining a `PublicIpAddressPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
 */
export interface PublicIpAddressPoolProps {

    /**
     * Property publicIpAddressPoolId: The first ID of the resource.
     */
    readonly publicIpAddressPoolId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::PublicIpAddressPool`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPublicIpAddressPool`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
 */
export class PublicIpAddressPool extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PublicIpAddressPoolProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: Description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute IpAddressRemaining: Whether there is a free IP address.
     */
    public readonly attrIpAddressRemaining: ros.IResolvable;

    /**
     * Attribute Isp: Service providers.
     */
    public readonly attrIsp: ros.IResolvable;

    /**
     * Attribute PublicIpAddressPoolId: The first ID of the resource.
     */
    public readonly attrPublicIpAddressPoolId: ros.IResolvable;

    /**
     * Attribute PublicIpAddressPoolName: The name of the resource.
     */
    public readonly attrPublicIpAddressPoolName: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Tags: The tags of PrefixList.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute TotalIpNum: Total ip number of PublicIpAddressPool.
     */
    public readonly attrTotalIpNum: ros.IResolvable;

    /**
     * Attribute UsedIpNum: Used ip number of PublicIpAddressPool.
     */
    public readonly attrUsedIpNum: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PublicIpAddressPoolProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPublicIpAddressPool = new RosPublicIpAddressPool(this, id,  {
            publicIpAddressPoolId: props.publicIpAddressPoolId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPublicIpAddressPool;
        this.attrCreateTime = rosPublicIpAddressPool.attrCreateTime;
        this.attrDescription = rosPublicIpAddressPool.attrDescription;
        this.attrIpAddressRemaining = rosPublicIpAddressPool.attrIpAddressRemaining;
        this.attrIsp = rosPublicIpAddressPool.attrIsp;
        this.attrPublicIpAddressPoolId = rosPublicIpAddressPool.attrPublicIpAddressPoolId;
        this.attrPublicIpAddressPoolName = rosPublicIpAddressPool.attrPublicIpAddressPoolName;
        this.attrResourceGroupId = rosPublicIpAddressPool.attrResourceGroupId;
        this.attrTags = rosPublicIpAddressPool.attrTags;
        this.attrTotalIpNum = rosPublicIpAddressPool.attrTotalIpNum;
        this.attrUsedIpNum = rosPublicIpAddressPool.attrUsedIpNum;
    }
}
