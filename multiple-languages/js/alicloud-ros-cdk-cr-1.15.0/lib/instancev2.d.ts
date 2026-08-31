import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceV2 } from './cr.generated';
export { RosInstanceV2 as InstanceV2Property };
/**
 * Properties for defining a `InstanceV2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancev2
 */
export interface InstanceV2Props {
    /**
     * Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. Valid values:
     * Basic: Basic instance.
     * Standard: Standard instance.
     * Advanced: Advanced Edition Instance.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * Property paymentType: Payment type, value:
     * - Subscription: Prepaid.
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * Property customOssBucket: Custom OSS Bucket name.
     */
    readonly customOssBucket?: string | ros.IResolvable;
    /**
     * Property defaultOssBucket: Whether to use the default OSS Bucket. Value:
     * true: Use the default OSS Bucket.
     * false: Use a custom OSS Bucket.
     */
    readonly defaultOssBucket?: boolean | ros.IResolvable;
    /**
     * Property imageScanner: The security scan engine used by the Enterprise Edition of Container Image Service. Value:
     * ACR: Uses the Trivy scan engine provided by default.
     * SAS: uses the enhanced cloud security scan engine.
     */
    readonly imageScanner?: string | ros.IResolvable;
    /**
     * Property password: Login password, 8-32 digits, must contain at least two letters, symbols, or numbers.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     * > must be set when creating a prepaid instance.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;
    /**
     * Property renewPeriod: Automatic renewal cycle, in months.
     * > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
     */
    readonly renewPeriod?: number | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `InstanceV2`.
 */
export interface IInstanceV2 extends ros.IResource {
    readonly props: InstanceV2Props;
    /**
     * Attribute CreateTime: The time when the instance was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EndTime: Expiration Time of instance.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute InstanceEndpoints: Instance Network Access Endpoints.
     */
    readonly attrInstanceEndpoints: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the Container Registry instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceIssue: The issue occurs on the instance.
     */
    readonly attrInstanceIssue: ros.IResolvable | string;
    /**
     * Attribute InstanceName: The name of the Container Registry instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;
    /**
     * Attribute ModifiedTime: The time when the instance was last modified.
     */
    readonly attrModifiedTime: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Payment type.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute RenewPeriod: Automatic renewal cycle, in months.
     */
    readonly attrRenewPeriod: ros.IResolvable | string;
    /**
     * Attribute RenewalStatus: Automatic renewal status.
     */
    readonly attrRenewalStatus: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::InstanceV2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceV2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancev2
 */
export declare class InstanceV2 extends ros.Resource implements IInstanceV2 {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceV2Props;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the instance was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EndTime: Expiration Time of instance.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute InstanceEndpoints: Instance Network Access Endpoints.
     */
    readonly attrInstanceEndpoints: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the Container Registry instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceIssue: The issue occurs on the instance.
     */
    readonly attrInstanceIssue: ros.IResolvable | string;
    /**
     * Attribute InstanceName: The name of the Container Registry instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;
    /**
     * Attribute ModifiedTime: The time when the instance was last modified.
     */
    readonly attrModifiedTime: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Payment type.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute RenewPeriod: Automatic renewal cycle, in months.
     */
    readonly attrRenewPeriod: ros.IResolvable | string;
    /**
     * Attribute RenewalStatus: Automatic renewal status.
     */
    readonly attrRenewalStatus: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceV2Props, enableResourcePropertyConstraint?: boolean);
}
