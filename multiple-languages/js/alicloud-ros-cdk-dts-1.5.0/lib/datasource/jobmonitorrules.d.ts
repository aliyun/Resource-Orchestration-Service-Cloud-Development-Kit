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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::JobMonitorRules`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJobMonitorRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrules
 */
export declare class JobMonitorRules extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: JobMonitorRulesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DtsJobIds: The list of dts job IDs.
     */
    readonly attrDtsJobIds: ros.IResolvable;
    /**
     * Attribute JobMonitorRules: The list of job monitor rules.
     */
    readonly attrJobMonitorRules: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: JobMonitorRulesProps, enableResourcePropertyConstraint?: boolean);
}
