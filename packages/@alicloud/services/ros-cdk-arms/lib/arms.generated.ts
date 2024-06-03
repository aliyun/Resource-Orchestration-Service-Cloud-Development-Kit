// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosAlertContactProps`
 *
 * @param properties - the TypeScript properties of a `RosAlertContactProps`
 *
 * @returns the result of the validation.
 */
function RosAlertContactPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('proxyUserId', ros.validateString)(properties.proxyUserId));
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    errors.collect(ros.propertyValidator('dingRobotWebhookUrl', ros.validateString)(properties.dingRobotWebhookUrl));
    errors.collect(ros.propertyValidator('phoneNum', ros.validateString)(properties.phoneNum));
    if(properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
          data: properties.regionId,
          allowedValues: ["cn-qingdao","cn-beijing","cn-shanghai","cn-hangzhou","cn-shenzhen","cn-hongkong","ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('systemNoc', ros.validateBoolean)(properties.systemNoc));
    errors.collect(ros.propertyValidator('contactName', ros.requiredValidator)(properties.contactName));
    errors.collect(ros.propertyValidator('contactName', ros.validateString)(properties.contactName));
    return errors.wrap('supplied properties not correct for "RosAlertContactProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContact` resource
 *
 * @param properties - the TypeScript properties of a `RosAlertContactProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContact` resource.
 */
// @ts-ignore TS6133
function rosAlertContactPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAlertContactPropsValidator(properties).assertSuccess();
    }
    return {
      ContactName: ros.stringToRosTemplate(properties.contactName),
      DingRobotWebhookUrl: ros.stringToRosTemplate(properties.dingRobotWebhookUrl),
      Email: ros.stringToRosTemplate(properties.email),
      PhoneNum: ros.stringToRosTemplate(properties.phoneNum),
      ProxyUserId: ros.stringToRosTemplate(properties.proxyUserId),
      RegionId: ros.stringToRosTemplate(properties.regionId),
      SystemNoc: ros.booleanToRosTemplate(properties.systemNoc),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AlertContact`, which is used to create an alert contact.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlertContact` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
 */
export class RosAlertContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContact";

    /**
     * @Attribute ContactId: The ID of the alert contact that you created.
     */
    public readonly attrContactId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    public contactName: string | ros.IResolvable;

    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    public dingRobotWebhookUrl: string | ros.IResolvable | undefined;

    /**
     * @Property email: The email address of the contact.
     */
    public email: string | ros.IResolvable | undefined;

    /**
     * @Property phoneNum: The phone number of the contact.
     */
    public phoneNum: string | ros.IResolvable | undefined;

    /**
     * @Property proxyUserId: Internal parameters
     */
    public proxyUserId: string | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * @Property systemNoc: Specifies whether to receive system alerts.
     */
    public systemNoc: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlertContact.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactId = this.getAtt('ContactId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactName = props.contactName;
        this.dingRobotWebhookUrl = props.dingRobotWebhookUrl;
        this.email = props.email;
        this.phoneNum = props.phoneNum;
        this.proxyUserId = props.proxyUserId;
        this.regionId = props.regionId;
        this.systemNoc = props.systemNoc;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            contactName: this.contactName,
            dingRobotWebhookUrl: this.dingRobotWebhookUrl,
            email: this.email,
            phoneNum: this.phoneNum,
            proxyUserId: this.proxyUserId,
            regionId: this.regionId,
            systemNoc: this.systemNoc,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlertContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosAlertContactGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAlertContactGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAlertContactGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('proxyUserId', ros.validateString)(properties.proxyUserId));
    errors.collect(ros.propertyValidator('contactGroupName', ros.requiredValidator)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('contactGroupName', ros.validateString)(properties.contactGroupName));
    if(properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
          data: properties.regionId,
          allowedValues: ["cn-qingdao","cn-beijing","cn-shanghai","cn-hangzhou","cn-shenzhen","cn-hongkong","ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('contactIds', ros.requiredValidator)(properties.contactIds));
    errors.collect(ros.propertyValidator('contactIds', ros.listValidator(ros.validateNumber))(properties.contactIds));
    return errors.wrap('supplied properties not correct for "RosAlertContactGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContactGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAlertContactGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContactGroup` resource.
 */
// @ts-ignore TS6133
function rosAlertContactGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAlertContactGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ContactGroupName: ros.stringToRosTemplate(properties.contactGroupName),
      ContactIds: ros.listMapper(ros.numberToRosTemplate)(properties.contactIds),
      ProxyUserId: ros.stringToRosTemplate(properties.proxyUserId),
      RegionId: ros.stringToRosTemplate(properties.regionId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AlertContactGroup`, which is used to create an alert contact group.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlertContactGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
 */
export class RosAlertContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContactGroup";

    /**
     * @Attribute ContactGroupId: The ID of the alert contact group that you created.
     */
    public readonly attrContactGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactGroupName: The name of the alert contact group that you want to create.
     */
    public contactGroupName: string | ros.IResolvable;

    /**
     * @Property contactIds: The list of alert contact ID.
     */
    public contactIds: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyUserId: Internal parameters
     */
    public proxyUserId: string | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlertContactGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactGroupId = this.getAtt('ContactGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactGroupName = props.contactGroupName;
        this.contactIds = props.contactIds;
        this.proxyUserId = props.proxyUserId;
        this.regionId = props.regionId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            contactGroupName: this.contactGroupName,
            contactIds: this.contactIds,
            proxyUserId: this.proxyUserId,
            regionId: this.regionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlertContactGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosApplyAlertRuleTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
export interface RosApplyAlertRuleTemplateProps {

    /**
     * @Property clusterIds: The IDs list of Prometheus Instances.
     */
    readonly clusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property templateIds: The IDs list of Prometheus alert rule templates.
     */
    readonly templateIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property update: Whether to update created alert rules. Default false.
     */
    readonly update?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApplyAlertRuleTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosApplyAlertRuleTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosApplyAlertRuleTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('update', ros.validateBoolean)(properties.update));
    if(properties.clusterIds && (Array.isArray(properties.clusterIds) || (typeof properties.clusterIds) === 'string')) {
        errors.collect(ros.propertyValidator('clusterIds', ros.validateLength)({
            data: properties.clusterIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('clusterIds', ros.listValidator(ros.validateString))(properties.clusterIds));
    if(properties.templateIds && (Array.isArray(properties.templateIds) || (typeof properties.templateIds) === 'string')) {
        errors.collect(ros.propertyValidator('templateIds', ros.validateLength)({
            data: properties.templateIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('templateIds', ros.listValidator(ros.validateString))(properties.templateIds));
    return errors.wrap('supplied properties not correct for "RosApplyAlertRuleTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ApplyAlertRuleTemplate` resource
 *
 * @param properties - the TypeScript properties of a `RosApplyAlertRuleTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ApplyAlertRuleTemplate` resource.
 */
// @ts-ignore TS6133
function rosApplyAlertRuleTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplyAlertRuleTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      ClusterIds: ros.listMapper(ros.stringToRosTemplate)(properties.clusterIds),
      TemplateIds: ros.listMapper(ros.stringToRosTemplate)(properties.templateIds),
      Update: ros.booleanToRosTemplate(properties.update),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::ApplyAlertRuleTemplate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplyAlertRuleTemplate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
export class RosApplyAlertRuleTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::ApplyAlertRuleTemplate";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterIds: The IDs list of Prometheus Instances.
     */
    public clusterIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property templateIds: The IDs list of Prometheus alert rule templates.
     */
    public templateIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property update: Whether to update created alert rules. Default false.
     */
    public update: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplyAlertRuleTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplyAlertRuleTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterIds = props.clusterIds;
        this.templateIds = props.templateIds;
        this.update = props.update;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterIds: this.clusterIds,
            templateIds: this.templateIds,
            update: this.update,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplyAlertRuleTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosManagedPrometheusProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedPrometheusProps`
 *
 * @returns the result of the validation.
 */
function RosManagedPrometheusPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    if(properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedValues)({
          data: properties.clusterType,
          allowedValues: ["ecs","ask","one"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('grafanaInstanceId', ros.validateString)(properties.grafanaInstanceId));
    return errors.wrap('supplied properties not correct for "RosManagedPrometheusProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ManagedPrometheus` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedPrometheusProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ManagedPrometheus` resource.
 */
// @ts-ignore TS6133
function rosManagedPrometheusPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedPrometheusPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      ClusterName: ros.stringToRosTemplate(properties.clusterName),
      GrafanaInstanceId: ros.stringToRosTemplate(properties.grafanaInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::ManagedPrometheus`, which is used to install a Prometheus agent in a ACK Serverless (ASK) cluster or an Elastic Compute Service (ECS) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedPrometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
export class RosManagedPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::ManagedPrometheus";

    /**
     * @Attribute ClusterType: The type of the cluster.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute VpcId: The vpc ID of the cluster.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The security group ID of the cluster.
     */
    public securityGroupId: string | ros.IResolvable;

    /**
     * @Property vpcId: The vpc ID of the cluster.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vswith ID of the cluster.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
     */
    public clusterId: string | ros.IResolvable | undefined;

    /**
     * @Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
     */
    public clusterName: string | ros.IResolvable | undefined;

    /**
     * @Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    public grafanaInstanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedPrometheusProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedPrometheus.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterType = props.clusterType;
        this.securityGroupId = props.securityGroupId;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.clusterId = props.clusterId;
        this.clusterName = props.clusterName;
        this.grafanaInstanceId = props.grafanaInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterType: this.clusterType,
            securityGroupId: this.securityGroupId,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            clusterId: this.clusterId,
            clusterName: this.clusterName,
            grafanaInstanceId: this.grafanaInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedPrometheusPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosPrometheusProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheusProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheusPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    if(properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedValues)({
          data: properties.clusterType,
          allowedValues: ["vpc-prometheus","ManagedKubernetes","cloud-product-prometheus","remote-write-prometheus","GlobalViewV2","ecs","global-view"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosPrometheus_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('subClustersJson', ros.listValidator(ros.validateAny))(properties.subClustersJson));
    errors.collect(ros.propertyValidator('grafanaInstanceId', ros.requiredValidator)(properties.grafanaInstanceId));
    errors.collect(ros.propertyValidator('grafanaInstanceId', ros.validateString)(properties.grafanaInstanceId));
    errors.collect(ros.propertyValidator('prometheusName', ros.requiredValidator)(properties.prometheusName));
    errors.collect(ros.propertyValidator('prometheusName', ros.validateString)(properties.prometheusName));
    return errors.wrap('supplied properties not correct for "RosPrometheusProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Prometheus` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheusProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Prometheus` resource.
 */
// @ts-ignore TS6133
function rosPrometheusPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheusPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      GrafanaInstanceId: ros.stringToRosTemplate(properties.grafanaInstanceId),
      PrometheusName: ros.stringToRosTemplate(properties.prometheusName),
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SubClustersJson: ros.listMapper(ros.objectToRosTemplate)(properties.subClustersJson),
      Tags: ros.listMapper(rosPrometheusTagsPropertyToRosTemplate)(properties.tags),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::Prometheus`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
export class RosPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::Prometheus";

    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterType: Instance type.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute GrafanaInstanceId: Grafana workspace ID.
     */
    public readonly attrGrafanaInstanceId: ros.IResolvable;

    /**
     * @Attribute PaymentType: Payment Type.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute PrometheusName: The name of the resource.
     */
    public readonly attrPrometheusName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: The ID of the security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute SubClustersJson: Subcluster information of globalVeiw cluster.
     */
    public readonly attrSubClustersJson: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the prometheus.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute UserId: User ID.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC).
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterType: Instance type.
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property grafanaInstanceId: Grafana workspace ID.
     */
    public grafanaInstanceId: string | ros.IResolvable;

    /**
     * @Property prometheusName: The name of the resource.
     */
    public prometheusName: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
     */
    public clusterId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    public subClustersJson: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of prometheus.
     */
    public tags: RosPrometheus.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheusProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheus.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrGrafanaInstanceId = this.getAtt('GrafanaInstanceId');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPrometheusName = this.getAtt('PrometheusName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrSubClustersJson = this.getAtt('SubClustersJson');
        this.attrTags = this.getAtt('Tags');
        this.attrUserId = this.getAtt('UserId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterType = props.clusterType;
        this.grafanaInstanceId = props.grafanaInstanceId;
        this.prometheusName = props.prometheusName;
        this.clusterId = props.clusterId;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.subClustersJson = props.subClustersJson;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterType: this.clusterType,
            grafanaInstanceId: this.grafanaInstanceId,
            prometheusName: this.prometheusName,
            clusterId: this.clusterId,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            subClustersJson: this.subClustersJson,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheusPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPrometheus {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosPrometheus_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Prometheus.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Prometheus.Tags` resource.
 */
// @ts-ignore TS6133
function rosPrometheusTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrometheus_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
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
 * Determine whether the given properties match those of a `RosRetcodeAppProps`
 *
 * @param properties - the TypeScript properties of a `RosRetcodeAppProps`
 *
 * @returns the result of the validation.
 */
function RosRetcodeAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('retcodeAppType', ros.requiredValidator)(properties.retcodeAppType));
    errors.collect(ros.propertyValidator('retcodeAppType', ros.validateString)(properties.retcodeAppType));
    errors.collect(ros.propertyValidator('retcodeAppName', ros.requiredValidator)(properties.retcodeAppName));
    errors.collect(ros.propertyValidator('retcodeAppName', ros.validateString)(properties.retcodeAppName));
    errors.collect(ros.propertyValidator('regionId', ros.requiredValidator)(properties.regionId));
    if(properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
          data: properties.regionId,
          allowedValues: ["cn-hangzhou","ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "RosRetcodeAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::RetcodeApp` resource
 *
 * @param properties - the TypeScript properties of a `RosRetcodeAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::RetcodeApp` resource.
 */
// @ts-ignore TS6133
function rosRetcodeAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRetcodeAppPropsValidator(properties).assertSuccess();
    }
    return {
      RegionId: ros.stringToRosTemplate(properties.regionId),
      RetcodeAppName: ros.stringToRosTemplate(properties.retcodeAppName),
      RetcodeAppType: ros.stringToRosTemplate(properties.retcodeAppType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::RetcodeApp`, which is used to create an Application Real-Time Monitoring Service (ARMS) browser monitoring job.
 * @Note This class does not contain additional functions, so it is recommended to use the `RetcodeApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
export class RosRetcodeApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::RetcodeApp";

    /**
     * @Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute Pid: The PID.
     */
    public readonly attrPid: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    public regionId: string | ros.IResolvable;

    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    public retcodeAppName: string | ros.IResolvable;

    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    public retcodeAppType: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRetcodeAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRetcodeApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrPid = this.getAtt('Pid');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.regionId = props.regionId;
        this.retcodeAppName = props.retcodeAppName;
        this.retcodeAppType = props.retcodeAppType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            regionId: this.regionId,
            retcodeAppName: this.retcodeAppName,
            retcodeAppType: this.retcodeAppType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRetcodeAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
