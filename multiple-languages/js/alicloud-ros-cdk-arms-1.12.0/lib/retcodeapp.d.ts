import * as ros from '@alicloud/ros-cdk-core';
import { RosRetcodeApp } from './arms.generated';
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
 * Represents a `RetcodeApp`.
 */
export interface IRetcodeApp extends ros.IResource {
    readonly props: RetcodeAppProps;
    /**
     * Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute Pid: The PID.
     */
    readonly attrPid: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::RetcodeApp`, which is used to create a browser monitoring task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRetcodeApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
export declare class RetcodeApp extends ros.Resource implements IRetcodeApp {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RetcodeAppProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute Pid: The PID.
     */
    readonly attrPid: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RetcodeAppProps, enableResourcePropertyConstraint?: boolean);
}
