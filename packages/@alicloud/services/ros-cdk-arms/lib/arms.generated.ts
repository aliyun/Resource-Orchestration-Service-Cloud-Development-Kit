// Generated from the AliCloud ROS Resource Specification

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
 * A ROS template type:  `ALIYUN::ARMS::AlertContact`
 */
export class RosAlertContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContact";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ContactId: The ID of the alert contact that you created.
     */
    public readonly attrContactId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    public contactName: string;

    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    public dingRobotWebhookUrl: string | undefined;

    /**
     * @Property email: The email address of the contact.
     */
    public email: string | undefined;

    /**
     * @Property phoneNum: The phone number of the contact.
     */
    public phoneNum: string | undefined;

    /**
     * @Property proxyUserId: Internal parameters
     */
    public proxyUserId: string | undefined;

    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    public regionId: string | undefined;

    /**
     * @Property systemNoc: Specifies whether to receive system alerts.
     */
    public systemNoc: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ARMS::AlertContact`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlertContact.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactId = ros.Token.asString(this.getAtt('ContactId'));

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
 * A ROS template type:  `ALIYUN::ARMS::AlertContactGroup`
 */
export class RosAlertContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContactGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ContactGroupId: The ID of the alert contact group that you created.
     */
    public readonly attrContactGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactGroupName: The name of the alert contact group that you want to create.
     */
    public contactGroupName: string;

    /**
     * @Property contactIds: The list of alert contact ID.
     */
    public contactIds: number[] | ros.IResolvable;

    /**
     * @Property proxyUserId: Internal parameters
     */
    public proxyUserId: string | undefined;

    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    public regionId: string | undefined;

    /**
     * Create a new `ALIYUN::ARMS::AlertContactGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlertContactGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactGroupId = ros.Token.asString(this.getAtt('ContactGroupId'));

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
 * A ROS template type:  `ALIYUN::ARMS::RetcodeApp`
 */
export class RosRetcodeApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::RetcodeApp";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    public readonly attrAppId: any;

    /**
     * @Attribute Pid: The PID.
     */
    public readonly attrPid: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    public regionId: string;

    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    public retcodeAppName: string;

    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    public retcodeAppType: string;

    /**
     * Create a new `ALIYUN::ARMS::RetcodeApp`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRetcodeAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRetcodeApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = ros.Token.asString(this.getAtt('AppId'));
        this.attrPid = ros.Token.asString(this.getAtt('Pid'));

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
