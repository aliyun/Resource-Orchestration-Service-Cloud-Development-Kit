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
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudPhone::Image`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Image` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
 */
export declare class RosImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::Image";
    /**
     * @Attribute CreateTime: Image creation time, in ISO 8601 format.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: Image description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute ImageCategory: Image type.
     */
    readonly attrImageCategory: ros.IResolvable;
    /**
     * @Attribute ImageId: Image ID.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * @Attribute ImageName: The name of the mirror image.
     */
    readonly attrImageName: ros.IResolvable;
    /**
     * @Attribute IsSelfShared: Whether the image has been shared with other users.
     */
    readonly attrIsSelfShared: ros.IResolvable;
    /**
     * @Attribute OsName: The Chinese display name of the operating system.
     */
    readonly attrOsName: ros.IResolvable;
    /**
     * @Attribute OsNameEn: The English display name of the operating system.
     */
    readonly attrOsNameEn: ros.IResolvable;
    /**
     * @Attribute OsType: Operating system type.
     */
    readonly attrOsType: ros.IResolvable;
    /**
     * @Attribute Platform: Operating system distribution.
     */
    readonly attrPlatform: ros.IResolvable;
    /**
     * @Attribute Progress: The progress of mirror image production.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * @Attribute Status: Image state.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute Usage: Whether the image is already running in the cloud phone instance.
     */
    readonly attrUsage: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: Image ID.
     */
    imageId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageProps, enableResourcePropertyConstraint: boolean);
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
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudPhone::Images`, which is used to query the information about available images.
 * @Note This class does not contain additional functions, so it is recommended to use the `Images` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
 */
export declare class RosImages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::Images";
    /**
     * @Attribute ImageIds: The list of image IDs.
     */
    readonly attrImageIds: ros.IResolvable;
    /**
     * @Attribute Images: The list of images.
     */
    readonly attrImages: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageCategory: Mirror type.
     */
    imageCategory: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: Image ID.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property imageName: The name of the mirror image.
     */
    imageName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImagesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosKeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
 */
export interface RosKeyPairProps {
    /**
     * @Property keyPairName: The Key Name.
     */
    readonly keyPairName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudPhone::KeyPair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
 */
export declare class RosKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::KeyPair";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute KeyPairFingerPrint: The Private Key of the Fingerprint.
     */
    readonly attrKeyPairFingerPrint: ros.IResolvable;
    /**
     * @Attribute KeyPairName: The Key Name.
     */
    readonly attrKeyPairName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keyPairName: The Key Name.
     */
    keyPairName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairProps, enableResourcePropertyConstraint: boolean);
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
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudPhone::KeyPairs`, which is used to query the information about key pairs.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPairs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs
 */
export declare class RosKeyPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::KeyPairs";
    /**
     * @Attribute KeyPairNames: The list of key pair names.
     */
    readonly attrKeyPairNames: ros.IResolvable;
    /**
     * @Attribute KeyPairs: The list of key pairs.
     */
    readonly attrKeyPairs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keyPairFingerPrint: The Private Key of the Fingerprint.
     */
    keyPairFingerPrint: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: The Key Name.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
