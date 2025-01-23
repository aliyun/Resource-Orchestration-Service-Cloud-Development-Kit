import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute CreateTime: The time when the KMS instance is created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the KMS instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the KMS instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute KeyNum: The number of keys that can be created for the KMS instance.
     */
    readonly attrKeyNum: ros.IResolvable | string;

    /**
     * Attribute SecretNum: The number of secrets that can be created for the KMS instance.
     */
    readonly attrSecretNum: ros.IResolvable | string;

    /**
     * Attribute Spec: The computation performance level of the KMS instance.
     */
    readonly attrSpec: ros.IResolvable | string;

    /**
     * Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute VpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance.
     */
    readonly attrVpcNum: ros.IResolvable | string;

    /**
     * Attribute VswitchIds: The VSwitch in the VPC.
     */
    readonly attrVswitchIds: ros.IResolvable | string;

    /**
     * Attribute ZoneIds: The zone with which the KMS instance is associated.
     */
    readonly attrZoneIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Instance`, which is used to query the information about a Key Management Service (KMS) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the KMS instance is created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the KMS instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the KMS instance.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute KeyNum: The number of keys that can be created for the KMS instance.
     */
    public readonly attrKeyNum: ros.IResolvable | string;

    /**
     * Attribute SecretNum: The number of secrets that can be created for the KMS instance.
     */
    public readonly attrSecretNum: ros.IResolvable | string;

    /**
     * Attribute Spec: The computation performance level of the KMS instance.
     */
    public readonly attrSpec: ros.IResolvable | string;

    /**
     * Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute VpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance.
     */
    public readonly attrVpcNum: ros.IResolvable | string;

    /**
     * Attribute VswitchIds: The VSwitch in the VPC.
     */
    public readonly attrVswitchIds: ros.IResolvable | string;

    /**
     * Attribute ZoneIds: The zone with which the KMS instance is associated.
     */
    public readonly attrZoneIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrKeyNum = rosInstance.attrKeyNum;
        this.attrSecretNum = rosInstance.attrSecretNum;
        this.attrSpec = rosInstance.attrSpec;
        this.attrVpcId = rosInstance.attrVpcId;
        this.attrVpcNum = rosInstance.attrVpcNum;
        this.attrVswitchIds = rosInstance.attrVswitchIds;
        this.attrZoneIds = rosInstance.attrZoneIds;
    }
}
