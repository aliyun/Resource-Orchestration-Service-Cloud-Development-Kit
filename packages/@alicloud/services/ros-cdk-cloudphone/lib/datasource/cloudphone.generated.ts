// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosImage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
 */
export interface RosImageProps {

    /**
     * @Property imageId: Image ID.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImageProps`
 *
 * @param properties - the TypeScript properties of a `RosImageProps`
 *
 * @returns the result of the validation.
 */
function RosImagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosImageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CloudPhone::Image` resource
 *
 * @param properties - the TypeScript properties of a `RosImageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CloudPhone::Image` resource.
 */
// @ts-ignore TS6133
function rosImagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImagePropsValidator(properties).assertSuccess();
    }
    return {
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudPhone::Image`, which is used to query the information about an image.
 * @Note This class does not contain additional functions, so it is recommended to use the `Image` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
 */
export class RosImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::Image";

    /**
     * @Attribute CreateTime: Image creation time, in ISO 8601 format.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: Image description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute ImageCategory: Image type.
     */
    public readonly attrImageCategory: ros.IResolvable;

    /**
     * @Attribute ImageId: Image ID.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * @Attribute ImageName: The name of the mirror image.
     */
    public readonly attrImageName: ros.IResolvable;

    /**
     * @Attribute IsSelfShared: Whether the image has been shared with other users.
     */
    public readonly attrIsSelfShared: ros.IResolvable;

    /**
     * @Attribute OsName: The Chinese display name of the operating system.
     */
    public readonly attrOsName: ros.IResolvable;

    /**
     * @Attribute OsNameEn: The English display name of the operating system.
     */
    public readonly attrOsNameEn: ros.IResolvable;

    /**
     * @Attribute OsType: Operating system type.
     */
    public readonly attrOsType: ros.IResolvable;

    /**
     * @Attribute Platform: Operating system distribution.
     */
    public readonly attrPlatform: ros.IResolvable;

    /**
     * @Attribute Progress: The progress of mirror image production.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * @Attribute Status: Image state.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute Usage: Whether the image is already running in the cloud phone instance.
     */
    public readonly attrUsage: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: Image ID.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrImageCategory = this.getAtt('ImageCategory');
        this.attrImageId = this.getAtt('ImageId');
        this.attrImageName = this.getAtt('ImageName');
        this.attrIsSelfShared = this.getAtt('IsSelfShared');
        this.attrOsName = this.getAtt('OsName');
        this.attrOsNameEn = this.getAtt('OsNameEn');
        this.attrOsType = this.getAtt('OsType');
        this.attrPlatform = this.getAtt('Platform');
        this.attrProgress = this.getAtt('Progress');
        this.attrStatus = this.getAtt('Status');
        this.attrUsage = this.getAtt('Usage');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosImages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
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

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'ImageCategory': ros.stringToRosTemplate(properties.imageCategory),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'ImageName': ros.stringToRosTemplate(properties.imageName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudPhone::Images`, which is used to query the information about available images.
 * @Note This class does not contain additional functions, so it is recommended to use the `Images` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
 */
export class RosImages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::Images";

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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
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
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageCategory: this.imageCategory,
            imageId: this.imageId,
            imageName: this.imageName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImagesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosKeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
 */
export interface RosKeyPairProps {

    /**
     * @Property keyPairName: The Key Name.
     */
    readonly keyPairName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKeyPairProps`
 *
 * @param properties - the TypeScript properties of a `RosKeyPairProps`
 *
 * @returns the result of the validation.
 */
function RosKeyPairPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.requiredValidator)(properties.keyPairName));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosKeyPairProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CloudPhone::KeyPair` resource
 *
 * @param properties - the TypeScript properties of a `RosKeyPairProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CloudPhone::KeyPair` resource.
 */
// @ts-ignore TS6133
function rosKeyPairPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKeyPairPropsValidator(properties).assertSuccess();
    }
    return {
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudPhone::KeyPair`, which is used to query the information about a key pair.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
 */
export class RosKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::KeyPair";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute KeyPairFingerPrint: The Private Key of the Fingerprint.
     */
    public readonly attrKeyPairFingerPrint: ros.IResolvable;

    /**
     * @Attribute KeyPairName: The Key Name.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keyPairName: The Key Name.
     */
    public keyPairName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKeyPair.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrKeyPairFingerPrint = this.getAtt('KeyPairFingerPrint');
        this.attrKeyPairName = this.getAtt('KeyPairName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyPairName = props.keyPairName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyPairName: this.keyPairName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeyPairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosKeyPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs
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

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'KeyPairFingerPrint': ros.stringToRosTemplate(properties.keyPairFingerPrint),
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudPhone::KeyPairs`, which is used to query the information about key pairs.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPairs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs
 */
export class RosKeyPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::KeyPairs";

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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
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
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyPairFingerPrint: this.keyPairFingerPrint,
            keyPairName: this.keyPairName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeyPairsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
