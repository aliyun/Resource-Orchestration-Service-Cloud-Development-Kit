import * as ros from '@alicloud/ros-cdk-core';
import { RosSmartAccessGatewayBinding } from './sag.generated';
export { RosSmartAccessGatewayBinding as SmartAccessGatewayBindingProperty };
/**
 * Properties for defining a `SmartAccessGatewayBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
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
 * Represents a `SmartAccessGatewayBinding`.
 */
export interface ISmartAccessGatewayBinding extends ros.IResource {
    readonly props: SmartAccessGatewayBindingProps;
    /**
     * Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    readonly attrSmartAgId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::SmartAccessGatewayBinding`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSmartAccessGatewayBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
 */
export declare class SmartAccessGatewayBinding extends ros.Resource implements ISmartAccessGatewayBinding {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SmartAccessGatewayBindingProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    readonly attrSmartAgId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SmartAccessGatewayBindingProps, enableResourcePropertyConstraint?: boolean);
}
