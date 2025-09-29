import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCampaign`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
 */
export interface RosCampaignProps {
    /**
     * @Property name: The name of the campaign.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property remark: The remark of the campaign.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Campaign`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Campaign` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
 */
export declare class RosCampaign extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::Campaign";
    /**
     * @Attribute CampaignId: The Campaign ID created this time.
     */
    readonly attrCampaignId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the campaign.
     */
    name: string | ros.IResolvable;
    /**
     * @Property remark: The remark of the campaign.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCampaignProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
 */
export interface RosGroupProps {
    /**
     * @Property name: The name of the user group.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property source: Crowd source. Valid values:
     * 0: Enter phone numbers.
     * 1: Single-column CSV File (Phone Numbers).
     * 2: Multi-column CSV File.
     * 3: MaxCompute Table.
     * 4: Algorithm.
     */
    readonly source: number | ros.IResolvable;
    /**
     * @Property algorithm: Association algorithm. This must be specified when Source is 4(Algorithm).
     */
    readonly algorithm?: string | ros.IResolvable;
    /**
     * @Property column: Mobile phone number column name. The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
     */
    readonly column?: string | ros.IResolvable;
    /**
     * @Property filter: Filter condition. This condition can be specified when Source is 3(MaxCompute Table).
     */
    readonly filter?: string | ros.IResolvable;
    /**
     * @Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
     */
    readonly inferenceJobId?: string | ros.IResolvable;
    /**
     * @Property phoneNumber: Whether to include mobile phone numbers. People with mobile phone numbers can be used for reach plans.
     */
    readonly phoneNumber?: string | ros.IResolvable;
    /**
     * @Property project: MaxCompute (ODPS) project name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    readonly project?: string | ros.IResolvable;
    /**
     * @Property remark: The notes of the user group.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property table: MaxCompute (ODPS) table name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    readonly table?: string | ros.IResolvable;
    /**
     * @Property text: The text of the phone number. This must be specified when Source is 0(Enter phone numbers).
     */
    readonly text?: string | ros.IResolvable;
    /**
     * @Property uri: File address. It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
     */
    readonly uri?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Group`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::Group";
    /**
     * @Attribute Amount: The number of the user group.
     */
    readonly attrAmount: ros.IResolvable;
    /**
     * @Attribute CreatedTime: The creation time of the user group.
     */
    readonly attrCreatedTime: ros.IResolvable;
    /**
     * @Attribute Id: The ID of the user group.
     */
    readonly attrId: ros.IResolvable;
    /**
     * @Attribute Name: The name of the user group.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the user group.
     */
    name: string | ros.IResolvable;
    /**
     * @Property source: Crowd source. Valid values:
     * 0: Enter phone numbers.
     * 1: Single-column CSV File (Phone Numbers).
     * 2: Multi-column CSV File.
     * 3: MaxCompute Table.
     * 4: Algorithm.
     */
    source: number | ros.IResolvable;
    /**
     * @Property algorithm: Association algorithm. This must be specified when Source is 4(Algorithm).
     */
    algorithm: string | ros.IResolvable | undefined;
    /**
     * @Property column: Mobile phone number column name. The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
     */
    column: string | ros.IResolvable | undefined;
    /**
     * @Property filter: Filter condition. This condition can be specified when Source is 3(MaxCompute Table).
     */
    filter: string | ros.IResolvable | undefined;
    /**
     * @Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
     */
    inferenceJobId: string | ros.IResolvable | undefined;
    /**
     * @Property phoneNumber: Whether to include mobile phone numbers. People with mobile phone numbers can be used for reach plans.
     */
    phoneNumber: string | ros.IResolvable | undefined;
    /**
     * @Property project: MaxCompute (ODPS) project name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    project: string | ros.IResolvable | undefined;
    /**
     * @Property remark: The notes of the user group.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property table: MaxCompute (ODPS) table name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    table: string | ros.IResolvable | undefined;
    /**
     * @Property text: The text of the phone number. This must be specified when Source is 0(Enter phone numbers).
     */
    text: string | ros.IResolvable | undefined;
    /**
     * @Property uri: File address. It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
     */
    uri: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInferenceJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
 */
export interface RosInferenceJobProps {
    /**
     * @Property algorithm: The algorithm of inference job.
     */
    readonly algorithm: string | ros.IResolvable;
    /**
     * @Property campaignId: The campaign id of inference job.
     */
    readonly campaignId: string | ros.IResolvable;
    /**
     * @Property dataPath: The input data path of inference job.
     */
    readonly dataPath: string | ros.IResolvable;
    /**
     * @Property name: The name of inference job.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property targetPath: The output result path of inference job.
     */
    readonly targetPath: string | ros.IResolvable;
    /**
     * @Property trainingJobId: The training job id of inference job.
     */
    readonly trainingJobId: string | ros.IResolvable;
    /**
     * @Property userConfig: The user config of inference job.
     */
    readonly userConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property remark: The remark of inference job.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
     */
    readonly waitForInferenceFinish?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::InferenceJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InferenceJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
 */
export declare class RosInferenceJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::InferenceJob";
    /**
     * @Attribute GroupId: The related group id of infernce job result.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute InferenceJobId: The id of inference job.
     */
    readonly attrInferenceJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property algorithm: The algorithm of inference job.
     */
    algorithm: string | ros.IResolvable;
    /**
     * @Property campaignId: The campaign id of inference job.
     */
    campaignId: string | ros.IResolvable;
    /**
     * @Property dataPath: The input data path of inference job.
     */
    dataPath: string | ros.IResolvable;
    /**
     * @Property name: The name of inference job.
     */
    name: string | ros.IResolvable;
    /**
     * @Property targetPath: The output result path of inference job.
     */
    targetPath: string | ros.IResolvable;
    /**
     * @Property trainingJobId: The training job id of inference job.
     */
    trainingJobId: string | ros.IResolvable;
    /**
     * @Property userConfig: The user config of inference job.
     */
    userConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property remark: The remark of inference job.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
     */
    waitForInferenceFinish: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInferenceJobProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSignature`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-signature
 */
export interface RosSignatureProps {
    /**
     * @Property name: The name of the Signature.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property description: Application instructions.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Signature`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Signature` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-signature
 */
export declare class RosSignature extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::Signature";
    /**
     * @Attribute CreatedTime: The creation time of the Signature.
     */
    readonly attrCreatedTime: ros.IResolvable;
    /**
     * @Attribute Description: Application instructions.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute Id: The ID of the Signature.
     */
    readonly attrId: ros.IResolvable;
    /**
     * @Attribute Name: The name of the Signature.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute Reason: Review recommendations.
     */
    readonly attrReason: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the Signature.
     */
    name: string | ros.IResolvable;
    /**
     * @Property description: Application instructions.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSignatureProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
 */
export interface RosTemplateProps {
    /**
     * @Property content: The content of the template.
     */
    readonly content: string | ros.IResolvable;
    /**
     * @Property description: For the template content, please keep the total word count within 70 words. The excess will be charged as long text messages. Each text message is recorded as 67 words.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property name: The name of the template.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property type: The type of the template. The following values are supported:
     * 0: Verification code.
     * 1: SMS notification.
     * 2: Promotional SMS.
     */
    readonly type: number | ros.IResolvable;
    /**
     * @Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.
     */
    readonly signature?: string | ros.IResolvable;
    /**
     * @Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.
     */
    readonly signatureId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Template`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Template` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
 */
export declare class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::Template";
    /**
     * @Attribute CreatedTime: The creation time of the Signature.
     */
    readonly attrCreatedTime: ros.IResolvable;
    /**
     * @Attribute Description: Application instructions.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute Id: The ID of the Signature.
     */
    readonly attrId: ros.IResolvable;
    /**
     * @Attribute Name: The name of the Signature.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute Reason: Review recommendations.
     */
    readonly attrReason: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property content: The content of the template.
     */
    content: string | ros.IResolvable;
    /**
     * @Property description: For the template content, please keep the total word count within 70 words. The excess will be charged as long text messages. Each text message is recorded as 67 words.
     */
    description: string | ros.IResolvable;
    /**
     * @Property name: The name of the template.
     */
    name: string | ros.IResolvable;
    /**
     * @Property type: The type of the template. The following values are supported:
     * 0: Verification code.
     * 1: SMS notification.
     * 2: Promotional SMS.
     */
    type: number | ros.IResolvable;
    /**
     * @Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.
     */
    signature: string | ros.IResolvable | undefined;
    /**
     * @Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.
     */
    signatureId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosTrainingJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
 */
export interface RosTrainingJobProps {
    /**
     * @Property algorithm: The algorithm used in training.
     */
    readonly algorithm: string | ros.IResolvable;
    /**
     * @Property campaignId: The related campaign Id.
     */
    readonly campaignId: string | ros.IResolvable;
    /**
     * @Property dataPath: The training data path in OSS bucket.
     */
    readonly dataPath: string | ros.IResolvable;
    /**
     * @Property name: The name of training job.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
     */
    readonly userConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property remark: The remark of training job.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
     */
    readonly waitForTrainingFinish?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::TrainingJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrainingJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
 */
export declare class RosTrainingJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::TrainingJob";
    /**
     * @Attribute TrainingJobId: The training job id.
     */
    readonly attrTrainingJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property algorithm: The algorithm used in training.
     */
    algorithm: string | ros.IResolvable;
    /**
     * @Property campaignId: The related campaign Id.
     */
    campaignId: string | ros.IResolvable;
    /**
     * @Property dataPath: The training data path in OSS bucket.
     */
    dataPath: string | ros.IResolvable;
    /**
     * @Property name: The name of training job.
     */
    name: string | ros.IResolvable;
    /**
     * @Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
     */
    userConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property remark: The remark of training job.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
     */
    waitForTrainingFinish: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrainingJobProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
