import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstance } from './selectdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstance as DBInstanceProperty };

/**
 * Properties for defining a `DBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
 */
export interface DBInstanceProps {

    /**
     * Property cacheSize: Reserve cache size.
     */
    readonly cacheSize: number | ros.IResolvable;

    /**
     * Property chargeType: The paid type of instance.Value:
     * Postpaid: Postpaid (pay per quantity).
     * Prepaid: Prepaid (year and monthly).
     */
    readonly chargeType: string | ros.IResolvable;

    /**
     * Property dbInstanceClass: The class of the DB instance.
     * Call DescribeAllDBInstanceClass API to check the latest class list
     */
    readonly dbInstanceClass: string | ros.IResolvable;

    /**
     * Property engineVersion: Database version.
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * Property vpcId: VPC id.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchId: Switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property zoneId: Availability Zone ID.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * Property connectionString: Database connection address.
     */
    readonly connectionString?: string | ros.IResolvable;

    /**
     * Property dbInstanceDescription: Example Notes Information.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * Property engine: Database type, default value is selectdb.
     */
    readonly engine?: string | ros.IResolvable;

    /**
     * Property period: Specify the prepaid cluster as annual or monthly type.Value description:
     * Year: Year-end type.
     * Month: Month type.
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property securityIpList: The default IP whitelist of the instance.
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosDBInstance.TagsProperty[];

    /**
     * Property usedTime: Specifies the purchase duration of the prepaid instance.Value description:
     * When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral).
     * When Period is Month, the UsedTime value range is: 1~9 (integral).
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    readonly usedTime?: number | ros.IResolvable;
}

/**
 * Represents a `DBInstance`.
 */
export interface IDBInstance extends ros.IResource {
    readonly props: DBInstanceProps;

    /**
     * Attribute DBInstanceId: Instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute VpcConnectionString: The VPC connection string of the selectdb instance.
     */
    readonly attrVpcConnectionString: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SELECTDB::DBInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
 */
export class DBInstance extends ros.Resource implements IDBInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DBInstanceId: Instance ID.
     */
    public readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute VpcConnectionString: The VPC connection string of the selectdb instance.
     */
    public readonly attrVpcConnectionString: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBInstance = new RosDBInstance(this, id,  {
            engineVersion: props.engineVersion,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            dbInstanceClass: props.dbInstanceClass,
            vSwitchId: props.vSwitchId,
            period: props.period,
            accountPassword: props.accountPassword,
            cacheSize: props.cacheSize,
            vpcId: props.vpcId,
            securityIpList: props.securityIpList,
            chargeType: props.chargeType,
            usedTime: props.usedTime,
            connectionString: props.connectionString,
            engine: props.engine,
            dbInstanceDescription: props.dbInstanceDescription,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstance;
        this.attrDbInstanceId = rosDBInstance.attrDbInstanceId;
        this.attrVpcConnectionString = rosDBInstance.attrVpcConnectionString;
    }
}
