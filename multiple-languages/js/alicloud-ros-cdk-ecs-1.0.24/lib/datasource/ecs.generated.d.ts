import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosActivations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
 */
export interface RosActivationsProps {
    /**
     * @Property activationId: Activation code ID.
     */
    readonly activationId?: string | ros.IResolvable;
    /**
     * @Property instanceName: The default prefix of the instance name.
     */
    readonly instanceName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Activations`, which is used to query activation codes.
 * @Note This class does not contain additional functions, so it is recommended to use the `Activations` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
 */
export declare class RosActivations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Activations";
    /**
     * @Attribute ActivationIds: The list of activation IDs.
     */
    readonly attrActivationIds: ros.IResolvable;
    /**
     * @Attribute Activations: The list of activations.
     */
    readonly attrActivations: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property activationId: Activation code ID.
     */
    activationId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The default prefix of the instance name.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosActivationsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAutoSnapshotPolicies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicies
 */
export interface RosAutoSnapshotPoliciesProps {
    /**
     * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of snapshotpolicy.
     */
    readonly tags?: RosAutoSnapshotPolicies.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::AutoSnapshotPolicies`, which is used to query automatic snapshot policies.
 * @Note This class does not contain additional functions, so it is recommended to use the `AutoSnapshotPolicies` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicies
 */
export declare class RosAutoSnapshotPolicies extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::AutoSnapshotPolicies";
    /**
     * @Attribute AutoSnapshotPolicies: The list of auto snapshot policies.
     */
    readonly attrAutoSnapshotPolicies: ros.IResolvable;
    /**
     * @Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.
     */
    readonly attrAutoSnapshotPolicyIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy.
     */
    autoSnapshotPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of snapshotpolicy.
     */
    tags: RosAutoSnapshotPolicies.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoSnapshotPoliciesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAutoSnapshotPolicies {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosAutoSnapshotPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
 */
export interface RosAutoSnapshotPolicyProps {
    /**
     * @Property autoSnapshotPolicyId: The name of the automatic snapshot policy.
     */
    readonly autoSnapshotPolicyId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::AutoSnapshotPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AutoSnapshotPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
 */
export declare class RosAutoSnapshotPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::AutoSnapshotPolicy";
    /**
     * @Attribute AutoSnapshotPolicyName: Name of the automatic snapshot policy.
     */
    readonly attrAutoSnapshotPolicyName: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the automatic snapshot policy was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DiskNums: Number of cloud disks with this policy enabled.
     */
    readonly attrDiskNums: ros.IResolvable;
    /**
     * @Attribute RepeatWeekdays: The days of the week on which to create automatic snapshots. Valid values: 1 to 7, which correspond to the days of the week. 1 indicates Monday. One or more days can be specified.
     */
    readonly attrRepeatWeekdays: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute RetentionDays: The retention period of the automatic snapshot. Unit: days. Valid values:
- -1: The automatic snapshot is retained until it is deleted.
- 1 to 65536: The automatic snapshot is retained for the specified number of days.
     */
    readonly attrRetentionDays: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the automatic snapshot policy.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TimePoints: The time when the automatic snapshot policy was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrTimePoints: ros.IResolvable;
    /**
     * @Attribute VolumeNums: The number of extended volumes to which the automatic snapshot policy is applied.
     */
    readonly attrVolumeNums: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoSnapshotPolicyId: The name of the automatic snapshot policy.
     */
    autoSnapshotPolicyId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoSnapshotPolicyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
 */
export interface RosCommandProps {
    /**
     * @Property commandId: Command ID.
     */
    readonly commandId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Command`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Command` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
 */
export declare class RosCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Command";
    /**
     * @Attribute CommandContent: Command content, encoded in Base64 and transmitted.
     */
    readonly attrCommandContent: ros.IResolvable;
    /**
     * @Attribute CommandId: Command ID.
     */
    readonly attrCommandId: ros.IResolvable;
    /**
     * @Attribute CommandName: Command name.
     */
    readonly attrCommandName: ros.IResolvable;
    /**
     * @Attribute CreateTime: Command creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: Command description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EnableParameter: Whether to use parameters.
     */
    readonly attrEnableParameter: ros.IResolvable;
    /**
     * @Attribute ParameterNames: Parameter name.
     */
    readonly attrParameterNames: ros.IResolvable;
    /**
     * @Attribute Tags: The label information of the command.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute Timeout: Timeout.
     */
    readonly attrTimeout: ros.IResolvable;
    /**
     * @Attribute Type: Command type.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute WorkingDir: Execution path.
     */
    readonly attrWorkingDir: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commandId: Command ID.
     */
    commandId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommandProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosCommands`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
 */
export interface RosCommandsProps {
    /**
     * @Property commandId: The ID of the command.
     */
    readonly commandId?: string | ros.IResolvable;
    /**
     * @Property commandName: The name of the command. Partial command names are not supported.
     */
    readonly commandName?: string | ros.IResolvable;
    /**
     * @Property description: Command description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property type: The command type. Valid values:
     * RunBatScript: batch command, applicable to Windows instances
     * RunPowerShellScript: PowerShell command, applicable to Windows instances
     * RunShellScript: shell command, applicable to Linux instances
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Commands`, which is used to query all available commands that you created.
 * @Note This class does not contain additional functions, so it is recommended to use the `Commands` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
 */
export declare class RosCommands extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Commands";
    /**
     * @Attribute CommandIds: The list of command IDs.
     */
    readonly attrCommandIds: ros.IResolvable;
    /**
     * @Attribute Commands: The list of commands.
     */
    readonly attrCommands: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commandId: The ID of the command.
     */
    commandId: string | ros.IResolvable | undefined;
    /**
     * @Property commandName: The name of the command. Partial command names are not supported.
     */
    commandName: string | ros.IResolvable | undefined;
    /**
     * @Property description: Command description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property type: The command type. Valid values:
     * RunBatScript: batch command, applicable to Windows instances
     * RunPowerShellScript: PowerShell command, applicable to Windows instances
     * RunShellScript: shell command, applicable to Linux instances
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommandsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDedicatedHostClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
 */
export interface RosDedicatedHostClustersProps {
    /**
     * @Property dedicatedHostClusterName: The name of the dedicated host cluster.
     */
    readonly dedicatedHostClusterName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
     * If this parameter is specified to query resources,
     * up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the dedicated host cluster.
     * You can call the DescribeZones operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DedicatedHostClusters`, which is used to query the information about dedicated host clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
 */
export declare class RosDedicatedHostClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DedicatedHostClusters";
    /**
     * @Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.
     */
    readonly attrDedicatedHostClusterIds: ros.IResolvable;
    /**
     * @Attribute DedicatedHostClusters: The list of dedicated host clusters.
     */
    readonly attrDedicatedHostClusters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostClusterName: The name of the dedicated host cluster.
     */
    dedicatedHostClusterName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
     * If this parameter is specified to query resources,
     * up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID of the dedicated host cluster.
     * You can call the DescribeZones operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostClustersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDedicatedHosts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
 */
export interface RosDedicatedHostsProps {
    /**
     * @Property dedicatedHostClusterId: The ID of the dedicated host cluster.
     */
    readonly dedicatedHostClusterId?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostIds: The IDs of the dedicated hosts. You can specify up to 100 dedicated host IDs.
     */
    readonly dedicatedHostIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dedicatedHostName: The name of the dedicated host.
     */
    readonly dedicatedHostName?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostType: The type of the dedicated host.
     */
    readonly dedicatedHostType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property status: The service status of the dedicated host. Valid values:
     * Available: The dedicated host is running normally.
     * UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
     *  PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
     * Default value: Available.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of ddh.
     */
    readonly tags?: RosDedicatedHosts.TagsProperty[];
    /**
     * @Property zoneId: The zone ID of the dedicated host.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DedicatedHosts`, which is used to query dedicated hosts.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHosts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
 */
export declare class RosDedicatedHosts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DedicatedHosts";
    /**
     * @Attribute DedicatedHostIds: The list of dedicated host ids.
     */
    readonly attrDedicatedHostIds: ros.IResolvable;
    /**
     * @Attribute DedicatedHosts: The list of dedicated hosts.
     */
    readonly attrDedicatedHosts: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostClusterId: The ID of the dedicated host cluster.
     */
    dedicatedHostClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostIds: The IDs of the dedicated hosts. You can specify up to 100 dedicated host IDs.
     */
    dedicatedHostIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostName: The name of the dedicated host.
     */
    dedicatedHostName: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostType: The type of the dedicated host.
     */
    dedicatedHostType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The service status of the dedicated host. Valid values:
     * Available: The dedicated host is running normally.
     * UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
     *  PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
     * Default value: Available.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of ddh.
     */
    tags: RosDedicatedHosts.TagsProperty[] | undefined;
    /**
     * @Property zoneId: The zone ID of the dedicated host.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDedicatedHosts {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDeploymentSets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentsets
 */
export interface RosDeploymentSetsProps {
    /**
     * @Property deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
     */
    readonly deploymentSetIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deploymentSetName: The name of the deployment set.
     */
    readonly deploymentSetName?: string | ros.IResolvable;
    /**
     * @Property domain: The deployment domain.
     */
    readonly domain?: string | ros.IResolvable;
    /**
     * @Property strategy: The deployment strategy. Valid values:
     * Availability: high availability strategy.
     *  AvailabilityGroup: high availability group strategy.
     */
    readonly strategy?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DeploymentSets`, which is used to query one or more deployment sets.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeploymentSets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentsets
 */
export declare class RosDeploymentSets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DeploymentSets";
    /**
     * @Attribute DeploymentSetIds: the list of deployment set ids
     */
    readonly attrDeploymentSetIds: ros.IResolvable;
    /**
     * @Attribute DeploymentSets: The list of deployment sets.
     */
    readonly attrDeploymentSets: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
     */
    deploymentSetIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetName: The name of the deployment set.
     */
    deploymentSetName: string | ros.IResolvable | undefined;
    /**
     * @Property domain: The deployment domain.
     */
    domain: string | ros.IResolvable | undefined;
    /**
     * @Property strategy: The deployment strategy. Valid values:
     * Availability: high availability strategy.
     *  AvailabilityGroup: high availability group strategy.
     */
    strategy: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeploymentSetsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDisk`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
 */
export interface RosDiskProps {
    /**
     * @Property diskId: The disk id.
     */
    readonly diskId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Disk`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Disk` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
 */
export declare class RosDisk extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Disk";
    /**
     * @Attribute AttachedTime: The attached time.
     */
    readonly attrAttachedTime: ros.IResolvable;
    /**
     * @Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
     */
    readonly attrAutoSnapshotPolicyId: ros.IResolvable;
    /**
     * @Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
     */
    readonly attrBurstingEnabled: ros.IResolvable;
    /**
     * @Attribute Category: Disk type.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
     */
    readonly attrDeleteAutoSnapshot: ros.IResolvable;
    /**
     * @Attribute DeleteWithInstance: Whether to release with the instance.
     */
    readonly attrDeleteWithInstance: ros.IResolvable;
    /**
     * @Attribute Description: The description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DetachedTime: Unloading time.
     */
    readonly attrDetachedTime: ros.IResolvable;
    /**
     * @Attribute Device: Cloud disk or the device name of the mounted instance on the site.
     */
    readonly attrDevice: ros.IResolvable;
    /**
     * @Attribute DiskId: The disk id.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * @Attribute DiskName: The disk name.
     */
    readonly attrDiskName: ros.IResolvable;
    /**
     * @Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
     */
    readonly attrEnableAutoSnapshot: ros.IResolvable;
    /**
     * @Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
     */
    readonly attrEnableAutomatedSnapshotPolicy: ros.IResolvable;
    /**
     * @Attribute Encrypted: Whether the disk is encrypted.
     */
    readonly attrEncrypted: ros.IResolvable;
    /**
     * @Attribute ExpiredTime: The expiration time of a monthly disk.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * @Attribute ImageId: The image id.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * @Attribute InstanceId: The instance id.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Iops: Number of read/write (I/O) operations per second.
     */
    readonly attrIops: ros.IResolvable;
    /**
     * @Attribute IopsRead: Number of reads per second.
     */
    readonly attrIopsRead: ros.IResolvable;
    /**
     * @Attribute IopsWrite: Number of writes per second.
     */
    readonly attrIopsWrite: ros.IResolvable;
    /**
     * @Attribute KmsKeyId: The KMS keyId.
     */
    readonly attrKmsKeyId: ros.IResolvable;
    /**
     * @Attribute MountInstanceNum: Number of instances mounted on shared storage.
     */
    readonly attrMountInstanceNum: ros.IResolvable;
    /**
     * @Attribute MountInstances: Disk mount instances.
     */
    readonly attrMountInstances: ros.IResolvable;
    /**
     * @Attribute MultiAttach: Whether to enable the multi-Mount feature.
     */
    readonly attrMultiAttach: ros.IResolvable;
    /**
     * @Attribute OperationLocks: Resource locking information.
     */
    readonly attrOperationLocks: ros.IResolvable;
    /**
     * @Attribute PaymentType: Payment method for disk.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
     */
    readonly attrPerformanceLevel: ros.IResolvable;
    /**
     * @Attribute Portable: Whether the disk is unmountable.
     */
    readonly attrPortable: ros.IResolvable;
    /**
     * @Attribute ProductCode: The product logo of the cloud market.
     */
    readonly attrProductCode: ros.IResolvable;
    /**
     * @Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk. Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
     */
    readonly attrProvisionedIops: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Size: Disk size.
     */
    readonly attrSize: ros.IResolvable;
    /**
     * @Attribute SnapshotId: The source snapshot id.
     */
    readonly attrSnapshotId: ros.IResolvable;
    /**
     * @Attribute StorageClusterId: The ID of the dedicated block storage cluster. If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
     */
    readonly attrStorageClusterId: ros.IResolvable;
    /**
     * @Attribute StorageSetId: The ID of the Save set.
     */
    readonly attrStorageSetId: ros.IResolvable;
    /**
     * @Attribute StorageSetPartitionNumber: Number of Save set partitions. Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
     */
    readonly attrStorageSetPartitionNumber: ros.IResolvable;
    /**
     * @Attribute Tags: The tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute ZoneId: ID of the free zone to which the disk belongs.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property diskId: The disk id.
     */
    diskId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDiskCategories`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
 */
export interface RosDiskCategoriesProps {
    /**
     * @Property type: The resource type to query.
     * If you set Type to data,you can specify the InstanceType parameter to disk.
     * If you set Type to system, you must specify the InstanceType parameter.
     * Valid values:
     * system: system disk
     * data: data disk
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone for which to query resources.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property dataDiskCategory: The category of the data disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    readonly dataDiskCategory?: string | ros.IResolvable;
    /**
     * @Property instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
     * When the Type parameter is set to system or data,you must set the InstanceType parameter.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DiskCategories`, which is used to query the disk types and categories.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskCategories` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
 */
export declare class RosDiskCategories extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DiskCategories";
    /**
     * @Attribute DiskCategories: The list of disk categories.
     */
    readonly attrDiskCategories: ros.IResolvable;
    /**
     * @Attribute DiskCategoryIds: The list of disk category IDs.
     */
    readonly attrDiskCategoryIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property type: The resource type to query.
     * If you set Type to data,you can specify the InstanceType parameter to disk.
     * If you set Type to system, you must specify the InstanceType parameter.
     * Valid values:
     * system: system disk
     * data: data disk
     */
    type: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone for which to query resources.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property dataDiskCategory: The category of the data disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    dataDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
     * When the Type parameter is set to system or data,you must set the InstanceType parameter.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    systemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskCategoriesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDisks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
 */
export interface RosDisksProps {
    /**
     * @Property additionalAttributes: The value of attribute N. Set the value to IOPS, which indicates the maximum IOPS of the disk.
     */
    readonly additionalAttributes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * @Property category: The category of the disk. Valid values:
     * all: all disk categories
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral: retired local disk
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     * local_ssd_pro: I\/O-intensive local disk
     * local_hdd_pro: throughput-intensive local disk
     */
    readonly category?: string | ros.IResolvable;
    /**
     * @Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
     * Default value: false.
     */
    readonly deleteAutoSnapshot?: string | ros.IResolvable;
    /**
     * @Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. Valid values:
     * true: The cloud disk is released when its associated instance is released.
     * false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
     * Default value: false.
     */
    readonly deleteWithInstance?: boolean | ros.IResolvable;
    /**
     * @Property diskChargeType: The billing method of the disk. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly diskChargeType?: string | ros.IResolvable;
    /**
     * @Property diskIds: The IDs of disks.
     * The value is a JSON array that consists of up to 100 disk IDs.
     * Separate the disk IDs with commas (,).
     */
    readonly diskIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property diskName: The name of the disk.
     */
    readonly diskName?: string | ros.IResolvable;
    /**
     * @Property diskType: The type of the disk. Valid values:
     * all: system disk and data disk
     * system: system disk
     * data: data disk
     * Default value: all.
     */
    readonly diskType?: string | ros.IResolvable;
    /**
     * @Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
     * true: An automatic snapshot policy is applied to the cloud disk.
     * false: No automatic snapshot policy is applied to the cloud disk.
     * Default value: false.
     */
    readonly enableAutomatedSnapshotPolicy?: boolean | ros.IResolvable;
    /**
     * @Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
     * true: The automatic snapshot policy feature is enabled for the cloud disk.
     * false: The automatic snapshot policy feature is disabled for the cloud disk.
     * Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
     */
    readonly enableAutoSnapshot?: boolean | ros.IResolvable;
    /**
     * @Property enableShared: Specifies whether the disk is a Shared Block Storage device.
     */
    readonly enableShared?: string | ros.IResolvable;
    /**
     * @Property encrypted: Specifies whether to query only encrypted cloud disks.
     * Default value: false.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * @Property filters: Filter value when querying resources
     */
    readonly filters?: Array<RosDisks.FiltersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance to which the disk is attached.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * @Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk. Valid values:
     * Disabled: The multi-attach feature is disabled.
     * Enabled: The multi-attach feature is enabled.
     * LegacyShared: Shared Block Storage devices are queried.
     * The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
     */
    readonly multiAttach?: string | ros.IResolvable;
    /**
     * @Property portable: Specifies whether the disk is removable. Valid values:
     * true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
     * false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
     * The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
     * Local disks
     * Local SSDs
     * Subscription data disks
     */
    readonly portable?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the disk belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property snapshotId: The ID of the snapshot used to create the cloud disk.
     */
    readonly snapshotId?: string | ros.IResolvable;
    /**
     * @Property status: The state of the cloud disk. For more information, see Disk states. Valid values:
     * In_use
     * Available
     * Attaching
     * Detaching
     * Creating
     * ReIniting
     * All
     * Default value: All.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of disks.
     */
    readonly tags?: RosDisks.TagsProperty[];
    /**
     * @Property zoneId: The ID of the zone for which to query resources.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Disks`, which is used to query the Elastic Block Storage (EBS) devices that you created. The following EBS devices are supported: cloud disks and local disks.
 * @Note This class does not contain additional functions, so it is recommended to use the `Disks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
 */
export declare class RosDisks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Disks";
    /**
     * @Attribute DiskIds: The list of disk IDs.
     */
    readonly attrDiskIds: ros.IResolvable;
    /**
     * @Attribute Disks: The list of disks.
     */
    readonly attrDisks: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property additionalAttributes: The value of attribute N. Set the value to IOPS, which indicates the maximum IOPS of the disk.
     */
    additionalAttributes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
     */
    autoSnapshotPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property category: The category of the disk. Valid values:
     * all: all disk categories
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral: retired local disk
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     * local_ssd_pro: I\/O-intensive local disk
     * local_hdd_pro: throughput-intensive local disk
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
     * Default value: false.
     */
    deleteAutoSnapshot: string | ros.IResolvable | undefined;
    /**
     * @Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. Valid values:
     * true: The cloud disk is released when its associated instance is released.
     * false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
     * Default value: false.
     */
    deleteWithInstance: boolean | ros.IResolvable | undefined;
    /**
     * @Property diskChargeType: The billing method of the disk. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    diskChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property diskIds: The IDs of disks.
     * The value is a JSON array that consists of up to 100 disk IDs.
     * Separate the disk IDs with commas (,).
     */
    diskIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property diskName: The name of the disk.
     */
    diskName: string | ros.IResolvable | undefined;
    /**
     * @Property diskType: The type of the disk. Valid values:
     * all: system disk and data disk
     * system: system disk
     * data: data disk
     * Default value: all.
     */
    diskType: string | ros.IResolvable | undefined;
    /**
     * @Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
     * true: An automatic snapshot policy is applied to the cloud disk.
     * false: No automatic snapshot policy is applied to the cloud disk.
     * Default value: false.
     */
    enableAutomatedSnapshotPolicy: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
     * true: The automatic snapshot policy feature is enabled for the cloud disk.
     * false: The automatic snapshot policy feature is disabled for the cloud disk.
     * Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
     */
    enableAutoSnapshot: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableShared: Specifies whether the disk is a Shared Block Storage device.
     */
    enableShared: string | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Specifies whether to query only encrypted cloud disks.
     * Default value: false.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property filters: Filter value when querying resources
     */
    filters: Array<RosDisks.FiltersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the instance to which the disk is attached.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
     */
    kmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk. Valid values:
     * Disabled: The multi-attach feature is disabled.
     * Enabled: The multi-attach feature is enabled.
     * LegacyShared: Shared Block Storage devices are queried.
     * The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
     */
    multiAttach: string | ros.IResolvable | undefined;
    /**
     * @Property portable: Specifies whether the disk is removable. Valid values:
     * true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
     * false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
     * The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
     * Local disks
     * Local SSDs
     * Subscription data disks
     */
    portable: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the disk belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotId: The ID of the snapshot used to create the cloud disk.
     */
    snapshotId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The state of the cloud disk. For more information, see Disk states. Valid values:
     * In_use
     * Available
     * Attaching
     * Detaching
     * Creating
     * ReIniting
     * All
     * Default value: All.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of disks.
     */
    tags: RosDisks.TagsProperty[] | undefined;
    /**
     * @Property zoneId: The ID of the zone for which to query resources.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDisksProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDisks {
    /**
     * @stability external
     */
    interface FiltersProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosDisks {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosHpcClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
 */
export interface RosHpcClustersProps {
    /**
     * @Property hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
     */
    readonly hpcClusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::HpcClusters`, which is used to query available High Performance Computing (HPC) clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `HpcClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
 */
export declare class RosHpcClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::HpcClusters";
    /**
     * @Attribute HpcClusterIds: the list of hpc cluster ids
     */
    readonly attrHpcClusterIds: ros.IResolvable;
    /**
     * @Attribute HpcClusters: The list of hpc clusters.
     */
    readonly attrHpcClusters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
     */
    hpcClusterIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHpcClustersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosImages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
 */
export interface RosImagesProps {
    /**
     * @Property actionType: The scenario in which the image is used. Default value: CreateEcs. Valid values:
     * CreateEcs: instance creation
     * ChangeOS: replacement of the system disk or operating system
     */
    readonly actionType?: string | ros.IResolvable;
    /**
     * @Property architecture: The image architecture. Valid values:
     * i38
     * x86_64
     * arm64
     */
    readonly architecture?: string | ros.IResolvable;
    /**
     * @Property imageFamily: The name of the image family. You can set this parameter to query images of the specified image family.
     * This parameter is empty by default.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * @Property imageId: The ID of the image.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property imageName: The name of the image. Support for fuzzy queries using *.
     */
    readonly imageName?: string | ros.IResolvable;
    /**
     * @Property imageOwnerAlias: The source of the image. Valid values:
     * system: public images provided by Alibaba Cloud.
     * self: your custom images.
     * others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
     * - To query community images, you must set IsPublic to true.
     * To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
     * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
     * This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;
    /**
     * @Property instanceType: The instance type for which the image can be used.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property isPublic: Specifies whether to query published community images. Valid values:
     * true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
     * false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
     * Default value: false.
     */
    readonly isPublic?: boolean | ros.IResolvable;
    /**
     * @Property isSupportCloudinit: Specifies whether the image supports cloud-init.
     */
    readonly isSupportCloudinit?: boolean | ros.IResolvable;
    /**
     * @Property isSupportIoOptimized: Specifies whether the image can be used on I\/O optimized instances.
     */
    readonly isSupportIoOptimized?: boolean | ros.IResolvable;
    /**
     * @Property osType: The operating system type of the image. Valid values:
     * windows
     * linux
     */
    readonly osType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the custom image belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property snapshotId: The ID of the snapshot used to create the custom image.
     */
    readonly snapshotId?: string | ros.IResolvable;
    /**
     * @Property status: The state of the image. Default value: Available. Valid values:
     * Creating: The image is being created.
     * Waiting: The image is waiting to be processed.
     * Available: The image is available.
     * UnAvailable: The image is unavailable.
     * CreateFailed: The image failed to be created.
     * Deprecated: The image is discontinued.
     * You can specify multiple values. Separate multiple values with commas (,).
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of image.
     */
    readonly tags?: RosImages.TagsProperty[];
    /**
     * @Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values:
     * instance: The image is already in use and running on an ECS instance.
     * none: The image is not in use.
     */
    readonly usage?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Images`, which is used to query available images.
 * @Note This class does not contain additional functions, so it is recommended to use the `Images` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
 */
export declare class RosImages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Images";
    /**
     * @Attribute ImageIds: The list of image IDs.
     */
    readonly attrImageIds: ros.IResolvable;
    /**
     * @Attribute Images: The list of images.
     */
    readonly attrImages: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property actionType: The scenario in which the image is used. Default value: CreateEcs. Valid values:
     * CreateEcs: instance creation
     * ChangeOS: replacement of the system disk or operating system
     */
    actionType: string | ros.IResolvable | undefined;
    /**
     * @Property architecture: The image architecture. Valid values:
     * i38
     * x86_64
     * arm64
     */
    architecture: string | ros.IResolvable | undefined;
    /**
     * @Property imageFamily: The name of the image family. You can set this parameter to query images of the specified image family.
     * This parameter is empty by default.
     */
    imageFamily: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: The ID of the image.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property imageName: The name of the image. Support for fuzzy queries using *.
     */
    imageName: string | ros.IResolvable | undefined;
    /**
     * @Property imageOwnerAlias: The source of the image. Valid values:
     * system: public images provided by Alibaba Cloud.
     * self: your custom images.
     * others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
     * - To query community images, you must set IsPublic to true.
     * To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
     * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
     * This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
     */
    imageOwnerAlias: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The instance type for which the image can be used.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property isPublic: Specifies whether to query published community images. Valid values:
     * true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
     * false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
     * Default value: false.
     */
    isPublic: boolean | ros.IResolvable | undefined;
    /**
     * @Property isSupportCloudinit: Specifies whether the image supports cloud-init.
     */
    isSupportCloudinit: boolean | ros.IResolvable | undefined;
    /**
     * @Property isSupportIoOptimized: Specifies whether the image can be used on I\/O optimized instances.
     */
    isSupportIoOptimized: boolean | ros.IResolvable | undefined;
    /**
     * @Property osType: The operating system type of the image. Valid values:
     * windows
     * linux
     */
    osType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the custom image belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotId: The ID of the snapshot used to create the custom image.
     */
    snapshotId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The state of the image. Default value: Available. Valid values:
     * Creating: The image is being created.
     * Waiting: The image is waiting to be processed.
     * Available: The image is available.
     * UnAvailable: The image is unavailable.
     * CreateFailed: The image failed to be created.
     * Deprecated: The image is discontinued.
     * You can specify multiple values. Separate multiple values with commas (,).
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of image.
     */
    tags: RosImages.TagsProperty[] | undefined;
    /**
     * @Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values:
     * instance: The image is already in use and running on an ECS instance.
     * none: The image is not in use.
     */
    usage: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImagesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosImages {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
 */
export interface RosInstancesProps {
    /**
     * @Property additionalAttributes: The value of attribute N. Valid values of N: 1 to 20. Valid values:
     * META_OPTIONS: instance metadata
     * DDH_CLUSTER: dedicated host cluster
     * NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
     */
    readonly additionalAttributes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly eipAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property filters: Filter value when querying resources
     */
    readonly filters?: Array<RosInstances.FiltersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;
    /**
     * @Property imageId: The ID of the image.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly innerIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceChargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     *
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property instanceId: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property instanceIds: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard is supported.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property instanceNetworkType: The network type of the instance. Valid values:
     * classic: classic network
     * vpc: VPC
     *
     */
    readonly instanceNetworkType?: string | ros.IResolvable;
    /**
     * @Property instanceType: The instance type of the instance.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property instanceTypeFamily: The instance family of the instance.
     */
    readonly instanceTypeFamily?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: The billing method for network usage. Valid values:
     * PayByBandwidth: pay-by-bandwidth
     * PayByTraffic: pay-by-traffic
     *
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized.
     */
    readonly ioOptimized?: boolean | ros.IResolvable;
    /**
     * @Property ipv6Address: IPv6 address N of the elastic network interface (ENI). You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    readonly ipv6Address?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property keyPairName: The name of the SSH key pair bound to the instance.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly privateIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property publicIpAddresses: The public IP addresses of instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly publicIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
     */
    readonly rdmaIpAddresses?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property status: The state of the instance. Valid values:
     * Pending
     * Running
     * Starting
     * Stopping
     * Stopped
     *
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of instance.
     */
    readonly tags?: RosInstances.TagsProperty[];
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC).
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Instances`, which is used to query the information about Elastic Compute Service (ECS) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Instances";
    /**
     * @Attribute InstanceIds: The list of InstanceIds.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of Instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property additionalAttributes: The value of attribute N. Valid values of N: 1 to 20. Valid values:
     * META_OPTIONS: instance metadata
     * DDH_CLUSTER: dedicated host cluster
     * NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
     */
    additionalAttributes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    eipAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property filters: Filter value when querying resources
     */
    filters: Array<RosInstances.FiltersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
     */
    hpcClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: The ID of the image.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    innerIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     *
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceIds: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard is supported.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property instanceNetworkType: The network type of the instance. Valid values:
     * classic: classic network
     * vpc: VPC
     *
     */
    instanceNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The instance type of the instance.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceTypeFamily: The instance family of the instance.
     */
    instanceTypeFamily: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: The billing method for network usage. Valid values:
     * PayByBandwidth: pay-by-bandwidth
     * PayByTraffic: pay-by-traffic
     *
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized.
     */
    ioOptimized: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipv6Address: IPv6 address N of the elastic network interface (ENI). You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    ipv6Address: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: The name of the SSH key pair bound to the instance.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    privateIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property publicIpAddresses: The public IP addresses of instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    publicIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
     */
    rdmaIpAddresses: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The state of the instance. Valid values:
     * Pending
     * Running
     * Starting
     * Stopping
     * Stopped
     *
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of instance.
     */
    tags: RosInstances.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC).
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID of the instance.
     */
    zoneId: string | ros.IResolvable | undefined;
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
export declare namespace RosInstances {
    /**
     * @stability external
     */
    interface FiltersProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosInstances {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosKeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
 */
export interface RosKeyPairProps {
    /**
     * @Property keyPairName: The name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
     * - *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * - SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * - *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * - SshKey: queries the key pair named SshKey.
     */
    readonly keyPairName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::KeyPair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
 */
export declare class RosKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::KeyPair";
    /**
     * @Attribute CreateTime: The time when the key pair was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute FingerPrint: The fingerprint of the key pair.
     */
    readonly attrFingerPrint: ros.IResolvable;
    /**
     * @Attribute KeyPairName: The name of the key pair.
     */
    readonly attrKeyPairName: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the key pair.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keyPairName: The name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
     * - *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * - SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * - *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * - SshKey: queries the key pair named SshKey.
     */
    keyPairName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosKeyPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypairs
 */
export interface RosKeyPairsProps {
    /**
     * @Property keyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
     */
    readonly keyPairFingerPrint?: string | ros.IResolvable;
    /**
     * @Property keyPairName: he name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
     * *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * SshKey: queries the key pair named SshKey.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the key pair belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of keypair.
     */
    readonly tags?: RosKeyPairs.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::KeyPairs`, which is used to query one or more key pairs.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPairs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypairs
 */
export declare class RosKeyPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::KeyPairs";
    /**
     * @Attribute KeyPairNames: The list of key pair names.
     */
    readonly attrKeyPairNames: ros.IResolvable;
    /**
     * @Attribute KeyPairs: The list of key pairs.
     */
    readonly attrKeyPairs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
     */
    keyPairFingerPrint: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: he name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
     * *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * SshKey: queries the key pair named SshKey.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the key pair belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of keypair.
     */
    tags: RosKeyPairs.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosKeyPairs {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosManagedInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-managedinstances
 */
export interface RosManagedInstancesProps {
    /**
     * @Property activationId: The ID of the activation code
     */
    readonly activationId?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of managed instance. Valid values of N: 1 to 50.
     */
    readonly instanceId?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceIp: The internal or public IP address of the managed instance
     */
    readonly instanceIp?: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the managed instance
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property osType: The operating system type of the managed instance.  Valid values:
     * windows
     * linux
     */
    readonly osType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of managedinstance.
     */
    readonly tags?: RosManagedInstances.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::ManagedInstances`, which is used to query managed instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-managedinstances
 */
export declare class RosManagedInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::ManagedInstances";
    /**
     * @Attribute InstanceIds: The list of managed instance ids.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of managed instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property activationId: The ID of the activation code
     */
    activationId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of managed instance. Valid values of N: 1 to 50.
     */
    instanceId: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceIp: The internal or public IP address of the managed instance
     */
    instanceIp: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The name of the managed instance
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property osType: The operating system type of the managed instance.  Valid values:
     * windows
     * linux
     */
    osType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of managedinstance.
     */
    tags: RosManagedInstances.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosManagedInstances {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosNetworkInterfaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
 */
export interface RosNetworkInterfacesProps {
    /**
     * @Property instanceId: The ID of the instance to which the ENI is bound.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property ipv6Addresses: IPv6 address N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    readonly ipv6Addresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property networkInterfaceIds: The ID of ENI N. Valid values of N: 1 to 100.
     */
    readonly networkInterfaceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property networkInterfaceName: The name of the ENI.
     */
    readonly networkInterfaceName?: string | ros.IResolvable;
    /**
     * @Property primaryIpAddress: The primary private IPv4 address of the ENI.
     */
    readonly primaryIpAddress?: string | ros.IResolvable;
    /**
     * @Property privateIpAddresses: Secondary private IPv4 address N of the ENI. Valid values of N: 1 to 100.
     */
    readonly privateIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the eni belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
     * To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
     * To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
     */
    readonly serviceManaged?: boolean | ros.IResolvable;
    /**
     * @Property status: The state of the ENI. Valid values:
     * Creating: The ENI is being created.
     * Available: The ENI is not bound to an instance.
     * Attaching: The ENI is being bound to an instance.
     * InUse: The ENI is bound to an instance.
     * Detaching: The ENI is being unbound from an instance.
     * Deleting: The ENI is being deleted.
     * CreateFailed: The ENI cannot be created.
     * This parameter is empty by default, which indicates that ENIs in all states are queried.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of eni.
     */
    readonly tags?: RosNetworkInterfaces.TagsProperty[];
    /**
     * @Property type: The type of the ENI. Valid values:
     * Primary
     * Secondary
     * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
     */
    readonly type?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::NetworkInterfaces`, which is used to query the details of elastic network interfaces (ENIs).
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkInterfaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
 */
export declare class RosNetworkInterfaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::NetworkInterfaces";
    /**
     * @Attribute NetworkInterfaceIds: The list of NetworkInterfaceIds.
     */
    readonly attrNetworkInterfaceIds: ros.IResolvable;
    /**
     * @Attribute NetworkInterfaces: The list of NetworkInterfaces.
     */
    readonly attrNetworkInterfaces: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance to which the ENI is bound.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6Addresses: IPv6 address N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    ipv6Addresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaceIds: The ID of ENI N. Valid values of N: 1 to 100.
     */
    networkInterfaceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaceName: The name of the ENI.
     */
    networkInterfaceName: string | ros.IResolvable | undefined;
    /**
     * @Property primaryIpAddress: The primary private IPv4 address of the ENI.
     */
    primaryIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddresses: Secondary private IPv4 address N of the ENI. Valid values of N: 1 to 100.
     */
    privateIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the eni belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
     * To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
     * To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
     */
    serviceManaged: boolean | ros.IResolvable | undefined;
    /**
     * @Property status: The state of the ENI. Valid values:
     * Creating: The ENI is being created.
     * Available: The ENI is not bound to an instance.
     * Attaching: The ENI is being bound to an instance.
     * InUse: The ENI is bound to an instance.
     * Detaching: The ENI is being unbound from an instance.
     * Deleting: The ENI is being deleted.
     * CreateFailed: The ENI cannot be created.
     * This parameter is empty by default, which indicates that ENIs in all states are queried.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of eni.
     */
    tags: RosNetworkInterfaces.TagsProperty[] | undefined;
    /**
     * @Property type: The type of the ENI. Valid values:
     * Primary
     * Secondary
     * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfacesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosNetworkInterfaces {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosRecommendInstanceTypes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-recommendinstancetypes
 */
export interface RosRecommendInstanceTypesProps {
    /**
     * @Property cores: The number of vCPUs of the instance.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    readonly cores?: number | ros.IResolvable;
    /**
     * @Property instanceChargeType: The billing method of the instances of the instance type. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
     */
    readonly instanceFamilyLevel?: string | ros.IResolvable;
    /**
     * @Property instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
     * Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
     */
    readonly instanceTypeFamilies?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ioOptimized: Specifies whether to match I\/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I\/O optimized. Valid values:
     * optimized: matches I\/O optimized instances.
     * none: matches non-I\/O optimized instances.
     * Default value: optimized.
     * If you query alternative instance types for retired instance types, this parameter is set to none by default.
     * Default value: none.
     */
    readonly ioOptimized?: string | ros.IResolvable;
    /**
     * @Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
     * Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
     */
    readonly maxPrice?: number | ros.IResolvable;
    /**
     * @Property memory: The memory size of the instance. Unit: GiB.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    readonly memory?: number | ros.IResolvable;
    /**
     * @Property priorityStrategy: The policy for recommending instance types. Valid values:
     * InventoryFirst: Instance types are recommended in descending order based on resource availability.
     * PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
     * NewProductFirst: The latest instance types are recommended first.
     * Default value: InventoryFirst.
     */
    readonly priorityStrategy?: string | ros.IResolvable;
    /**
     * @Property scene: Specifies the scenario in which the instance type is recommended. Valid values:
     * UPGRADE: instance type upgrade or downgrade
     * CREATE: instance creation
     * Default value: CREATE.
     */
    readonly scene?: string | ros.IResolvable;
    /**
     * @Property spotStrategy: The bidding policy of preemptible instances. Valid values:
     * NoSpot: applies to regular pay-as-you-go instances.
     * SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
     * SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
     * Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
     * Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;
    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * cloud_essd: enhanced SSD (ESSD)
     * cloud: basic disk
     * For non-I\/O optimized instances, the default value is cloud.
     * For I\/O optimized instances, the default value is cloud_efficiency.
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
     */
    readonly zoneId?: string | ros.IResolvable;
    /**
     * @Property zoneMatchMode: Specifies which alternative instance types are recommended. Valid values:
     * Strict: recommends only alternative instance types in the zone specified by ZoneId.
     * Include: recommends all instance types in all the zones in the same region as the specified instance type.
     * When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
     */
    readonly zoneMatchMode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::RecommendInstanceTypes`, which is used to query the recommended Elastic Compute Service (ECS) instance types.
 * @Note This class does not contain additional functions, so it is recommended to use the `RecommendInstanceTypes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-recommendinstancetypes
 */
export declare class RosRecommendInstanceTypes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::RecommendInstanceTypes";
    /**
     * @Attribute InstanceTypeIds: The list of instance type ids. Note that instance type ids are not unique.
     */
    readonly attrInstanceTypeIds: ros.IResolvable;
    /**
     * @Attribute InstanceTypes: The list of instance types, including information such as cores and memory.
     */
    readonly attrInstanceTypes: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cores: The number of vCPUs of the instance.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    cores: number | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The billing method of the instances of the instance type. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
     */
    instanceFamilyLevel: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
     * Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
     */
    instanceTypeFamilies: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: Specifies whether to match I\/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I\/O optimized. Valid values:
     * optimized: matches I\/O optimized instances.
     * none: matches non-I\/O optimized instances.
     * Default value: optimized.
     * If you query alternative instance types for retired instance types, this parameter is set to none by default.
     * Default value: none.
     */
    ioOptimized: string | ros.IResolvable | undefined;
    /**
     * @Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
     * Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
     */
    maxPrice: number | ros.IResolvable | undefined;
    /**
     * @Property memory: The memory size of the instance. Unit: GiB.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    memory: number | ros.IResolvable | undefined;
    /**
     * @Property priorityStrategy: The policy for recommending instance types. Valid values:
     * InventoryFirst: Instance types are recommended in descending order based on resource availability.
     * PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
     * NewProductFirst: The latest instance types are recommended first.
     * Default value: InventoryFirst.
     */
    priorityStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property scene: Specifies the scenario in which the instance type is recommended. Valid values:
     * UPGRADE: instance type upgrade or downgrade
     * CREATE: instance creation
     * Default value: CREATE.
     */
    scene: string | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: The bidding policy of preemptible instances. Valid values:
     * NoSpot: applies to regular pay-as-you-go instances.
     * SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
     * SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
     * Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
     * Default value: NoSpot.
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * cloud_essd: enhanced SSD (ESSD)
     * cloud: basic disk
     * For non-I\/O optimized instances, the default value is cloud.
     * For I\/O optimized instances, the default value is cloud_efficiency.
     */
    systemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneMatchMode: Specifies which alternative instance types are recommended. Valid values:
     * Strict: recommends only alternative instance types in the zone specified by ZoneId.
     * Include: recommends all instance types in all the zones in the same region as the specified instance type.
     * When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
     */
    zoneMatchMode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRecommendInstanceTypesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSecurityGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
 */
export interface RosSecurityGroupProps {
    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::SecurityGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
 */
export declare class RosSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::SecurityGroup";
    /**
     * @Attribute CreateTime: The create time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute InnerAccessPolicy: Network connectivity policy within the security group.
     */
    readonly attrInnerAccessPolicy: ros.IResolvable;
    /**
     * @Attribute Permissions: A collection of Security Group permission rules.
     */
    readonly attrPermissions: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupName: The security group name.
     */
    readonly attrSecurityGroupName: ros.IResolvable;
    /**
     * @Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.
     */
    readonly attrSecurityGroupReferences: ros.IResolvable;
    /**
     * @Attribute SecurityGroupType: Security group type.
     */
    readonly attrSecurityGroupType: ros.IResolvable;
    /**
     * @Attribute ServiceId: The virtual quotient ID corresponding to the security group.
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * @Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.
     */
    readonly attrServiceManaged: ros.IResolvable;
    /**
     * @Attribute Tags: The tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VpcId: Secure the group's proprietary network.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property securityGroupId: Security group ID.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSecurityGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
 */
export interface RosSecurityGroupsProps {
    /**
     * @Property networkType: The network type of the security group. Valid values:
     * vpc
     * classic
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the security group.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityGroupName: The name of the security group.
     */
    readonly securityGroupName?: string | ros.IResolvable;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     * Note If you do not specify this parameter, both basic and advanced security groups are queried.
     */
    readonly securityGroupType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of securitygroup.
     */
    readonly tags?: RosSecurityGroups.TagsProperty[];
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::SecurityGroups`, which is used to query the basic information about security groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
 */
export declare class RosSecurityGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::SecurityGroups";
    /**
     * @Attribute SecurityGroupIds: The list of security group ids.
     */
    readonly attrSecurityGroupIds: ros.IResolvable;
    /**
     * @Attribute SecurityGroups: The list of security groups.
     */
    readonly attrSecurityGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkType: The network type of the security group. Valid values:
     * vpc
     * classic
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the security group.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
     */
    securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property securityGroupName: The name of the security group.
     */
    securityGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     * Note If you do not specify this parameter, both basic and advanced security groups are queried.
     */
    securityGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of securitygroup.
     */
    tags: RosSecurityGroups.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSecurityGroups {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSnapshot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
 */
export interface RosSnapshotProps {
    /**
     * @Property snapshotId: The snapshot id.
     */
    readonly snapshotId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Snapshot`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Snapshot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
 */
export declare class RosSnapshot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Snapshot";
    /**
     * @Attribute CreateTime: The create time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DiskId: The source disk id.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * @Attribute Encrypted: Whether the snapshot is encrypted.
     */
    readonly attrEncrypted: ros.IResolvable;
    /**
     * @Attribute InstantAccess: Whether snapshot speed availability is enabled.
     */
    readonly attrInstantAccess: ros.IResolvable;
    /**
     * @Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.
     */
    readonly attrInstantAccessRetentionDays: ros.IResolvable;
    /**
     * @Attribute ProductCode: The product number inherited from the mirror market.
     */
    readonly attrProductCode: ros.IResolvable;
    /**
     * @Attribute Progress: Snapshot creation progress, in percentage.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * @Attribute RemainTime: Remaining completion time for the snapshot being created.
     */
    readonly attrRemainTime: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute RetentionDays: Automatic snapshot retention days.
     */
    readonly attrRetentionDays: ros.IResolvable;
    /**
     * @Attribute SnapshotId: The snapshot id.
     */
    readonly attrSnapshotId: ros.IResolvable;
    /**
     * @Attribute SnapshotName: Snapshot Display Name.
     */
    readonly attrSnapshotName: ros.IResolvable;
    /**
     * @Attribute SnapshotSN: Snapshot serial number.
     */
    readonly attrSnapshotSn: ros.IResolvable;
    /**
     * @Attribute SnapshotType: Snapshot creation type.
     */
    readonly attrSnapshotType: ros.IResolvable;
    /**
     * @Attribute SourceDiskSize: Source disk capacity.
     */
    readonly attrSourceDiskSize: ros.IResolvable;
    /**
     * @Attribute SourceDiskType: Source disk attributes.
     */
    readonly attrSourceDiskType: ros.IResolvable;
    /**
     * @Attribute SourceStorageType: Original disk type.
     */
    readonly attrSourceStorageType: ros.IResolvable;
    /**
     * @Attribute Tags: The tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute Usage: A resource type that has a reference relationship.
     */
    readonly attrUsage: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property snapshotId: The snapshot id.
     */
    snapshotId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnapshotProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSnapshots`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
 */
export interface RosSnapshotsProps {
    /**
     * @Property category: The category of the snapshot. Valid values:
     * Standard: normal snapshot
     * Flash: local snapshot
     * The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
     *  If you have used local snapshots before December 14, 2020, you can use this parameter.
     *  If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
     *  Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
     */
    readonly category?: string | ros.IResolvable;
    /**
     * @Property diskId: The ID of the disk.
     */
    readonly diskId?: string | ros.IResolvable;
    /**
     * @Property encrypted: Specifies whether the snapshot is encrypted. Default value: false.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * @Property filters: Filter value when querying resources
     */
    readonly filters?: Array<RosSnapshots.FiltersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the snapshot belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property snapshotIds: The IDs of snapshots. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
     */
    readonly snapshotIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property snapshotLinkId: The ID of the snapshot chain.
     */
    readonly snapshotLinkId?: string | ros.IResolvable;
    /**
     * @Property snapshotName: The name of the snapshot.
     */
    readonly snapshotName?: string | ros.IResolvable;
    /**
     * @Property snapshotType: Specifies whether the snapshot has been used to create images or disks. Valid values:
     * auto: automatic snapshot
     * user: manual snapshot
     * all: all snapshot types
     */
    readonly snapshotType?: string | ros.IResolvable;
    /**
     * @Property sourceDiskType: The type of the source disk for which the snapshot was created. Valid values:
     * System: system disk
     * Data: data disk
     * Note These values are case-insensitive.
     */
    readonly sourceDiskType?: string | ros.IResolvable;
    /**
     * @Property status: The status of the snapshot. Default value: all. Valid values:
     * progressing: The snapshot is being created.
     * accomplished: The snapshot is created.
     * failed: The snapshot fails to be created.
     * all: all snapshot statuses.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of snapshot.
     */
    readonly tags?: RosSnapshots.TagsProperty[];
    /**
     * @Property usage: The type of the snapshot. Default value: all. Valid values:
     * image: The snapshot has been used to create custom images.
     * disk: The snapshot has been used to create disks.
     * image_disk: The snapshot has been used to create custom images and data disks.
     * none: The snapshot has not been used to create custom images or disks.
     */
    readonly usage?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Snapshots`, which is used to query all snapshots of an Elastic Compute Service (ECS) instance or a disk.
 * @Note This class does not contain additional functions, so it is recommended to use the `Snapshots` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
 */
export declare class RosSnapshots extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Snapshots";
    /**
     * @Attribute SnapshotIds: the list of snapshot ids.
     */
    readonly attrSnapshotIds: ros.IResolvable;
    /**
     * @Attribute Snapshots: the list of snapshots.
     */
    readonly attrSnapshots: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property category: The category of the snapshot. Valid values:
     * Standard: normal snapshot
     * Flash: local snapshot
     * The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
     *  If you have used local snapshots before December 14, 2020, you can use this parameter.
     *  If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
     *  Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property diskId: The ID of the disk.
     */
    diskId: string | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Specifies whether the snapshot is encrypted. Default value: false.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property filters: Filter value when querying resources
     */
    filters: Array<RosSnapshots.FiltersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
     */
    kmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the snapshot belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotIds: The IDs of snapshots. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
     */
    snapshotIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property snapshotLinkId: The ID of the snapshot chain.
     */
    snapshotLinkId: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotName: The name of the snapshot.
     */
    snapshotName: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotType: Specifies whether the snapshot has been used to create images or disks. Valid values:
     * auto: automatic snapshot
     * user: manual snapshot
     * all: all snapshot types
     */
    snapshotType: string | ros.IResolvable | undefined;
    /**
     * @Property sourceDiskType: The type of the source disk for which the snapshot was created. Valid values:
     * System: system disk
     * Data: data disk
     * Note These values are case-insensitive.
     */
    sourceDiskType: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the snapshot. Default value: all. Valid values:
     * progressing: The snapshot is being created.
     * accomplished: The snapshot is created.
     * failed: The snapshot fails to be created.
     * all: all snapshot statuses.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of snapshot.
     */
    tags: RosSnapshots.TagsProperty[] | undefined;
    /**
     * @Property usage: The type of the snapshot. Default value: all. Valid values:
     * image: The snapshot has been used to create custom images.
     * disk: The snapshot has been used to create disks.
     * image_disk: The snapshot has been used to create custom images and data disks.
     * none: The snapshot has not been used to create custom images or disks.
     */
    usage: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnapshotsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSnapshots {
    /**
     * @stability external
     */
    interface FiltersProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosSnapshots {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-zones
 */
export interface RosZonesProps {
    /**
     * @Property dataDiskCategory: The category of the data disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    readonly dataDiskCategory?: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: The billing method of the resource. For more information, see Billing overview. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property instanceType: The instance type.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized. Valid values:
     * none: non-I\/O optimized
     * optimized: I\/O optimized
     * Default value: optimized.
     */
    readonly ioOptimized?: string | ros.IResolvable;
    /**
     * @Property resourceType: The type of the resource. Valid values:
     * instance: ECS instance
     * disk: cloud disk
     * reservedinstance: reserved instance
     * ddh: dedicated host
     */
    readonly resourceType?: string | ros.IResolvable;
    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Zones`, which is used to query zones.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-zones
 */
export declare class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Zones";
    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * @Attribute Zones: The list of zones.
     */
    readonly attrZones: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dataDiskCategory: The category of the data disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    dataDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The billing method of the resource. For more information, see Billing overview. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The instance type.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized. Valid values:
     * none: non-I\/O optimized
     * optimized: I\/O optimized
     * Default value: optimized.
     */
    ioOptimized: string | ros.IResolvable | undefined;
    /**
     * @Property resourceType: The type of the resource. Valid values:
     * instance: ECS instance
     * disk: cloud disk
     * reservedinstance: reserved instance
     * ddh: dedicated host
     */
    resourceType: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    systemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
