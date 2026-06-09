import * as ros from '@alicloud/ros-cdk-core';
import { RosDBProxy } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBProxy as DBProxyProperty };

/**
 * Properties for defining a `DBProxy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbproxy
 */
export interface DBProxyProps {

    /**
     * Property dbInstanceId: Instance ID of the DB. DescribeDBInstances can be called to get it.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property vpcId: The VPC ID to which the instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchId: The virtual switch ID to which the instance belongs.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1.
     * Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances.
     */
    readonly dbProxyInstanceNum?: number | ros.IResolvable;

    /**
     * Property dbProxyInstanceType: Database proxy instance type, value:
     * common: general-purpose agent
     * exclusive: exclusive proxy (default)
     */
    readonly dbProxyInstanceType?: string | ros.IResolvable;

    /**
     * Property dbProxyNodes: List of proxy nodes.
     */
    readonly dbProxyNodes?: Array<RosDBProxy.DBProxyNodesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property persistentConnectionStatus: Whether to enable connection hold.Value:
     * Enabled: Turn on connection hold
     * Disabled: Close connection hold
     * illustrate
     * Only RDS MySQL supports this parameter.
     * When modifying the connection remains, the ConfigDBProxyService value is Modify.
     */
    readonly persistentConnectionStatus?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `DBProxy`.
 */
export interface IDBProxy extends ros.IResource {
    readonly props: DBProxyProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::DBProxy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBProxy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbproxy
 */
export class DBProxy extends ros.Resource implements IDBProxy {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBProxyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBProxyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBProxy = new RosDBProxy(this, id,  {
            dbProxyInstanceNum: props.dbProxyInstanceNum,
            persistentConnectionStatus: props.persistentConnectionStatus,
            resourceGroupId: props.resourceGroupId,
            dbInstanceId: props.dbInstanceId,
            vpcId: props.vpcId,
            vSwitchId: props.vSwitchId,
            dbProxyNodes: props.dbProxyNodes,
            dbProxyInstanceType: props.dbProxyInstanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBProxy;
    }
}
