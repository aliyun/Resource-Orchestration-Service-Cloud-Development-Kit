import * as ros from '@alicloud/ros-cdk-core';
import { RosJobMonitorRules } from './dts.generated';
export { RosJobMonitorRules as JobMonitorRulesProperty };
/**
 * Properties for defining a `JobMonitorRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrules
 */
export interface JobMonitorRulesProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `JobMonitorRules`.
 */
export interface IJobMonitorRules extends ros.IResource {
    readonly props: JobMonitorRulesProps;
    /**
     * Attribute DtsJobIds: The list of dts job IDs.
     */
    readonly attrDtsJobIds: ros.IResolvable | string;
    /**
     * Attribute JobMonitorRules: The list of job monitor rules.
     */
    readonly attrJobMonitorRules: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::JobMonitorRules`, which is used to query the alert rules of Data Transmission Service (DTS) tasks.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJobMonitorRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrules
 */
export declare class JobMonitorRules extends ros.Resource implements IJobMonitorRules {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: JobMonitorRulesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DtsJobIds: The list of dts job IDs.
     */
    readonly attrDtsJobIds: ros.IResolvable | string;
    /**
     * Attribute JobMonitorRules: The list of job monitor rules.
     */
    readonly attrJobMonitorRules: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: JobMonitorRulesProps, enableResourcePropertyConstraint?: boolean);
}
