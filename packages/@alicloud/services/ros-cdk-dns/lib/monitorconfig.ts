import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorConfig } from './dns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMonitorConfig as MonitorConfigProperty };

/**
 * Properties for defining a `MonitorConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
 */
export interface MonitorConfigProps {

    /**
     * Property addrPoolId: The ID of the address pool.
     */
    readonly addrPoolId: string | ros.IResolvable;

    /**
     * Property evaluationCount: The evaluation count of the monitor.
     */
    readonly evaluationCount: number | ros.IResolvable;

    /**
     * Property interval: The interval of the monitor.
     */
    readonly interval: number | ros.IResolvable;

    /**
     * Property ispCityNode: The ISP city node list.
     */
    readonly ispCityNode: Array<RosMonitorConfig.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property monitorExtendInfo: The extend info of the monitor.
     */
    readonly monitorExtendInfo: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property protocolType: The protocol type of the monitor.
     */
    readonly protocolType: string | ros.IResolvable;

    /**
     * Property timeout: The timeout of the monitor.
     */
    readonly timeout: number | ros.IResolvable;
}

/**
 * Represents a `MonitorConfig`.
 */
export interface IMonitorConfig extends ros.IResource {
    readonly props: MonitorConfigProps;

    /**
     * Attribute MonitorConfigId: The ID of the monitor config.
     */
    readonly attrMonitorConfigId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::MonitorConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitorConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
 */
export class MonitorConfig extends ros.Resource implements IMonitorConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MonitorConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute MonitorConfigId: The ID of the monitor config.
     */
    public readonly attrMonitorConfigId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMonitorConfig = new RosMonitorConfig(this, id,  {
            ispCityNode: props.ispCityNode,
            protocolType: props.protocolType,
            timeout: props.timeout,
            addrPoolId: props.addrPoolId,
            evaluationCount: props.evaluationCount,
            monitorExtendInfo: props.monitorExtendInfo,
            interval: props.interval,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitorConfig;
        this.attrMonitorConfigId = rosMonitorConfig.attrMonitorConfigId;
    }
}
