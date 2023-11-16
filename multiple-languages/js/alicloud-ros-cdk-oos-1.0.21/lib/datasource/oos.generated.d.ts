import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::OOS::PatchBaselines`
 */
export interface RosPatchBaselinesProps {
    /**
     * @Property operationSystem: Operating system type.
     */
    readonly operationSystem?: string | ros.IResolvable;
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName?: string | ros.IResolvable;
    /**
     * @Property shareType: Patch baseline sharing type.
     */
    readonly shareType?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::OOS::PatchBaselines`
 */
export declare class RosPatchBaselines extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::PatchBaselines";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute PatchBaselineNames: The list of patch baseline names.
     */
    readonly attrPatchBaselineNames: ros.IResolvable;
    /**
     * @Attribute PatchBaselines: The list of patch baselines.
     */
    readonly attrPatchBaselines: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property operationSystem: Operating system type.
     */
    operationSystem: string | ros.IResolvable | undefined;
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    patchBaselineName: string | ros.IResolvable | undefined;
    /**
     * @Property shareType: Patch baseline sharing type.
     */
    shareType: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::OOS::PatchBaselines`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPatchBaselinesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::OOS::SecretParameters`
 */
export interface RosSecretParametersProps {
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property secretParameterName: The name of the encryption parameter.
     */
    readonly secretParameterName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::OOS::SecretParameters`
 */
export declare class RosSecretParameters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::SecretParameters";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SecretParameterNames: The list of secret parameter names.
     */
    readonly attrSecretParameterNames: ros.IResolvable;
    /**
     * @Attribute SecretParameters: The list of secret parameters.
     */
    readonly attrSecretParameters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property secretParameterName: The name of the encryption parameter.
     */
    secretParameterName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::OOS::SecretParameters`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretParametersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
