import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './elasticsearch.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearch-instance
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
     * Property deleteType: The release type. Valid values:
     * - immediate: The cluster is immediately deleted when it is released. After the cluster is deleted, the data stored in the cluster is deleted, and the system removes the cluster from the Logstash cluster list.
     * - protective (default): The instance is frozen for 24 hours before data is completely cleared. During this period, the instance is still displayed in the instance list. You can select Restore Instance or Release Now.
     */
    readonly deleteType?: string | ros.IResolvable;
    /**
     * Property description: The description of instance. It a string of 0 to 128 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
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
     * Property instanceCategory: Version Type:
     * - x-pack: Create a commercial instance or a kernel-enhanced instance without Indexing Service and OpenStore enabled.
     * - IS: Creates a kernel-enhanced instance with Indexing Service or OpenStore enabled
     */
    readonly instanceCategory?: string | ros.IResolvable;
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
     * Property period: The duration that you will buy Elasticsearch instance. It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: Unit of prepaid time period, it could be Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
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
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute Domain: Instance connection domain (only VPC network access supported).
     */
    readonly attrDomain: ros.IResolvable | string;
    /**
     * Attribute InstanceChargeType: Instance charge type.
     */
    readonly attrInstanceChargeType: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the Elasticsearch instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute KibanaDomain: Kibana console domain (Internet access supported).
     */
    readonly attrKibanaDomain: ros.IResolvable | string;
    /**
     * Attribute KibanaPort: Kibana console port.
     */
    readonly attrKibanaPort: ros.IResolvable | string;
    /**
     * Attribute Port:  Instance connection port.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Attribute PublicDomain: Instance public connection domain.
     */
    readonly attrPublicDomain: ros.IResolvable | string;
    /**
     * Attribute Status: The Elasticsearch instance status. Includes active, activating, inactive. Some operations are denied when status is not active.
     */
    readonly attrStatus: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The ID of VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute Version: Elasticsearch version.
     */
    readonly attrVersion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ElasticSearch::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearch-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute Domain: Instance connection domain (only VPC network access supported).
     */
    readonly attrDomain: ros.IResolvable | string;
    /**
     * Attribute InstanceChargeType: Instance charge type.
     */
    readonly attrInstanceChargeType: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the Elasticsearch instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute KibanaDomain: Kibana console domain (Internet access supported).
     */
    readonly attrKibanaDomain: ros.IResolvable | string;
    /**
     * Attribute KibanaPort: Kibana console port.
     */
    readonly attrKibanaPort: ros.IResolvable | string;
    /**
     * Attribute Port:  Instance connection port.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Attribute PublicDomain: Instance public connection domain.
     */
    readonly attrPublicDomain: ros.IResolvable | string;
    /**
     * Attribute Status: The Elasticsearch instance status. Includes active, activating, inactive. Some operations are denied when status is not active.
     */
    readonly attrStatus: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The ID of VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute Version: Elasticsearch version.
     */
    readonly attrVersion: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
