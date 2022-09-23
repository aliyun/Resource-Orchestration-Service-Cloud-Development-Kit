import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedEdgeKubernetesCluster } from './cs.generated';
export { RosManagedEdgeKubernetesCluster as ManagedEdgeKubernetesClusterProperty };
/**
 * Properties for defining a `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
export interface ManagedEdgeKubernetesClusterProps {
    /**
     * Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    readonly numOfNodes: number | ros.IResolvable;
    /**
     * Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;
    /**
     * Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;
    /**
     * Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;
    /**
     * Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;
    /**
     * Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
    /**
     * Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;
    /**
     * Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;
    /**
     * Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;
    /**
     * Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
     * Default to 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property profile: Edge cluster ID. The default value is Edge.
     */
    readonly profile?: string | ros.IResolvable;
    /**
     * Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;
    /**
     * Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;
    /**
     * Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedEdgeKubernetesCluster.TagsProperty[];
    /**
     * Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;
    /**
     * Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;
    /**
     * Property workerDataDiskCategory: Data disk type.
     */
    readonly workerDataDiskCategory?: string | ros.IResolvable;
    /**
     * Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property workerDataDiskSize: Data disk size in GiB.
     */
    readonly workerDataDiskSize?: number | ros.IResolvable;
    /**
     * Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property workerSystemDiskCategory: Worker node system disk type.
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;
    /**
     * Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
    /**
     * Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
export declare class ManagedEdgeKubernetesCluster extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedEdgeKubernetesClusterProps, enableResourcePropertyConstraint?: boolean);
}
