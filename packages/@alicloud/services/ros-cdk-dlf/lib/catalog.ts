import * as ros from '@alicloud/ros-cdk-core';
import { RosCatalog } from './dlf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCatalog as CatalogProperty };

/**
 * Properties for defining a `ALIYUN::DLF::Catalog`
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
     * Property locationUri: Location uri, for example: oss://dlf-test-oss-location/
     */
    readonly locationUri?: string | ros.IResolvable;

    /**
     * Property owner: Person in charge, principal format. Empty auto-fill with current creator identity
     */
    readonly owner?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::DLF::Catalog`
 */
export class Catalog extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CatalogId: Catalog ID
     */
    public readonly attrCatalogId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::DLF::Catalog`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CatalogProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCatalog = new RosCatalog(this, id,  {
            owner: props.owner,
            locationUri: props.locationUri,
            description: props.description,
            catalogId: props.catalogId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCatalog;
        this.attrCatalogId = rosCatalog.attrCatalogId;
    }
}
