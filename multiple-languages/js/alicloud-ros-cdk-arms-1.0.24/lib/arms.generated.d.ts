import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAlertContact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AlertContact`, which is used to create an alert contact.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlertContact` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
 */
export declare class RosAlertContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContact";
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
 * Properties for defining a `RosAlertContactGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AlertContactGroup`, which is used to create an alert contact group.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlertContactGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
 */
export declare class RosAlertContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContactGroup";
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
 * Properties for defining a `RosManagedPrometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
export interface RosManagedPrometheusProps {
    /**
     * @Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
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
     * @Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
     */
    readonly clusterName?: string | ros.IResolvable;
    /**
     * @Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    readonly grafanaInstanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::ManagedPrometheus`, which is used to install a Prometheus agent in a ACK Serverless (ASK) cluster or an Elastic Compute Service (ECS) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedPrometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
export declare class RosManagedPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::ManagedPrometheus";
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
     * @Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
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
     * @Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
     */
    clusterId: string | ros.IResolvable | undefined;
    /**
     * @Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
     */
    clusterName: string | ros.IResolvable | undefined;
    /**
     * @Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    grafanaInstanceId: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosPrometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
export interface RosPrometheusProps {
    /**
     * @Property clusterType: Instance type.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property grafanaInstanceId: Grafana workspace ID.
     */
    readonly grafanaInstanceId: string | ros.IResolvable;
    /**
     * @Property prometheusName: The name of the resource.
     */
    readonly prometheusName: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    readonly subClustersJson?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags of prometheus.
     */
    readonly tags?: RosPrometheus.TagsProperty[];
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::Prometheus`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
export declare class RosPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::Prometheus";
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterType: Instance type.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute GrafanaInstanceId: Grafana workspace ID.
     */
    readonly attrGrafanaInstanceId: ros.IResolvable;
    /**
     * @Attribute PaymentType: Payment Type.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute PrometheusName: The name of the resource.
     */
    readonly attrPrometheusName: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: The ID of the security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute SubClustersJson: Subcluster information of globalVeiw cluster.
     */
    readonly attrSubClustersJson: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the prometheus.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute UserId: User ID.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC).
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterType: Instance type.
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property grafanaInstanceId: Grafana workspace ID.
     */
    grafanaInstanceId: string | ros.IResolvable;
    /**
     * @Property prometheusName: The name of the resource.
     */
    prometheusName: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
     */
    clusterId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    subClustersJson: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of prometheus.
     */
    tags: RosPrometheus.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheusProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPrometheus {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosRetcodeApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::RetcodeApp`, which is used to create an Application Real-Time Monitoring Service (ARMS) browser monitoring job.
 * @Note This class does not contain additional functions, so it is recommended to use the `RetcodeApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
export declare class RosRetcodeApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::RetcodeApp";
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
