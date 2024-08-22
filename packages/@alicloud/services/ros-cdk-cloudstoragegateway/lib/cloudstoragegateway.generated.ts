// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

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
