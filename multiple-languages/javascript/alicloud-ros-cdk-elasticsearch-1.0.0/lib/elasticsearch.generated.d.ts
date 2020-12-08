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
    readonly password: string;
    /**
     * @Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
     */
    readonly version: string;
    /**
     * @Property vSwitchId: The ID of VSwitch.
     */
    readonly vSwitchId: string;
    /**
     * @Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
     */
    readonly description?: string;
    /**
     * @Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
     */
    readonly instanceChargeType?: string;
    /**
     * @Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
     */
    readonly kibanaWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
     */
    readonly masterNode?: RosInstance.MasterNodeProperty | ros.IResolvable;
    /**
     * @Property period: The duration that you will buy Elasticsearch instance (in month). It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number;
    /**
     * @Property privateWhitelist: Set the instance's IP whitelist in VPC network.
     */
    readonly privateWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property publicWhitelist: Set the instance's IP whitelist in Internet.
     */
    readonly publicWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;
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
    readonly attrDomain: any;
    /**
     * @Attribute InstanceId: The ID of the Elasticsearch instance.
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute KibanaDomain: Kibana console domain (Internet access supported).
     */
    readonly attrKibanaDomain: any;
    /**
     * @Attribute KibanaPort: Kibana console port.
     */
    readonly attrKibanaPort: any;
    /**
     * @Attribute Port:  Instance connection port.
     */
    readonly attrPort: any;
    /**
     * @Attribute Status: The Elasticsearch instance status. Includes active, activating, inactive. Some operations are denied when status is not active.
     */
    readonly attrStatus: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dataNode: The Elasticsearch cluster's data node setting.
     */
    dataNode: RosInstance.DataNodeProperty | ros.IResolvable;
    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
     */
    password: string;
    /**
     * @Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
     */
    version: string;
    /**
     * @Property vSwitchId: The ID of VSwitch.
     */
    vSwitchId: string;
    /**
     * @Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
     */
    description: string | undefined;
    /**
     * @Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
     */
    instanceChargeType: string | undefined;
    /**
     * @Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
     */
    kibanaWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
     */
    masterNode: RosInstance.MasterNodeProperty | ros.IResolvable | undefined;
    /**
     * @Property period: The duration that you will buy Elasticsearch instance (in month). It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    period: number | undefined;
    /**
     * @Property privateWhitelist: Set the instance's IP whitelist in VPC network.
     */
    privateWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property publicWhitelist: Set the instance's IP whitelist in Internet.
     */
    publicWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
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
         * @Property diskType: The data node disk type. Supported values: cloud_ssd, cloud_efficiency.
         */
        readonly diskType: string;
        /**
         * @Property amount: The Elasticsearch cluster's data node quantity, between 2 and 50.
         */
        readonly amount: number;
        /**
         * @Property diskSize: The single data node storage space.
     * cloud_ssd: An SSD disk, supports a maximum of 2048 GiB (2 TB).
     * cloud_efficiency: An ultra disk, supports a maximum of 5120 GiB (5 TB). If the data to be stored is larger than 2048 GiB, an ultra disk can only support the following data sizes (GiB): [2560, 3072, 3584, 4096, 4608, 5120].
         */
        readonly diskSize: number;
        /**
         * @Property spec: The data node specifications of the Elasticsearch instance.
         */
        readonly spec: string;
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
        readonly diskType?: string;
        /**
         * @Property amount: The dedicated master node quantity. Default to 3.
         */
        readonly amount?: number;
        /**
         * @Property diskSize: The dedicated master node storage space. Default to 20.
         */
        readonly diskSize?: number;
        /**
         * @Property spec: The dedicated master node spec.
         */
        readonly spec: string;
    }
}
