import * as ros from '@alicloud/ros-cdk-core';
import { RosVSwitch } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVSwitch as VSwitchProperty };

/**
 * Properties for defining a `VSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
 */
export interface VSwitchProps {

    /**
     * Property cidrBlock: The CIDR block of the vSwitch. Take note of the following limits:
     * The subnet mask must be 16 to 29 bits in length.
     * The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
     * The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
     */
    readonly cidrBlock: string | ros.IResolvable;

    /**
     * Property ensRegionId: The ID of the edge node.
     */
    readonly ensRegionId: string | ros.IResolvable;

    /**
     * Property networkId: The ID of the network to which the vSwitch that you want to create belongs.
     */
    readonly networkId: string | ros.IResolvable;

    /**
     * Property description: The description of the vSwitch.
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property vSwitchName: The name of the vSwitch. The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     * Default value: null.
     */
    readonly vSwitchName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::VSwitch`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVSwitch`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
 */
export class VSwitch extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VSwitchProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VSwitchProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVSwitch = new RosVSwitch(this, id,  {
            description: props.description,
            cidrBlock: props.cidrBlock,
            vSwitchName: props.vSwitchName,
            networkId: props.networkId,
            ensRegionId: props.ensRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVSwitch;
        this.attrVSwitchId = rosVSwitch.attrVSwitchId;
    }
}
