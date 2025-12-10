import * as ros from '@alicloud/ros-cdk-core';
import { RosCatalog } from './dlf.generated';
export { RosCatalog as CatalogProperty };
/**
 * Properties for defining a `Catalog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
 */
export interface CatalogProps {
    /**
     * Property catalogId: Catalog ID
     */
    readonly catalogId: string | ros.IResolvable;
    /**
     * Property description: Description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property locationUri: Location uri, for example: oss:\/\/dlf-test-oss-location\/
     */
    readonly locationUri?: string | ros.IResolvable;
    /**
     * Property owner: Person in charge, principal format. Empty auto-fill with current creator identity
     */
    readonly owner?: string | ros.IResolvable;
}
/**
 * Represents a `Catalog`.
 */
export interface ICatalog extends ros.IResource {
    readonly props: CatalogProps;
    /**
     * Attribute CatalogId: Catalog ID
     */
    readonly attrCatalogId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DLF::Catalog`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCatalog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
 */
export declare class Catalog extends ros.Resource implements ICatalog {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CatalogProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CatalogId: Catalog ID
     */
    readonly attrCatalogId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CatalogProps, enableResourcePropertyConstraint?: boolean);
}
