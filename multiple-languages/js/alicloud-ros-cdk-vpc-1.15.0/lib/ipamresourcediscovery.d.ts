import * as ros from '@alicloud/ros-cdk-core';
import { RosIpamResourceDiscovery } from './vpc.generated';
export { RosIpamResourceDiscovery as IpamResourceDiscoveryProperty };
/**
 * Properties for defining a `IpamResourceDiscovery`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamresourcediscovery
 */
export interface IpamResourceDiscoveryProps {
    /**
     * Property operatingRegionList: The list of regions where the resource discovery is effective.
     */
    readonly operatingRegionList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ipamResourceDiscoveryDescription: The description of the resource discovery.
     */
    readonly ipamResourceDiscoveryDescription?: string | ros.IResolvable;
    /**
     * Property ipamResourceDiscoveryName: The name of the resource discovery.
     */
    readonly ipamResourceDiscoveryName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of ipam resource discovery.
     */
    readonly tags?: RosIpamResourceDiscovery.TagsProperty[];
}
/**
 * Represents a `IpamResourceDiscovery`.
 */
export interface IIpamResourceDiscovery extends ros.IResource {
    readonly props: IpamResourceDiscoveryProps;
    /**
     * Attribute CreateTime: The time when the resource discovery was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute IpamResourceDiscoveryDescription: The description of the resource discovery.
     */
    readonly attrIpamResourceDiscoveryDescription: ros.IResolvable | string;
    /**
     * Attribute IpamResourceDiscoveryId: The ID of the resource discovery instance.
     */
    readonly attrIpamResourceDiscoveryId: ros.IResolvable | string;
    /**
     * Attribute IpamResourceDiscoveryName: The name of the resource discovery.
     */
    readonly attrIpamResourceDiscoveryName: ros.IResolvable | string;
    /**
     * Attribute OperatingRegionList: The list of regions where the resource discovery is effective.
     */
    readonly attrOperatingRegionList: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the discovery instance.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute Type: The type of resource discovery.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::IpamResourceDiscovery`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpamResourceDiscovery`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamresourcediscovery
 */
export declare class IpamResourceDiscovery extends ros.Resource implements IIpamResourceDiscovery {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: IpamResourceDiscoveryProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the resource discovery was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute IpamResourceDiscoveryDescription: The description of the resource discovery.
     */
    readonly attrIpamResourceDiscoveryDescription: ros.IResolvable | string;
    /**
     * Attribute IpamResourceDiscoveryId: The ID of the resource discovery instance.
     */
    readonly attrIpamResourceDiscoveryId: ros.IResolvable | string;
    /**
     * Attribute IpamResourceDiscoveryName: The name of the resource discovery.
     */
    readonly attrIpamResourceDiscoveryName: ros.IResolvable | string;
    /**
     * Attribute OperatingRegionList: The list of regions where the resource discovery is effective.
     */
    readonly attrOperatingRegionList: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the discovery instance.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute Type: The type of resource discovery.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpamResourceDiscoveryProps, enableResourcePropertyConstraint?: boolean);
}
