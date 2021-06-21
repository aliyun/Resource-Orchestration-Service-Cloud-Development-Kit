import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouter } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class TransitRouter extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AliUid: AliUid
     */
    public readonly attrAliUid: ros.IResolvable;

    /**
     * Attribute CenId: CenId
     */
    public readonly attrCenId: ros.IResolvable;

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
     * Create a new `ALIYUN::CEN::TransitRouter`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTransitRouter = new RosTransitRouter(this, id,  {
            cenId: props.cenId,
            transitRouterDescription: props.transitRouterDescription,
            transitRouterName: props.transitRouterName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouter;
        this.attrAliUid = rosTransitRouter.attrAliUid;
        this.attrCenId = rosTransitRouter.attrCenId;
        this.attrTransitRouterDescription = rosTransitRouter.attrTransitRouterDescription;
        this.attrTransitRouterId = rosTransitRouter.attrTransitRouterId;
        this.attrTransitRouterName = rosTransitRouter.attrTransitRouterName;
        this.attrType = rosTransitRouter.attrType;
    }
}
