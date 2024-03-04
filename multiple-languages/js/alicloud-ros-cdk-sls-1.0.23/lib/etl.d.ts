import * as ros from '@alicloud/ros-cdk-core';
import { RosEtl } from './sls.generated';
export { RosEtl as EtlProperty };
/**
 * Properties for defining a `Etl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Etl`, which is used to create a data transformation task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEtl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
 */
export declare class Etl extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: EtlProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Name: ETL name.
     */
    readonly attrName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EtlProps, enableResourcePropertyConstraint?: boolean);
}
