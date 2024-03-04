import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouters } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouters as TransitRoutersProperty };

/**
 * Properties for defining a `TransitRouters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
 */
export interface TransitRoutersProps {

    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * Property regionId: The ID of the region where the transit router is deployed. 
     * You can call the DescribeRegions operation to query region IDs.
     */
    readonly regionId?: string | ros.IResolvable;

    /**
     * Property transitRouterId: The ID of the transit router.
     */
    readonly transitRouterId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CEN::TransitRouters`, which is used to query the transit routers of a Cloud Enterprise Network (CEN) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
 */
export class TransitRouters extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TransitRoutersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TransitRouterIds: The list of TransitRouter IDs.
     */
    public readonly attrTransitRouterIds: ros.IResolvable;

    /**
     * Attribute TransitRouters: The list of TransitRouters.
     */
    public readonly attrTransitRouters: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRoutersProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouters = new RosTransitRouters(this, id,  {
            cenId: props.cenId,
            regionId: props.regionId,
            transitRouterId: props.transitRouterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouters;
        this.attrTransitRouterIds = rosTransitRouters.attrTransitRouterIds;
        this.attrTransitRouters = rosTransitRouters.attrTransitRouters;
    }
}
