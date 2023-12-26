import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouter } from './cen.generated';
export { RosTransitRouter as TransitRouterProperty };
/**
 * Properties for defining a `TransitRouter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
 */
export interface TransitRouterProps {
    /**
     * Property cenId: CenId
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property transitRouterDescription: TransitRouterDescription
     */
    readonly transitRouterDescription?: string | ros.IResolvable;
    /**
     * Property transitRouterName: TransitRouterName
     */
    readonly transitRouterName?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouter`, which is used to create an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
 */
export declare class TransitRouter extends ros.Resource {
    /**
     * Attribute AliUid: AliUid
     */
    readonly attrAliUid: ros.IResolvable;
    /**
     * Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
     */
    readonly attrSystemTransitRouterRouteTableId: ros.IResolvable;
    /**
     * Attribute TransitRouterDescription: TransitRouterDescription
     */
    readonly attrTransitRouterDescription: ros.IResolvable;
    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable;
    /**
     * Attribute TransitRouterName: TransitRouterName
     */
    readonly attrTransitRouterName: ros.IResolvable;
    /**
     * Attribute Type: Type
     */
    readonly attrType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterProps, enableResourcePropertyConstraint?: boolean);
}
