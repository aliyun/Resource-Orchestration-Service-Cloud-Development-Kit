import * as ros from '@alicloud/ros-cdk-core';
import { RosHpcCluster } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHpcCluster as HpcClusterProperty };

/**
 * Properties for defining a `HpcCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
 */
export interface HpcClusterProps {

    /**
     * Property hpcClusterId: The ID of cluster.
     */
    readonly hpcClusterId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::HpcCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHpcCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
 */
export class HpcCluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HpcClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Description: The description of the HPC cluster.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute HpcClusterId: The ID of cluster.
     */
    public readonly attrHpcClusterId: ros.IResolvable;

    /**
     * Attribute HpcClusterName: The name of the HPC cluster.
     */
    public readonly attrHpcClusterName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HpcClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHpcCluster = new RosHpcCluster(this, id,  {
            hpcClusterId: props.hpcClusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHpcCluster;
        this.attrDescription = rosHpcCluster.attrDescription;
        this.attrHpcClusterId = rosHpcCluster.attrHpcClusterId;
        this.attrHpcClusterName = rosHpcCluster.attrHpcClusterName;
    }
}
