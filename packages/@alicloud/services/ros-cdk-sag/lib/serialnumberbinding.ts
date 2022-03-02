import * as ros from '@alicloud/ros-cdk-core';
import { RosSerialNumberBinding } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSerialNumberBinding as SerialNumberBindingProperty };

/**
 * Properties for defining a `ALIYUN::SAG::SerialNumberBinding`
 */
export interface SerialNumberBindingProps {

    /**
     * Property serialNumber: The serial number (SN) of the SAG device.
     */
    readonly serialNumber: string | ros.IResolvable;

    /**
     * Property smartAgId: The ID of the SAG instance.
     */
    readonly smartAgId: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::SAG::SerialNumberBinding`
 */
export class SerialNumberBinding extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SmartAGId: The ID of the SAG instance.
     */
    public readonly attrSmartAgId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::SAG::SerialNumberBinding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SerialNumberBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSerialNumberBinding = new RosSerialNumberBinding(this, id,  {
            serialNumber: props.serialNumber,
            smartAgId: props.smartAgId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSerialNumberBinding;
        this.attrSmartAgId = rosSerialNumberBinding.attrSmartAgId;
    }
}
