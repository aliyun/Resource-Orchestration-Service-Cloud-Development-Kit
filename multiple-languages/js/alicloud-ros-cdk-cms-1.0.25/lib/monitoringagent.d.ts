import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitoringAgent } from './cms.generated';
export { RosMonitoringAgent as MonitoringAgentProperty };
/**
 * Properties for defining a `MonitoringAgent`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagent
 */
export interface MonitoringAgentProps {
    /**
     * Property force: Specifies whether to install the CloudMonitor agent. Valid values:
     * true (default value): yes
     * false: no
     */
    readonly force?: boolean | ros.IResolvable;
    /**
     * Property installCommand: Specifies whether to install the CloudMonitor agent on all ECS instances that belong to the current Alibaba Cloud account. Valid values:
     * onlyInstallNotHasAgent: installs the latest version of the CloudMonitor agent only on ECS instances on which the agent is not installed.
     * onlyUpgradeAgent: upgrades the CloudMonitor agent to the latest version only for ECS instances on which an earlier version of the agent is installed.
     * installAndUpgrade: installs the latest version of the CloudMonitor agent on ECS instances on which the agent is not installed, and upgrades the CloudMonitor agent to the latest version for ECS instances on which an earlier version of the agent is installed.
     * Note If you set the InstallCommand parameter, the InstanceIds parameter does not take effect.
     */
    readonly installCommand?: string | ros.IResolvable;
    /**
     * Property instanceIds: Alibaba Cloud host ID.
     * The range of n: 1 ~ 10.
     * Explain that InstallCommand and InstanceIds must be selected one by one.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::MonitoringAgent`, which is used to install the CloudMonitor agent on Alibaba Cloud hosts.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitoringAgent`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagent
 */
export declare class MonitoringAgent extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MonitoringAgentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: MonitoringAgentProps, enableResourcePropertyConstraint?: boolean);
}
