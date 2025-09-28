import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAliases`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-aliases
 */
export interface RosAliasesProps {
    /**
     * @Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property prefix: Qualified returned alias names must be prefixed with Prefix. For example, if the Prefix is "a", the returned alias names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::Aliases`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Aliases` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-aliases
 */
export declare class RosAliases extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Aliases";
    /**
     * @Attribute AliasNames: The list of alias names.
     */
    readonly attrAliasNames: ros.IResolvable;
    /**
     * @Attribute Aliases: The list of aliases.
     */
    readonly attrAliases: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceName: Service name.
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property prefix: Qualified returned alias names must be prefixed with Prefix. For example, if the Prefix is "a", the returned alias names should be started with "a".
     */
    prefix: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosAliasesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosCustomDomains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
 */
export interface RosCustomDomainsProps {
    /**
     * @Property prefix: Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is "a", the returned custom domain names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::CustomDomains`, which is used to query custom domain names in Function Compute.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomDomains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
 */
export declare class RosCustomDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::CustomDomains";
    /**
     * @Attribute CustomDomains: The list of custom_domain.
     */
    readonly attrCustomDomains: ros.IResolvable;
    /**
     * @Attribute DomainNames: The list of custom_domain names.
     */
    readonly attrDomainNames: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property prefix: Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is "a", the returned custom domain names should be started with "a".
     */
    prefix: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosCustomDomainsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosFunctions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-functions
 */
export interface RosFunctionsProps {
    /**
     * @Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property prefix: Qualified returned function names must be prefixed with Prefix. For example, if the Prefix is "a", the returned function names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
    /**
     * @Property qualifier: The service version, which can be version ID or alias name.
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::Functions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Functions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-functions
 */
export declare class RosFunctions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Functions";
    /**
     * @Attribute FunctionNames: The list of function names.
     */
    readonly attrFunctionNames: ros.IResolvable;
    /**
     * @Attribute Functions: The list of functions.
     */
    readonly attrFunctions: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceName: Service name.
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property prefix: Qualified returned function names must be prefixed with Prefix. For example, if the Prefix is "a", the returned function names should be started with "a".
     */
    prefix: string | ros.IResolvable | undefined;
    /**
     * @Property qualifier: The service version, which can be version ID or alias name.
     */
    qualifier: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosFunctionsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosServices`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-services
 */
export interface RosServicesProps {
    /**
     * @Property prefix: Qualified returned service names must be prefixed with Prefix. For example, if the Prefix is "a", the returned service names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::Services`, which is used to query services.
 * @Note This class does not contain additional functions, so it is recommended to use the `Services` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-services
 */
export declare class RosServices extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Services";
    /**
     * @Attribute ServiceNames: The list of service names.
     */
    readonly attrServiceNames: ros.IResolvable;
    /**
     * @Attribute Services: The list of services.
     */
    readonly attrServices: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property prefix: Qualified returned service names must be prefixed with Prefix. For example, if the Prefix is "a", the returned service names should be started with "a".
     */
    prefix: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosServicesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosTriggers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-triggers
 */
export interface RosTriggersProps {
    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property prefix: Qualified returned trigger names must be prefixed with Prefix. For example, if the Prefix is "a", the returned trigger names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FC::Triggers`, which is used to query triggers.
 * @Note This class does not contain additional functions, so it is recommended to use the `Triggers` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-triggers
 */
export declare class RosTriggers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Triggers";
    /**
     * @Attribute TriggerNames: The list of trigger names.
     */
    readonly attrTriggerNames: ros.IResolvable;
    /**
     * @Attribute Triggers: The list of triggers.
     */
    readonly attrTriggers: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property functionName: Function name.
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name.
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property prefix: Qualified returned trigger names must be prefixed with Prefix. For example, if the Prefix is "a", the returned trigger names should be started with "a".
     */
    prefix: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosTriggersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
