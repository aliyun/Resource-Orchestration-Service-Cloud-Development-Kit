import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterV2 } from './ehpc.generated';
export { RosClusterV2 as ClusterV2Property };
/**
 * Properties for defining a `ClusterV2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
 */
export interface ClusterV2Props {
    /**
     * Property clusterName: Cluster name. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
     */
    readonly clusterName: string | ros.IResolvable;
    /**
     * Property sharedStorages: The list of shared storage configurations.
     */
    readonly sharedStorages: Array<RosClusterV2.SharedStoragesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC used by the cluster.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the VSwitch used by the cluster
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property additionalPackages: A list of software to install on the cluster. Range from 0 to 10.
     */
    readonly additionalPackages?: Array<RosClusterV2.AdditionalPackagesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property addons: Cluster custom service component configuration to support only one component.
     */
    readonly addons?: Array<RosClusterV2.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property clientVersion: Cluster client version. By default, the latest version is used.
     */
    readonly clientVersion?: string | ros.IResolvable;
    /**
     * Property clusterCategory: Cluster series. Valid values:
     * - Standard: The standard version.
     * - Serverless: Hosted version
     */
    readonly clusterCategory?: string | ros.IResolvable;
    /**
     * Property clusterCredentials: Security credentials for the cluster.
     */
    readonly clusterCredentials?: RosClusterV2.ClusterCredentialsProperty | ros.IResolvable;
    /**
     * Property clusterCustomConfiguration: Cluster post-processing scripts.
     */
    readonly clusterCustomConfiguration?: RosClusterV2.ClusterCustomConfigurationProperty | ros.IResolvable;
    /**
     * Property clusterDescription: Cluster description. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
     */
    readonly clusterDescription?: string | ros.IResolvable;
    /**
     * Property clusterMode: Cluster deployment type. Valid values:
     * - Integrated: Public cloud clustering.
     * - Hybrid: Hybrid cloud cluster.
     * - Custom: The cluster is customized
     */
    readonly clusterMode?: string | ros.IResolvable;
    /**
     * Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.
     * - true: Cluster deletion protection is enabled.
     * - false: This turns off cluster deletion protection.
     * Default value: false
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * Property isEnterpriseSecurityGroup: Whether to create an enterprise security group. Valid values:
     * - true: Enterprise security groups are automatically created and used.
     * - false: Normal security groups are automatically created and used instead of enterprise security groups.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
    /**
     * Property manager: The cluster manages node configuration.
     */
    readonly manager?: RosClusterV2.ManagerProperty | ros.IResolvable;
    /**
     * Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
     */
    readonly maxCoreCount?: number | ros.IResolvable;
    /**
     * Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
     */
    readonly maxCount?: number | ros.IResolvable;
    /**
     * Property queues: Cluster queue configuration. The number of queues is supported from 0 to 8.
     */
    readonly queues?: Array<RosClusterV2.QueuesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to cluster_v2. Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosClusterV2.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EHPC::ClusterV2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterV2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
 */
export declare class ClusterV2 extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClusterV2Props;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: Cluster Id.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterV2Props, enableResourcePropertyConstraint?: boolean);
}
