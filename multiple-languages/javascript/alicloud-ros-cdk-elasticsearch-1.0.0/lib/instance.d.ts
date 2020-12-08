import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './elasticsearch.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::ElasticSearch::Instance`
 */
export interface InstanceProps {
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
 * A ROS resource type:  `ALIYUN::ElasticSearch::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
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
    /**
     * Create a new `ALIYUN::ElasticSearch::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
