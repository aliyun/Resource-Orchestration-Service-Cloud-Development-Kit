import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstance } from './polardbx.generated';
export { RosDBInstance as DBInstanceProperty };
/**
 * Properties for defining a `DBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
 */
export interface DBInstanceProps {
    /**
     * Property dbNodeClass: The specification of the nodes in the instance you want to create.
     */
    readonly dbNodeClass: string | ros.IResolvable;
    /**
     * Property dbNodeCount: The number of nodes in the instance you want to create.
     */
    readonly dbNodeCount: number | ros.IResolvable;
    /**
     * Property engineVersion: The version of the database engine.
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * Property primaryZone: The primary zone.
     */
    readonly primaryZone: string | ros.IResolvable;
    /**
     * Property topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
     */
    readonly topologyType: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC to which the instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property dbInstanceDescription: The description of the instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * Property payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * Property period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
     */
    readonly period?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property secondaryZone: The secondary zone.
     */
    readonly secondaryZone?: string | ros.IResolvable;
    /**
     * Property securityIpConfig: Instance whitelist configuration.
     */
    readonly securityIpConfig?: RosDBInstance.SecurityIpConfigProperty | ros.IResolvable;
    /**
     * Property tertiaryZone: The tertiary zone.
     */
    readonly tertiaryZone?: string | ros.IResolvable;
    /**
     * Property usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
     */
    readonly usedTime?: number | ros.IResolvable;
}
/**
 * Represents a `DBInstance`.
 */
export interface IDBInstance extends ros.IResource {
    readonly props: DBInstanceProps;
    /**
     * Attribute ConnectionString: Intranet connection string.
     */
    readonly attrConnectionString: ros.IResolvable | string;
    /**
     * Attribute DBInstanceName: The name of the instance that you create.
     */
    readonly attrDbInstanceName: ros.IResolvable | string;
    /**
     * Attribute OrderId: The ID of the order.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute Port: Intranet connection port.
     */
    readonly attrPort: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PolarDBX::DBInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
 */
export declare class DBInstance extends ros.Resource implements IDBInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DBInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConnectionString: Intranet connection string.
     */
    readonly attrConnectionString: ros.IResolvable | string;
    /**
     * Attribute DBInstanceName: The name of the instance that you create.
     */
    readonly attrDbInstanceName: ros.IResolvable | string;
    /**
     * Attribute OrderId: The ID of the order.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute Port: Intranet connection port.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceProps, enableResourcePropertyConstraint?: boolean);
}
