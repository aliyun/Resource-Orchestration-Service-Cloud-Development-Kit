import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitoringAgentProcess } from './cms.generated';
export { RosMonitoringAgentProcess as MonitoringAgentProcessProperty };
/**
 * Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`
 */
export interface MonitoringAgentProcessProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;
    /**
     * @Property processName: The name of the process.
     */
    readonly processName?: string;
    /**
     * @Property processUser: The user who launched the process.
     */
    readonly processUser?: string;
}
/**
 * A ROS resource type:  `ALIYUN::CMS::MonitoringAgentProcess`
 */
export declare class MonitoringAgentProcess extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute Id: The process ID.
     */
    readonly attrId: any;
    /**
     * Create a new `ALIYUN::CMS::MonitoringAgentProcess`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitoringAgentProcessProps, enableResourcePropertyConstraint?: boolean);
}
