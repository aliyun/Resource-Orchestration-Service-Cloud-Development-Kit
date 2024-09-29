import * as ros from '@alicloud/ros-cdk-core';
import { RosADInfo } from './rds.generated';
export { RosADInfo as ADInfoProperty };
/**
 * Properties for defining a `ADInfo`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-adinfo
 */
export interface ADInfoProps {
    /**
     * Property adAccountName: Domain account name.
     */
    readonly adAccountName: string | ros.IResolvable;
    /**
     * Property addns: Active directory domain name.
     */
    readonly addns: string | ros.IResolvable;
    /**
     * Property adPassword: Domain password.
     */
    readonly adPassword: string | ros.IResolvable;
    /**
     * Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
     */
    readonly adServerIpAddress: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::ADInfo`, which is used to configure Active Directory Domain Services (AD DS).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosADInfo`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-adinfo
 */
export declare class ADInfo extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ADInfoProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ADDNS: Active directory domain name.
     */
    readonly attrAddns: ros.IResolvable;
    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ADInfoProps, enableResourcePropertyConstraint?: boolean);
}
