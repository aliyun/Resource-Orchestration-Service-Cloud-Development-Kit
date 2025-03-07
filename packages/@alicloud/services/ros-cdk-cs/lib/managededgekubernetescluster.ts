import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedEdgeKubernetesCluster } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosManagedEdgeKubernetesCluster as ManagedEdgeKubernetesClusterProperty };

/**
 * Properties for defining a `ManagedEdgeKubernetesCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managededgekubernetescluster
 */
export interface ManagedEdgeKubernetesClusterProps {

    /**
     * Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

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
     * Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
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
     * Property maintenanceWindow: Cluster maintenance window.
     */
    readonly maintenanceWindow?: RosManagedEdgeKubernetesCluster.MaintenanceWindowProperty | ros.IResolvable;

    /**
     * Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. 
     * This number is determined by the specified pod CIDR block. 
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;

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
     * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
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
     * Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0\/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `ManagedEdgeKubernetesCluster`.
 */
export interface IManagedEdgeKubernetesCluster extends ros.IResource {
    readonly props: ManagedEdgeKubernetesClusterProps;

    /**
     * Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable | string;

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable | string;

    /**
     * Attribute IngressSLBId: The id of ingress SLB
     */
    readonly attrIngressSlbId: ros.IResolvable | string;

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable | string;

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable | string;

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable | string;

    /**
     * Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable | string;

    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable | string;

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ManagedEdgeKubernetesCluster`, which is used to create a Container Service for Kubernetes (ACK) edge cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosManagedEdgeKubernetesCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managededgekubernetescluster
 */
export class ManagedEdgeKubernetesCluster extends ros.Resource implements IManagedEdgeKubernetesCluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ManagedEdgeKubernetesClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute APIServerSLBId: The id of API server SLB
     */
    public readonly attrApiServerSlbId: ros.IResolvable | string;

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable | string;

    /**
     * Attribute IngressSLBId: The id of ingress SLB
     */
    public readonly attrIngressSlbId: ros.IResolvable | string;

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable | string;

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable | string;

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable | string;

    /**
     * Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable | string;

    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable | string;

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedEdgeKubernetesClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosManagedEdgeKubernetesCluster = new RosManagedEdgeKubernetesCluster(this, id,  {
            endpointPublicAccess: props.endpointPublicAccess === undefined || props.endpointPublicAccess === null ? true : props.endpointPublicAccess,
            containerCidr: props.containerCidr === undefined || props.containerCidr === null ? '172.16.0.0/16' : props.containerCidr,
            keyPair: props.keyPair,
            resourceGroupId: props.resourceGroupId,
            nodeCidrMask: props.nodeCidrMask,
            timeoutMins: props.timeoutMins === undefined || props.timeoutMins === null ? 60 : props.timeoutMins,
            addons: props.addons,
            deletionProtection: props.deletionProtection,
            clusterSpec: props.clusterSpec,
            profile: props.profile === undefined || props.profile === null ? 'Edge' : props.profile,
            name: props.name,
            isEnterpriseSecurityGroup: props.isEnterpriseSecurityGroup,
            vpcId: props.vpcId,
            cloudMonitorFlags: props.cloudMonitorFlags === undefined || props.cloudMonitorFlags === null ? false : props.cloudMonitorFlags,
            serviceCidr: props.serviceCidr === undefined || props.serviceCidr === null ? '172.19.0.0/20' : props.serviceCidr,
            snatEntry: props.snatEntry === undefined || props.snatEntry === null ? true : props.snatEntry,
            zoneIds: props.zoneIds,
            maintenanceWindow: props.maintenanceWindow,
            tags: props.tags,
            proxyMode: props.proxyMode === undefined || props.proxyMode === null ? 'iptables' : props.proxyMode,
            loginPassword: props.loginPassword,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedEdgeKubernetesCluster;
        this.attrApiServerSlbId = rosManagedEdgeKubernetesCluster.attrApiServerSlbId;
        this.attrClusterId = rosManagedEdgeKubernetesCluster.attrClusterId;
        this.attrDefaultUserKubeConfig = rosManagedEdgeKubernetesCluster.attrDefaultUserKubeConfig;
        this.attrIngressSlbId = rosManagedEdgeKubernetesCluster.attrIngressSlbId;
        this.attrNodes = rosManagedEdgeKubernetesCluster.attrNodes;
        this.attrPrivateUserKubConfig = rosManagedEdgeKubernetesCluster.attrPrivateUserKubConfig;
        this.attrScalingConfigurationId = rosManagedEdgeKubernetesCluster.attrScalingConfigurationId;
        this.attrScalingGroupId = rosManagedEdgeKubernetesCluster.attrScalingGroupId;
        this.attrScalingRuleId = rosManagedEdgeKubernetesCluster.attrScalingRuleId;
        this.attrTaskId = rosManagedEdgeKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosManagedEdgeKubernetesCluster.attrWorkerRamRoleName;
    }
}
