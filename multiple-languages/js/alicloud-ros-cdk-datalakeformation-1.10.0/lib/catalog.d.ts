import * as ros from '@alicloud/ros-cdk-core';
import { RosCatalog } from './datalakeformation.generated';
export { RosCatalog as CatalogProperty };
/**
 * Properties for defining a `Catalog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-catalog
 */
export interface CatalogProps {
    /**
     * Property name: Catalog name.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property isShared: Whether it is a shared data catalog.
     */
    readonly isShared?: boolean | ros.IResolvable;
    /**
     * Property options: Configuration parameters.
     */
    readonly options?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property shareId: Share ID.
     */
    readonly shareId?: string | ros.IResolvable;
    /**
     * Property type: Catalog type.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * Represents a `Catalog`.
 */
export interface ICatalog extends ros.IResource {
    readonly props: CatalogProps;
    /**
     * Attribute CatalogId: Catalog ID.
     */
    readonly attrCatalogId: ros.IResolvable | string;
    /**
     * Attribute IsShared: Whether it is a shared data catalog.
     */
    readonly attrIsShared: ros.IResolvable | string;
    /**
     * Attribute Name: Catalog name.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute Options: Configuration parameters.
     */
    readonly attrOptions: ros.IResolvable | string;
    /**
     * Attribute ShareId: Share ID.
     */
    readonly attrShareId: ros.IResolvable | string;
    /**
     * Attribute Type: Catalog type.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DataLakeFormation::Catalog`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCatalog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-catalog
 */
export declare class Catalog extends ros.Resource implements ICatalog {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CatalogProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CatalogId: Catalog ID.
     */
    readonly attrCatalogId: ros.IResolvable | string;
    /**
     * Attribute IsShared: Whether it is a shared data catalog.
     */
    readonly attrIsShared: ros.IResolvable | string;
    /**
     * Attribute Name: Catalog name.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute Options: Configuration parameters.
     */
    readonly attrOptions: ros.IResolvable | string;
    /**
     * Attribute ShareId: Share ID.
     */
    readonly attrShareId: ros.IResolvable | string;
    /**
     * Attribute Type: Catalog type.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CatalogProps, enableResourcePropertyConstraint?: boolean);
}
