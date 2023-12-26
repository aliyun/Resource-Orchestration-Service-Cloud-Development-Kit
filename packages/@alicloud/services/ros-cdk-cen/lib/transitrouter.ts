import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouter } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class TransitRouter extends ros.Resource {

    /**
     * Attribute AliUid: AliUid
     */
    public readonly attrAliUid: ros.IResolvable;

    /**
     * Attribute CenId: CenId
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
     */
    public readonly attrSystemTransitRouterRouteTableId: ros.IResolvable;

    /**
     * Attribute TransitRouterDescription: TransitRouterDescription
     */
    public readonly attrTransitRouterDescription: ros.IResolvable;

    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable;

    /**
     * Attribute TransitRouterName: TransitRouterName
     */
    public readonly attrTransitRouterName: ros.IResolvable;

    /**
     * Attribute Type: Type
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTransitRouter = new RosTransitRouter(this, id,  {
            cenId: props.cenId,
            transitRouterName: props.transitRouterName,
            transitRouterDescription: props.transitRouterDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouter;
        this.attrAliUid = rosTransitRouter.attrAliUid;
        this.attrCenId = rosTransitRouter.attrCenId;
        this.attrSystemTransitRouterRouteTableId = rosTransitRouter.attrSystemTransitRouterRouteTableId;
        this.attrTransitRouterDescription = rosTransitRouter.attrTransitRouterDescription;
        this.attrTransitRouterId = rosTransitRouter.attrTransitRouterId;
        this.attrTransitRouterName = rosTransitRouter.attrTransitRouterName;
        this.attrType = rosTransitRouter.attrType;
    }
}
