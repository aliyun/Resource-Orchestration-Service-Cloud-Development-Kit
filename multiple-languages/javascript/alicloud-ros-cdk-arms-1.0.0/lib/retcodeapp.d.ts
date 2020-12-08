import * as ros from '@alicloud/ros-cdk-core';
import { RosRetcodeApp } from './arms.generated';
export { RosRetcodeApp as RetcodeAppProperty };
/**
 * Properties for defining a `ALIYUN::ARMS::RetcodeApp`
 */
export interface RetcodeAppProps {
    /**
     * @Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    readonly regionId: string;
    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    readonly retcodeAppName: string;
    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    readonly retcodeAppType: string;
}
/**
 * A ROS resource type:  `ALIYUN::ARMS::RetcodeApp`
 */
export declare class RetcodeApp extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    readonly attrAppId: any;
    /**
     * @Attribute Pid: The PID.
     */
    readonly attrPid: any;
    /**
     * Create a new `ALIYUN::ARMS::RetcodeApp`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RetcodeAppProps, enableResourcePropertyConstraint?: boolean);
}
