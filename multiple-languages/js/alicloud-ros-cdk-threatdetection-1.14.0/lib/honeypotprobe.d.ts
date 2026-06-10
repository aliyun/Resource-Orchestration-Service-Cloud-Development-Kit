import * as ros from '@alicloud/ros-cdk-core';
import { RosHoneypotProbe } from './threatdetection.generated';
export { RosHoneypotProbe as HoneypotProbeProperty };
/**
 * Properties for defining a `HoneypotProbe`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
 */
export interface HoneypotProbeProps {
    /**
     * Property controlNodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    readonly controlNodeId: string | ros.IResolvable;
    /**
     * Property displayName: The name of the probe.
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * Property probeType: The type of the probe. Valid values:
     * *   **host_probe**: host probe
     * *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
     */
    readonly probeType: string | ros.IResolvable;
    /**
     * Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    readonly arp?: boolean | ros.IResolvable;
    /**
     * Property businessGroupId: Business grouping.
     */
    readonly businessGroupId?: string | ros.IResolvable;
    /**
     * Property honeypotBindList: The configuration of the probe.
     */
    readonly honeypotBindList?: Array<RosHoneypotProbe.HoneypotBindListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ping: Specifies whether to enable ping scan. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    readonly ping?: boolean | ros.IResolvable;
    /**
     * Property probeVersion: The version of the probe.
     */
    readonly probeVersion?: string | ros.IResolvable;
    /**
     * Property proxyIp: The IP address of the proxy.
     */
    readonly proxyIp?: string | ros.IResolvable;
    /**
     * Property serviceIpList: Listen to the IP address list.
     */
    readonly serviceIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property uuid: The UUID of the instance.
     * > If **ProbeType** is set to **host_probe**, this parameter is required.
     */
    readonly uuid?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC.
     * > **ProbeType** is **vpc\_Black \_hole\_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * Represents a `HoneypotProbe`.
 */
export interface IHoneypotProbe extends ros.IResource {
    readonly props: HoneypotProbeProps;
    /**
     * Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
     */
    readonly attrArp: ros.IResolvable | string;
    /**
     * Attribute ControlNodeId: The ID of the management node.
     */
    readonly attrControlNodeId: ros.IResolvable | string;
    /**
     * Attribute DisplayName: The name of the probe.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute HoneypotBindList: The configuration of the probe.
     */
    readonly attrHoneypotBindList: ros.IResolvable | string;
    /**
     * Attribute HoneypotProbeId: The ID of the probe.
     */
    readonly attrHoneypotProbeId: ros.IResolvable | string;
    /**
     * Attribute Ping: Specifies whether to enable ping scan.
     */
    readonly attrPing: ros.IResolvable | string;
    /**
     * Attribute ProbeType: The type of the probe.
     */
    readonly attrProbeType: ros.IResolvable | string;
    /**
     * Attribute ProbeVersion: The version of the probe.
     */
    readonly attrProbeVersion: ros.IResolvable | string;
    /**
     * Attribute ServiceIpList: Listen to the IP address list.
     */
    readonly attrServiceIpList: ros.IResolvable | string;
    /**
     * Attribute Uuid: The UUID of the instance.
     */
    readonly attrUuid: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::HoneypotProbe`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHoneypotProbe`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
 */
export declare class HoneypotProbe extends ros.Resource implements IHoneypotProbe {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HoneypotProbeProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
     */
    readonly attrArp: ros.IResolvable | string;
    /**
     * Attribute ControlNodeId: The ID of the management node.
     */
    readonly attrControlNodeId: ros.IResolvable | string;
    /**
     * Attribute DisplayName: The name of the probe.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute HoneypotBindList: The configuration of the probe.
     */
    readonly attrHoneypotBindList: ros.IResolvable | string;
    /**
     * Attribute HoneypotProbeId: The ID of the probe.
     */
    readonly attrHoneypotProbeId: ros.IResolvable | string;
    /**
     * Attribute Ping: Specifies whether to enable ping scan.
     */
    readonly attrPing: ros.IResolvable | string;
    /**
     * Attribute ProbeType: The type of the probe.
     */
    readonly attrProbeType: ros.IResolvable | string;
    /**
     * Attribute ProbeVersion: The version of the probe.
     */
    readonly attrProbeVersion: ros.IResolvable | string;
    /**
     * Attribute ServiceIpList: Listen to the IP address list.
     */
    readonly attrServiceIpList: ros.IResolvable | string;
    /**
     * Attribute Uuid: The UUID of the instance.
     */
    readonly attrUuid: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HoneypotProbeProps, enableResourcePropertyConstraint?: boolean);
}
