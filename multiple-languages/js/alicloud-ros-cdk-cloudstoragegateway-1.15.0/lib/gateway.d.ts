import * as ros from '@alicloud/ros-cdk-core';
import { RosGateway } from './cloudstoragegateway.generated';
export { RosGateway as GatewayProperty };
/**
 * Properties for defining a `Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
 */
export interface GatewayProps {
    /**
     * Property category: The category of the gateway. The default value is `Cloud`.
     */
    readonly category: string | ros.IResolvable;
    /**
     * Property location: The location of the gateway.
     */
    readonly location: string | ros.IResolvable;
    /**
     * Property name: The name of the gateway. The name must be 60 characters in length. The name must
     * start with a letter or a Chinese character. The name can contain letters, Chinese
     * characters, digits, underscores (_), hyphens (-), and periods (.).
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property type: The type of the gateway.
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property description: The description of the gateway.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property gatewayClass: If your gateway is deployed in a data center, which is an on-premises gateway,
     * you can ignore this parameter.
     * If your gateway is deployed on the cloud, which is a cloud gateway, valid
     * values are:
     * - Basic: Basic
     * - Standard: Medium
     * - Enhanced: Enhanced
     * - Advanced: Performance
     */
    readonly gatewayClass?: string | ros.IResolvable;
    /**
     * Property postPaid: Valid values:
     * - true: pay-as-you-go.
     * - false: subscription.
     * Default value: false (subscription).
     */
    readonly postPaid?: boolean | ros.IResolvable;
    /**
     * Property publicNetworkBandwidth: > - This parameter is supported only for cloud gateways. You can ignore this
     * parameter for on-premises gateways.
     * > - Configure this parameter only when you need to mount an OSS bucket across
     * regions.
     * > - If you specify 0 or do not specify this parameter, the default value is 5.
     */
    readonly publicNetworkBandwidth?: number | ros.IResolvable;
    /**
     * Property releaseAfterExpiration: Specifies whether to release the gateway when the subscription expires. Valid
     * values:
     * true: The gateway is automatically released.
     * false: The billing method of the gateway is automatically changed to
     * pay-as-you-go after the subscription expires.
     */
    readonly releaseAfterExpiration?: boolean | ros.IResolvable;
    /**
     * Property resourceRegionId: The region ID of the resource.
     */
    readonly resourceRegionId?: string | ros.IResolvable;
    /**
     * Property secondaryVSwitchId: The ID of the secondary VSwitch.
     */
    readonly secondaryVSwitchId?: string | ros.IResolvable;
    /**
     * Property storageBundleId: The ID of the gateway cluster. You must specify this parameter if you do not
     * specify ResourceRegionId.
     */
    readonly storageBundleId?: string | ros.IResolvable;
    /**
     * Property untrustedEnvId: The ID of the untrusted environment.
     */
    readonly untrustedEnvId?: string | ros.IResolvable;
    /**
     * Property untrustedEnvInstanceType: The instance type of the untrusted environment.
     */
    readonly untrustedEnvInstanceType?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the virtual switch. If your gateway is deployed in a data center, you
     * can ignore this parameter.
     * - The vSwitch must be in the same VPC as the ECS instance that you want to
     * attach.
     * - If no gateway resources can be allocated in the zone where the vSwitch resides,
     * create a vSwitch in another zone.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * Represents a `Gateway`.
 */
export interface IGateway extends ros.IResource {
    readonly props: GatewayProps;
    /**
     * Attribute GatewayId: The ID of the gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudStorageGateway::Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
 */
export declare class Gateway extends ros.Resource implements IGateway {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GatewayProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GatewayId: The ID of the gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayProps, enableResourcePropertyConstraint?: boolean);
}
