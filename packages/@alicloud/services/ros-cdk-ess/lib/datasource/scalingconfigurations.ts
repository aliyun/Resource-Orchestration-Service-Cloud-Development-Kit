import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingConfigurations } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosScalingConfigurations as ScalingConfigurationsProperty };

/**
 * Properties for defining a `ScalingConfigurations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
export interface ScalingConfigurationsProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
     */
    readonly scalingConfigurationIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
     */
    readonly scalingConfigurationNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
     */
    readonly scalingGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ESS::ScalingConfigurations`, which is used to query the information about scaling configurations.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingConfigurations`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
export class ScalingConfigurations extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ScalingConfigurationsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
     */
    public readonly attrScalingConfigurationIds: ros.IResolvable;

    /**
     * Attribute ScalingConfigurations: The list of scaling configurations.
     */
    public readonly attrScalingConfigurations: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingConfigurationsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosScalingConfigurations = new RosScalingConfigurations(this, id,  {
            scalingGroupId: props.scalingGroupId,
            scalingConfigurationIds: props.scalingConfigurationIds,
            scalingConfigurationNames: props.scalingConfigurationNames,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingConfigurations;
        this.attrScalingConfigurationIds = rosScalingConfigurations.attrScalingConfigurationIds;
        this.attrScalingConfigurations = rosScalingConfigurations.attrScalingConfigurations;
    }
}
