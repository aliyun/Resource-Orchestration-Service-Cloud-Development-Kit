// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::CloudPhone::Images`
 */
export interface RosImagesProps {

    /**
     * @Property imageCategory: Mirror type.
     */
    readonly imageCategory?: string | ros.IResolvable;

    /**
     * @Property imageId: Image ID.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property imageName: The name of the mirror image.
     */
    readonly imageName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImagesProps`
 *
 * @param properties - the TypeScript properties of a `RosImagesProps`
 *
 * @returns the result of the validation.
 */
function RosImagesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageName', ros.validateString)(properties.imageName));
    errors.collect(ros.propertyValidator('imageCategory', ros.validateString)(properties.imageCategory));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    return errors.wrap('supplied properties not correct for "RosImagesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CloudPhone::Images` resource
 *
 * @param properties - the TypeScript properties of a `RosImagesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CloudPhone::Images` resource.
 */
// @ts-ignore TS6133
function rosImagesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImagesPropsValidator(properties).assertSuccess();
    }
    return {
      ImageCategory: ros.stringToRosTemplate(properties.imageCategory),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      ImageName: ros.stringToRosTemplate(properties.imageName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::CloudPhone::Images`
 */
export class RosImages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::Images";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ImageIds: The list of image IDs.
     */
    public readonly attrImageIds: ros.IResolvable;

    /**
     * @Attribute Images: The list of images.
     */
    public readonly attrImages: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageCategory: Mirror type.
     */
    public imageCategory: string | ros.IResolvable | undefined;

    /**
     * @Property imageId: Image ID.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property imageName: The name of the mirror image.
     */
    public imageName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::CloudPhone::Images`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImagesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImages.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrImageIds = this.getAtt('ImageIds');
        this.attrImages = this.getAtt('Images');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageCategory = props.imageCategory;
        this.imageId = props.imageId;
        this.imageName = props.imageName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageCategory: this.imageCategory,
            imageId: this.imageId,
            imageName: this.imageName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImagesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::CloudPhone::KeyPairs`
 */
export interface RosKeyPairsProps {

    /**
     * @Property keyPairFingerPrint: The Private Key of the Fingerprint.
     */
    readonly keyPairFingerPrint?: string | ros.IResolvable;

    /**
     * @Property keyPairName: The Key Name.
     */
    readonly keyPairName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKeyPairsProps`
 *
 * @param properties - the TypeScript properties of a `RosKeyPairsProps`
 *
 * @returns the result of the validation.
 */
function RosKeyPairsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairFingerPrint', ros.validateString)(properties.keyPairFingerPrint));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    return errors.wrap('supplied properties not correct for "RosKeyPairsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CloudPhone::KeyPairs` resource
 *
 * @param properties - the TypeScript properties of a `RosKeyPairsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CloudPhone::KeyPairs` resource.
 */
// @ts-ignore TS6133
function rosKeyPairsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKeyPairsPropsValidator(properties).assertSuccess();
    }
    return {
      KeyPairFingerPrint: ros.stringToRosTemplate(properties.keyPairFingerPrint),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::CloudPhone::KeyPairs`
 */
export class RosKeyPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::KeyPairs";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute KeyPairNames: The list of key pair names.
     */
    public readonly attrKeyPairNames: ros.IResolvable;

    /**
     * @Attribute KeyPairs: The list of key pairs.
     */
    public readonly attrKeyPairs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keyPairFingerPrint: The Private Key of the Fingerprint.
     */
    public keyPairFingerPrint: string | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: The Key Name.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::CloudPhone::KeyPairs`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKeyPairs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrKeyPairNames = this.getAtt('KeyPairNames');
        this.attrKeyPairs = this.getAtt('KeyPairs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyPairFingerPrint = props.keyPairFingerPrint;
        this.keyPairName = props.keyPairName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyPairFingerPrint: this.keyPairFingerPrint,
            keyPairName: this.keyPairName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeyPairsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
