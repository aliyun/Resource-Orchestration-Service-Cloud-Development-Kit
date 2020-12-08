import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitConditionHandle } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWaitConditionHandle as WaitConditionHandleProperty };

/**
 * Properties for defining a `ALIYUN::ROS::WaitConditionHandle`
 */
export interface WaitConditionHandleProps {

    /**
     * @Property count: There are 3 preconditions that make Count taking effect:
     * 1.Mode is set to Full.
     * 2.Count >= 0.
     * 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     * 
     * If Count takes effect, signals with id > Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    readonly count?: number;

    /**
     * @Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     * 
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     * 
     * Default to Full.
     */
    readonly mode?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ROS::WaitConditionHandle`
 */
export class WaitConditionHandle extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.  You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
     */
    public readonly attrCurlCli: any;

    /**
     * @Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
     */
    public readonly attrHeaders: any;

    /**
     * @Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure. As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
     */
    public readonly attrPowerShellCurlCli: any;

    /**
     * @Attribute URL: HTTP POST URL used for signalling handle completion or failure.
     */
    public readonly attrUrl: any;

    /**
     * @Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure. As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{\"status\": \"SUCCESS\"}" , or signal failure by adding --data-binary "{\"status\": \"FAILURE\"}"
     */
    public readonly attrWindowsCurlCli: any;

    /**
     * Create a new `ALIYUN::ROS::WaitConditionHandle`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitConditionHandleProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosWaitConditionHandle = new RosWaitConditionHandle(this, id,  {
            mode: props.mode ? props.mode : 'Full',
            count: props.count ? props.count : -1,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWaitConditionHandle;
        this.attrCurlCli = rosWaitConditionHandle.attrCurlCli;
        this.attrHeaders = rosWaitConditionHandle.attrHeaders;
        this.attrPowerShellCurlCli = rosWaitConditionHandle.attrPowerShellCurlCli;
        this.attrUrl = rosWaitConditionHandle.attrUrl;
        this.attrWindowsCurlCli = rosWaitConditionHandle.attrWindowsCurlCli;
    }
}
