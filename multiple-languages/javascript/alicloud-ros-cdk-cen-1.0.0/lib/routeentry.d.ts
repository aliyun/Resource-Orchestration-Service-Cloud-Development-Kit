import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteEntry } from './cen.generated';
export { RosRouteEntry as RouteEntryProperty };
/**
 * Properties for defining a `ALIYUN::CEN::RouteEntry`
 */
export interface RouteEntryProps {
    /**
     * @Property cenId: The ID of the CEN instance where the route entry is published.
     */
    readonly cenId: string;
    /**
     * @Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    readonly childInstanceId: string;
    /**
     * @Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    readonly childInstanceRegionId: string;
    /**
     * @Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    readonly childInstanceRouteTableId: string;
    /**
     * @Property childInstanceType: The type of the network, value: VPC VBR
     */
    readonly childInstanceType: string;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    readonly destinationCidrBlock: string;
}
/**
 * A ROS resource type:  `ALIYUN::CEN::RouteEntry`
 */
export declare class RouteEntry extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::CEN::RouteEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteEntryProps, enableResourcePropertyConstraint?: boolean);
}
