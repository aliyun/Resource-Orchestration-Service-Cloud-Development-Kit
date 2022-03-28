import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './elasticsearch.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::ElasticSearch::Instance`
 */
export interface InstanceProps {

    /**
     * Property dataNode: The Elasticsearch cluster's data node setting.
     */
    readonly dataNode: RosInstance.DataNodeProperty | ros.IResolvable;

    /**
     * Property password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
     */
    readonly password: string | ros.IResolvable;

    /**
     * Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
     */
    readonly version: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property enableKibanaPrivate: Enables or disables intranet access to Kibana.
     */
    readonly enableKibanaPrivate?: boolean | ros.IResolvable;

    /**
     * Property enableKibanaPublic: Enables or disables Internet access to Kibana.
     */
    readonly enableKibanaPublic?: boolean | ros.IResolvable;

    /**
     * Property enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
     */
    readonly enablePublic?: boolean | ros.IResolvable;

    /**
     * Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property kibanaNode: The dedicated kibana node setting.
     */
    readonly kibanaNode?: RosInstance.KibanaNodeProperty | ros.IResolvable;

    /**
     * Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
     */
    readonly kibanaWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
     */
    readonly masterNode?: RosInstance.MasterNodeProperty | ros.IResolvable;

    /**
     * Property period: The duration that you will buy Elasticsearch instance (in month). It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property privateWhitelist: Set the instance's IP whitelist in VPC network.
     */
    readonly privateWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
     */
    readonly publicWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * Property ymlConfig: In the YML Configuration section of the Cluster 
     * Configuration page of your Alibaba Cloud Elasticsearch cluster, 
     * you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
     */
    readonly ymlConfig?: RosInstance.YMLConfigProperty | ros.IResolvable;

    /**
     * Property zoneCount: undefined
     */
    readonly zoneCount?: number | ros.IResolvable;

    /**
     * Property zoneId: The zone id of elasticsearch.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ElasticSearch::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Domain: Instance connection domain (only VPC network access supported).
     */
    public readonly attrDomain: ros.IResolvable;

    /**
     * Attribute InstanceChargeType: Instance charge type.
     */
    public readonly attrInstanceChargeType: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the Elasticsearch instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute KibanaDomain: Kibana console domain (Internet access supported).
     */
    public readonly attrKibanaDomain: ros.IResolvable;

    /**
     * Attribute KibanaPort: Kibana console port.
     */
    public readonly attrKibanaPort: ros.IResolvable;

    /**
     * Attribute Port:  Instance connection port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Attribute PublicDomain: Instance public connection domain.
     */
    public readonly attrPublicDomain: ros.IResolvable;

    /**
     * Attribute Status: The Elasticsearch instance status. Includes active, activating, inactive. Some operations are denied when status is not active.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * Attribute VSwitchId: The ID of VSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute Version: Elasticsearch version.
     */
    public readonly attrVersion: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ElasticSearch::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            masterNode: props.masterNode,
            description: props.description,
            kibanaNode: props.kibanaNode,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            enableKibanaPrivate: props.enableKibanaPrivate,
            publicWhitelist: props.publicWhitelist,
            enableKibanaPublic: props.enableKibanaPublic,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            vSwitchId: props.vSwitchId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            enablePublic: props.enablePublic,
            privateWhitelist: props.privateWhitelist,
            version: props.version,
            dataNode: props.dataNode,
            kibanaWhitelist: props.kibanaWhitelist,
            ymlConfig: props.ymlConfig,
            tags: props.tags,
            zoneCount: props.zoneCount,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrDomain = rosInstance.attrDomain;
        this.attrInstanceChargeType = rosInstance.attrInstanceChargeType;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrKibanaDomain = rosInstance.attrKibanaDomain;
        this.attrKibanaPort = rosInstance.attrKibanaPort;
        this.attrPort = rosInstance.attrPort;
        this.attrPublicDomain = rosInstance.attrPublicDomain;
        this.attrStatus = rosInstance.attrStatus;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrVersion = rosInstance.attrVersion;
    }
}
