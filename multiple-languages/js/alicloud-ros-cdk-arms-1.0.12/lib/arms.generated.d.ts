import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ARMS::AlertContact`
 */
export interface RosAlertContactProps {
    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    readonly contactName: string | ros.IResolvable;
    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    readonly dingRobotWebhookUrl?: string | ros.IResolvable;
    /**
     * @Property email: The email address of the contact.
     */
    readonly email?: string | ros.IResolvable;
    /**
     * @Property phoneNum: The phone number of the contact.
     */
    readonly phoneNum?: string | ros.IResolvable;
    /**
     * @Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string | ros.IResolvable;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string | ros.IResolvable;
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
    readonly attrContactId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    contactName: string | ros.IResolvable;
    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    dingRobotWebhookUrl: string | ros.IResolvable | undefined;
    /**
     * @Property email: The email address of the contact.
     */
    email: string | ros.IResolvable | undefined;
    /**
     * @Property phoneNum: The phone number of the contact.
     */
    phoneNum: string | ros.IResolvable | undefined;
    /**
     * @Property proxyUserId: Internal parameters
     */
    proxyUserId: string | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    regionId: string | ros.IResolvable | undefined;
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
    readonly contactGroupName: string | ros.IResolvable;
    /**
     * @Property contactIds: The list of alert contact ID.
     */
    readonly contactIds: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string | ros.IResolvable;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string | ros.IResolvable;
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
    readonly attrContactGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactGroupName: The name of the alert contact group that you want to create.
     */
    contactGroupName: string | ros.IResolvable;
    /**
     * @Property contactIds: The list of alert contact ID.
     */
    contactIds: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyUserId: Internal parameters
     */
    proxyUserId: string | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    regionId: string | ros.IResolvable | undefined;
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
 * Properties for defining a `ALIYUN::ARMS::ManagedPrometheus`
 */
export interface RosManagedPrometheusProps {
    /**
     * @Property clusterType: The type of the cluster.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The security group ID of the cluster.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * @Property vpcId: The vpc ID of the cluster.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vswith ID of the cluster.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property clusterName: The name of the cluster.
     */
    readonly clusterName?: string | ros.IResolvable;
    /**
     * @Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    readonly grafanaInstanceId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ARMS::ManagedPrometheus`
 */
export declare class RosManagedPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::ManagedPrometheus";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterType: The type of the cluster.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute VpcId: The vpc ID of the cluster.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterType: The type of the cluster.
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The security group ID of the cluster.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property vpcId: The vpc ID of the cluster.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vswith ID of the cluster.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property clusterName: The name of the cluster.
     */
    clusterName: string | ros.IResolvable | undefined;
    /**
     * @Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    grafanaInstanceId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ARMS::ManagedPrometheus`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedPrometheusProps, enableResourcePropertyConstraint: boolean);
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
    readonly regionId: string | ros.IResolvable;
    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    readonly retcodeAppName: string | ros.IResolvable;
    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    readonly retcodeAppType: string | ros.IResolvable;
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
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute Pid: The PID.
     */
    readonly attrPid: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    regionId: string | ros.IResolvable;
    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    retcodeAppName: string | ros.IResolvable;
    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    retcodeAppType: string | ros.IResolvable;
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
