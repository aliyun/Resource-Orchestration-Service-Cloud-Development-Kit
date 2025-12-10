// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosCatalogProps`
 *
 * @param properties - the TypeScript properties of a `RosCatalogProps`
 *
 * @returns the result of the validation.
 */
function RosCatalogPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('owner', ros.validateString)(properties.owner));
    errors.collect(ros.propertyValidator('locationUri', ros.validateString)(properties.locationUri));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('catalogId', ros.requiredValidator)(properties.catalogId));
    if(properties.catalogId && (typeof properties.catalogId) !== 'object') {
        errors.collect(ros.propertyValidator('catalogId', ros.validateAllowedPattern)({
          data: properties.catalogId,
          reg: /^[a-zA-Z][a-zA-Z0-9_]{1,255}/
        }));
    }
    errors.collect(ros.propertyValidator('catalogId', ros.validateString)(properties.catalogId));
    return errors.wrap('supplied properties not correct for "RosCatalogProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DLF::Catalog` resource
 *
 * @param properties - the TypeScript properties of a `RosCatalogProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DLF::Catalog` resource.
 */
// @ts-ignore TS6133
function rosCatalogPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCatalogPropsValidator(properties).assertSuccess();
    }
    return {
      'CatalogId': ros.stringToRosTemplate(properties.catalogId),
      'Description': ros.stringToRosTemplate(properties.description),
      'LocationUri': ros.stringToRosTemplate(properties.locationUri),
      'Owner': ros.stringToRosTemplate(properties.owner),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DLF::Catalog`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Catalog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
 */
export class RosCatalog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DLF::Catalog";

    /**
     * @Attribute CatalogId: Catalog ID
     */
    public readonly attrCatalogId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property catalogId: Catalog ID
     */
    public catalogId: string | ros.IResolvable;

    /**
     * @Property description: Description
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property locationUri: Location uri, for example: oss:\/\/dlf-test-oss-location\/
     */
    public locationUri: string | ros.IResolvable | undefined;

    /**
     * @Property owner: Person in charge, principal format. Empty auto-fill with current creator identity
     */
    public owner: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCatalogProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCatalog.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCatalogId = this.getAtt('CatalogId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.catalogId = props.catalogId;
        this.description = props.description;
        this.locationUri = props.locationUri;
        this.owner = props.owner;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            catalogId: this.catalogId,
            description: this.description,
            locationUri: this.locationUri,
            owner: this.owner,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCatalogPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
