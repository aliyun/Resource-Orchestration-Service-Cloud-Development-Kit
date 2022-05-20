import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstance } from './gpdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstance as DBInstanceProperty };

/**
 * Properties for defining a `ALIYUN::GPDB::DBInstance`
 */
export interface DBInstanceProps {

    /**
     * Property dbInstanceClass: The instance type.
     */
    readonly dbInstanceClass: string | ros.IResolvable;

    /**
     * Property dbInstanceGroupCount: The number of compute nodes in the instance.
     */
    readonly dbInstanceGroupCount: number | ros.IResolvable;

    /**
     * Property engineVersion: The version of the database engine.
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    readonly securityIpList?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBInstance.TagsProperty[];

    /**
     * Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::GPDB::DBInstance`
 */
export class DBInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ConnectionString: The endpoint of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * Attribute OrderId: The order ID of the instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute Port: The port used to connect to the instance.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Create a new `ALIYUN::GPDB::DBInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBInstance = new RosDBInstance(this, id,  {
            engineVersion: props.engineVersion,
            zoneId: props.zoneId,
            vpcId: props.vpcId,
            dbInstanceClass: props.dbInstanceClass,
            securityIpList: props.securityIpList,
            vSwitchId: props.vSwitchId,
            period: props.period,
            payType: props.payType === undefined || props.payType === null ? 'Postpaid' : props.payType,
            dbInstanceDescription: props.dbInstanceDescription,
            tags: props.tags,
            dbInstanceGroupCount: props.dbInstanceGroupCount,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstance;
        this.attrConnectionString = rosDBInstance.attrConnectionString;
        this.attrDbInstanceId = rosDBInstance.attrDbInstanceId;
        this.attrOrderId = rosDBInstance.attrOrderId;
        this.attrPort = rosDBInstance.attrPort;
    }
}
