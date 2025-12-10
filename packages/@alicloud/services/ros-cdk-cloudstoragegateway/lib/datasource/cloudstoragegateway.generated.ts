// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosStorageBundle`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundle
 */
export interface RosStorageBundleProps {

    /**
     * @Property storageBundleId: The ID of the gateway cluster.
     */
    readonly storageBundleId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('storageBundleId', ros.requiredValidator)(properties.storageBundleId));
    errors.collect(ros.propertyValidator('storageBundleId', ros.validateString)(properties.storageBundleId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosStorageBundleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CloudStorageGateway::StorageBundle` resource
 *
 * @param properties - the TypeScript properties of a `RosStorageBundleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CloudStorageGateway::StorageBundle` resource.
 */
// @ts-ignore TS6133
function rosStorageBundlePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStorageBundlePropsValidator(properties).assertSuccess();
    }
    return {
      'StorageBundleId': ros.stringToRosTemplate(properties.storageBundleId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudStorageGateway::StorageBundle`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StorageBundle` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundle
 */
export class RosStorageBundle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudStorageGateway::StorageBundle";

    /**
     * @Attribute CreateTime: The timestamp when the gateway cluster was created. Unit: seconds.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the gateway cluster.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute StorageBundleId: The ID of the gateway cluster.
     */
    public readonly attrStorageBundleId: ros.IResolvable;

    /**
     * @Attribute StorageBundleName: The name of the gateway cluster.
     */
    public readonly attrStorageBundleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property storageBundleId: The ID of the gateway cluster.
     */
    public storageBundleId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

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
        this.storageBundleId = props.storageBundleId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            storageBundleId: this.storageBundleId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStorageBundlePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosStorageBundles`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundles
 */
export interface RosStorageBundlesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStorageBundlesProps`
 *
 * @param properties - the TypeScript properties of a `RosStorageBundlesProps`
 *
 * @returns the result of the validation.
 */
function RosStorageBundlesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosStorageBundlesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CloudStorageGateway::StorageBundles` resource
 *
 * @param properties - the TypeScript properties of a `RosStorageBundlesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CloudStorageGateway::StorageBundles` resource.
 */
// @ts-ignore TS6133
function rosStorageBundlesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStorageBundlesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudStorageGateway::StorageBundles`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StorageBundles` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundles
 */
export class RosStorageBundles extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudStorageGateway::StorageBundles";

    /**
     * @Attribute StorageBundleIds: The list of storage bundle IDs.
     */
    public readonly attrStorageBundleIds: ros.IResolvable;

    /**
     * @Attribute StorageBundles: The list of storage bundles.
     */
    public readonly attrStorageBundles: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStorageBundlesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStorageBundles.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrStorageBundleIds = this.getAtt('StorageBundleIds');
        this.attrStorageBundles = this.getAtt('StorageBundles');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStorageBundlesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
