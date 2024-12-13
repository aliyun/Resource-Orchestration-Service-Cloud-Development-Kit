import * as ros from '@alicloud/ros-cdk-core';
import { RosPublicIpAddressPool } from './vpc.generated';
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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::PublicIpAddressPool`, which is used to query the basic information about an available IP address pool.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPublicIpAddressPool`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
 */
export declare class PublicIpAddressPool extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PublicIpAddressPoolProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: Description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute IpAddressRemaining: Whether there is a free IP address.
     */
    readonly attrIpAddressRemaining: ros.IResolvable;
    /**
     * Attribute Isp: Service providers.
     */
    readonly attrIsp: ros.IResolvable;
    /**
     * Attribute PublicIpAddressPoolId: The first ID of the resource.
     */
    readonly attrPublicIpAddressPoolId: ros.IResolvable;
    /**
     * Attribute PublicIpAddressPoolName: The name of the resource.
     */
    readonly attrPublicIpAddressPoolName: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute Tags: The tags of PrefixList.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute TotalIpNum: Total ip number of PublicIpAddressPool.
     */
    readonly attrTotalIpNum: ros.IResolvable;
    /**
     * Attribute UsedIpNum: Used ip number of PublicIpAddressPool.
     */
    readonly attrUsedIpNum: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PublicIpAddressPoolProps, enableResourcePropertyConstraint?: boolean);
}
