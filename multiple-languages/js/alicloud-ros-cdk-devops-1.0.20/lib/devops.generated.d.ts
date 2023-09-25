import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DEVOPS::Pipeline`
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
 * A ROS template type:  `ALIYUN::DEVOPS::Pipeline`
 */
export declare class RosPipeline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::Pipeline";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::DEVOPS::Pipeline`.
     *
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
 * Properties for defining a `ALIYUN::DEVOPS::VariableGroup`
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
 * A ROS template type:  `ALIYUN::DEVOPS::VariableGroup`
 */
export declare class RosVariableGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::VariableGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::DEVOPS::VariableGroup`.
     *
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
