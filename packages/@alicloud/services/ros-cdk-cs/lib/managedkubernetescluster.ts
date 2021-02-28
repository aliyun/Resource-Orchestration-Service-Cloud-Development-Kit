import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedKubernetesCluster } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosManagedKubernetesCluster as ManagedKubernetesClusterProperty };

/**
 * Properties for defining a `ALIYUN::CS::ManagedKubernetesCluster`
 */
export interface ManagedKubernetesClusterProps {

    /**
     * Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string;

    /**
     * Property vpcId: VPC ID.
     */
    readonly vpcId: string;

    /**
     * Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string;

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
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string;

    /**
     * Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string;

    /**
     * Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string;

    /**
     * Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number;

    /**
     * Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string;

    /**
     * Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string;

    /**
     * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string;

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
    readonly tags?: { [key: string]: any }[];

    /**
     * Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number;

    /**
     * Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly workerAutoRenew?: boolean | ros.IResolvable;

    /**
     * Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly workerAutoRenewPeriod?: number;

    /**
     * Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosManagedKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly workerInstanceChargeType?: string;

    /**
     * Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly workerPeriod?: number;

    /**
     * Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    readonly workerPeriodUnit?: string;

    /**
     * Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string;

    /**
     * Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number;
}

/**
 * A ROS resource type:  `ALIYUN::CS::ManagedKubernetesCluster`
 */
export class ManagedKubernetesCluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: any;

    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: any;

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: any;

    /**
     * Create a new `ALIYUN::CS::ManagedKubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedKubernetesClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosManagedKubernetesCluster = new RosManagedKubernetesCluster(this, id,  {
            endpointPublicAccess: props.endpointPublicAccess ? props.endpointPublicAccess : false,
            workerPeriod: props.workerPeriod ? props.workerPeriod : 1,
            workerPeriodUnit: props.workerPeriodUnit ? props.workerPeriodUnit : 'Month',
            addons: props.addons,
            workerSystemDiskCategory: props.workerSystemDiskCategory ? props.workerSystemDiskCategory : 'cloud_efficiency',
            workerSystemDiskSize: props.workerSystemDiskSize ? props.workerSystemDiskSize : 120,
            name: props.name,
            taint: props.taint,
            cloudMonitorFlags: props.cloudMonitorFlags ? props.cloudMonitorFlags : false,
            serviceCidr: props.serviceCidr ? props.serviceCidr : '172.19.0.0/20',
            workerAutoRenew: props.workerAutoRenew ? props.workerAutoRenew : true,
            proxyMode: props.proxyMode ? props.proxyMode : 'iptables',
            tags: ros.tagFactory(props.tags),
            disableRollback: props.disableRollback ? props.disableRollback : true,
            workerInstanceTypes: props.workerInstanceTypes,
            loginPassword: props.loginPassword,
            kubernetesVersion: props.kubernetesVersion,
            containerCidr: props.containerCidr ? props.containerCidr : '172.16.0.0/16',
            keyPair: props.keyPair,
            workerInstanceChargeType: props.workerInstanceChargeType ? props.workerInstanceChargeType : 'PostPaid',
            vSwitchIds: props.vSwitchIds,
            workerDataDisks: props.workerDataDisks,
            securityGroupId: props.securityGroupId,
            timeoutMins: props.timeoutMins ? props.timeoutMins : 60,
            workerDataDisk: props.workerDataDisk ? props.workerDataDisk : false,
            vpcId: props.vpcId,
            numOfNodes: props.numOfNodes ? props.numOfNodes : 3,
            workerAutoRenewPeriod: props.workerAutoRenewPeriod ? props.workerAutoRenewPeriod : 1,
            snatEntry: props.snatEntry ? props.snatEntry : true,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedKubernetesCluster;
        this.attrClusterId = rosManagedKubernetesCluster.attrClusterId;
        this.attrTaskId = rosManagedKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosManagedKubernetesCluster.attrWorkerRamRoleName;
    }
}
