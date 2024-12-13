import * as ros from '@alicloud/ros-cdk-core';
import { RosInsertMediaToSearchLib } from './ice.generated';
export { RosInsertMediaToSearchLib as InsertMediaToSearchLibProperty };
/**
 * Properties for defining a `InsertMediaToSearchLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
 */
export interface InsertMediaToSearchLibProps {
    /**
     * Property input: The URL of the video, audio, or image file that you want to import to the search library.
     * Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
     * Specify an Object Storage Service (OSS) URL in the following format: oss:\/\/[Bucket name]\/[File path]. For example, you can specify oss:\/\/[example-bucket-]\/[object_path-].
     * Specify an HTTP URL in the following format: public endpoint. For example, you can specify http:\/\/example-test-****.mp4.
     */
    readonly input: string | ros.IResolvable;
    /**
     * Property mediaId: The ID of the media asset. Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
     */
    readonly mediaId?: string | ros.IResolvable;
    /**
     * Property mediaType: The type of the media asset. Valid values:
     * video (default)
     * image
     * audio
     */
    readonly mediaType?: string | ros.IResolvable;
    /**
     * Property msgBody: The message body.
     */
    readonly msgBody?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property searchLibName: The name of the search library. Default value: ims-default-search-lib.
     */
    readonly searchLibName?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ICE::InsertMediaToSearchLib`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInsertMediaToSearchLib`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
 */
export declare class InsertMediaToSearchLib extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InsertMediaToSearchLibProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute MediaId: The ID of the media asset.
     */
    readonly attrMediaId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InsertMediaToSearchLibProps, enableResourcePropertyConstraint?: boolean);
}
