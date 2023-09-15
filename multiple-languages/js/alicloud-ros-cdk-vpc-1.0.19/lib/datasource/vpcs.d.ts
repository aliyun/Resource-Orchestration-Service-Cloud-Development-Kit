import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcs } from './vpc.generated';
export { RosVpcs as VpcsProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::Vpcs`
 */
export interface VpcsProps {
    /**
     * Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly dhcpOptionsSetId?: string | ros.IResolvable;
    /**
     * Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property vpcIds: The list of The VPC IDs.
     * You can specify up to 20 VPC IDs.
     */
    readonly vpcIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property vpcName: The name of the VPC.
     */
    readonly vpcName?: string | ros.IResolvable;
    /**
     * Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
     */
    readonly vpcOwnerId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::Vpcs`
 */
export declare class Vpcs extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute VpcIds: The list of The VPC IDs.
     */
    readonly attrVpcIds: ros.IResolvable;
    /**
     * Attribute Vpcs: The detailed information about the VPCs.
     */
    readonly attrVpcs: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::Vpcs`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: VpcsProps, enableResourcePropertyConstraint?: boolean);
}
