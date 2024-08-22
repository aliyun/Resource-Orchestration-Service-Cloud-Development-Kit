import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostClusters } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedHostClusters as DedicatedHostClustersProperty };

/**
 * Properties for defining a `DedicatedHostClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
 */
export interface DedicatedHostClustersProps {

    /**
     * Property dedicatedHostClusterName: The name of the dedicated host cluster.
     */
    readonly dedicatedHostClusterName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs. 
     * If this parameter is specified to query resources,
     * up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the dedicated host cluster. 
     * You can call the DescribeZones operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::DedicatedHostClusters`, which is used to query the information about dedicated host clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
 */
export class DedicatedHostClusters extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DedicatedHostClustersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.
     */
    public readonly attrDedicatedHostClusterIds: ros.IResolvable;

    /**
     * Attribute DedicatedHostClusters: The list of dedicated host clusters.
     */
    public readonly attrDedicatedHostClusters: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostClustersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedHostClusters = new RosDedicatedHostClusters(this, id,  {
            dedicatedHostClusterName: props.dedicatedHostClusterName,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHostClusters;
        this.attrDedicatedHostClusterIds = rosDedicatedHostClusters.attrDedicatedHostClusterIds;
        this.attrDedicatedHostClusters = rosDedicatedHostClusters.attrDedicatedHostClusters;
    }
}
