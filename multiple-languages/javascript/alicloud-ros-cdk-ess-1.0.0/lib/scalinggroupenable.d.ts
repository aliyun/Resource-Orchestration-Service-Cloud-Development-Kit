import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingGroupEnable } from './ess.generated';
export { RosScalingGroupEnable as ScalingGroupEnableProperty };
/**
 * Properties for defining a `ALIYUN::ESS::ScalingGroupEnable`
 */
export interface ScalingGroupEnableProps {
    /**
     * @Property scalingGroupId: The id of operated scaling group.
     */
    readonly scalingGroupId: string;
    /**
     * @Property instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
     */
    readonly removeInstanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingConfigurationId: The id of scaling configuration which will be activate.
     */
    readonly scalingConfigurationId?: string;
    /**
     * @Property scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
     * When creating the resource, all the scaling rule aris in the list will be executed.
     * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
     */
    readonly scalingRuleAris?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
     */
    readonly scalingRuleArisExecuteVersion?: number;
}
/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingGroupEnable`
 */
export declare class ScalingGroupEnable extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute LifecycleState: The scaling group status
     */
    readonly attrLifecycleState: any;
    /**
     * @Attribute ScalingGroupId: The scaling group id
     */
    readonly attrScalingGroupId: any;
    /**
     * @Attribute ScalingInstanceDetails: Detail information of auto created scaling instances
     */
    readonly attrScalingInstanceDetails: any;
    /**
     * @Attribute ScalingInstances: The auto created scaling instances
     */
    readonly attrScalingInstances: any;
    /**
     * @Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteErrorInfo: any;
    /**
     * @Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultInstancesAdded: any;
    /**
     * @Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultInstancesRemoved: any;
    /**
     * @Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultNumberOfAddedInstances: any;
    /**
     * Create a new `ALIYUN::ESS::ScalingGroupEnable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingGroupEnableProps, enableResourcePropertyConstraint?: boolean);
}
