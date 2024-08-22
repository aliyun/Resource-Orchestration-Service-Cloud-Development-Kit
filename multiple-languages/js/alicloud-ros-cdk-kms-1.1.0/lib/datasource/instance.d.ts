import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './kms.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instance
 */
export interface InstanceProps {
    /**
     * Property instanceId: The ID of the KMS instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the KMS instance is created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the KMS instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: The name of the KMS instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute KeyNum: The number of keys that can be created for the KMS instance.
     */
    readonly attrKeyNum: ros.IResolvable;
    /**
     * Attribute SecretNum: The number of secrets that can be created for the KMS instance.
     */
    readonly attrSecretNum: ros.IResolvable;
    /**
     * Attribute Spec: The computation performance level of the KMS instance.
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute VpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance.
     */
    readonly attrVpcNum: ros.IResolvable;
    /**
     * Attribute VswitchIds: The VSwitch in the VPC.
     */
    readonly attrVswitchIds: ros.IResolvable;
    /**
     * Attribute ZoneIds: The zone with which the KMS instance is associated.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
