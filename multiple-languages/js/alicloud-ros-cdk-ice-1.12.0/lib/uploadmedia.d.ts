import * as ros from '@alicloud/ros-cdk-core';
import { RosUploadMedia } from './ice.generated';
export { RosUploadMedia as UploadMediaProperty };
/**
 * Properties for defining a `UploadMedia`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
 */
export interface UploadMediaProps {
    /**
     * Property appId: The application ID. Default value: app-1000000.
     */
    readonly appId?: string | ros.IResolvable;
    /**
     * Property entityId: The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
     */
    readonly entityId?: string | ros.IResolvable;
    /**
     * Property fileInfo: The file information, which is in the JSON format and contains the following fields:
     * Type: required. The file type. Valid values: video, image, audio, text, and other.
     * Name: required. The file name without the extension.
     * Size: optional. The file size.
     * Ext: required. The file name extension.
     */
    readonly fileInfo?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields:
     * Title: required.
     * The value can be up to 128 characters in length.
     * The value must be encoded in UTF-8.
     * Description: optional.
     * The value can be up to 1,024 characters in length.
     * The value must be encoded in UTF-8.
     * CateId: optional.
     * Tags: optional.
     * BusinessType: required. Valid values:
     * opening or ending if Type is set to video
     * default or cover if Type is set to image
     * subtitles or font if Type is set to text
     * watermark if Type is set to material
     * general CoverURL: optional.
     * DynamicMetaData: The value is a string.
     */
    readonly mediaMetaData?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property postProcessConfig: Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow.
     */
    readonly postProcessConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property uploadTargetConfig: The destination storage address.
     * Set StorageType to oss.
     * Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
     */
    readonly uploadTargetConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property userData: The user data. The value must be a JSON string. You can configure settings such as message callbacks.
     */
    readonly userData?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * Represents a `UploadMedia`.
 */
export interface IUploadMedia extends ros.IResource {
    readonly props: UploadMediaProps;
    /**
     * Attribute FileURL: The OSS URL of the file. The URL does not contain the information used for authentication.
     */
    readonly attrFileUrl: ros.IResolvable | string;
    /**
     * Attribute MediaId: The ID of the media asset.
     */
    readonly attrMediaId: ros.IResolvable | string;
    /**
     * Attribute MediaURL: The URL of the media asset.
Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
     */
    readonly attrMediaUrl: ros.IResolvable | string;
    /**
     * Attribute UploadAddress: The upload URL.
Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    readonly attrUploadAddress: ros.IResolvable | string;
    /**
     * Attribute UploadAuth: The upload credential.
Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    readonly attrUploadAuth: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ICE::UploadMedia`, which is used to query the upload address and credential of a media asset.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUploadMedia`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
 */
export declare class UploadMedia extends ros.Resource implements IUploadMedia {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UploadMediaProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FileURL: The OSS URL of the file. The URL does not contain the information used for authentication.
     */
    readonly attrFileUrl: ros.IResolvable | string;
    /**
     * Attribute MediaId: The ID of the media asset.
     */
    readonly attrMediaId: ros.IResolvable | string;
    /**
     * Attribute MediaURL: The URL of the media asset.
Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
     */
    readonly attrMediaUrl: ros.IResolvable | string;
    /**
     * Attribute UploadAddress: The upload URL.
Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    readonly attrUploadAddress: ros.IResolvable | string;
    /**
     * Attribute UploadAuth: The upload credential.
Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    readonly attrUploadAuth: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: UploadMediaProps, enableResourcePropertyConstraint?: boolean);
}
