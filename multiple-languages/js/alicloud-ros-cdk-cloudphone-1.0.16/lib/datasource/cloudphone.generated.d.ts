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
 * A ROS template type:  `DATASOURCE::CloudPhone::Images`
 */
export declare class RosImages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::Images";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::CloudPhone::Images`.
     *
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
 * A ROS template type:  `DATASOURCE::CloudPhone::KeyPairs`
 */
export declare class RosKeyPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudPhone::KeyPairs";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::CloudPhone::KeyPairs`.
     *
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
