import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosStackGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export interface RosStackGroupsProps {
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROS::StackGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StackGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export declare class RosStackGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROS::StackGroups";
    /**
     * @Attribute StackGroupNames: The list of stack group names.
     */
    readonly attrStackGroupNames: ros.IResolvable;
    /**
     * @Attribute StackGroups: The list of stack groups.
     */
    readonly attrStackGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackGroupsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosStackInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
 */
export interface RosStackInstanceProps {
    /**
     * @Property stackGroupName: Resource stack group name. Names are unique within a single region.
     * The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
     */
    readonly stackGroupName: string | ros.IResolvable;
    /**
     * @Property stackInstanceAccountId: The target account ID to which the resource stack belongs.
     * In the self-service management permission mode, the account is an Alibaba Cloud account.
     * In service management permission mode, this account is a member account of the resource directory.
     */
    readonly stackInstanceAccountId: string | ros.IResolvable;
    /**
     * @Property stackInstanceRegionId: The region to which the resource stack belongs.
     */
    readonly stackInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property outputOption: Whether to return the Outputs parameter resource stack output list.
     */
    readonly outputOption?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROS::StackInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StackInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
 */
export declare class RosStackInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROS::StackInstance";
    /**
     * @Attribute AccountId: The account id of the stack.
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * @Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.
     */
    readonly attrDriftDetectionTime: ros.IResolvable;
    /**
     * @Attribute Outputs: The outputs of the stack instance
     */
    readonly attrOutputs: ros.IResolvable;
    /**
     * @Attribute ParameterOverrides: Override parameter list.
     */
    readonly attrParameterOverrides: ros.IResolvable;
    /**
     * @Attribute RdFolderId: The resource folder ID of the resource directory.
     */
    readonly attrRdFolderId: ros.IResolvable;
    /**
     * @Attribute RegionId: The region id of the stack.
     */
    readonly attrRegionId: ros.IResolvable;
    /**
     * @Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.
     */
    readonly attrStackDriftStatus: ros.IResolvable;
    /**
     * @Attribute StackGroupId: The resource stack group ID.
     */
    readonly attrStackGroupId: ros.IResolvable;
    /**
     * @Attribute StackGroupName: The resource stack group name
     */
    readonly attrStackGroupName: ros.IResolvable;
    /**
     * @Attribute StackId: The stack id of stack instance.
     */
    readonly attrStackId: ros.IResolvable;
    /**
     * @Attribute Status: Resource stack status.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute StatusReason: Status reason description.
     */
    readonly attrStatusReason: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property stackGroupName: Resource stack group name. Names are unique within a single region.
     * The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
     */
    stackGroupName: string | ros.IResolvable;
    /**
     * @Property stackInstanceAccountId: The target account ID to which the resource stack belongs.
     * In the self-service management permission mode, the account is an Alibaba Cloud account.
     * In service management permission mode, this account is a member account of the resource directory.
     */
    stackInstanceAccountId: string | ros.IResolvable;
    /**
     * @Property stackInstanceRegionId: The region to which the resource stack belongs.
     */
    stackInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property outputOption: Whether to return the Outputs parameter resource stack output list.
     */
    outputOption: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
