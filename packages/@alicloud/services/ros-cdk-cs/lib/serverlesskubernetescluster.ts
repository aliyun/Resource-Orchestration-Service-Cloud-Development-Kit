import * as ros from '@alicloud/ros-cdk-core';
import { RosServerlessKubernetesCluster } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServerlessKubernetesCluster as ServerlessKubernetesClusterProperty };

/**
 * Properties for defining a `ALIYUN::CS::ServerlessKubernetesCluster`
 */
export interface ServerlessKubernetesClusterProps {

    /**
     * Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string;

    /**
     * Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosServerlessKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * Property kubernetesVersion: Kubernetes version. Default to 1.14.8-aliyun.1, 1.16.9-aliyun.1 and so on .
     */
    readonly kubernetesVersion?: string;

    /**
     * Property natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
     */
    readonly natGateway?: boolean | ros.IResolvable;

    /**
     * Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    readonly privateZone?: boolean | ros.IResolvable;

    /**
     * Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string;

    /**
     * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string;

    /**
     * Property tags: Tag the cluster.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string;

    /**
     * Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
     */
    readonly vSwitchId?: string;

    /**
     * Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property zoneId: The zone ID.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::CS::ServerlessKubernetesCluster`
 */
export class ServerlessKubernetesCluster extends ros.Resource {

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
     * Create a new `ALIYUN::CS::ServerlessKubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerlessKubernetesClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosServerlessKubernetesCluster = new RosServerlessKubernetesCluster(this, id,  {
            kubernetesVersion: props.kubernetesVersion ? props.kubernetesVersion : '1.14.8-aliyun.1',
            endpointPublicAccess: props.endpointPublicAccess,
            zoneId: props.zoneId,
            vSwitchIds: props.vSwitchIds,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            addons: props.addons,
            natGateway: props.natGateway ? props.natGateway : false,
            name: props.name,
            vpcId: props.vpcId,
            serviceCidr: props.serviceCidr ? props.serviceCidr : '172.19.0.0/20',
            tags: ros.tagFactory(props.tags),
            privateZone: props.privateZone,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServerlessKubernetesCluster;
        this.attrClusterId = rosServerlessKubernetesCluster.attrClusterId;
        this.attrTaskId = rosServerlessKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosServerlessKubernetesCluster.attrWorkerRamRoleName;
    }
}
