import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosHostGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
 */
export interface RosHostGroupProps {
    /**
     * @Property name: Host group name.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
    /**
     * @Property serviceConnectionId: Service connection.
     */
    readonly serviceConnectionId: number | ros.IResolvable;
    /**
     * @Property aliyunRegion: The aliyun region.
     */
    readonly aliyunRegion?: string | ros.IResolvable;
    /**
     * @Property ecsLabelKey: The tag key of the ECS.
     */
    readonly ecsLabelKey?: string | ros.IResolvable;
    /**
     * @Property ecsLabelValue: The tag value of the ECS.
     */
    readonly ecsLabelValue?: string | ros.IResolvable;
    /**
     * @Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
     */
    readonly ecsType?: string | ros.IResolvable;
    /**
     * @Property envId: Environment id.
     */
    readonly envId?: string | ros.IResolvable;
    /**
     * @Property machineInfos: The machine infos
     */
    readonly machineInfos?: Array<RosHostGroup.MachineInfosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tagIds: The ids of tag.
     */
    readonly tagIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property type: Host group type, currently only supports ECS.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DEVOPS::HostGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HostGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
 */
export declare class RosHostGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::HostGroup";
    /**
     * @Attribute HostGroupId: The id of the host group.
     */
    readonly attrHostGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Host group name.
     */
    name: string | ros.IResolvable;
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    organizationId: string | ros.IResolvable;
    /**
     * @Property serviceConnectionId: Service connection.
     */
    serviceConnectionId: number | ros.IResolvable;
    /**
     * @Property aliyunRegion: The aliyun region.
     */
    aliyunRegion: string | ros.IResolvable | undefined;
    /**
     * @Property ecsLabelKey: The tag key of the ECS.
     */
    ecsLabelKey: string | ros.IResolvable | undefined;
    /**
     * @Property ecsLabelValue: The tag value of the ECS.
     */
    ecsLabelValue: string | ros.IResolvable | undefined;
    /**
     * @Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
     */
    ecsType: string | ros.IResolvable | undefined;
    /**
     * @Property envId: Environment id.
     */
    envId: string | ros.IResolvable | undefined;
    /**
     * @Property machineInfos: The machine infos
     */
    machineInfos: Array<RosHostGroup.MachineInfosProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tagIds: The ids of tag.
     */
    tagIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property type: Host group type, currently only supports ECS.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHostGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosHostGroup {
    /**
     * @stability external
     */
    interface MachineInfosProperty {
        /**
         * @Property instanceName: The name of the instance.
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property machineSn: The id of the instance.
         */
        readonly machineSn: string | ros.IResolvable;
        /**
         * @Property ip: The ip address of the instance.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property aliyunRegionId: The aliyun region of the instance.
         */
        readonly aliyunRegionId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosPipeline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
 */
export interface RosPipelineProps {
    /**
     * @Property content: Pipeline description in YAML format.
     */
    readonly content: string | ros.IResolvable;
    /**
     * @Property name: Pipeline name.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DEVOPS::Pipeline`, which is used to create a pipeline. YAML-based pipelines are supported.
 * @Note This class does not contain additional functions, so it is recommended to use the `Pipeline` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
 */
export declare class RosPipeline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::Pipeline";
    /**
     * @Attribute PipelineId: Pipeline id.
     */
    readonly attrPipelineId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property content: Pipeline description in YAML format.
     */
    content: string | ros.IResolvable;
    /**
     * @Property name: Pipeline name.
     */
    name: string | ros.IResolvable;
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    organizationId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPipelineProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPipelineRelations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
 */
export interface RosPipelineRelationsProps {
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
    /**
     * @Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    readonly pipelineId: number | ros.IResolvable;
    /**
     * @Property relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
     */
    readonly relObjectIds: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property relObjectType: Associated resource type. Valid values:
     * - VARIABLE_GROUP
     * - OOS_APP_ID
     * For now, only VARIABLE GROUP is supported.
     */
    readonly relObjectType: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DEVOPS::PipelineRelations`, which is used to associate resources with a pipeline.
 * @Note This class does not contain additional functions, so it is recommended to use the `PipelineRelations` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
 */
export declare class RosPipelineRelations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::PipelineRelations";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    organizationId: string | ros.IResolvable;
    /**
     * @Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    pipelineId: number | ros.IResolvable;
    /**
     * @Property relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
     */
    relObjectIds: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property relObjectType: Associated resource type. Valid values:
     * - VARIABLE_GROUP
     * - OOS_APP_ID
     * For now, only VARIABLE GROUP is supported.
     */
    relObjectType: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPipelineRelationsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPipelineRun`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
 */
export interface RosPipelineRunProps {
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
    /**
     * @Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    readonly pipelineId: number | ros.IResolvable;
    /**
     * @Property params: Pipeline operating parameters. Keys:
     * - **branchModeBranchs**: Branch mode runs branches.
     * - **envs**: Running variables.
     * - **runningBranchs**: Running branches whose key is the warehouse address.
     * - **runningTags**: Running tags whose key is the warehouse address.
     */
    readonly params?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
     * Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
     */
    readonly sync?: boolean | ros.IResolvable;
    /**
     * @Property timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
     */
    readonly timeout?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DEVOPS::PipelineRun`, which is used to run a pipeline.
 * @Note This class does not contain additional functions, so it is recommended to use the `PipelineRun` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
 */
export declare class RosPipelineRun extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::PipelineRun";
    /**
     * @Attribute PipelineRunId: Pipeline run id.
     */
    readonly attrPipelineRunId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    organizationId: string | ros.IResolvable;
    /**
     * @Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    pipelineId: number | ros.IResolvable;
    /**
     * @Property params: Pipeline operating parameters. Keys:
     * - **branchModeBranchs**: Branch mode runs branches.
     * - **envs**: Running variables.
     * - **runningBranchs**: Running branches whose key is the warehouse address.
     * - **runningTags**: Running tags whose key is the warehouse address.
     */
    params: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
     * Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
     */
    sync: boolean | ros.IResolvable | undefined;
    /**
     * @Property timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPipelineRunProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVariableGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
 */
export interface RosVariableGroupProps {
    /**
     * @Property name: The name of variable group.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
    /**
     * @Property variables: Variables information.
     */
    readonly variables: Array<RosVariableGroup.VariablesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of variable group.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DEVOPS::VariableGroup`, which is used to create a variable group.
 * @Note This class does not contain additional functions, so it is recommended to use the `VariableGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
 */
export declare class RosVariableGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::VariableGroup";
    /**
     * @Attribute VariableGroupId: Variable group id.
     */
    readonly attrVariableGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of variable group.
     */
    name: string | ros.IResolvable;
    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    organizationId: string | ros.IResolvable;
    /**
     * @Property variables: Variables information.
     */
    variables: Array<RosVariableGroup.VariablesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of variable group.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVariableGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVariableGroup {
    /**
     * @stability external
     */
    interface VariablesProperty {
        /**
         * @Property isEncrypted: Encryption or not.
         */
        readonly isEncrypted: boolean | ros.IResolvable;
        /**
         * @Property name: Name of the variable.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property value: Value of the variable.
         */
        readonly value: string | ros.IResolvable;
    }
}
