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
 * Represents a `TransitRouter`.
 */
export interface ITransitRouter extends ros.IResource {
    readonly props: TransitRouterProps;
    /**
     * Attribute AliUid: AliUid
     */
    readonly attrAliUid: ros.IResolvable | string;
    /**
     * Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable | string;
    /**
     * Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
     */
    readonly attrSystemTransitRouterRouteTableId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterDescription: TransitRouterDescription
     */
    readonly attrTransitRouterDescription: ros.IResolvable | string;
    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterName: TransitRouterName
     */
    readonly attrTransitRouterName: ros.IResolvable | string;
    /**
     * Attribute Type: Type
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouter`, which is used to create an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
 */
export declare class TransitRouter extends ros.Resource implements ITransitRouter {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TransitRouterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AliUid: AliUid
     */
    readonly attrAliUid: ros.IResolvable | string;
    /**
     * Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable | string;
    /**
     * Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
     */
    readonly attrSystemTransitRouterRouteTableId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterDescription: TransitRouterDescription
     */
    readonly attrTransitRouterDescription: ros.IResolvable | string;
    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterName: TransitRouterName
     */
    readonly attrTransitRouterName: ros.IResolvable | string;
    /**
     * Attribute Type: Type
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterProps, enableResourcePropertyConstraint?: boolean);
}
