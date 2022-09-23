import * as ros from '@alicloud/ros-cdk-core';
import { RosEtl } from './sls.generated';
export { RosEtl as EtlProperty };
/**
 * Properties for defining a `ALIYUN::SLS::Etl`
 */
export interface EtlProps {
    /**
     * Property configuration: The configuration of ETL task
     */
    readonly configuration: RosEtl.ConfigurationProperty | ros.IResolvable;
    /**
     * Property displayName: ETL display name
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * Property name: ETL name
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property projectName: Project name
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * Property schedule: Task scheduling strategy
     */
    readonly schedule: RosEtl.ScheduleProperty | ros.IResolvable;
    /**
     * Property description: ETL description message.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SLS::Etl`
 */
export declare class Etl extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Name: ETL name.
     */
    readonly attrName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLS::Etl`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EtlProps, enableResourcePropertyConstraint?: boolean);
}
