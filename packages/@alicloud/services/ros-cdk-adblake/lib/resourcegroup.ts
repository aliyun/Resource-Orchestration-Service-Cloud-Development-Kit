import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroup } from './adblake.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceGroup as ResourceGroupProperty };

/**
 * Properties for defining a `ResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
 */
export interface ResourceGroupProps {

    /**
     * Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property engine: Database engine, value:
     * AnalyticDB (default): AnalyticDB for mysql engine.
     * Sparkwarehouse: Sparkwarehous engine.
     */
    readonly engine: string | ros.IResolvable;

    /**
     * Property groupName: The name of the resource group.
     * The name can be up to 255 characters in length.
     * The name must start with a letter or digit.
     * The name can contain letters, digits, hyphens (-), and underscores (_).
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * Property groupType: The type of the resource group. Valid values:
     * Interactive
     * Job
     * Note For more information about resource groups, see Resource group overview.
     */
    readonly groupType: string | ros.IResolvable;

    /**
     * Property autoStopInterval: Automatically stop time, the unit is minutes (m).
     */
    readonly autoStopInterval?: string | ros.IResolvable;

    /**
     * Property clusterMode: The mode of cluster. Default: AutoScale.
     */
    readonly clusterMode?: string | ros.IResolvable;

    /**
     * Property clusterSizeResource: A reserved parameter.
     */
    readonly clusterSizeResource?: string | ros.IResolvable;

    /**
     * Property enableSpot: Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
     * True
     * False
     */
    readonly enableSpot?: boolean | ros.IResolvable;

    /**
     * Property engineParams: Engine configuration.
     */
    readonly engineParams?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property maxClusterCount: A reserved parameter.
     */
    readonly maxClusterCount?: number | ros.IResolvable;

    /**
     * Property maxComputeResource: The maximum reserved computing resources.
     * If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
     * If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
     */
    readonly maxComputeResource?: string | ros.IResolvable;

    /**
     * Property minClusterCount: A reserved parameter.
     */
    readonly minClusterCount?: number | ros.IResolvable;

    /**
     * Property minComputeResource: The minimum reserved computing resources.
     * When GroupType is set to Interactive, set this parameter to 16ACU.
     * When GroupType is set to Job, set this parameter to 0ACU.
     */
    readonly minComputeResource?: string | ros.IResolvable;

    /**
     * Property rules: The job resubmission rules.
     */
    readonly rules?: Array<RosResourceGroup.RulesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `ResourceGroup`.
 */
export interface IResourceGroup extends ros.IResource {
    readonly props: ResourceGroupProps;

    /**
     * Attribute GroupName: The name of the resource group.
     */
    readonly attrGroupName: ros.IResolvable | string;

    /**
     * Attribute GroupType: The type of the resource group.
     */
    readonly attrGroupType: ros.IResolvable | string;

    /**
     * Attribute GroupUsers: The list of users in the resource group.
     */
    readonly attrGroupUsers: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ADBLake::ResourceGroup`, which is used to create a resource group for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
 */
export class ResourceGroup extends ros.Resource implements IResourceGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ResourceGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupName: The name of the resource group.
     */
    public readonly attrGroupName: ros.IResolvable | string;

    /**
     * Attribute GroupType: The type of the resource group.
     */
    public readonly attrGroupType: ros.IResolvable | string;

    /**
     * Attribute GroupUsers: The list of users in the resource group.
     */
    public readonly attrGroupUsers: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosResourceGroup = new RosResourceGroup(this, id,  {
            groupName: props.groupName,
            engineParams: props.engineParams,
            clusterMode: props.clusterMode === undefined || props.clusterMode === null ? 'AutoScale' : props.clusterMode,
            dbClusterId: props.dbClusterId,
            autoStopInterval: props.autoStopInterval,
            maxComputeResource: props.maxComputeResource,
            enableSpot: props.enableSpot,
            rules: props.rules,
            minClusterCount: props.minClusterCount,
            groupType: props.groupType,
            clusterSizeResource: props.clusterSizeResource,
            minComputeResource: props.minComputeResource,
            engine: props.engine === undefined || props.engine === null ? 'AnalyticDB' : props.engine,
            maxClusterCount: props.maxClusterCount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceGroup;
        this.attrGroupName = rosResourceGroup.attrGroupName;
        this.attrGroupType = rosResourceGroup.attrGroupType;
        this.attrGroupUsers = rosResourceGroup.attrGroupUsers;
    }
}
