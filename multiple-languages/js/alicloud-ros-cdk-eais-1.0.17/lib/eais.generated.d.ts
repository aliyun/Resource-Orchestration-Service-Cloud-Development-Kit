import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::EAIS::ClientInstanceAttachment`
 */
export interface RosClientInstanceAttachmentProps {
    /**
     * @Property clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly clientInstanceId: string | ros.IResolvable;
    /**
     * @Property instanceId: The EAIS instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::EAIS::ClientInstanceAttachment`
 */
export declare class RosClientInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EAIS::ClientInstanceAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly attrClientInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceId: The EAIS instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    clientInstanceId: string | ros.IResolvable;
    /**
     * @Property instanceId: The EAIS instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::EAIS::ClientInstanceAttachment`.
     *
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
 * Properties for defining a `ALIYUN::EAIS::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property createWithNotebook: When the value is true, CreateEaiJupyter is called to create an eais instance, and when the value is false, CreateEai is called to create an eais instance.
     */
    readonly createWithNotebook: boolean | ros.IResolvable;
    /**
     * @Property instanceType: EAIS instance type.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property environmentVar: Setting environment variables in eais instance on Initialization.
     */
    readonly environmentVar?: Array<RosInstance.EnvironmentVarProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceName: Name of the instance.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property paymentType: The payment type of the resource.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::EAIS::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EAIS::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property createWithNotebook: When the value is true, CreateEaiJupyter is called to create an eais instance, and when the value is false, CreateEai is called to create an eais instance.
     */
    createWithNotebook: boolean | ros.IResolvable;
    /**
     * @Property instanceType: EAIS instance type.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group ID.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Switch ID.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property environmentVar: Setting environment variables in eais instance on Initialization.
     */
    environmentVar: Array<RosInstance.EnvironmentVarProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Name of the instance.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: The payment type of the resource.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::EAIS::Instance`.
     *
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
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface EnvironmentVarProperty {
        /**
         * @Property value: Values of environment variables.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Keys for environment variables.
         */
        readonly key?: string | ros.IResolvable;
    }
}
