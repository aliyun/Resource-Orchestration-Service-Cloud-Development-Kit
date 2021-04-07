import * as ros from '@alicloud/ros-cdk-core';
import { RosUis } from './uis.generated';
export { RosUis as UisProperty };
/**
 * Properties for defining a `ALIYUN::UIS::Uis`
 */
export interface UisProps {
    /**
     * Property description: Description of the instance.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property name: The name of the instance.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::UIS::Uis`
 */
export declare class Uis extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClientInfoDB: The client info DB.
     */
    readonly attrClientInfoDb: ros.IResolvable;
    /**
     * Attribute ClientInfoDBAccount: The client info DB account.
     */
    readonly attrClientInfoDbAccount: ros.IResolvable;
    /**
     * Attribute ClientInfoDBPassword: The client info DB password.
     */
    readonly attrClientInfoDbPassword: ros.IResolvable;
    /**
     * Attribute SslClientCertUrl: The ssl client cert url.
     */
    readonly attrSslClientCertUrl: ros.IResolvable;
    /**
     * Attribute UisId: The ID of the instance.
     */
    readonly attrUisId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::UIS::Uis`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: UisProps, enableResourcePropertyConstraint?: boolean);
}
