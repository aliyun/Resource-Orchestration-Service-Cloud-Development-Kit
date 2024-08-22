// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosImageCache`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
 */
export interface RosImageCacheProps {

    /**
     * @Property imageCacheId: ImageCacheId.
     */
    readonly imageCacheId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImageCacheProps`
 *
 * @param properties - the TypeScript properties of a `RosImageCacheProps`
 *
 * @returns the result of the validation.
 */
function RosImageCachePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageCacheId', ros.requiredValidator)(properties.imageCacheId));
    errors.collect(ros.propertyValidator('imageCacheId', ros.validateString)(properties.imageCacheId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosImageCacheProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECI::ImageCache` resource
 *
 * @param properties - the TypeScript properties of a `RosImageCacheProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECI::ImageCache` resource.
 */
// @ts-ignore TS6133
function rosImageCachePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImageCachePropsValidator(properties).assertSuccess();
    }
    return {
      'ImageCacheId': ros.stringToRosTemplate(properties.imageCacheId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECI::ImageCache`, which is used to query the information about an image cache.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageCache` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
 */
export class RosImageCache extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECI::ImageCache";

    /**
     * @Attribute ContainerGroupId: ContainerGroupId.
     */
    public readonly attrContainerGroupId: ros.IResolvable;

    /**
     * @Attribute CreateTime: CreateTime.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EliminationStrategy: The elimination strategy of the mirror cache. The default is empty, indicating that it has been kept.
     */
    public readonly attrEliminationStrategy: ros.IResolvable;

    /**
     * @Attribute Events: Events.
     */
    public readonly attrEvents: ros.IResolvable;

    /**
     * @Attribute ExpireDateTime: ExpireDateTime.
     */
    public readonly attrExpireDateTime: ros.IResolvable;

    /**
     * @Attribute FlashSnapshotId: FlashSnapshotId.
     */
    public readonly attrFlashSnapshotId: ros.IResolvable;

    /**
     * @Attribute ImageCacheId: ImageCacheId.
     */
    public readonly attrImageCacheId: ros.IResolvable;

    /**
     * @Attribute ImageCacheName: ImageCacheName.
     */
    public readonly attrImageCacheName: ros.IResolvable;

    /**
     * @Attribute ImageCacheSize: ImageCacheSize.
     */
    public readonly attrImageCacheSize: ros.IResolvable;

    /**
     * @Attribute ImageCacheTags: Tags.
     */
    public readonly attrImageCacheTags: ros.IResolvable;

    /**
     * @Attribute Images: Images.
     */
    public readonly attrImages: ros.IResolvable;

    /**
     * @Attribute Progress: Progress.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: ResourceGroupId.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SnapshotId: SnapshotId.
     */
    public readonly attrSnapshotId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageCacheId: ImageCacheId.
     */
    public imageCacheId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosImageCacheProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImageCache.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContainerGroupId = this.getAtt('ContainerGroupId');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEliminationStrategy = this.getAtt('EliminationStrategy');
        this.attrEvents = this.getAtt('Events');
        this.attrExpireDateTime = this.getAtt('ExpireDateTime');
        this.attrFlashSnapshotId = this.getAtt('FlashSnapshotId');
        this.attrImageCacheId = this.getAtt('ImageCacheId');
        this.attrImageCacheName = this.getAtt('ImageCacheName');
        this.attrImageCacheSize = this.getAtt('ImageCacheSize');
        this.attrImageCacheTags = this.getAtt('ImageCacheTags');
        this.attrImages = this.getAtt('Images');
        this.attrProgress = this.getAtt('Progress');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSnapshotId = this.getAtt('SnapshotId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageCacheId = props.imageCacheId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageCacheId: this.imageCacheId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImageCachePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosImageCaches`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
 */
export interface RosImageCachesProps {

    /**
     * @Property imageCacheId: ImageCacheId.
     */
    readonly imageCacheId?: string | ros.IResolvable;

    /**
     * @Property imageCacheName: ImageCacheName.
     */
    readonly imageCacheName?: string | ros.IResolvable;

    /**
     * @Property limit: Number of pages.
     */
    readonly limit?: number | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: ResourceGroupId.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property snapshotId: SnapshotId.
     */
    readonly snapshotId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImageCachesProps`
 *
 * @param properties - the TypeScript properties of a `RosImageCachesProps`
 *
 * @returns the result of the validation.
 */
function RosImageCachesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('imageCacheId', ros.validateString)(properties.imageCacheId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('imageCacheName', ros.validateString)(properties.imageCacheName));
    errors.collect(ros.propertyValidator('limit', ros.validateNumber)(properties.limit));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosImageCachesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECI::ImageCaches` resource
 *
 * @param properties - the TypeScript properties of a `RosImageCachesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECI::ImageCaches` resource.
 */
// @ts-ignore TS6133
function rosImageCachesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImageCachesPropsValidator(properties).assertSuccess();
    }
    return {
      'ImageCacheId': ros.stringToRosTemplate(properties.imageCacheId),
      'ImageCacheName': ros.stringToRosTemplate(properties.imageCacheName),
      'Limit': ros.numberToRosTemplate(properties.limit),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SnapshotId': ros.stringToRosTemplate(properties.snapshotId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECI::ImageCaches`, which is used to query multiple image caches at a time.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageCaches` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
 */
export class RosImageCaches extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECI::ImageCaches";

    /**
     * @Attribute ImageCacheIds: The list of image cache IDs.
     */
    public readonly attrImageCacheIds: ros.IResolvable;

    /**
     * @Attribute ImageCaches: The list of image caches.
     */
    public readonly attrImageCaches: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageCacheId: ImageCacheId.
     */
    public imageCacheId: string | ros.IResolvable | undefined;

    /**
     * @Property imageCacheName: ImageCacheName.
     */
    public imageCacheName: string | ros.IResolvable | undefined;

    /**
     * @Property limit: Number of pages.
     */
    public limit: number | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: ResourceGroupId.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotId: SnapshotId.
     */
    public snapshotId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageCachesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImageCaches.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrImageCacheIds = this.getAtt('ImageCacheIds');
        this.attrImageCaches = this.getAtt('ImageCaches');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageCacheId = props.imageCacheId;
        this.imageCacheName = props.imageCacheName;
        this.limit = props.limit;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.snapshotId = props.snapshotId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageCacheId: this.imageCacheId,
            imageCacheName: this.imageCacheName,
            limit: this.limit,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            snapshotId: this.snapshotId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImageCachesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
