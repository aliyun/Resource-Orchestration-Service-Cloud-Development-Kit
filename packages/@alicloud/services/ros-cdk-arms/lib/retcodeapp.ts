import * as ros from '@alicloud/ros-cdk-core';
import { RosRetcodeApp } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRetcodeApp as RetcodeAppProperty };

/**
 * Properties for defining a `ALIYUN::ARMS::RetcodeApp`
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
 * A ROS resource type:  `ALIYUN::ARMS::RetcodeApp`
 */
export class RetcodeApp extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * Attribute Pid: The PID.
     */
    public readonly attrPid: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ARMS::RetcodeApp`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RetcodeAppProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRetcodeApp = new RosRetcodeApp(this, id,  {
            retcodeAppType: props.retcodeAppType,
            retcodeAppName: props.retcodeAppName,
            regionId: props.regionId ? props.regionId : 'cn-hangzhou',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRetcodeApp;
        this.attrAppId = rosRetcodeApp.attrAppId;
        this.attrPid = rosRetcodeApp.attrPid;
    }
}
