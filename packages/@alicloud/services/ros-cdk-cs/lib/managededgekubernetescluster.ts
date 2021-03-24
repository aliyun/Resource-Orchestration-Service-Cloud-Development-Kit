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
    readonly name: string;

    /**
     * Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    readonly numOfNodes: number;

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
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string;

    /**
     * Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string;

    /**
     * Property profile: Edge cluster ID. The default value is Edge.
     */
    readonly profile?: string;

    /**
     * Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string;

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
     * Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number;

    /**
     * Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string;

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
    readonly workerDataDiskCategory?: string;

    /**
     * Property workerDataDiskSize: Data disk size in GiB.
     */
    readonly workerDataDiskSize?: number;

    /**
     * Property workerSystemDiskCategory: Worker node system disk type. 
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
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedEdgeKubernetesClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosManagedEdgeKubernetesCluster = new RosManagedEdgeKubernetesCluster(this, id,  {
            endpointPublicAccess: props.endpointPublicAccess ? props.endpointPublicAccess : true,
            containerCidr: props.containerCidr ? props.containerCidr : '172.16.0.0/16',
            keyPair: props.keyPair,
            vSwitchIds: props.vSwitchIds,
            timeoutMins: props.timeoutMins ? props.timeoutMins : 60,
            workerSystemDiskSize: props.workerSystemDiskSize ? props.workerSystemDiskSize : 120,
            workerSystemDiskCategory: props.workerSystemDiskCategory ? props.workerSystemDiskCategory : 'cloud_efficiency',
            profile: props.profile ? props.profile : 'Edge',
            name: props.name,
            workerDataDisk: props.workerDataDisk ? props.workerDataDisk : false,
            vpcId: props.vpcId,
            workerDataDiskSize: props.workerDataDiskSize,
            numOfNodes: props.numOfNodes,
            cloudMonitorFlags: props.cloudMonitorFlags ? props.cloudMonitorFlags : false,
            serviceCidr: props.serviceCidr ? props.serviceCidr : '172.19.0.0/20',
            workerDataDiskCategory: props.workerDataDiskCategory,
            snatEntry: props.snatEntry ? props.snatEntry : true,
            tags: ros.tagFactory(props.tags),
            proxyMode: props.proxyMode ? props.proxyMode : 'iptables',
            disableRollback: props.disableRollback ? props.disableRollback : true,
            loginPassword: props.loginPassword,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedEdgeKubernetesCluster;
        this.attrClusterId = rosManagedEdgeKubernetesCluster.attrClusterId;
        this.attrTaskId = rosManagedEdgeKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosManagedEdgeKubernetesCluster.attrWorkerRamRoleName;
    }
}
