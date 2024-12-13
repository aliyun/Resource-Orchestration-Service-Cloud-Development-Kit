import * as ros from '@alicloud/ros-cdk-core';
import { RosSyntheticTasks } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSyntheticTasks as SyntheticTasksProperty };

/**
 * Properties for defining a `SyntheticTasks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictasks
 */
export interface SyntheticTasksProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::SyntheticTasks`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSyntheticTasks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictasks
 */
export class SyntheticTasks extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SyntheticTasksProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SyntheticTasks: The list of synthetic tasks.
     */
    public readonly attrSyntheticTasks: ros.IResolvable;

    /**
     * Attribute TaskIds: The list of task IDs.
     */
    public readonly attrTaskIds: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SyntheticTasksProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSyntheticTasks = new RosSyntheticTasks(this, id,  {
            resourceGroupId: props.resourceGroupId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSyntheticTasks;
        this.attrSyntheticTasks = rosSyntheticTasks.attrSyntheticTasks;
        this.attrTaskIds = rosSyntheticTasks.attrTaskIds;
    }
}
