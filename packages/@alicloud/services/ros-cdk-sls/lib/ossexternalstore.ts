import * as ros from '@alicloud/ros-cdk-core';
import { RosOssExternalStore } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOssExternalStore as OssExternalStoreProperty };

/**
 * Properties for defining a `OssExternalStore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
 */
export interface OssExternalStoreProps {

    /**
     * Property accessId: The AccessKey ID.
     */
    readonly accessId: string | ros.IResolvable;

    /**
     * Property accessKey: The AccessKey secret.
     */
    readonly accessKey: string | ros.IResolvable;

    /**
     * Property bucket: The name of the OSS bucket.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * Property columns: The associated fields.
     */
    readonly columns: Array<RosOssExternalStore.ColumnsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property endpoint: The OSS endpoint.
     */
    readonly endpoint: string | ros.IResolvable;

    /**
     * Property externalStoreName: The name of the external store.
     */
    readonly externalStoreName: string | ros.IResolvable;

    /**
     * Property objects: The associated OSS objects. Valid values of n: 1 to 100.
     */
    readonly objects: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property project: A short description of struct
     */
    readonly project: string | ros.IResolvable;

    /**
     * Property storeType: The type of the external store. Set the value to oss.
     */
    readonly storeType: string | ros.IResolvable;
}

/**
 * Represents a `OssExternalStore`.
 */
export interface IOssExternalStore extends ros.IResource {
    readonly props: OssExternalStoreProps;

    /**
     * Attribute ExternalStoreName: The name of the external store.
     */
    readonly attrExternalStoreName: ros.IResolvable | string;

    /**
     * Attribute Project: The name of the project to which the external store belongs.
     */
    readonly attrProject: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::OssExternalStore`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOssExternalStore`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
 */
export class OssExternalStore extends ros.Resource implements IOssExternalStore {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: OssExternalStoreProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ExternalStoreName: The name of the external store.
     */
    public readonly attrExternalStoreName: ros.IResolvable | string;

    /**
     * Attribute Project: The name of the project to which the external store belongs.
     */
    public readonly attrProject: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OssExternalStoreProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOssExternalStore = new RosOssExternalStore(this, id,  {
            storeType: props.storeType,
            project: props.project,
            endpoint: props.endpoint,
            bucket: props.bucket,
            accessId: props.accessId,
            objects: props.objects,
            columns: props.columns,
            accessKey: props.accessKey,
            externalStoreName: props.externalStoreName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOssExternalStore;
        this.attrExternalStoreName = rosOssExternalStore.attrExternalStoreName;
        this.attrProject = rosOssExternalStore.attrProject;
    }
}
