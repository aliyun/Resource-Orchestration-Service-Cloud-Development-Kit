import * as ros from '@alicloud/ros-cdk-core';
import { RosForwardEntry } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosForwardEntry as ForwardEntryProperty };

/**
 * Properties for defining a `ForwardEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-forwardentry
 */
export interface ForwardEntryProps {

    /**
     * Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly externalIp: string | ros.IResolvable;

    /**
     * Property externalPort: Source port, now support [1-65535]|Any|x\/y
     */
    readonly externalPort: string | ros.IResolvable;

    /**
     * Property forwardTableId: Create forward entry in specified forward table.
     */
    readonly forwardTableId: string | ros.IResolvable;

    /**
     * Property internalIp: Destination IP, must belong to VPC private IP
     */
    readonly internalIp: string | ros.IResolvable;

    /**
     * Property internalPort: Destination port, now support [1-65535]|Any|x\/y
     */
    readonly internalPort: string | ros.IResolvable;

    /**
     * Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    readonly ipProtocol: string | ros.IResolvable;

    /**
     * Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    readonly forwardEntryName?: string | ros.IResolvable;

    /**
     * Property portBreak: Specifies whether to remove limits on the port range.
     */
    readonly portBreak?: boolean | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::ForwardEntry`, which is used to configure the Destination Network Address Translation (DNAT) table of a Network Address Translation (NAT) gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosForwardEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-forwardentry
 */
export class ForwardEntry extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ForwardEntryProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ForwardEntryId: The id of created forward entry.
     */
    public readonly attrForwardEntryId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ForwardEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosForwardEntry = new RosForwardEntry(this, id,  {
            externalPort: props.externalPort,
            externalIp: props.externalIp,
            ipProtocol: props.ipProtocol,
            portBreak: props.portBreak,
            internalPort: props.internalPort,
            forwardEntryName: props.forwardEntryName,
            internalIp: props.internalIp,
            forwardTableId: props.forwardTableId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosForwardEntry;
        this.attrForwardEntryId = rosForwardEntry.attrForwardEntryId;
    }
}
