import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteEntry } from './cen.generated';
export { RosRouteEntry as RouteEntryProperty };
/**
 * Properties for defining a `RouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
 */
export interface RouteEntryProps {
    /**
     * Property cenId: The ID of the CEN instance where the route entry is published.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    readonly childInstanceId: string | ros.IResolvable;
    /**
     * Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    readonly childInstanceRegionId: string | ros.IResolvable;
    /**
     * Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    readonly childInstanceRouteTableId: string | ros.IResolvable;
    /**
     * Property childInstanceType: The type of the network, value: VPC VBR
     */
    readonly childInstanceType: string | ros.IResolvable;
    /**
     * Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::RouteEntry`, which is used to advertise a route of an attached virtual private cloud (VPC) or virtual border router (VBR) to a Cloud Enterprise Network (CEN) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
 */
export declare class RouteEntry extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RouteEntryProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteEntryProps, enableResourcePropertyConstraint?: boolean);
}
