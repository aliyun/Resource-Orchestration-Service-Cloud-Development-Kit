import * as ros from '@alicloud/ros-cdk-core';
import { RosASKCluster } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosASKCluster as ASKClusterProperty };

/**
 * Properties for defining a `ASKCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-askcluster
 */
export interface ASKClusterProps {

    /**
     * Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosASKCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * Property deleteOptions: Delete options, only work for deleting resource.
     */
    readonly deleteOptions?: Array<RosASKCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable;

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
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default value: true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    readonly privateZone?: boolean | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * Property serviceDiscoveryTypes: Intra-cluster service discovery type,
     * used to specify the service discovery method in the ASK cluster.
     * CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
     * a set of containers needs to be deployed in the cluster for DNS resolution.
     * By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
     * PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
     * the PrivateZone service needs to be enabled.
     * Default value: off
     */
    readonly serviceDiscoveryTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

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
    readonly tags?: RosASKCluster.TagsProperty[];

    /**
     * Property timeZone: The time zone used by the cluster..
     */
    readonly timeZone?: string | ros.IResolvable;

    /**
     * Property vpcId: VPC ID.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property zoneId: The zone ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ASKCluster`, which is used to create an ACK Serverless cluster of Container Service for Kubernetes (ACK).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosASKCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-askcluster
 */
export class ASKCluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ASKClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute APIServerSLBId: The id of API server SLB
     */
    public readonly attrApiServerSlbId: ros.IResolvable;

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * Attribute IngressSLBId: The id of ingress SLB
     */
    public readonly attrIngressSlbId: ros.IResolvable;

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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ASKClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosASKCluster = new RosASKCluster(this, id,  {
            kubernetesVersion: props.kubernetesVersion,
            endpointPublicAccess: props.endpointPublicAccess === undefined || props.endpointPublicAccess === null ? true : props.endpointPublicAccess,
            deleteOptions: props.deleteOptions,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            vSwitchIds: props.vSwitchIds,
            securityGroupId: props.securityGroupId,
            addons: props.addons,
            deletionProtection: props.deletionProtection,
            clusterSpec: props.clusterSpec === undefined || props.clusterSpec === null ? 'ack.pro.small' : props.clusterSpec,
            name: props.name,
            timeZone: props.timeZone,
            serviceDiscoveryTypes: props.serviceDiscoveryTypes,
            vpcId: props.vpcId,
            serviceCidr: props.serviceCidr === undefined || props.serviceCidr === null ? '172.19.0.0/20' : props.serviceCidr,
            snatEntry: props.snatEntry === undefined || props.snatEntry === null ? false : props.snatEntry,
            tags: props.tags,
            privateZone: props.privateZone,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosASKCluster;
        this.attrApiServerSlbId = rosASKCluster.attrApiServerSlbId;
        this.attrClusterId = rosASKCluster.attrClusterId;
        this.attrDefaultUserKubeConfig = rosASKCluster.attrDefaultUserKubeConfig;
        this.attrIngressSlbId = rosASKCluster.attrIngressSlbId;
        this.attrNodes = rosASKCluster.attrNodes;
        this.attrPrivateUserKubConfig = rosASKCluster.attrPrivateUserKubConfig;
        this.attrScalingConfigurationId = rosASKCluster.attrScalingConfigurationId;
        this.attrScalingGroupId = rosASKCluster.attrScalingGroupId;
        this.attrScalingRuleId = rosASKCluster.attrScalingRuleId;
        this.attrTaskId = rosASKCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosASKCluster.attrWorkerRamRoleName;
    }
}
