import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingConfigurations } from './ess.generated';
export { RosScalingConfigurations as ScalingConfigurationsProperty };
/**
 * Properties for defining a `DATASOURCE::ESS::ScalingConfigurations`
 */
export interface ScalingConfigurationsProps {
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
 * A ROS resource type:  `DATASOURCE::ESS::ScalingConfigurations`
 */
export declare class ScalingConfigurations extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
     */
    readonly attrScalingConfigurationIds: ros.IResolvable;
    /**
     * Attribute ScalingConfigurations: The list of scaling configurations.
     */
    readonly attrScalingConfigurations: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ESS::ScalingConfigurations`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ScalingConfigurationsProps, enableResourcePropertyConstraint?: boolean);
}
