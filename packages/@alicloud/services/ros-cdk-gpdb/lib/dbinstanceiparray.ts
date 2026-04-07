import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstanceIPArray } from './gpdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstanceIPArray as DBInstanceIPArrayProperty };

/**
 * Properties for defining a `DBInstanceIPArray`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstanceiparray
 */
export interface DBInstanceIPArrayProps {

    /**
     * Property dbInstanceId: The instance ID.
     *
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property dbInstanceIpArrayName: The name of the IP address whitelist. If you do not specify this parameter, the default whitelist is queried.
     * >  Each instance supports up to 50 IP address whitelists.
     */
    readonly dbInstanceIpArrayName: string | ros.IResolvable;

    /**
     * Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:
     * - 0.0.0.0\/0
     * - 10.23.12.24(IP)
     * - 10.23.12.24\/24(CIDR mode, Classless Inter-Domain Routing, '\/24' indicates the length of the prefix in the address, and the range is '[1,32]').
     */
    readonly securityIpList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property dbInstanceIpArrayAttribute: The default is empty. To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
     */
    readonly dbInstanceIpArrayAttribute?: string | ros.IResolvable;
}

/**
 * Represents a `DBInstanceIPArray`.
 */
export interface IDBInstanceIPArray extends ros.IResource {
    readonly props: DBInstanceIPArrayProps;

    /**
     * Attribute DBInstanceIPArrayAttribute: The default is empty. To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
     */
    readonly attrDbInstanceIpArrayAttribute: ros.IResolvable | string;

    /**
     * Attribute DBInstanceIPArrayName: The name of the IP address whitelist. If you do not specify this parameter, the default whitelist is queried.
     */
    readonly attrDbInstanceIpArrayName: ros.IResolvable | string;

    /**
     * Attribute SecurityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:.
     */
    readonly attrSecurityIpList: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::DBInstanceIPArray`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstanceIPArray`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstanceiparray
 */
export class DBInstanceIPArray extends ros.Resource implements IDBInstanceIPArray {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBInstanceIPArrayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DBInstanceIPArrayAttribute: The default is empty. To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
     */
    public readonly attrDbInstanceIpArrayAttribute: ros.IResolvable | string;

    /**
     * Attribute DBInstanceIPArrayName: The name of the IP address whitelist. If you do not specify this parameter, the default whitelist is queried.
     */
    public readonly attrDbInstanceIpArrayName: ros.IResolvable | string;

    /**
     * Attribute SecurityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:.
     */
    public readonly attrSecurityIpList: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceIPArrayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBInstanceIPArray = new RosDBInstanceIPArray(this, id,  {
            dbInstanceIpArrayAttribute: props.dbInstanceIpArrayAttribute,
            dbInstanceId: props.dbInstanceId,
            securityIpList: props.securityIpList,
            dbInstanceIpArrayName: props.dbInstanceIpArrayName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstanceIPArray;
        this.attrDbInstanceIpArrayAttribute = rosDBInstanceIPArray.attrDbInstanceIpArrayAttribute;
        this.attrDbInstanceIpArrayName = rosDBInstanceIPArray.attrDbInstanceIpArrayName;
        this.attrSecurityIpList = rosDBInstanceIPArray.attrSecurityIpList;
    }
}
