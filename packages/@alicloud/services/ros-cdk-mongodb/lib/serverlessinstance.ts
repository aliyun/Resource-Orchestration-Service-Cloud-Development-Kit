import * as ros from '@alicloud/ros-cdk-core';
import { RosServerlessInstance } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServerlessInstance as ServerlessInstanceProperty };

/**
 * Properties for defining a `ALIYUN::MONGODB::ServerlessInstance`
 */
export interface ServerlessInstanceProps {

    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [1,10], increased every 1 GB, Unit in GB
     */
    readonly dbInstanceStorage: number;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;

    /**
     * @Property engineVersion: Database instance version.Support 4.2
     */
    readonly engineVersion?: string;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number;

    /**
     * @Property periodPriceType: Charge period for created instance.
     */
    readonly periodPriceType?: string;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger
     */
    readonly storageEngine?: string;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::MONGODB::ServerlessInstance`
 */
export class ServerlessInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    public readonly attrConnectionUri: any;

    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public readonly attrDbInstanceId: any;

    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: any;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * Create a new `ALIYUN::MONGODB::ServerlessInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerlessInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosServerlessInstance = new RosServerlessInstance(this, id,  {
            engineVersion: props.engineVersion ? props.engineVersion : '4.2',
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            period: props.period ? props.period : 1,
            securityIpArray: props.securityIpArray,
            storageEngine: props.storageEngine ? props.storageEngine : 'WiredTiger',
            accountPassword: props.accountPassword,
            vpcId: props.vpcId,
            chargeType: props.chargeType ? props.chargeType : 'PostPaid',
            networkType: props.networkType,
            dbInstanceStorage: props.dbInstanceStorage,
            periodPriceType: props.periodPriceType,
            dbInstanceDescription: props.dbInstanceDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServerlessInstance;
        this.attrConnectionUri = rosServerlessInstance.attrConnectionUri;
        this.attrDbInstanceId = rosServerlessInstance.attrDbInstanceId;
        this.attrDbInstanceStatus = rosServerlessInstance.attrDbInstanceStatus;
        this.attrOrderId = rosServerlessInstance.attrOrderId;
    }
}
