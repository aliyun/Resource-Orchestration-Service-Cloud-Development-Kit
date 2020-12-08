import * as ros from '@alicloud/ros-cdk-core';
import { RosDeviceGroup } from './iot.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDeviceGroup as DeviceGroupProperty };

/**
 * Properties for defining a `ALIYUN::IOT::DeviceGroup`
 */
export interface DeviceGroupProps {

    /**
     * @Property groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
     */
    readonly groupName: string;

    /**
     * @Property groupDesc: The description of the group. You can enter a description with up to 100 characters.
     */
    readonly groupDesc?: string;

    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string;

    /**
     * @Property superGroupId: The ID of the parent group.
     * If you want to create a first-level group, do not enter this parameter.
     */
    readonly superGroupId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::IOT::DeviceGroup`
 */
export class DeviceGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute GroupId: Packet, ID, System for the globally unique identifier generated packet.
     */
    public readonly attrGroupId: any;

    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    public readonly attrIotInstanceId: any;

    /**
     * Create a new `ALIYUN::IOT::DeviceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeviceGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDeviceGroup = new RosDeviceGroup(this, id,  {
            groupName: props.groupName,
            iotInstanceId: props.iotInstanceId,
            superGroupId: props.superGroupId,
            groupDesc: props.groupDesc,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDeviceGroup;
        this.attrGroupId = rosDeviceGroup.attrGroupId;
        this.attrIotInstanceId = rosDeviceGroup.attrIotInstanceId;
    }
}
