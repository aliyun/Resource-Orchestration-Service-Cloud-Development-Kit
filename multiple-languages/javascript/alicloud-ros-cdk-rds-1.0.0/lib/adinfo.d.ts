import * as ros from '@alicloud/ros-cdk-core';
import { RosADInfo } from './rds.generated';
export { RosADInfo as ADInfoProperty };
/**
 * Properties for defining a `ALIYUN::RDS::ADInfo`
 */
export interface ADInfoProps {
    /**
     * @Property adAccountName: Domain account name.
     */
    readonly adAccountName: string;
    /**
     * @Property addns: Active directory domain name.
     */
    readonly addns: string;
    /**
     * @Property adPassword: Domain password.
     */
    readonly adPassword: string;
    /**
     * @Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
     */
    readonly adServerIpAddress: string;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string;
}
/**
 * A ROS resource type:  `ALIYUN::RDS::ADInfo`
 */
export declare class ADInfo extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ADDNS: Active directory domain name.
     */
    readonly attrAddns: any;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * Create a new `ALIYUN::RDS::ADInfo`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ADInfoProps, enableResourcePropertyConstraint?: boolean);
}
