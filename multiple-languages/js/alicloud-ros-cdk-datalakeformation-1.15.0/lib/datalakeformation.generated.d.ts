import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCatalog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-catalog
 */
export interface RosCatalogProps {
    /**
     * @Property name: Catalog name.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property isShared: Whether it is a shared data catalog.
     */
    readonly isShared?: boolean | ros.IResolvable;
    /**
     * @Property options: Configuration parameters.
     */
    readonly options?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property shareId: Share ID.
     */
    readonly shareId?: string | ros.IResolvable;
    /**
     * @Property type: Catalog type.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataLakeFormation::Catalog`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Catalog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-catalog
 */
export declare class RosCatalog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataLakeFormation::Catalog";
    /**
     * @Attribute CatalogId: Catalog ID.
     */
    readonly attrCatalogId: ros.IResolvable;
    /**
     * @Attribute IsShared: Whether it is a shared data catalog.
     */
    readonly attrIsShared: ros.IResolvable;
    /**
     * @Attribute Name: Catalog name.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute Options: Configuration parameters.
     */
    readonly attrOptions: ros.IResolvable;
    /**
     * @Attribute ShareId: Share ID.
     */
    readonly attrShareId: ros.IResolvable;
    /**
     * @Attribute Type: Catalog type.
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Catalog name.
     */
    name: string | ros.IResolvable;
    /**
     * @Property isShared: Whether it is a shared data catalog.
     */
    isShared: boolean | ros.IResolvable | undefined;
    /**
     * @Property options: Configuration parameters.
     */
    options: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property shareId: Share ID.
     */
    shareId: string | ros.IResolvable | undefined;
    /**
     * @Property type: Catalog type.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCatalogProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPermissions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
 */
export interface RosPermissionsProps {
    /**
     * @Property catalogId: The catalog id.
     */
    readonly catalogId: string | ros.IResolvable;
    /**
     * @Property permissions: The permissions list.
     */
    readonly permissions: Array<RosPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property refreshUserSync: Specifies whether to refresh user synchronization before creating permissions. Newly created RAM users may not be immediately synchronized, requiring a refresh to ensure they are available. Set to true to enable user synchronization refresh, which may cause a 30-second wait. Set to false to skip the refresh and avoid the 30-second wait. Default value: false.
     */
    readonly refreshUserSync?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataLakeFormation::Permissions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Permissions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
 */
export declare class RosPermissions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataLakeFormation::Permissions";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property catalogId: The catalog id.
     */
    catalogId: string | ros.IResolvable;
    /**
     * @Property permissions: The permissions list.
     */
    permissions: Array<RosPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property refreshUserSync: Specifies whether to refresh user synchronization before creating permissions. Newly created RAM users may not be immediately synchronized, requiring a refresh to ensure they are available. Set to true to enable user synchronization refresh, which may cause a 30-second wait. Set to false to skip the refresh and avoid the 30-second wait. Default value: false.
     */
    refreshUserSync: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPermissionsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPermissions {
    /**
     * @stability external
     */
    interface PermissionsProperty {
        /**
         * @Property access: The access action of the granted permission.
         */
        readonly access: string | ros.IResolvable;
        /**
         * @Property resourceType: The resource type of the granted permission.
         */
        readonly resourceType: string | ros.IResolvable;
        /**
         * @Property principal: The role of the granted permissions.
         */
        readonly principal: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosVpcConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-vpcconfig
 */
export interface RosVpcConfigProps {
    /**
     * @Property vpcId: The VPC ID to be config.
     */
    readonly vpcId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataLakeFormation::VpcConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-vpcconfig
 */
export declare class RosVpcConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataLakeFormation::VpcConfig";
    /**
     * @Attribute VpcId: VPC ID.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The VPC ID to be config.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
