import * as ros from '@alicloud/ros-cdk-core';
import { RosDeploymentSets } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDeploymentSets as DeploymentSetsProperty };

/**
 * Properties for defining a `DATASOURCE::ECS::DeploymentSets`
 */
export interface DeploymentSetsProps {

    /**
     * Property deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
     */
    readonly deploymentSetIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property deploymentSetName: The name of the deployment set.
     */
    readonly deploymentSetName?: string | ros.IResolvable;

    /**
     * Property domain: The deployment domain.
     */
    readonly domain?: string | ros.IResolvable;

    /**
     * Property strategy: The deployment strategy. Valid values:
     * Availability: high availability strategy.
     *  AvailabilityGroup: high availability group strategy.
     */
    readonly strategy?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::ECS::DeploymentSets`
 */
export class DeploymentSets extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DeploymentSetIds: the list of deployment set ids
     */
    public readonly attrDeploymentSetIds: ros.IResolvable;

    /**
     * Attribute DeploymentSets: The list of deployment sets.
     */
    public readonly attrDeploymentSets: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ECS::DeploymentSets`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeploymentSetsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDeploymentSets = new RosDeploymentSets(this, id,  {
            deploymentSetIds: props.deploymentSetIds,
            strategy: props.strategy,
            deploymentSetName: props.deploymentSetName,
            domain: props.domain,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDeploymentSets;
        this.attrDeploymentSetIds = rosDeploymentSets.attrDeploymentSetIds;
        this.attrDeploymentSets = rosDeploymentSets.attrDeploymentSets;
    }
}
