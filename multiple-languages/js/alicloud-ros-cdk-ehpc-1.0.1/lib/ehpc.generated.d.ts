import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::EHPC::Cluster`
 */
export interface RosClusterProps {
    /**
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
     */
    readonly ecsOrderComputeCount: number | ros.IResolvable;
    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    readonly ecsOrderComputeInstanceType: string | ros.IResolvable;
    /**
     * @Property ecsOrderLoginCount: Login node number can only be 1.
     */
    readonly ecsOrderLoginCount: number | ros.IResolvable;
    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    readonly ecsOrderLoginInstanceType: string | ros.IResolvable;
    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    readonly ecsOrderManagerInstanceType: string | ros.IResolvable;
    /**
     * @Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0
     */
    readonly ehpcVersion: string | ros.IResolvable;
    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    readonly osTag: string | ros.IResolvable;
    /**
     * @Property volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
     */
    readonly volumeId: string | ros.IResolvable;
    /**
     * @Property volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
     */
    readonly volumeMountpoint: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property accountType: Domain service account types, currently supports nis.
     */
    readonly accountType?: string | ros.IResolvable;
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
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    readonly computeSpotPriceLimit?: string | ros.IResolvable;
    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    readonly computeSpotStrategy?: string | ros.IResolvable;
    /**
     * @Property deployMode: Deployment mode:
     * Standard: account node + scheduling node + login node + computing node.
     * Advanced: HA mode.
     * Simple: (account + schedule) node + login node + compute node.
     * Tiny: (account + scheduling + login) node + compute node.
     * OneBox: (account + scheduling + login + compute) node + more compute nodes.
     */
    readonly deployMode?: string | ros.IResolvable;
    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    readonly ecsChargeType?: string | ros.IResolvable;
    /**
     * @Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA)
     */
    readonly ecsOrderManagerCount?: number | ros.IResolvable;
    /**
     * @Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
     */
    readonly haEnable?: boolean | ros.IResolvable;
    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;
    /**
     * @Property jobQueue: Computing node added queue
     */
    readonly jobQueue?: string | ros.IResolvable;
    /**
     * @Property keyPairName: Key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property postInstallScript:
     */
    readonly postInstallScript?: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
     */
    readonly remoteDirectory?: string | ros.IResolvable;
    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    readonly sccClusterId?: string | ros.IResolvable;
    /**
     * @Property schedulerType: The scheduler type, currently support pbs.
     */
    readonly schedulerType?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    readonly securityGroupName?: string | ros.IResolvable;
    /**
     * @Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
     */
    readonly volumeProtocol?: string | ros.IResolvable;
    /**
     * @Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
     */
    readonly volumeType?: string | ros.IResolvable;
    /**
     * @Property zoneId: Available area ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::EHPC::Cluster`
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::Cluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterId: Cluster Id.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
     */
    readonly attrEcsInfo: ros.IResolvable;
    /**
     * @Attribute Name: Cluster name.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
     */
    ecsOrderComputeCount: number | ros.IResolvable;
    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    ecsOrderComputeInstanceType: string | ros.IResolvable;
    /**
     * @Property ecsOrderLoginCount: Login node number can only be 1.
     */
    ecsOrderLoginCount: number | ros.IResolvable;
    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    ecsOrderLoginInstanceType: string | ros.IResolvable;
    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    ecsOrderManagerInstanceType: string | ros.IResolvable;
    /**
     * @Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0
     */
    ehpcVersion: string | ros.IResolvable;
    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    name: string | ros.IResolvable;
    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    osTag: string | ros.IResolvable;
    /**
     * @Property volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
     */
    volumeId: string | ros.IResolvable;
    /**
     * @Property volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
     */
    volumeMountpoint: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property accountType: Domain service account types, currently supports nis.
     */
    accountType: string | ros.IResolvable | undefined;
    /**
     * @Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    application: Array<RosCluster.ApplicationProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: true: automatic renewals; false: no automatic renewals.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    computeSpotPriceLimit: string | ros.IResolvable | undefined;
    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    computeSpotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property deployMode: Deployment mode:
     * Standard: account node + scheduling node + login node + computing node.
     * Advanced: HA mode.
     * Simple: (account + schedule) node + login node + compute node.
     * Tiny: (account + scheduling + login) node + compute node.
     * OneBox: (account + scheduling + login + compute) node + more compute nodes.
     */
    deployMode: string | ros.IResolvable | undefined;
    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    ecsChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA)
     */
    ecsOrderManagerCount: number | ros.IResolvable | undefined;
    /**
     * @Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
     */
    haEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    imageOwnerAlias: string | ros.IResolvable | undefined;
    /**
     * @Property jobQueue: Computing node added queue
     */
    jobQueue: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: Key pair name.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property postInstallScript:
     */
    postInstallScript: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
     */
    remoteDirectory: string | ros.IResolvable | undefined;
    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    sccClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property schedulerType: The scheduler type, currently support pbs.
     */
    schedulerType: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security group ID.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    securityGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
     */
    volumeProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
     */
    volumeType: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: Available area ID.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface ApplicationProperty {
        /**
         * @Property tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
         */
        readonly tag: string | ros.IResolvable;
    }
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface PostInstallScriptProperty {
        /**
         * @Property args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
         */
        readonly args?: string | ros.IResolvable;
        /**
         * @Property url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
         */
        readonly url?: string | ros.IResolvable;
    }
}
