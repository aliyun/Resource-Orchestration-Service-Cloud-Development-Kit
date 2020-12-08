import * as ros from '@alicloud/ros-cdk-core';
import { RosDeploymentSet } from './ecs.generated';
export { RosDeploymentSet as DeploymentSetProperty };
/**
 * Properties for defining a `ALIYUN::ECS::DeploymentSet`
 */
export interface DeploymentSetProps {
    /**
     * @Property deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
     * start with a letter and cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly deploymentSetName?: string;
    /**
     * @Property description: The description of the deployment set. It must be 2 to 256 characters in length. It
     * cannot start with http:// or https://.
     */
    readonly description?: string;
    /**
     * @Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
     * CancelMembershipAndStart: restarts the instances immediately after they are shut down
     * and migrated to other deployment sets. This is the default value.
     * KeepStopped: keeps the instances shut down and restarts them after the deployment
     * set is replenished.
     */
    readonly onUnableToRedeployFailedInstance?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::DeploymentSet`
 */
export declare class DeploymentSet extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute DeploymentSetId: The ID of the deployment set.
     */
    readonly attrDeploymentSetId: any;
    /**
     * Create a new `ALIYUN::ECS::DeploymentSet`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DeploymentSetProps, enableResourcePropertyConstraint?: boolean);
}
