import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCatalog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
 */
export interface RosCatalogProps {
    /**
     * @Property catalogId: Catalog ID
     */
    readonly catalogId: string | ros.IResolvable;
    /**
     * @Property description: Description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property locationUri: Location uri, for example: oss:\/\/dlf-test-oss-location\/
     */
    readonly locationUri?: string | ros.IResolvable;
    /**
     * @Property owner: Person in charge, principal format. Empty auto-fill with current creator identity
     */
    readonly owner?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DLF::Catalog`, which is used to create a catalog in Data Lake Formation (DLF).
 * @Note This class does not contain additional functions, so it is recommended to use the `Catalog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
 */
export declare class RosCatalog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DLF::Catalog";
    /**
     * @Attribute CatalogId: Catalog ID
     */
    readonly attrCatalogId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property catalogId: Catalog ID
     */
    catalogId: string | ros.IResolvable;
    /**
     * @Property description: Description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property locationUri: Location uri, for example: oss:\/\/dlf-test-oss-location\/
     */
    locationUri: string | ros.IResolvable | undefined;
    /**
     * @Property owner: Person in charge, principal format. Empty auto-fill with current creator identity
     */
    owner: string | ros.IResolvable | undefined;
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
