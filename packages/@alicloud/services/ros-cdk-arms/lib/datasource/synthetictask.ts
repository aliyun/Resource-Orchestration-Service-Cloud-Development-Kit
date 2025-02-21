import * as ros from '@alicloud/ros-cdk-core';
import { RosSyntheticTask } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSyntheticTask as SyntheticTaskProperty };

/**
 * Properties for defining a `SyntheticTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictask
 */
export interface SyntheticTaskProps {

    /**
     * Property taskId: The ID of the synthetic monitoring task.
     */
    readonly taskId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `SyntheticTask`.
 */
export interface ISyntheticTask extends ros.IResource {
    readonly props: SyntheticTaskProps;

    /**
     * Attribute AvailableAssertions: The list of assertions.
     */
    readonly attrAvailableAssertions: ros.IResolvable | string;

    /**
     * Attribute CommonSetting: The general settings.
     */
    readonly attrCommonSetting: ros.IResolvable | string;

    /**
     * Attribute CustomPeriod: The custom cycle.
     */
    readonly attrCustomPeriod: ros.IResolvable | string;

    /**
     * Attribute Frequency: The detection frequency.
     */
    readonly attrFrequency: ros.IResolvable | string;

    /**
     * Attribute MonitorCategory: The detection point type. 1: PC. 2: mobile device.
     */
    readonly attrMonitorCategory: ros.IResolvable | string;

    /**
     * Attribute MonitorConf: The monitoring configurations.
     */
    readonly attrMonitorConf: ros.IResolvable | string;

    /**
     * Attribute Monitors: The list of monitoring points.
     */
    readonly attrMonitors: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SyntheticTaskName: The name of synthetic task.
     */
    readonly attrSyntheticTaskName: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the instance.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute TaskId: The ID of the synthetic monitoring task.
     */
    readonly attrTaskId: ros.IResolvable | string;

    /**
     * Attribute TaskType: The type of the task.
     */
    readonly attrTaskType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::SyntheticTask`, which is used to query the information about a scheduled synthetic monitoring task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSyntheticTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictask
 */
export class SyntheticTask extends ros.Resource implements ISyntheticTask {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SyntheticTaskProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AvailableAssertions: The list of assertions.
     */
    public readonly attrAvailableAssertions: ros.IResolvable | string;

    /**
     * Attribute CommonSetting: The general settings.
     */
    public readonly attrCommonSetting: ros.IResolvable | string;

    /**
     * Attribute CustomPeriod: The custom cycle.
     */
    public readonly attrCustomPeriod: ros.IResolvable | string;

    /**
     * Attribute Frequency: The detection frequency.
     */
    public readonly attrFrequency: ros.IResolvable | string;

    /**
     * Attribute MonitorCategory: The detection point type. 1: PC. 2: mobile device.
     */
    public readonly attrMonitorCategory: ros.IResolvable | string;

    /**
     * Attribute MonitorConf: The monitoring configurations.
     */
    public readonly attrMonitorConf: ros.IResolvable | string;

    /**
     * Attribute Monitors: The list of monitoring points.
     */
    public readonly attrMonitors: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SyntheticTaskName: The name of synthetic task.
     */
    public readonly attrSyntheticTaskName: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the instance.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute TaskId: The ID of the synthetic monitoring task.
     */
    public readonly attrTaskId: ros.IResolvable | string;

    /**
     * Attribute TaskType: The type of the task.
     */
    public readonly attrTaskType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SyntheticTaskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSyntheticTask = new RosSyntheticTask(this, id,  {
            taskId: props.taskId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSyntheticTask;
        this.attrAvailableAssertions = rosSyntheticTask.attrAvailableAssertions;
        this.attrCommonSetting = rosSyntheticTask.attrCommonSetting;
        this.attrCustomPeriod = rosSyntheticTask.attrCustomPeriod;
        this.attrFrequency = rosSyntheticTask.attrFrequency;
        this.attrMonitorCategory = rosSyntheticTask.attrMonitorCategory;
        this.attrMonitorConf = rosSyntheticTask.attrMonitorConf;
        this.attrMonitors = rosSyntheticTask.attrMonitors;
        this.attrResourceGroupId = rosSyntheticTask.attrResourceGroupId;
        this.attrSyntheticTaskName = rosSyntheticTask.attrSyntheticTaskName;
        this.attrTags = rosSyntheticTask.attrTags;
        this.attrTaskId = rosSyntheticTask.attrTaskId;
        this.attrTaskType = rosSyntheticTask.attrTaskType;
    }
}
