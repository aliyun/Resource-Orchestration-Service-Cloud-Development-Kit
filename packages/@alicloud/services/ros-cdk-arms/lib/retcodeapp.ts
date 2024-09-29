import * as ros from '@alicloud/ros-cdk-core';
import { RosRetcodeApp } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRetcodeApp as RetcodeAppProperty };

/**
 * Properties for defining a `RetcodeApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
export interface RetcodeAppProps {

    /**
     * Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    readonly regionId: string | ros.IResolvable;

    /**
     * Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    readonly retcodeAppName: string | ros.IResolvable;

    /**
     * Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    readonly retcodeAppType: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::RetcodeApp`, which is used to create a browser monitoring task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRetcodeApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
export class RetcodeApp extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RetcodeAppProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * Attribute Pid: The PID.
     */
    public readonly attrPid: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RetcodeAppProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRetcodeApp = new RosRetcodeApp(this, id,  {
            retcodeAppType: props.retcodeAppType,
            retcodeAppName: props.retcodeAppName,
            regionId: props.regionId === undefined || props.regionId === null ? 'cn-hangzhou' : props.regionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRetcodeApp;
        this.attrAppId = rosRetcodeApp.attrAppId;
        this.attrPid = rosRetcodeApp.attrPid;
    }
}
