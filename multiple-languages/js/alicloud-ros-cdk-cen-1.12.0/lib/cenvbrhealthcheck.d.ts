import * as ros from '@alicloud/ros-cdk-core';
import { RosCenVbrHealthCheck } from './cen.generated';
export { RosCenVbrHealthCheck as CenVbrHealthCheckProperty };
/**
 * Properties for defining a `CenVbrHealthCheck`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
 */
export interface CenVbrHealthCheckProps {
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    readonly healthCheckTargetIp: string | ros.IResolvable;
    /**
     * Property vbrInstanceId: The ID of the VBR instance.
     */
    readonly vbrInstanceId: string | ros.IResolvable;
    /**
     * Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
     */
    readonly vbrInstanceRegionId: string | ros.IResolvable;
    /**
     * Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;
    /**
     * Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0\/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0\/8, 192.168.0.0\/16, or 172.16.0.0\/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    readonly healthCheckSourceIp?: string | ros.IResolvable;
    /**
     * Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    readonly healthyThreshold?: number | ros.IResolvable;
    /**
     * Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    readonly vbrInstanceOwnerId?: number | ros.IResolvable;
}
/**
 * Represents a `CenVbrHealthCheck`.
 */
export interface ICenVbrHealthCheck extends ros.IResource {
    readonly props: CenVbrHealthCheckProps;
    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable | string;
    /**
     * Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    readonly attrHealthCheckInterval: ros.IResolvable | string;
    /**
     * Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    readonly attrHealthCheckSourceIp: ros.IResolvable | string;
    /**
     * Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    readonly attrHealthCheckTargetIp: ros.IResolvable | string;
    /**
     * Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    readonly attrHealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute VbrInstanceId: The ID of the VBR instance.
     */
    readonly attrVbrInstanceId: ros.IResolvable | string;
    /**
     * Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    readonly attrVbrInstanceOwnerId: ros.IResolvable | string;
    /**
     * Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
     */
    readonly attrVbrInstanceRegionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenVbrHealthCheck`, which is used to enable the health check feature or modify the health check configurations for a virtual border router (VBR).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenVbrHealthCheck`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
 */
export declare class CenVbrHealthCheck extends ros.Resource implements ICenVbrHealthCheck {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CenVbrHealthCheckProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable | string;
    /**
     * Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    readonly attrHealthCheckInterval: ros.IResolvable | string;
    /**
     * Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    readonly attrHealthCheckSourceIp: ros.IResolvable | string;
    /**
     * Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    readonly attrHealthCheckTargetIp: ros.IResolvable | string;
    /**
     * Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    readonly attrHealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute VbrInstanceId: The ID of the VBR instance.
     */
    readonly attrVbrInstanceId: ros.IResolvable | string;
    /**
     * Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    readonly attrVbrInstanceOwnerId: ros.IResolvable | string;
    /**
     * Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
     */
    readonly attrVbrInstanceRegionId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenVbrHealthCheckProps, enableResourcePropertyConstraint?: boolean);
}
