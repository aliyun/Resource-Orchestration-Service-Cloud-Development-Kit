import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ARMS::AlertContact`
 */
export interface RosAlertContactProps {
    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    readonly contactName: string;
    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    readonly dingRobotWebhookUrl?: string;
    /**
     * @Property email: The email address of the contact.
     */
    readonly email?: string;
    /**
     * @Property phoneNum: The phone number of the contact.
     */
    readonly phoneNum?: string;
    /**
     * @Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string;
    /**
     * @Property systemNoc: Specifies whether to receive system alerts.
     */
    readonly systemNoc?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ARMS::AlertContact`
 */
export declare class RosAlertContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContact";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ContactId: The ID of the alert contact that you created.
     */
    readonly attrContactId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    contactName: string;
    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    dingRobotWebhookUrl: string | undefined;
    /**
     * @Property email: The email address of the contact.
     */
    email: string | undefined;
    /**
     * @Property phoneNum: The phone number of the contact.
     */
    phoneNum: string | undefined;
    /**
     * @Property proxyUserId: Internal parameters
     */
    proxyUserId: string | undefined;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    regionId: string | undefined;
    /**
     * @Property systemNoc: Specifies whether to receive system alerts.
     */
    systemNoc: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ARMS::AlertContact`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ARMS::AlertContactGroup`
 */
export interface RosAlertContactGroupProps {
    /**
     * @Property contactGroupName: The name of the alert contact group that you want to create.
     */
    readonly contactGroupName: string;
    /**
     * @Property contactIds: The list of alert contact ID.
     */
    readonly contactIds: number[] | ros.IResolvable;
    /**
     * @Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ARMS::AlertContactGroup`
 */
export declare class RosAlertContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContactGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ContactGroupId: The ID of the alert contact group that you created.
     */
    readonly attrContactGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactGroupName: The name of the alert contact group that you want to create.
     */
    contactGroupName: string;
    /**
     * @Property contactIds: The list of alert contact ID.
     */
    contactIds: number[] | ros.IResolvable;
    /**
     * @Property proxyUserId: Internal parameters
     */
    proxyUserId: string | undefined;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    regionId: string | undefined;
    /**
     * Create a new `ALIYUN::ARMS::AlertContactGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ARMS::RetcodeApp`
 */
export interface RosRetcodeAppProps {
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
 * A ROS template type:  `ALIYUN::ARMS::RetcodeApp`
 */
export declare class RosRetcodeApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::RetcodeApp";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    readonly attrAppId: any;
    /**
     * @Attribute Pid: The PID.
     */
    readonly attrPid: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    regionId: string;
    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    retcodeAppName: string;
    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    retcodeAppType: string;
    /**
     * Create a new `ALIYUN::ARMS::RetcodeApp`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRetcodeAppProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
