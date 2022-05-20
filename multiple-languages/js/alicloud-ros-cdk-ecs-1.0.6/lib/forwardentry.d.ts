import * as ros from '@alicloud/ros-cdk-core';
import { RosForwardEntry } from './ecs.generated';
export { RosForwardEntry as ForwardEntryProperty };
/**
 * Properties for defining a `ALIYUN::ECS::ForwardEntry`
 */
export interface ForwardEntryProps {
    /**
     * Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly externalIp: string | ros.IResolvable;
    /**
     * Property externalPort: Source port, now support [1-65535]|Any|x/y
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
     * Property internalPort: Destination port, now support [1-65535]|Any|x/y
     */
    readonly internalPort: string | ros.IResolvable;
    /**
     * Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    readonly forwardEntryName?: string | ros.IResolvable;
    /**
     * Property portBreak: Specifies whether to remove limits on the port range.
     */
    readonly portBreak?: boolean | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::ForwardEntry`
 */
export declare class ForwardEntry extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ForwardEntryId: The id of created forward entry.
     */
    readonly attrForwardEntryId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::ForwardEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ForwardEntryProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=forwardentry.d.ts.map