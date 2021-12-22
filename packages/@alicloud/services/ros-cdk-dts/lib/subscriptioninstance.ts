import * as ros from '@alicloud/ros-cdk-core';
import { RosSubscriptionInstance } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSubscriptionInstance as SubscriptionInstanceProperty };

/**
 * Properties for defining a `ALIYUN::DTS::SubscriptionInstance`
 */
export interface SubscriptionInstanceProps {

    /**
     * Property configuration: Subscription configuration.
     */
    readonly configuration?: RosSubscriptionInstance.ConfigurationProperty | ros.IResolvable;

    /**
     * Property payType: Payment type. Valid value:
     * PostPaid: Pay-as-you-go, which is default value.
     * PrePaid: subscription.
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * Property period: The unit of the subscription length. Valid values: Year and Month.
     * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
     * PolarDB: PolarDB for MySQL cluster.
     * polardb_o: PolarDB O Edition cluster.
     * polardb_pg: PolarDB for PostgreSQL cluster.
     * DRDS: PolarDB-X instance V1.0 or V2.0.
     * PostgreSQL: self-managed PostgreSQL database.
     * Oracle: self-managed Oracle database.
     */
    readonly sourceEndpointInstanceType?: string | ros.IResolvable;

    /**
     * Property usedTime: The subscription length.
     * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
     * You can set the Period parameter to specify the unit of the subscription length.
     */
    readonly usedTime?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::DTS::SubscriptionInstance`
 */
export class SubscriptionInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute PrivateHost: Private host.
     */
    public readonly attrPrivateHost: ros.IResolvable;

    /**
     * Attribute PublicHost: Public host.
     */
    public readonly attrPublicHost: ros.IResolvable;

    /**
     * Attribute SubscriptionInstanceId: The ID of Data subscription instance.
     */
    public readonly attrSubscriptionInstanceId: ros.IResolvable;

    /**
     * Attribute VPCHost: VPC host.
     */
    public readonly attrVpcHost: ros.IResolvable;

    /**
     * Create a new `ALIYUN::DTS::SubscriptionInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SubscriptionInstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSubscriptionInstance = new RosSubscriptionInstance(this, id,  {
            configuration: props.configuration,
            usedTime: props.usedTime,
            period: props.period,
            payType: props.payType,
            sourceEndpointInstanceType: props.sourceEndpointInstanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSubscriptionInstance;
        this.attrPrivateHost = rosSubscriptionInstance.attrPrivateHost;
        this.attrPublicHost = rosSubscriptionInstance.attrPublicHost;
        this.attrSubscriptionInstanceId = rosSubscriptionInstance.attrSubscriptionInstanceId;
        this.attrVpcHost = rosSubscriptionInstance.attrVpcHost;
    }
}
