import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedEdgeKubernetesCluster } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * Property profile: Edge cluster ID. The default value is Edge.
     */
    readonly profile?: string | ros.IResolvable;

    /**
     * Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

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
}

/**
 * A ROS resource type:  `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
export class ManagedEdgeKubernetesCluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable;

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedEdgeKubernetesClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosManagedEdgeKubernetesCluster = new RosManagedEdgeKubernetesCluster(this, id,  {
            endpointPublicAccess: props.endpointPublicAccess === undefined || props.endpointPublicAccess === null ? true : props.endpointPublicAccess,
            containerCidr: props.containerCidr === undefined || props.containerCidr === null ? '172.16.0.0/16' : props.containerCidr,
            keyPair: props.keyPair,
            vSwitchIds: props.vSwitchIds,
            timeoutMins: props.timeoutMins === undefined || props.timeoutMins === null ? 60 : props.timeoutMins,
            addons: props.addons,
            clusterSpec: props.clusterSpec,
            workerSystemDiskCategory: props.workerSystemDiskCategory === undefined || props.workerSystemDiskCategory === null ? 'cloud_efficiency' : props.workerSystemDiskCategory,
            workerSystemDiskSize: props.workerSystemDiskSize === undefined || props.workerSystemDiskSize === null ? 120 : props.workerSystemDiskSize,
            profile: props.profile === undefined || props.profile === null ? 'Edge' : props.profile,
            name: props.name,
            workerDataDisk: props.workerDataDisk === undefined || props.workerDataDisk === null ? false : props.workerDataDisk,
            vpcId: props.vpcId,
            workerDataDiskSize: props.workerDataDiskSize,
            cloudMonitorFlags: props.cloudMonitorFlags === undefined || props.cloudMonitorFlags === null ? false : props.cloudMonitorFlags,
            numOfNodes: props.numOfNodes,
            serviceCidr: props.serviceCidr === undefined || props.serviceCidr === null ? '172.19.0.0/20' : props.serviceCidr,
            workerDataDiskCategory: props.workerDataDiskCategory,
            snatEntry: props.snatEntry === undefined || props.snatEntry === null ? true : props.snatEntry,
            proxyMode: props.proxyMode === undefined || props.proxyMode === null ? 'iptables' : props.proxyMode,
            disableRollback: props.disableRollback === undefined || props.disableRollback === null ? true : props.disableRollback,
            tags: props.tags,
            workerInstanceTypes: props.workerInstanceTypes,
            loginPassword: props.loginPassword,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedEdgeKubernetesCluster;
        this.attrClusterId = rosManagedEdgeKubernetesCluster.attrClusterId;
        this.attrDefaultUserKubeConfig = rosManagedEdgeKubernetesCluster.attrDefaultUserKubeConfig;
        this.attrNodes = rosManagedEdgeKubernetesCluster.attrNodes;
        this.attrPrivateUserKubConfig = rosManagedEdgeKubernetesCluster.attrPrivateUserKubConfig;
        this.attrScalingConfigurationId = rosManagedEdgeKubernetesCluster.attrScalingConfigurationId;
        this.attrScalingGroupId = rosManagedEdgeKubernetesCluster.attrScalingGroupId;
        this.attrScalingRuleId = rosManagedEdgeKubernetesCluster.attrScalingRuleId;
        this.attrTaskId = rosManagedEdgeKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosManagedEdgeKubernetesCluster.attrWorkerRamRoleName;
    }
}
