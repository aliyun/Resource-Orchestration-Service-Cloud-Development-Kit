import * as ros from '@alicloud/ros-cdk-core';
import { RosDeploymentSet } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class DeploymentSet extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DeploymentSetProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the deployment set was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DeploymentSetId: The ID of deployment set.
     */
    public readonly attrDeploymentSetId: ros.IResolvable;

    /**
     * Attribute DeploymentSetName: The name of the deployment set.
     */
    public readonly attrDeploymentSetName: ros.IResolvable;

    /**
     * Attribute Granularity: The deployment granularity.
     */
    public readonly attrGranularity: ros.IResolvable;

    /**
     * Attribute GroupCount: The number of deployment set groups in the deployment set.
     */
    public readonly attrGroupCount: ros.IResolvable;

    /**
     * Attribute InstanceAmount: The number of instances in the deployment set.
     */
    public readonly attrInstanceAmount: ros.IResolvable;

    /**
     * Attribute InstanceIds: The IDs of the instances in the deployment set.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute Strategy: The deployment strategy.
     */
    public readonly attrStrategy: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeploymentSetProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDeploymentSet = new RosDeploymentSet(this, id,  {
            deploymentSetId: props.deploymentSetId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDeploymentSet;
        this.attrCreateTime = rosDeploymentSet.attrCreateTime;
        this.attrDeploymentSetId = rosDeploymentSet.attrDeploymentSetId;
        this.attrDeploymentSetName = rosDeploymentSet.attrDeploymentSetName;
        this.attrGranularity = rosDeploymentSet.attrGranularity;
        this.attrGroupCount = rosDeploymentSet.attrGroupCount;
        this.attrInstanceAmount = rosDeploymentSet.attrInstanceAmount;
        this.attrInstanceIds = rosDeploymentSet.attrInstanceIds;
        this.attrStrategy = rosDeploymentSet.attrStrategy;
    }
}
