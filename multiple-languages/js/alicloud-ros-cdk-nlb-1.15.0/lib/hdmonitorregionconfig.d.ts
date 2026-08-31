import * as ros from '@alicloud/ros-cdk-core';
import { RosHdMonitorRegionConfig } from './nlb.generated';
export { RosHdMonitorRegionConfig as HdMonitorRegionConfigProperty };
/**
 * Properties for defining a `HdMonitorRegionConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
 */
export interface HdMonitorRegionConfigProps {
    /**
     * Property logProject: The name of the LogProject.
     */
    readonly logProject: string | ros.IResolvable;
    /**
     * Property metricStore: The name of the MetricStore.
     */
    readonly metricStore: string | ros.IResolvable;
}
/**
 * Represents a `HdMonitorRegionConfig`.
 */
export interface IHdMonitorRegionConfig extends ros.IResource {
    readonly props: HdMonitorRegionConfigProps;
    /**
     * Attribute LogProject: The name of the LogProject.
     */
    readonly attrLogProject: ros.IResolvable | string;
    /**
     * Attribute MetricStore: The name of the MetricStore.
     */
    readonly attrMetricStore: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLB::HdMonitorRegionConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHdMonitorRegionConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
 */
export declare class HdMonitorRegionConfig extends ros.Resource implements IHdMonitorRegionConfig {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HdMonitorRegionConfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute LogProject: The name of the LogProject.
     */
    readonly attrLogProject: ros.IResolvable | string;
    /**
     * Attribute MetricStore: The name of the MetricStore.
     */
    readonly attrMetricStore: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HdMonitorRegionConfigProps, enableResourcePropertyConstraint?: boolean);
}
