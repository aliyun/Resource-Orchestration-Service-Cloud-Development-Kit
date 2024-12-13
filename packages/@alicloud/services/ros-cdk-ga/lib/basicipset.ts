import * as ros from '@alicloud/ros-cdk-core';
import { RosBasicIpSet } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBasicIpSet as BasicIpSetProperty };

/**
 * Properties for defining a `BasicIpSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
 */
export interface BasicIpSetProps {

    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * Property accelerateRegionId: The ID of the acceleration region.
     */
    readonly accelerateRegionId?: string | ros.IResolvable;

    /**
     * Property bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit\/s.You must allocate at least 2 Mbit\/s of bandwidth to the acceleration region.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * Property ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
     * BGP (default): BGP (Multi-ISP) lines.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Valid values if you are allowed to use single-ISP bandwidth:
     * ChinaTelecom
     * ChinaUnicom
     * ChinaMobile
     * ChinaTelecom_L2
     * ChinaUnicom_L2
     * ChinaMobile_L2
     */
    readonly ispType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BasicIpSet`, which is used to create an acceleration region for a basic Global Accelerator (GA) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBasicIpSet`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
 */
export class BasicIpSet extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BasicIpSetProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute IpSetId: The ID of the acceleration region.
     */
    public readonly attrIpSetId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BasicIpSetProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBasicIpSet = new RosBasicIpSet(this, id,  {
            ispType: props.ispType,
            bandwidth: props.bandwidth,
            accelerateRegionId: props.accelerateRegionId,
            acceleratorId: props.acceleratorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBasicIpSet;
        this.attrIpSetId = rosBasicIpSet.attrIpSetId;
    }
}
