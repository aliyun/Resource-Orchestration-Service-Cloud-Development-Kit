import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouter } from './cen.generated';
export { RosTransitRouter as TransitRouterProperty };
/**
 * Properties for defining a `ALIYUN::CEN::TransitRouter`
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
 * A ROS resource type:  `ALIYUN::CEN::TransitRouter`
 */
export declare class TransitRouter extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AliUid: AliUid
     */
    readonly attrAliUid: ros.IResolvable;
    /**
     * Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable;
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
     * Create a new `ALIYUN::CEN::TransitRouter`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=transitrouter.d.ts.map