import * as ros from '@alicloud/ros-cdk-core';
import { RosNlbBinding } from './sae.generated';
export { RosNlbBinding as NlbBindingProperty };
/**
 * Properties for defining a `NlbBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-nlbbinding
 */
export interface NlbBindingProps {
    /**
     * Property appId: The ID of the SAE application.
     */
    readonly appId: string | ros.IResolvable;
    /**
     * Property listeners: The listeners of the NLB.
     */
    readonly listeners: Array<RosNlbBinding.ListenersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property nlbId: The ID of the Network Load Balancer (NLB).
     */
    readonly nlbId: string | ros.IResolvable;
}
/**
 * Represents a `NlbBinding`.
 */
export interface INlbBinding extends ros.IResource {
    readonly props: NlbBindingProps;
    /**
     * Attribute NlbId: The ID of the Network Load Balancer (NLB).
     */
    readonly attrNlbId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::NlbBinding`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNlbBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-nlbbinding
 */
export declare class NlbBinding extends ros.Resource implements INlbBinding {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NlbBindingProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NlbId: The ID of the Network Load Balancer (NLB).
     */
    readonly attrNlbId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NlbBindingProps, enableResourcePropertyConstraint?: boolean);
}
