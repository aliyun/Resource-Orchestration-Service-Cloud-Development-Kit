import * as ros from '@alicloud/ros-cdk-core';
import { RosSerialNumberBinding } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSerialNumberBinding as SerialNumberBindingProperty };

/**
 * Properties for defining a `SerialNumberBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding
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
 * Represents a `SerialNumberBinding`.
 */
export interface ISerialNumberBinding extends ros.IResource {
    readonly props: SerialNumberBindingProps;

    /**
     * Attribute SmartAGId: The ID of the SAG instance.
     */
    readonly attrSmartAgId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::SerialNumberBinding`, which is used to associate a Smart Access Gateway (SAG) device with an SAG instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSerialNumberBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding
 */
export class SerialNumberBinding extends ros.Resource implements ISerialNumberBinding {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SerialNumberBindingProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SmartAGId: The ID of the SAG instance.
     */
    public readonly attrSmartAgId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SerialNumberBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSerialNumberBinding = new RosSerialNumberBinding(this, id,  {
            serialNumber: props.serialNumber,
            smartAgId: props.smartAgId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSerialNumberBinding;
        this.attrSmartAgId = rosSerialNumberBinding.attrSmartAgId;
    }
}
