import * as ros from '@alicloud/ros-cdk-core';
import { RosUserSourceLogConfig } from './cloudsiem.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUserSourceLogConfig as UserSourceLogConfigProperty };

/**
 * Properties for defining a `UserSourceLogConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
 */
export interface UserSourceLogConfigProps {

    /**
     * Property sourceLogCode: The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
     */
    readonly sourceLogCode: string | ros.IResolvable;

    /**
     * Property sourceLogInfo: The info of log to be added.
     */
    readonly sourceLogInfo: RosUserSourceLogConfig.SourceLogInfoProperty | ros.IResolvable;

    /**
     * Property sourceProdCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
     */
    readonly sourceProdCode: string | ros.IResolvable;

    /**
     * Property subUserId: The Id of the account to be submitted.
     */
    readonly subUserId: string | ros.IResolvable;
}

/**
 * Represents a `UserSourceLogConfig`.
 */
export interface IUserSourceLogConfig extends ros.IResource {
    readonly props: UserSourceLogConfigProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSiem::UserSourceLogConfig`, which is used to add logs of a cloud service within an account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserSourceLogConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
 */
export class UserSourceLogConfig extends ros.Resource implements IUserSourceLogConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UserSourceLogConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserSourceLogConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUserSourceLogConfig = new RosUserSourceLogConfig(this, id,  {
            sourceProdCode: props.sourceProdCode,
            subUserId: props.subUserId,
            sourceLogInfo: props.sourceLogInfo,
            sourceLogCode: props.sourceLogCode,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserSourceLogConfig;
    }
}
