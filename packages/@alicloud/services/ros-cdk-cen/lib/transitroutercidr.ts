import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterCidr } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterCidr as TransitRouterCidrProperty };

/**
 * Properties for defining a `TransitRouterCidr`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutercidr
 */
export interface TransitRouterCidrProps {

    /**
     * Property cidr: The CIDR block of the transit router.
     */
    readonly cidr: string | ros.IResolvable;

    /**
     * Property transitRouterId: The ID of the transit router.
     */
    readonly transitRouterId: string | ros.IResolvable;

    /**
     * Property description: The new description of the transit router CIDR block.
     * The description must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/. You can also leave this parameter empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property publishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
     * * true (default)
     *  If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
     *  A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection. The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.
     * * false.
     */
    readonly publishCidrRoute?: boolean | ros.IResolvable;

    /**
     * Property transitRouterCidrName: The new name of the transit router CIDR block.
     * The name must be 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/. You can also leave this parameter empty.
     */
    readonly transitRouterCidrName?: string | ros.IResolvable;
}

/**
 * Represents a `TransitRouterCidr`.
 */
export interface ITransitRouterCidr extends ros.IResource {
    readonly props: TransitRouterCidrProps;

    /**
     * Attribute Cidr: The CIDR block of the transit router.
     */
    readonly attrCidr: ros.IResolvable | string;

    /**
     * Attribute Description: The new description of the transit router CIDR block.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Family: The type of the CIDR block.
     */
    readonly attrFamily: ros.IResolvable | string;

    /**
     * Attribute PublishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
     */
    readonly attrPublishCidrRoute: ros.IResolvable | string;

    /**
     * Attribute TransitRouterCidrId: The ID of the CIDR block.
     */
    readonly attrTransitRouterCidrId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterCidrName: The new name of the transit router CIDR block.
     */
    readonly attrTransitRouterCidrName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    readonly attrTransitRouterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterCidr`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterCidr`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutercidr
 */
export class TransitRouterCidr extends ros.Resource implements ITransitRouterCidr {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TransitRouterCidrProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Cidr: The CIDR block of the transit router.
     */
    public readonly attrCidr: ros.IResolvable | string;

    /**
     * Attribute Description: The new description of the transit router CIDR block.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Family: The type of the CIDR block.
     */
    public readonly attrFamily: ros.IResolvable | string;

    /**
     * Attribute PublishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
     */
    public readonly attrPublishCidrRoute: ros.IResolvable | string;

    /**
     * Attribute TransitRouterCidrId: The ID of the CIDR block.
     */
    public readonly attrTransitRouterCidrId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterCidrName: The new name of the transit router CIDR block.
     */
    public readonly attrTransitRouterCidrName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    public readonly attrTransitRouterId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterCidrProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouterCidr = new RosTransitRouterCidr(this, id,  {
            transitRouterCidrName: props.transitRouterCidrName,
            description: props.description,
            cidr: props.cidr,
            publishCidrRoute: props.publishCidrRoute,
            transitRouterId: props.transitRouterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterCidr;
        this.attrCidr = rosTransitRouterCidr.attrCidr;
        this.attrDescription = rosTransitRouterCidr.attrDescription;
        this.attrFamily = rosTransitRouterCidr.attrFamily;
        this.attrPublishCidrRoute = rosTransitRouterCidr.attrPublishCidrRoute;
        this.attrTransitRouterCidrId = rosTransitRouterCidr.attrTransitRouterCidrId;
        this.attrTransitRouterCidrName = rosTransitRouterCidr.attrTransitRouterCidrName;
        this.attrTransitRouterId = rosTransitRouterCidr.attrTransitRouterId;
    }
}
