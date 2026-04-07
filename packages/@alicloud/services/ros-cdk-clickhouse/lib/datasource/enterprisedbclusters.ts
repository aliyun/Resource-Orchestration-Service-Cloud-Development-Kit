import * as ros from '@alicloud/ros-cdk-core';
import { RosEnterpriseDBClusters } from './clickhouse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEnterpriseDBClusters as EnterpriseDBClustersProperty };

/**
 * Properties for defining a `EnterpriseDBClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters
 */
export interface EnterpriseDBClustersProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `EnterpriseDBClusters`.
 */
export interface IEnterpriseDBClusters extends ros.IResource {
    readonly props: EnterpriseDBClustersProps;

    /**
     * Attribute DBInstanceIds: The list of DB instance IDs.
     */
    readonly attrDbInstanceIds: ros.IResolvable | string;

    /**
     * Attribute EnterpriseDBClusters: The list of enterprise DB clusters.
     */
    readonly attrEnterpriseDbClusters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::EnterpriseDBClusters`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnterpriseDBClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters
 */
export class EnterpriseDBClusters extends ros.Resource implements IEnterpriseDBClusters {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EnterpriseDBClustersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DBInstanceIds: The list of DB instance IDs.
     */
    public readonly attrDbInstanceIds: ros.IResolvable | string;

    /**
     * Attribute EnterpriseDBClusters: The list of enterprise DB clusters.
     */
    public readonly attrEnterpriseDbClusters: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnterpriseDBClustersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEnterpriseDBClusters = new RosEnterpriseDBClusters(this, id,  {
            resourceGroupId: props.resourceGroupId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEnterpriseDBClusters;
        this.attrDbInstanceIds = rosEnterpriseDBClusters.attrDbInstanceIds;
        this.attrEnterpriseDbClusters = rosEnterpriseDBClusters.attrEnterpriseDbClusters;
    }
}
