import * as ros from '@alicloud/ros-cdk-core';
import { RosVcoRouteEntry } from './vpc.generated';
export { RosVcoRouteEntry as VcoRouteEntryProperty };
/**
 * Properties for defining a `VcoRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vcorouteentry
 */
export interface VcoRouteEntryProps {
    /**
     * Property nextHop: The next hop of the destination routing entry.
     */
    readonly nextHop: string | ros.IResolvable;
    /**
     * Property routeDest: The target segment of the destination routing entry.
     */
    readonly routeDest: string | ros.IResolvable;
    /**
     * Property vpnConnectionId: IPsec Connection ID.
     */
    readonly vpnConnectionId: string | ros.IResolvable;
    /**
     * Property weight: The weight value of the destination routing entry.Value:
     * 0: Indicates low priority.
     * 100: Indicates high priority.
     */
    readonly weight: number | ros.IResolvable;
    /**
     * Property description: Descriptive information for the destination routing entry.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `VcoRouteEntry`.
 */
export interface IVcoRouteEntry extends ros.IResource {
    readonly props: VcoRouteEntryProps;
    /**
     * Attribute VpnConnectionId: The ID of the VPN connection.
     */
    readonly attrVpnConnectionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VcoRouteEntry`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVcoRouteEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vcorouteentry
 */
export declare class VcoRouteEntry extends ros.Resource implements IVcoRouteEntry {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VcoRouteEntryProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VpnConnectionId: The ID of the VPN connection.
     */
    readonly attrVpnConnectionId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VcoRouteEntryProps, enableResourcePropertyConstraint?: boolean);
}
