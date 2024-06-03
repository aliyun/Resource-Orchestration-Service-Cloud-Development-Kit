import * as ros from '@alicloud/ros-cdk-core';
import { RosDeploymentSet } from './ecs.generated';
export { RosDeploymentSet as DeploymentSetProperty };
/**
 * Properties for defining a `DeploymentSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
 */
export interface DeploymentSetProps {
    /**
     * Property deploymentSetId: The ID of deployment set.
     */
    readonly deploymentSetId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::DeploymentSet`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeploymentSet`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
 */
export declare class DeploymentSet extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DeploymentSetProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the deployment set was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DeploymentSetId: The ID of deployment set.
     */
    readonly attrDeploymentSetId: ros.IResolvable;
    /**
     * Attribute DeploymentSetName: The name of the deployment set.
     */
    readonly attrDeploymentSetName: ros.IResolvable;
    /**
     * Attribute Granularity: The deployment granularity.
     */
    readonly attrGranularity: ros.IResolvable;
    /**
     * Attribute GroupCount: The number of deployment set groups in the deployment set.
     */
    readonly attrGroupCount: ros.IResolvable;
    /**
     * Attribute InstanceAmount: The number of instances in the deployment set.
     */
    readonly attrInstanceAmount: ros.IResolvable;
    /**
     * Attribute InstanceIds: The IDs of the instances in the deployment set.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Strategy: The deployment strategy.
     */
    readonly attrStrategy: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeploymentSetProps, enableResourcePropertyConstraint?: boolean);
}
