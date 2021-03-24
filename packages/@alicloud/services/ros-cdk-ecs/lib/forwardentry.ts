import * as ros from '@alicloud/ros-cdk-core';
import { RosForwardEntry } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosForwardEntry as ForwardEntryProperty };

/**
 * Properties for defining a `ALIYUN::ECS::ForwardEntry`
 */
export interface ForwardEntryProps {

    /**
     * Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly externalIp: string;

    /**
     * Property externalPort: Source port, now support [1-65535]|Any
     */
    readonly externalPort: string;

    /**
     * Property forwardTableId: Create forward entry in specified forward table.
     */
    readonly forwardTableId: string;

    /**
     * Property internalIp: Destination IP, must belong to VPC private IP
     */
    readonly internalIp: string;

    /**
     * Property internalPort: Destination port, now support [1-65535]|Any
     */
    readonly internalPort: string;

    /**
     * Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    readonly ipProtocol: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::ForwardEntry`
 */
export class ForwardEntry extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ForwardEntryId: The id of created forward entry.
     */
    public readonly attrForwardEntryId: any;

    /**
     * Create a new `ALIYUN::ECS::ForwardEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ForwardEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosForwardEntry = new RosForwardEntry(this, id,  {
            externalPort: props.externalPort,
            externalIp: props.externalIp,
            ipProtocol: props.ipProtocol,
            internalPort: props.internalPort,
            internalIp: props.internalIp,
            forwardTableId: props.forwardTableId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosForwardEntry;
        this.attrForwardEntryId = rosForwardEntry.attrForwardEntryId;
    }
}
