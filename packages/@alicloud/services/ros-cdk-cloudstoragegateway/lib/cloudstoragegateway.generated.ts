// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosExpressSync`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
 */
export interface RosExpressSyncProps {

    /**
     * @Property bucketName: The name of the OSS bucket.
     */
    readonly bucketName: string | ros.IResolvable;

    /**
     * @Property bucketRegion: The region of the OSS bucket.
     */
    readonly bucketRegion: string | ros.IResolvable;

    /**
     * @Property name: The name of the ExpressSync.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property bucketPrefix: The prefix of the OSS bucket.
     */
    readonly bucketPrefix?: string | ros.IResolvable;

    /**
     * @Property description: The description of the ExpressSync.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosExpressSyncProps`
 *
 * @param properties - the TypeScript properties of a `RosExpressSyncProps`
 *
 * @returns the result of the validation.
 */
function RosExpressSyncPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketRegion', ros.requiredValidator)(properties.bucketRegion));
    errors.collect(ros.propertyValidator('bucketRegion', ros.validateString)(properties.bucketRegion));
    errors.collect(ros.propertyValidator('bucketPrefix', ros.validateString)(properties.bucketPrefix));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosExpressSyncProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudStorageGateway::ExpressSync` resource
 *
 * @param properties - the TypeScript properties of a `RosExpressSyncProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudStorageGateway::ExpressSync` resource.
 */
// @ts-ignore TS6133
function rosExpressSyncPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosExpressSyncPropsValidator(properties).assertSuccess();
    }
    return {
      'BucketName': ros.stringToRosTemplate(properties.bucketName),
      'BucketRegion': ros.stringToRosTemplate(properties.bucketRegion),
      'Name': ros.stringToRosTemplate(properties.name),
      'BucketPrefix': ros.stringToRosTemplate(properties.bucketPrefix),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudStorageGateway::ExpressSync`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ExpressSync` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
 */
export class RosExpressSync extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudStorageGateway::ExpressSync";

    /**
     * @Attribute ExpressSyncId: The ID of the ExpressSync.
     */
    public readonly attrExpressSyncId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bucketName: The name of the OSS bucket.
     */
    public bucketName: string | ros.IResolvable;

    /**
     * @Property bucketRegion: The region of the OSS bucket.
     */
    public bucketRegion: string | ros.IResolvable;

    /**
     * @Property name: The name of the ExpressSync.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property bucketPrefix: The prefix of the OSS bucket.
     */
    public bucketPrefix: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the ExpressSync.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExpressSyncProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosExpressSync.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrExpressSyncId = this.getAtt('ExpressSyncId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
        this.bucketRegion = props.bucketRegion;
        this.name = props.name;
        this.bucketPrefix = props.bucketPrefix;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bucketName: this.bucketName,
            bucketRegion: this.bucketRegion,
            name: this.name,
            bucketPrefix: this.bucketPrefix,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosExpressSyncPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
 */
export interface RosGatewayProps {

    /**
     * @Property category: The category of the gateway.
     */
    readonly category: string | ros.IResolvable;

    /**
     * @Property location: The location of the gateway.
     */
    readonly location: string | ros.IResolvable;

    /**
     * @Property name: The name of the gateway.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property type: The type of the gateway.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property description: The description of the gateway.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property gatewayClass: The class of the gateway.
     */
    readonly gatewayClass?: string | ros.IResolvable;

    /**
     * @Property postPaid: Whether the gateway is pay-as-you-go.
     */
    readonly postPaid?: boolean | ros.IResolvable;

    /**
     * @Property publicNetworkBandwidth: The public network bandwidth of the gateway.
     */
    readonly publicNetworkBandwidth?: number | ros.IResolvable;

    /**
     * @Property releaseAfterExpiration: Whether to release the gateway after expiration.
     */
    readonly releaseAfterExpiration?: boolean | ros.IResolvable;

    /**
     * @Property resourceRegionId: The region ID of the resource.
     */
    readonly resourceRegionId?: string | ros.IResolvable;

    /**
     * @Property secondaryVSwitchId: The ID of the secondary VSwitch.
     */
    readonly secondaryVSwitchId?: string | ros.IResolvable;

    /**
     * @Property storageBundleId: The ID of the storage bundle.
     */
    readonly storageBundleId?: string | ros.IResolvable;

    /**
     * @Property untrustedEnvId: The ID of the untrusted environment.
     */
    readonly untrustedEnvId?: string | ros.IResolvable;

    /**
     * @Property untrustedEnvInstanceType: The instance type of the untrusted environment.
     */
    readonly untrustedEnvInstanceType?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 0,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    if(properties.publicNetworkBandwidth && (typeof properties.publicNetworkBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('publicNetworkBandwidth', ros.validateRange)({
            data: properties.publicNetworkBandwidth,
            min: 5,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('publicNetworkBandwidth', ros.validateNumber)(properties.publicNetworkBandwidth));
    errors.collect(ros.propertyValidator('resourceRegionId', ros.validateString)(properties.resourceRegionId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('storageBundleId', ros.validateString)(properties.storageBundleId));
    errors.collect(ros.propertyValidator('secondaryVSwitchId', ros.validateString)(properties.secondaryVSwitchId));
    errors.collect(ros.propertyValidator('gatewayClass', ros.validateString)(properties.gatewayClass));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["File","Iscsi"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('untrustedEnvId', ros.validateString)(properties.untrustedEnvId));
    errors.collect(ros.propertyValidator('releaseAfterExpiration', ros.validateBoolean)(properties.releaseAfterExpiration));
    errors.collect(ros.propertyValidator('untrustedEnvInstanceType', ros.validateString)(properties.untrustedEnvInstanceType));
    errors.collect(ros.propertyValidator('postPaid', ros.validateBoolean)(properties.postPaid));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    if(properties.location && (typeof properties.location) !== 'object') {
        errors.collect(ros.propertyValidator('location', ros.validateAllowedValues)({
          data: properties.location,
          allowedValues: ["Cloud","On_Premise"],
        }));
    }
    errors.collect(ros.propertyValidator('location', ros.validateString)(properties.location));
    return errors.wrap('supplied properties not correct for "RosGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudStorageGateway::Gateway` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudStorageGateway::Gateway` resource.
 */
// @ts-ignore TS6133
function rosGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Location': ros.stringToRosTemplate(properties.location),
      'Name': ros.stringToRosTemplate(properties.name),
      'Type': ros.stringToRosTemplate(properties.type),
      'Description': ros.stringToRosTemplate(properties.description),
      'GatewayClass': ros.stringToRosTemplate(properties.gatewayClass),
      'PostPaid': ros.booleanToRosTemplate(properties.postPaid),
      'PublicNetworkBandwidth': ros.numberToRosTemplate(properties.publicNetworkBandwidth),
      'ReleaseAfterExpiration': ros.booleanToRosTemplate(properties.releaseAfterExpiration),
      'ResourceRegionId': ros.stringToRosTemplate(properties.resourceRegionId),
      'SecondaryVSwitchId': ros.stringToRosTemplate(properties.secondaryVSwitchId),
      'StorageBundleId': ros.stringToRosTemplate(properties.storageBundleId),
      'UntrustedEnvId': ros.stringToRosTemplate(properties.untrustedEnvId),
      'UntrustedEnvInstanceType': ros.stringToRosTemplate(properties.untrustedEnvInstanceType),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudStorageGateway::Gateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
 */
export class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudStorageGateway::Gateway";

    /**
     * @Attribute GatewayId: The ID of the gateway.
     */
    public readonly attrGatewayId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property category: The category of the gateway.
     */
    public category: string | ros.IResolvable;

    /**
     * @Property location: The location of the gateway.
     */
    public location: string | ros.IResolvable;

    /**
     * @Property name: The name of the gateway.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property type: The type of the gateway.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property description: The description of the gateway.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property gatewayClass: The class of the gateway.
     */
    public gatewayClass: string | ros.IResolvable | undefined;

    /**
     * @Property postPaid: Whether the gateway is pay-as-you-go.
     */
    public postPaid: boolean | ros.IResolvable | undefined;

    /**
     * @Property publicNetworkBandwidth: The public network bandwidth of the gateway.
     */
    public publicNetworkBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property releaseAfterExpiration: Whether to release the gateway after expiration.
     */
    public releaseAfterExpiration: boolean | ros.IResolvable | undefined;

    /**
     * @Property resourceRegionId: The region ID of the resource.
     */
    public resourceRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryVSwitchId: The ID of the secondary VSwitch.
     */
    public secondaryVSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property storageBundleId: The ID of the storage bundle.
     */
    public storageBundleId: string | ros.IResolvable | undefined;

    /**
     * @Property untrustedEnvId: The ID of the untrusted environment.
     */
    public untrustedEnvId: string | ros.IResolvable | undefined;

    /**
     * @Property untrustedEnvInstanceType: The instance type of the untrusted environment.
     */
    public untrustedEnvInstanceType: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGatewayId = this.getAtt('GatewayId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.category = props.category;
        this.location = props.location;
        this.name = props.name;
        this.type = props.type;
        this.description = props.description;
        this.gatewayClass = props.gatewayClass;
        this.postPaid = props.postPaid;
        this.publicNetworkBandwidth = props.publicNetworkBandwidth;
        this.releaseAfterExpiration = props.releaseAfterExpiration;
        this.resourceRegionId = props.resourceRegionId;
        this.secondaryVSwitchId = props.secondaryVSwitchId;
        this.storageBundleId = props.storageBundleId;
        this.untrustedEnvId = props.untrustedEnvId;
        this.untrustedEnvInstanceType = props.untrustedEnvInstanceType;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            category: this.category,
            location: this.location,
            name: this.name,
            type: this.type,
            description: this.description,
            gatewayClass: this.gatewayClass,
            postPaid: this.postPaid,
            publicNetworkBandwidth: this.publicNetworkBandwidth,
            releaseAfterExpiration: this.releaseAfterExpiration,
            resourceRegionId: this.resourceRegionId,
            secondaryVSwitchId: this.secondaryVSwitchId,
            storageBundleId: this.storageBundleId,
            untrustedEnvId: this.untrustedEnvId,
            untrustedEnvInstanceType: this.untrustedEnvInstanceType,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGatewayLogging`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
 */
export interface RosGatewayLoggingProps {

    /**
     * @Property gatewayId: The ID of the gateway.
     */
    readonly gatewayId: string | ros.IResolvable;

    /**
     * @Property slsLogstore: The name of the SLS log store.
     */
    readonly slsLogstore: string | ros.IResolvable;

    /**
     * @Property slsProject: The name of the SLS project.
     */
    readonly slsProject: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGatewayLoggingProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewayLoggingProps`
 *
 * @returns the result of the validation.
 */
function RosGatewayLoggingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsProject', ros.requiredValidator)(properties.slsProject));
    errors.collect(ros.propertyValidator('slsProject', ros.validateString)(properties.slsProject));
    errors.collect(ros.propertyValidator('gatewayId', ros.requiredValidator)(properties.gatewayId));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    errors.collect(ros.propertyValidator('slsLogstore', ros.requiredValidator)(properties.slsLogstore));
    errors.collect(ros.propertyValidator('slsLogstore', ros.validateString)(properties.slsLogstore));
    return errors.wrap('supplied properties not correct for "RosGatewayLoggingProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudStorageGateway::GatewayLogging` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewayLoggingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudStorageGateway::GatewayLogging` resource.
 */
// @ts-ignore TS6133
function rosGatewayLoggingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewayLoggingPropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'SlsLogstore': ros.stringToRosTemplate(properties.slsLogstore),
      'SlsProject': ros.stringToRosTemplate(properties.slsProject),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudStorageGateway::GatewayLogging`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GatewayLogging` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
 */
export class RosGatewayLogging extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudStorageGateway::GatewayLogging";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: The ID of the gateway.
     */
    public gatewayId: string | ros.IResolvable;

    /**
     * @Property slsLogstore: The name of the SLS log store.
     */
    public slsLogstore: string | ros.IResolvable;

    /**
     * @Property slsProject: The name of the SLS project.
     */
    public slsProject: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayLoggingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGatewayLogging.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.slsLogstore = props.slsLogstore;
        this.slsProject = props.slsProject;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            slsLogstore: this.slsLogstore,
            slsProject: this.slsProject,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewayLoggingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosStorageBundle`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
export interface RosStorageBundleProps {

    /**
     * @Property storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly storageBundleName: string | ros.IResolvable;

    /**
     * @Property description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStorageBundleProps`
 *
 * @param properties - the TypeScript properties of a `RosStorageBundleProps`
 *
 * @returns the result of the validation.
 */
function RosStorageBundlePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('storageBundleName', ros.requiredValidator)(properties.storageBundleName));
    errors.collect(ros.propertyValidator('storageBundleName', ros.validateString)(properties.storageBundleName));
    return errors.wrap('supplied properties not correct for "RosStorageBundleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudStorageGateway::StorageBundle` resource
 *
 * @param properties - the TypeScript properties of a `RosStorageBundleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudStorageGateway::StorageBundle` resource.
 */
// @ts-ignore TS6133
function rosStorageBundlePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStorageBundlePropsValidator(properties).assertSuccess();
    }
    return {
      'StorageBundleName': ros.stringToRosTemplate(properties.storageBundleName),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudStorageGateway::StorageBundle`, which is used to create a gateway cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `StorageBundle` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
export class RosStorageBundle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudStorageGateway::StorageBundle";

    /**
     * @Attribute CreateTime: Create a gateway cluster timestamp.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: Gateway cluster description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute StorageBundleId: The ID of the gateway cluster.
     */
    public readonly attrStorageBundleId: ros.IResolvable;

    /**
     * @Attribute StorageBundleName: Gateway cluster name.
     */
    public readonly attrStorageBundleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    public storageBundleName: string | ros.IResolvable;

    /**
     * @Property description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStorageBundleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStorageBundle.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrStorageBundleId = this.getAtt('StorageBundleId');
        this.attrStorageBundleName = this.getAtt('StorageBundleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.storageBundleName = props.storageBundleName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            storageBundleName: this.storageBundleName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStorageBundlePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
