import * as ros from '@alicloud/ros-cdk-core';
import { RosUis } from './uis.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Uis extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClientInfoDB: The client info DB.
     */
    public readonly attrClientInfoDb: ros.IResolvable;

    /**
     * Attribute ClientInfoDBAccount: The client info DB account.
     */
    public readonly attrClientInfoDbAccount: ros.IResolvable;

    /**
     * Attribute ClientInfoDBPassword: The client info DB password.
     */
    public readonly attrClientInfoDbPassword: ros.IResolvable;

    /**
     * Attribute SslClientCertUrl: The ssl client cert url.
     */
    public readonly attrSslClientCertUrl: ros.IResolvable;

    /**
     * Attribute UisId: The ID of the instance.
     */
    public readonly attrUisId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::UIS::Uis`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UisProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosUis = new RosUis(this, id,  {
            description: props.description,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUis;
        this.attrClientInfoDb = rosUis.attrClientInfoDb;
        this.attrClientInfoDbAccount = rosUis.attrClientInfoDbAccount;
        this.attrClientInfoDbPassword = rosUis.attrClientInfoDbPassword;
        this.attrSslClientCertUrl = rosUis.attrSslClientCertUrl;
        this.attrUisId = rosUis.attrUisId;
    }
}
