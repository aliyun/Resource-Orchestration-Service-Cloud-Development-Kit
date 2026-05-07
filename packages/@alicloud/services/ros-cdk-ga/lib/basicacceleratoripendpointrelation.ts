import * as ros from '@alicloud/ros-cdk-core';
import { RosBasicAcceleratorIpEndpointRelation } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBasicAcceleratorIpEndpointRelation as BasicAcceleratorIpEndpointRelationProperty };

/**
 * Properties for defining a `BasicAcceleratorIpEndpointRelation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
export interface BasicAcceleratorIpEndpointRelationProps {

    /**
     * Property accelerateIpId: The ID of the accelerated IP address.
     */
    readonly accelerateIpId: string | ros.IResolvable;

    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * Property endpointId: The ID of the endpoint.
     */
    readonly endpointId: string | ros.IResolvable;
}

/**
 * Represents a `BasicAcceleratorIpEndpointRelation`.
 */
export interface IBasicAcceleratorIpEndpointRelation extends ros.IResource {
    readonly props: BasicAcceleratorIpEndpointRelationProps;

    /**
     * Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    readonly attrAccelerateIpId: ros.IResolvable | string;

    /**
     * Attribute AcceleratorId: The ID of the basic GA instance.
     */
    readonly attrAcceleratorId: ros.IResolvable | string;

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BasicAcceleratorIpEndpointRelation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBasicAcceleratorIpEndpointRelation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
export class BasicAcceleratorIpEndpointRelation extends ros.Resource implements IBasicAcceleratorIpEndpointRelation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BasicAcceleratorIpEndpointRelationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    public readonly attrAccelerateIpId: ros.IResolvable | string;

    /**
     * Attribute AcceleratorId: The ID of the basic GA instance.
     */
    public readonly attrAcceleratorId: ros.IResolvable | string;

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BasicAcceleratorIpEndpointRelationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBasicAcceleratorIpEndpointRelation = new RosBasicAcceleratorIpEndpointRelation(this, id,  {
            accelerateIpId: props.accelerateIpId,
            endpointId: props.endpointId,
            acceleratorId: props.acceleratorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBasicAcceleratorIpEndpointRelation;
        this.attrAccelerateIpId = rosBasicAcceleratorIpEndpointRelation.attrAccelerateIpId;
        this.attrAcceleratorId = rosBasicAcceleratorIpEndpointRelation.attrAcceleratorId;
        this.attrEndpointId = rosBasicAcceleratorIpEndpointRelation.attrEndpointId;
    }
}
