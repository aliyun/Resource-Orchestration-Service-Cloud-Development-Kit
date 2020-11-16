import * as ros from '@ros-cdk/core';
import { RosCluster } from './ehpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `ALIYUN::EHPC::Cluster`
 */
export interface ClusterProps {

    /**
     * @Property ecsOrderComputeCount: Computing the number of cluster nodes, Range: 1-99.
     */
    readonly ecsOrderComputeCount: number;

    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    readonly ecsOrderComputeInstanceType: string;

    /**
     * @Property ecsOrderLoginCount: Log cluster node number, which ranges from: 1-99.
     */
    readonly ecsOrderLoginCount: number;

    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    readonly ecsOrderLoginInstanceType: string;

    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    readonly ecsOrderManagerInstanceType: string;

    /**
     * @Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0
     */
    readonly ehpcVersion: string;

    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    readonly name: string;

    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    readonly osTag: string;

    /**
     * @Property volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
     */
    readonly volumeId: string;

    /**
     * @Property volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
     */
    readonly volumeMountpoint: string;

    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    readonly vSwitchId: string;

    /**
     * @Property accountType: Domain service account types, currently supports nis.
     */
    readonly accountType?: string;

    /**
     * @Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    readonly application?: Array<RosCluster.ApplicationProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoRenew: true: automatic renewals; false: no automatic renewals.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    readonly computeSpotPriceLimit?: string;

    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    readonly computeSpotStrategy?: string;

    /**
     * @Property deployMode: Deployment mode:
     * Standard: account node + scheduling node + login node + computing node.
     * Advanced: HA mode.
     * Simple: (account + schedule) node + login node + compute node.
     * Tiny: (account + scheduling + login) node + compute node.
     * OneBox: (account + scheduling + login + compute) node + more compute nodes.
     */
    readonly deployMode?: string;

    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    readonly description?: string;

    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    readonly ecsChargeType?: string;

    /**
     * @Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
     */
    readonly haEnable?: boolean | ros.IResolvable;

    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    readonly imageId?: string;

    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    readonly imageOwnerAlias?: string;

    /**
     * @Property jobQueue: Computing node added queue
     */
    readonly jobQueue?: string;

    /**
     * @Property keyPairName: Key pair name.
     */
    readonly keyPairName?: string;

    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    readonly password?: string;

    /**
     * @Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    readonly period?: number;

    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
     */
    readonly periodUnit?: string;

    /**
     * @Property postInstallScript:
     */
    readonly postInstallScript?: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
     */
    readonly remoteDirectory?: string;

    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    readonly sccClusterId?: string;

    /**
     * @Property schedulerType: The scheduler type, currently support pbs.
     */
    readonly schedulerType?: string;

    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string;

    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    readonly securityGroupName?: string;

    /**
     * @Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
     */
    readonly volumeProtocol?: string;

    /**
     * @Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
     */
    readonly volumeType?: string;

    /**
     * @Property zoneId: Available area ID.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::EHPC::Cluster`
 */
export class Cluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster Id.
     */
    public readonly attrClusterId: any;

    /**
     * @Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
     */
    public readonly attrEcsInfo: any;

    /**
     * @Attribute Name: Cluster name.
     */
    public readonly attrName: any;

    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: any;

    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCluster = new RosCluster(this, id,  {
            imageOwnerAlias: props.imageOwnerAlias,
            volumeProtocol: props.volumeProtocol,
            ecsOrderComputeCount: props.ecsOrderComputeCount,
            description: props.description,
            securityGroupName: props.securityGroupName,
            autoRenew: props.autoRenew,
            computeSpotPriceLimit: props.computeSpotPriceLimit,
            name: props.name,
            volumeId: props.volumeId,
            volumeType: props.volumeType,
            deployMode: props.deployMode,
            postInstallScript: props.postInstallScript,
            imageId: props.imageId,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod,
            keyPairName: props.keyPairName,
            remoteDirectory: props.remoteDirectory,
            sccClusterId: props.sccClusterId,
            ecsOrderLoginInstanceType: props.ecsOrderLoginInstanceType,
            zoneId: props.zoneId,
            jobQueue: props.jobQueue,
            ecsOrderLoginCount: props.ecsOrderLoginCount,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period,
            schedulerType: props.schedulerType,
            computeSpotStrategy: props.computeSpotStrategy,
            accountType: props.accountType,
            ecsOrderManagerInstanceType: props.ecsOrderManagerInstanceType,
            ehpcVersion: props.ehpcVersion,
            volumeMountpoint: props.volumeMountpoint,
            ecsOrderComputeInstanceType: props.ecsOrderComputeInstanceType,
            haEnable: props.haEnable,
            osTag: props.osTag,
            ecsChargeType: props.ecsChargeType,
            application: props.application,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrEcsInfo = rosCluster.attrEcsInfo;
        this.attrName = rosCluster.attrName;
        this.attrSecurityGroupId = rosCluster.attrSecurityGroupId;
    }
}
