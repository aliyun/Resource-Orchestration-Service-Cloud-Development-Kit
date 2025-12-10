import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosClientInstanceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-clientinstanceattachment
 */
export interface RosClientInstanceAttachmentProps {
    /**
     * @Property clientInstanceAttachmentId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly clientInstanceAttachmentId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EAIS::ClientInstanceAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClientInstanceAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-clientinstanceattachment
 */
export declare class RosClientInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EAIS::ClientInstanceAttachment";
    /**
     * @Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly attrClientInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceId: The EAIS instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: The ID of the security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The vSwitch ID.
     */
    readonly attrVSwitchId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clientInstanceAttachmentId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    clientInstanceAttachmentId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClientInstanceAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceId: Elastic accelerated instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EAIS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EAIS::Instance";
    /**
     * @Attribute ClientInstanceId: The ID of the ECS instance to be bound.
     */
    readonly attrClientInstanceId: ros.IResolvable;
    /**
     * @Attribute ClientInstanceName: The name of the ECS instance bound to the EAIS instance.
     */
    readonly attrClientInstanceName: ros.IResolvable;
    /**
     * @Attribute ClientInstanceType: The type of the ECS instance bound to the EAIS instance.
     */
    readonly attrClientInstanceType: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: Elastic accelerated instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: Name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceType: EAIS instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute JupyterUrl: The address of the Eais Notebook.
     */
    readonly attrJupyterUrl: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute ZoneId: The ID of the region to which the EAIS instance belongs.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Elastic accelerated instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instances
 */
export interface RosInstancesProps {
    /**
     * @Property instanceId: Elastic accelerated instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property instanceName: Name of the instance.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property instanceType: EAIS instance type.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EAIS::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EAIS::Instances";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Elastic accelerated instance ID.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Name of the instance.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: EAIS instance type.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
