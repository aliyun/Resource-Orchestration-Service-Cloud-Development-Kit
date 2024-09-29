import * as ros from '@alicloud/ros-cdk-core';
import { RosForwardingRules } from './ga.generated';
export { RosForwardingRules as ForwardingRulesProperty };
/**
 * Properties for defining a `ForwardingRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
 */
export interface ForwardingRulesProps {
    /**
     * Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property forwardingRules: Details about the forwarding rules.
     */
    readonly forwardingRules: Array<RosForwardingRules.ForwardingRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::ForwardingRules`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosForwardingRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
 */
export declare class ForwardingRules extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ForwardingRulesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ForwardingRuleIds: The IDs of the endpoint groups.
     */
    readonly attrForwardingRuleIds: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ForwardingRulesProps, enableResourcePropertyConstraint?: boolean);
}
