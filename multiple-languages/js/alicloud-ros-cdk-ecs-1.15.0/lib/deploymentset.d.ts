import * as ros from '@alicloud/ros-cdk-core';
import { RosDeploymentSet } from './ecs.generated';
export { RosDeploymentSet as DeploymentSetProperty };
/**
 * Properties for defining a `DeploymentSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-deploymentset
 */
export interface DeploymentSetProps {
    /**
     * Property deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
     * start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly deploymentSetName?: string | ros.IResolvable;
    /**
     * Property description: The description of the deployment set. It must be 2 to 256 characters in length. It
     * cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property groupCount: Set the number of groups for the deployment set group high availability policy. Value range: 1~7.
     * Default value: 3.
     * This parameter only takes effect when Strategy=AvailabilityGroup.
     */
    readonly groupCount?: number | ros.IResolvable;
    /**
     * Property onUnableToRedeployFailedInstance: The policy to use when an instance fails over but cannot be redeployed due to
     * insufficient resources. Valid values:
     * - CancelMembershipAndStart: Removes the instance from the deployment set and
     * starts the instance immediately after failover.
     * - KeepStopped: Keeps the instance's deployment set membership and leaves it in
     * the Stopped state.
     * Default value: CancelMembershipAndStart.
     */
    readonly onUnableToRedeployFailedInstance?: string | ros.IResolvable;
    /**
     * Property strategy: The deployment strategy. Valid values:
     * - Availability: A high availability strategy.
     * - AvailabilityGroup: A high availability strategy for a deployment set group.
     * - LowLatency: A low-latency strategy.
     * Default value: Availability.
     */
    readonly strategy?: string | ros.IResolvable;
}
/**
 * Represents a `DeploymentSet`.
 */
export interface IDeploymentSet extends ros.IResource {
    readonly props: DeploymentSetProps;
    /**
     * Attribute DeploymentSetId: The ID of the deployment set.
     */
    readonly attrDeploymentSetId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::DeploymentSet`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeploymentSet`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-deploymentset
 */
export declare class DeploymentSet extends ros.Resource implements IDeploymentSet {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DeploymentSetProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DeploymentSetId: The ID of the deployment set.
     */
    readonly attrDeploymentSetId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DeploymentSetProps, enableResourcePropertyConstraint?: boolean);
}
