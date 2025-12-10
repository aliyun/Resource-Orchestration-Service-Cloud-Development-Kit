import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster2 } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster2 as Cluster2Property };

/**
 * Properties for defining a `Cluster2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster2
 */
export interface Cluster2Props {

    /**
     * Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
     */
    readonly applications: Array<RosCluster2.ApplicationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:\/\/ and https: \/\/.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
     */
    readonly clusterName: string | ros.IResolvable;

    /**
     * Property clusterType: Cluster type.Ranges:
     * DATALAKE: The new version of the data lake.
     * OLAP: Data analysis.
     * DATAFLOW: Real -time data stream.
     * DATASERVING: Data service.
     * HADOOP: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
     */
    readonly nodeAttributes: RosCluster2.NodeAttributesProperty | ros.IResolvable;

    /**
     * Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
     */
    readonly nodeGroups: Array<RosCluster2.NodeGroupsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
     */
    readonly releaseVersion: string | ros.IResolvable;

    /**
     * Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
     */
    readonly applicationConfigs?: Array<RosCluster2.ApplicationConfigsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
     */
    readonly bootstrapScripts?: Array<RosCluster2.BootstrapScriptsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property deployMode: Application deployment mode in the cluster.Ranges:
     * Normal: non -high available deployment.Cluster 1 master node.
     * HA: High availability deployment.High availability deployment requires at least 3 master nodes.
     */
    readonly deployMode?: string | ros.IResolvable;

    /**
     * Property paymentType: Payment type. Ranges: 
     * PayAsYouGo: Post-paid, pay-as-you-go.
     * Subscription: Prepaid, yearly and monthly.
     * Default: PayAsYouGo.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property securityMode: Cluster Kerberos security mode.Ranges:
     * Normal: General mode, does not open the Kerberos mode.
     * Kerberos: Open the Kerberos mode.
     */
    readonly securityMode?: string | ros.IResolvable;

    /**
     * Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
     */
    readonly subscriptionConfig?: RosCluster2.SubscriptionConfigProperty | ros.IResolvable;

    /**
     * Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCluster2.TagsProperty[];
}

/**
 * Represents a `Cluster2`.
 */
export interface ICluster2 extends ros.IResource {
    readonly props: Cluster2Props;

    /**
     * Attribute ApplicationLinks: ApplicationLinks of cluster.
     */
    readonly attrApplicationLinks: ros.IResolvable | string;

    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EMR::Cluster2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster2
 */
export class Cluster2 extends ros.Resource implements ICluster2 {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: Cluster2Props;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApplicationLinks: ApplicationLinks of cluster.
     */
    public readonly attrApplicationLinks: ros.IResolvable | string;

    /**
     * Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Cluster2Props, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCluster2 = new RosCluster2(this, id,  {
            applications: props.applications,
            resourceGroupId: props.resourceGroupId,
            applicationConfigs: props.applicationConfigs,
            clusterType: props.clusterType,
            nodeGroups: props.nodeGroups,
            releaseVersion: props.releaseVersion,
            bootstrapScripts: props.bootstrapScripts,
            subscriptionConfig: props.subscriptionConfig,
            deployMode: props.deployMode,
            securityMode: props.securityMode,
            nodeAttributes: props.nodeAttributes,
            clusterName: props.clusterName,
            paymentType: props.paymentType,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster2;
        this.attrApplicationLinks = rosCluster2.attrApplicationLinks;
        this.attrClusterId = rosCluster2.attrClusterId;
    }
}
