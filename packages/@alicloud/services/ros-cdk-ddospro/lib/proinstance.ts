import * as ros from '@alicloud/ros-cdk-core';
import { RosProInstance } from './ddospro.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProInstance as ProInstanceProperty };

/**
 * Properties for defining a `ProInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
 */
export interface ProInstanceProps {

    /**
     * Property addressType: The IP version of the IP address. Valid values: Ipv4、Ipv6
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * Property bandwidth: The burstable protection bandwidth. Unit: Gbit\/s.
     * The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * Property baseBandwidth: The basic protection bandwidth. Unit: Gbit\/s.
     * Valid values: 30, 60, 100, 300, 400, 500, and 600.
     */
    readonly baseBandwidth?: number | ros.IResolvable;

    /**
     * Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    readonly burstBandwidthMode?: string | ros.IResolvable;

    /**
     * Property domainCount: The number of domain names that you want to protect.
     * Valid values: 50 to 2000. The value must be a multiple of 10.
     */
    readonly domainCount?: number | ros.IResolvable;

    /**
     * Property edition: The mitigation plan of the instance. Set the value to coop, which indicates the Profession mitigation plan.
     */
    readonly edition?: string | ros.IResolvable;

    /**
     * Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    readonly functionVersion?: string | ros.IResolvable;

    /**
     * Property normalQps: The clean queries per second (QPS) provided by the instance.
     * Valid values: 3000 to 100000. The value must be a multiple of 100.
     */
    readonly normalQps?: number | ros.IResolvable;

    /**
     * Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property portCount: The number of ports that you want to protect.
     * Valid values: 50 to 400. The value must be a multiple of 5.
     */
    readonly portCount?: number | ros.IResolvable;

    /**
     * Property serviceBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * Valid values: 100 to 5000. The value must be a multiple of 50.
     */
    readonly serviceBandwidth?: number | ros.IResolvable;

    /**
     * Property servicePartner: The type of the protection line. Set the value to coop-line-001, which indicates the default protection line.
     */
    readonly servicePartner?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosProInstance.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoSPro::ProInstance`, which is used to create an Anti-DDoS Proxy (Chinese Mainland) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
 */
export class ProInstance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ProInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProInstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosProInstance = new RosProInstance(this, id,  {
            normalQps: props.normalQps,
            period: props.period,
            portCount: props.portCount,
            edition: props.edition,
            burstBandwidthMode: props.burstBandwidthMode,
            serviceBandwidth: props.serviceBandwidth,
            servicePartner: props.servicePartner,
            baseBandwidth: props.baseBandwidth,
            functionVersion: props.functionVersion,
            bandwidth: props.bandwidth,
            addressType: props.addressType,
            tags: props.tags,
            periodUnit: props.periodUnit,
            domainCount: props.domainCount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProInstance;
        this.attrInstanceId = rosProInstance.attrInstanceId;
    }
}
