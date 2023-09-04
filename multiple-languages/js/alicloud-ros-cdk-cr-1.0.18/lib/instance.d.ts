import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './cr.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::CR::Instance`
 */
export interface InstanceProps {
    /**
     * Property imageScanner: Security scan engine.
     */
    readonly imageScanner: string | ros.IResolvable;
    /**
     * Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. Valid values:
     * Basic: Basic instance
     * Standard: Standard instance
     * Advanced: Advanced Edition Instance.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     */
    readonly period: number | ros.IResolvable;
    /**
     * Property instanceStorageName: Custom OSS Bucket name.
     */
    readonly instanceStorageName?: string | ros.IResolvable;
    /**
     * Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;
    /**
     * Property renewPeriod: Automatic renewal cycle, in months.
     * When RenewalStatus is set to AutoRenewal, it must be set.
     */
    readonly renewPeriod?: number | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CR::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: InstanceName.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute InstanceSpecification: InstanceSpecification.
     */
    readonly attrInstanceSpecification: ros.IResolvable;
    /**
     * Attribute ModifiedTime: Last modification time.
     */
    readonly attrModifiedTime: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CR::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
