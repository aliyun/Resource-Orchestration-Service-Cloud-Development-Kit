import * as ros from '@alicloud/ros-cdk-core';
import { RosSmartAccessGatewayBinding } from './sag.generated';
export { RosSmartAccessGatewayBinding as SmartAccessGatewayBindingProperty };
/**
 * Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
export interface SmartAccessGatewayBindingProps {
    /**
     * Property ccnId: The ID of the CCN instance to bind.
     */
    readonly ccnId: string | ros.IResolvable;
    /**
     * Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    readonly smartAgId: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
export declare class SmartAccessGatewayBinding extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::SmartAccessGatewayBinding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SmartAccessGatewayBindingProps, enableResourcePropertyConstraint?: boolean);
}
