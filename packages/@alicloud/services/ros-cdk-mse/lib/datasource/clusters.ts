import * as ros from '@alicloud/ros-cdk-core';
import { RosClusters } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusters as ClustersProperty };

/**
 * Properties for defining a `Clusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
 */
export interface ClustersProps {

    /**
     * Property clusterAliasName: The alias name of cluster.
     */
    readonly clusterAliasName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MSE::Clusters`, which is used to query the clusters of Microservices Registry.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
 */
export class Clusters extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClustersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterIds: The list of cluster IDs.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * Attribute Clusters: The list of clusters.
     */
    public readonly attrClusters: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClustersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosClusters = new RosClusters(this, id,  {
            clusterAliasName: props.clusterAliasName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusters;
        this.attrClusterIds = rosClusters.attrClusterIds;
        this.attrClusters = rosClusters.attrClusters;
    }
}
