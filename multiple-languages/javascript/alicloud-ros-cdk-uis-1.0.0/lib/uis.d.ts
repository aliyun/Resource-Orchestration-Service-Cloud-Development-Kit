import * as ros from '@alicloud/ros-cdk-core';
import { RosUis } from './uis.generated';
export { RosUis as UisProperty };
/**
 * Properties for defining a `ALIYUN::UIS::Uis`
 */
export interface UisProps {
    /**
     * @Property description: Description of the instance.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string;
    /**
     * @Property name: The name of the instance.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string;
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
     * @Attribute ClientInfoDB: The client info DB.
     */
    readonly attrClientInfoDb: any;
    /**
     * @Attribute ClientInfoDBAccount: The client info DB account.
     */
    readonly attrClientInfoDbAccount: any;
    /**
     * @Attribute ClientInfoDBPassword: The client info DB password.
     */
    readonly attrClientInfoDbPassword: any;
    /**
     * @Attribute SslClientCertUrl: The ssl client cert url.
     */
    readonly attrSslClientCertUrl: any;
    /**
     * @Attribute UisId: The ID of the instance.
     */
    readonly attrUisId: any;
    /**
     * Create a new `ALIYUN::UIS::Uis`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: UisProps, enableResourcePropertyConstraint?: boolean);
}
