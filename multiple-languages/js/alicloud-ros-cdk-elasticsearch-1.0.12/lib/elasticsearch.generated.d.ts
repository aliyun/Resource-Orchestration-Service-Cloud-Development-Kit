import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ElasticSearch::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property dataNode: The Elasticsearch cluster's data node setting.
     */
    readonly dataNode: RosInstance.DataNodeProperty | ros.IResolvable;
    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
     */
    readonly password: string | ros.IResolvable;
    /**
     * @Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
     */
    readonly version: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property enableKibanaPrivate: Enables or disables intranet access to Kibana.
     */
    readonly enableKibanaPrivate?: boolean | ros.IResolvable;
    /**
     * @Property enableKibanaPublic: Enables or disables Internet access to Kibana.
     */
    readonly enableKibanaPublic?: boolean | ros.IResolvable;
    /**
     * @Property enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
     */
    readonly enablePublic?: boolean | ros.IResolvable;
    /**
     * @Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property kibanaNode: The dedicated kibana node setting.
     */
    readonly kibanaNode?: RosInstance.KibanaNodeProperty | ros.IResolvable;
    /**
     * @Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
     */
    readonly kibanaWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
     */
    readonly masterNode?: RosInstance.MasterNodeProperty | ros.IResolvable;
    /**
     * @Property period: The duration that you will buy Elasticsearch instance. It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property privateWhitelist: Set the instance's IP whitelist in VPC network.
     */
    readonly privateWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
     */
    readonly publicWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
    /**
     * @Property ymlConfig: In the YML Configuration section of the Cluster
     * Configuration page of your Alibaba Cloud Elasticsearch cluster,
     * you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
     */
    readonly ymlConfig?: RosInstance.YMLConfigProperty | ros.IResolvable;
    /**
     * @Property zoneCount: undefined
     */
    readonly zoneCount?: number | ros.IResolvable;
    /**
     * @Property zoneId: The zone id of elasticsearch.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ElasticSearch::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ElasticSearch::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Domain: Instance connection domain (only VPC network access supported).
     */
    readonly attrDomain: ros.IResolvable;
    /**
     * @Attribute InstanceChargeType: Instance charge type.
     */
    readonly attrInstanceChargeType: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the Elasticsearch instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute KibanaDomain: Kibana console domain (Internet access supported).
     */
    readonly attrKibanaDomain: ros.IResolvable;
    /**
     * @Attribute KibanaPort: Kibana console port.
     */
    readonly attrKibanaPort: ros.IResolvable;
    /**
     * @Attribute Port:  Instance connection port.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute PublicDomain: Instance public connection domain.
     */
    readonly attrPublicDomain: ros.IResolvable;
    /**
     * @Attribute Status: The Elasticsearch instance status. Includes active, activating, inactive. Some operations are denied when status is not active.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute Version: Elasticsearch version.
     */
    readonly attrVersion: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dataNode: The Elasticsearch cluster's data node setting.
     */
    dataNode: RosInstance.DataNodeProperty | ros.IResolvable;
    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
     */
    password: string | ros.IResolvable;
    /**
     * @Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
     */
    version: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of VSwitch.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enableKibanaPrivate: Enables or disables intranet access to Kibana.
     */
    enableKibanaPrivate: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableKibanaPublic: Enables or disables Internet access to Kibana.
     */
    enableKibanaPublic: boolean | ros.IResolvable | undefined;
    /**
     * @Property enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
     */
    enablePublic: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property kibanaNode: The dedicated kibana node setting.
     */
    kibanaNode: RosInstance.KibanaNodeProperty | ros.IResolvable | undefined;
    /**
     * @Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
     */
    kibanaWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
     */
    masterNode: RosInstance.MasterNodeProperty | ros.IResolvable | undefined;
    /**
     * @Property period: The duration that you will buy Elasticsearch instance. It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property privateWhitelist: Set the instance's IP whitelist in VPC network.
     */
    privateWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
     */
    publicWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * @Property ymlConfig: In the YML Configuration section of the Cluster
     * Configuration page of your Alibaba Cloud Elasticsearch cluster,
     * you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
     */
    ymlConfig: RosInstance.YMLConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property zoneCount: undefined
     */
    zoneCount: number | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone id of elasticsearch.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ElasticSearch::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface DataNodeProperty {
        /**
         * @Property diskType: The data node disk type. Supported values: cloud_ssd, cloud_efficiency, cloud_essd
         */
        readonly diskType: string | ros.IResolvable;
        /**
         * @Property diskEncryption: Whether to enable cloud disk encryption.
         */
        readonly diskEncryption?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the ESSD. When the storage type is cloud_essd,
     * this parameter is required and supports PL1, PL2, and PL3.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property amount: The Elasticsearch cluster's data node quantity, between 2 and 50.
         */
        readonly amount: number | ros.IResolvable;
        /**
         * @Property diskSize: The single data node storage space.
     * cloud_ssd: An SSD disk, supports a maximum of 2048 GiB (2 TB).
     * cloud_efficiency: An ultra disk, supports a maximum of 5120 GiB (5 TB). If the data to be stored is larger than 2048 GiB, an ultra disk can only support the following data sizes (GiB): [2560, 3072, 3584, 4096, 4608, 5120].
         */
        readonly diskSize: number | ros.IResolvable;
        /**
         * @Property spec: The data node specifications of the Elasticsearch instance.
         */
        readonly spec: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface KibanaNodeProperty {
        /**
         * @Property spec: The dedicated kibana node spec.
         */
        readonly spec: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface MasterNodeProperty {
        /**
         * @Property diskType: The dedicated master node disk type.
         */
        readonly diskType?: string | ros.IResolvable;
        /**
         * @Property amount: The dedicated master node quantity. Default to 3.
         */
        readonly amount?: number | ros.IResolvable;
        /**
         * @Property diskSize: The dedicated master node storage space. Default to 20.
         */
        readonly diskSize?: number | ros.IResolvable;
        /**
         * @Property spec: The dedicated master node spec.
         */
        readonly spec: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface YMLConfigProperty {
        /**
         * @Property createIndex: Specifies whether to automatically create an index when a new document
     * is uploaded to your Elasticsearch cluster but no index exists.
     * We recommend that you disable Auto Indexing because indexes created
     * by this feature may not meet your business requirements.
     * This parameter corresponds to the action.auto_create_index configuration
     * item in the YML file. The default value of this configuration item is false.
         */
        readonly createIndex?: string | ros.IResolvable;
        /**
         * @Property destructiveRequiresName: Specifies whether to specify the index name when you delete an index.
     * If you set this parameter to Allow Wildcards, you can use wildcards to
     * delete multiple indexes at a time. Deleted indexes cannot be recovered.
     * Exercise caution when you configure this parameter.
     * This parameter corresponds to the action.destructive_requires_name configuration
     * item in the YML file. The default value of this configuration item is true.
         */
        readonly destructiveRequiresName?: boolean | ros.IResolvable;
        /**
         * @Property otherConfigs: Other Configurations.
         */
        readonly otherConfigs?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property watcher: If you enable Watcher, you can use the X-Pack Watcher feature.
     * You must clear the .watcher-history* index on a regular basis to free up disk space.
     * This parameter corresponds to the xpack.watcher.enabled configuration item in the YML file.
     * The default value of this configuration item is false.
         */
        readonly watcher?: boolean | ros.IResolvable;
        /**
         * @Property auditLog: If you enable Audit Log Indexing, the system generates audit logs
     * for the create, delete, modify, and search operations that are performed
     * in the Elasticsearch cluster. These logs consume disk space and affect
     * cluster performance. Therefore, we recommend that you disable Audit Log
     * Indexing and exercise caution when you configure this parameter.
     * This parameter is unavailable for Elasticsearch clusters of V7.0 or later.
         */
        readonly auditLog?: boolean | ros.IResolvable;
    }
}
