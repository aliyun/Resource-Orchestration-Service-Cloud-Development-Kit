import * as ros from '@alicloud/ros-cdk-core';
import { RosSerialNumberBinding } from './sag.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::SerialNumberBinding`, which is used to associate a Smart Access Gateway (SAG) device with an SAG instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSerialNumberBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding
 */
export declare class SerialNumberBinding extends ros.Resource {
    /**
     * Attribute SmartAGId: The ID of the SAG instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SerialNumberBindingProps, enableResourcePropertyConstraint?: boolean);
}
