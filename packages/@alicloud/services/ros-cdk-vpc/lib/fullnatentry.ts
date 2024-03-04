import * as ros from '@alicloud/ros-cdk-core';
import { RosFullNatEntry } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFullNatEntry as FullNatEntryProperty };

/**
 * Properties for defining a `FullNatEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
 */
export interface FullNatEntryProps {

    /**
     * Property accessIp: The backend IP address to be modified in FULLNAT address translation.
     */
    readonly accessIp: string | ros.IResolvable;

    /**
     * Property accessPort: The backend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
     */
    readonly accessPort: string | ros.IResolvable;

    /**
     * Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.
     */
    readonly fullNatTableId: string | ros.IResolvable;

    /**
     * Property ipProtocol: The protocol of the packets that are forwarded by the port. Valid values:
     * TCP
     * UDP
     */
    readonly ipProtocol: string | ros.IResolvable;

    /**
     * Property natIp: The NAT IP address that provides address translation.
     */
    readonly natIp: string | ros.IResolvable;

    /**
     * Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
     */
    readonly natIpPort: string | ros.IResolvable;

    /**
     * Property networkInterfaceId: The elastic network interface (ENI) ID.
     */
    readonly networkInterfaceId: string | ros.IResolvable;

    /**
     * Property fullNatEntryDescription: The description of the FULLNAT entry.
     * This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly fullNatEntryDescription?: string | ros.IResolvable;

    /**
     * Property fullNatEntryName: The FULLNAT entry name. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly fullNatEntryName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::FullNatEntry`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFullNatEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
 */
export class FullNatEntry extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FullNatEntryProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FullNatEntryId: The FULLNAT entry ID.
     */
    public readonly attrFullNatEntryId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FullNatEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFullNatEntry = new RosFullNatEntry(this, id,  {
            natIp: props.natIp,
            fullNatEntryDescription: props.fullNatEntryDescription,
            accessIp: props.accessIp,
            fullNatTableId: props.fullNatTableId,
            fullNatEntryName: props.fullNatEntryName,
            natIpPort: props.natIpPort,
            ipProtocol: props.ipProtocol,
            accessPort: props.accessPort,
            networkInterfaceId: props.networkInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFullNatEntry;
        this.attrFullNatEntryId = rosFullNatEntry.attrFullNatEntryId;
    }
}
