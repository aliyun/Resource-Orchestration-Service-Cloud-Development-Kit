import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::FC::Aliases`
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
}
/**
 * A ROS template type:  `DATASOURCE::FC::Aliases`
 */
export declare class RosAliases extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Aliases";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::FC::Aliases`.
     *
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
 * Properties for defining a `DATASOURCE::FC::CustomDomains`
 */
export interface RosCustomDomainsProps {
    /**
     * @Property prefix: Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is "a", the returned custom domain names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::FC::CustomDomains`
 */
export declare class RosCustomDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::CustomDomains";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::FC::CustomDomains`.
     *
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
 * Properties for defining a `DATASOURCE::FC::Functions`
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
}
/**
 * A ROS template type:  `DATASOURCE::FC::Functions`
 */
export declare class RosFunctions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Functions";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::FC::Functions`.
     *
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
 * Properties for defining a `DATASOURCE::FC::Services`
 */
export interface RosServicesProps {
    /**
     * @Property prefix: Qualified returned service names must be prefixed with Prefix. For example, if the Prefix is "a", the returned service names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::FC::Services`
 */
export declare class RosServices extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Services";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::FC::Services`.
     *
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
 * Properties for defining a `DATASOURCE::FC::Triggers`
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
}
/**
 * A ROS template type:  `DATASOURCE::FC::Triggers`
 */
export declare class RosTriggers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Triggers";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::FC::Triggers`.
     *
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
