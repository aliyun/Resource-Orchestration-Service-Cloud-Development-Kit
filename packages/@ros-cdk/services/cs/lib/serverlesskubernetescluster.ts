import * as ros from '@ros-cdk/core';
import { RosServerlessKubernetesCluster } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServerlessKubernetesCluster as ServerlessKubernetesClusterProperty };

/**
 * Properties for defining a `ALIYUN::CS::ServerlessKubernetesCluster`
 */
export interface ServerlessKubernetesClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string;

    /**
     * @Property natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
     */
    readonly natGateway?: boolean | ros.IResolvable;

    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    readonly privateZone?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: The zone ID.
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
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: any;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: any;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: any;

    /**
     * Create a new `ALIYUN::CS::ServerlessKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerlessKubernetesClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosServerlessKubernetesCluster = new RosServerlessKubernetesCluster(this, id,  {
            vpcId: props.vpcId,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            natGateway: props.natGateway ? props.natGateway : false,
            tags: ros.tagFactory(props.tags),
            name: props.name,
            privateZone: props.privateZone,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServerlessKubernetesCluster;
        this.attrClusterId = rosServerlessKubernetesCluster.attrClusterId;
        this.attrTaskId = rosServerlessKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosServerlessKubernetesCluster.attrWorkerRamRoleName;
    }
}
