import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingGroupEnable } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosScalingGroupEnable as ScalingGroupEnableProperty };

/**
 * Properties for defining a `ScalingGroupEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
 */
export interface ScalingGroupEnableProps {

    /**
     * Property scalingGroupId: The id of operated scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * Property attachOptions: Options for attaching instances.
     */
    readonly attachOptions?: RosScalingGroupEnable.AttachOptionsProperty | ros.IResolvable;

    /**
     * Property detachOptions: Options for detaching instances.
     */
    readonly detachOptions?: RosScalingGroupEnable.DetachOptionsProperty | ros.IResolvable;

    /**
     * Property instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
     */
    readonly removeInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property scalingConfigurationId: The id of scaling configuration which will be activate.
     */
    readonly scalingConfigurationId?: string | ros.IResolvable;

    /**
     * Property scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
     * When creating the resource, all the scaling rule aris in the list will be executed.
     * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
     */
    readonly scalingRuleAris?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
     */
    readonly scalingRuleArisExecuteVersion?: number | ros.IResolvable;
}

/**
 * Represents a `ScalingGroupEnable`.
 */
export interface IScalingGroupEnable extends ros.IResource {
    readonly props: ScalingGroupEnableProps;

    /**
     * Attribute LifecycleState: The scaling group status
     */
    readonly attrLifecycleState: ros.IResolvable | string;

    /**
     * Attribute ScalingGroupId: The scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable | string;

    /**
     * Attribute ScalingInstanceDetails: Detail information of auto created scaling instances
     */
    readonly attrScalingInstanceDetails: ros.IResolvable | string;

    /**
     * Attribute ScalingInstances: The auto created scaling instances
     */
    readonly attrScalingInstances: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteErrorInfo: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultInstancesAdded: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultInstancesRemoved: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultNumberOfAddedInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::ScalingGroupEnable`, which is used to enable a scaling group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingGroupEnable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
 */
export class ScalingGroupEnable extends ros.Resource implements IScalingGroupEnable {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ScalingGroupEnableProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute LifecycleState: The scaling group status
     */
    public readonly attrLifecycleState: ros.IResolvable | string;

    /**
     * Attribute ScalingGroupId: The scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable | string;

    /**
     * Attribute ScalingInstanceDetails: Detail information of auto created scaling instances
     */
    public readonly attrScalingInstanceDetails: ros.IResolvable | string;

    /**
     * Attribute ScalingInstances: The auto created scaling instances
     */
    public readonly attrScalingInstances: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
     */
    public readonly attrScalingRuleArisExecuteErrorInfo: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
     */
    public readonly attrScalingRuleArisExecuteResultInstancesAdded: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
     */
    public readonly attrScalingRuleArisExecuteResultInstancesRemoved: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
     */
    public readonly attrScalingRuleArisExecuteResultNumberOfAddedInstances: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingGroupEnableProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosScalingGroupEnable = new RosScalingGroupEnable(this, id,  {
            attachOptions: props.attachOptions,
            detachOptions: props.detachOptions,
            scalingRuleArisExecuteVersion: props.scalingRuleArisExecuteVersion,
            scalingGroupId: props.scalingGroupId,
            scalingRuleAris: props.scalingRuleAris,
            removeInstanceIds: props.removeInstanceIds,
            scalingConfigurationId: props.scalingConfigurationId,
            instanceIds: props.instanceIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingGroupEnable;
        this.attrLifecycleState = rosScalingGroupEnable.attrLifecycleState;
        this.attrScalingGroupId = rosScalingGroupEnable.attrScalingGroupId;
        this.attrScalingInstanceDetails = rosScalingGroupEnable.attrScalingInstanceDetails;
        this.attrScalingInstances = rosScalingGroupEnable.attrScalingInstances;
        this.attrScalingRuleArisExecuteErrorInfo = rosScalingGroupEnable.attrScalingRuleArisExecuteErrorInfo;
        this.attrScalingRuleArisExecuteResultInstancesAdded = rosScalingGroupEnable.attrScalingRuleArisExecuteResultInstancesAdded;
        this.attrScalingRuleArisExecuteResultInstancesRemoved = rosScalingGroupEnable.attrScalingRuleArisExecuteResultInstancesRemoved;
        this.attrScalingRuleArisExecuteResultNumberOfAddedInstances = rosScalingGroupEnable.attrScalingRuleArisExecuteResultNumberOfAddedInstances;
    }
}
