import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DLF::Catalog`
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
     * @Property locationUri: Location uri, for example: oss://dlf-test-oss-location/
     */
    readonly locationUri?: string | ros.IResolvable;
    /**
     * @Property owner: Person in charge, principal format. Empty auto-fill with current creator identity
     */
    readonly owner?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::DLF::Catalog`
 */
export declare class RosCatalog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DLF::Catalog";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property locationUri: Location uri, for example: oss://dlf-test-oss-location/
     */
    locationUri: string | ros.IResolvable | undefined;
    /**
     * @Property owner: Person in charge, principal format. Empty auto-fill with current creator identity
     */
    owner: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::DLF::Catalog`.
     *
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
