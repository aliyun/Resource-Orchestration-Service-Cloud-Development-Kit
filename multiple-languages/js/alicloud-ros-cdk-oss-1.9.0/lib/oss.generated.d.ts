import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosBucket`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
 */
export interface RosBucketProps {
    /**
     * @Property bucketName: bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * @Property accessControl: The access control list.
     */
    readonly accessControl?: string | ros.IResolvable;
    /**
     * @Property blockPublicAccess: Whether to block public access.
     */
    readonly blockPublicAccess?: boolean | ros.IResolvable;
    /**
     * @Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
     */
    readonly corsConfiguration?: RosBucket.CORSConfigurationProperty | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property enableOssHdfsService: Whether enable OSS-HDFS service.
     * **Note**: Once it's enabled, it can't be disabled again.
     */
    readonly enableOssHdfsService?: boolean | ros.IResolvable;
    /**
     * @Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
     */
    readonly lifecycleConfiguration?: RosBucket.LifecycleConfigurationProperty | ros.IResolvable;
    /**
     * @Property loggingConfiguration: Settings that defines where logs are stored.
     */
    readonly loggingConfiguration?: RosBucket.LoggingConfigurationProperty | ros.IResolvable;
    /**
     * @Property policy: Bucket policy
     */
    readonly policy?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
     * LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
     * ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
     */
    readonly redundancyType?: string | ros.IResolvable;
    /**
     * @Property refererConfiguration: undefined
     */
    readonly refererConfiguration?: RosBucket.RefererConfigurationProperty | ros.IResolvable;
    /**
     * @Property resourceGroupId: The resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
     */
    readonly serverSideEncryptionConfiguration?: RosBucket.ServerSideEncryptionConfigurationProperty | ros.IResolvable;
    /**
     * @Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
     */
    readonly storageClass?: string | ros.IResolvable;
    /**
     * @Property tags: Bucket tags in k-v pairs format.
     */
    readonly tags?: {
        [key: string]: (any);
    };
    /**
     * @Property versioningConfiguration: A state of versioning
     */
    readonly versioningConfiguration?: RosBucket.VersioningConfigurationProperty | ros.IResolvable;
    /**
     * @Property websiteConfigurationV2: Website configuration.
     */
    readonly websiteConfigurationV2?: RosBucket.WebsiteConfigurationV2Property | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Bucket`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Bucket` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
 */
export declare class RosBucket extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Bucket";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute DomainName: The public DNS name of the specified bucket.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * @Attribute InternalDomainName: The internal DNS name of the specified bucket.
     */
    readonly attrInternalDomainName: ros.IResolvable;
    /**
     * @Attribute Name: The name of Bucket
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucketName: bucket name.
     */
    bucketName: string | ros.IResolvable;
    /**
     * @Property accessControl: The access control list.
     */
    accessControl: string | ros.IResolvable | undefined;
    /**
     * @Property blockPublicAccess: Whether to block public access.
     */
    blockPublicAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
     */
    corsConfiguration: RosBucket.CORSConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableOssHdfsService: Whether enable OSS-HDFS service.
     * **Note**: Once it's enabled, it can't be disabled again.
     */
    enableOssHdfsService: boolean | ros.IResolvable | undefined;
    /**
     * @Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
     */
    lifecycleConfiguration: RosBucket.LifecycleConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property loggingConfiguration: Settings that defines where logs are stored.
     */
    loggingConfiguration: RosBucket.LoggingConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property policy: Bucket policy
     */
    policy: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
     * LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
     * ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
     */
    redundancyType: string | ros.IResolvable | undefined;
    /**
     * @Property refererConfiguration: undefined
     */
    refererConfiguration: RosBucket.RefererConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
     */
    serverSideEncryptionConfiguration: RosBucket.ServerSideEncryptionConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
     */
    storageClass: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Bucket tags in k-v pairs format.
     */
    tags: {
        [key: string]: (any);
    } | undefined;
    /**
     * @Property versioningConfiguration: A state of versioning
     */
    versioningConfiguration: RosBucket.VersioningConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property websiteConfigurationV2: Website configuration.
     */
    websiteConfigurationV2: RosBucket.WebsiteConfigurationV2Property | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBucketProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface AbortMultipartUploadProperty {
        /**
         * @Property createdBeforeDate: undefined
         */
        readonly createdBeforeDate?: string | ros.IResolvable;
        /**
         * @Property days: undefined
         */
        readonly days?: number | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface CORSConfigurationProperty {
        /**
         * @Property responseVary: Whether to return the Vary: Origin header. The range is as follows:
     * - true: The Vary: Origin header is returned regardless of whether a cross-origin request was sent or whether the cross-origin request was successful.
     * - false (default) : Do not return the Vary: Origin header under any circumstances
     * Note: This field cannot be configured separately; at least one cross-domain rule must be configured to take effect.
         */
        readonly responseVary?: boolean | ros.IResolvable;
        /**
         * @Property corsRule: A set of origins and methods that you allow.
         */
        readonly corsRule?: Array<RosBucket.CORSRuleProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface CORSRuleProperty {
        /**
         * @Property allowedMethod: undefined
         */
        readonly allowedMethod?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property maxAgeSeconds: undefined
         */
        readonly maxAgeSeconds?: number | ros.IResolvable;
        /**
         * @Property exposeHeader: undefined
         */
        readonly exposeHeader?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property allowedOrigin: undefined
         */
        readonly allowedOrigin?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property allowedHeader: undefined
         */
        readonly allowedHeader?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface ConditionProperty {
        /**
         * @Property includeHeaders: This rule will only match if the request contains the specified Header and the value is the specified value. Up to 10.
         */
        readonly includeHeaders?: Array<RosBucket.IncludeHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property keyPrefixEquals: The prefix of the Object name to be matched.
         */
        readonly keyPrefixEquals?: string | ros.IResolvable;
        /**
         * @Property httpErrorCodeReturnedEquals: When accessing the specified Object, this status must be returned to match this rule. This field must be 404 when the jump rule is mirror-back to the source type.
         */
        readonly httpErrorCodeReturnedEquals?: string | ros.IResolvable;
        /**
         * @Property keySuffixEquals: The suffix of the Object name to be matched.
         */
        readonly keySuffixEquals?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface ErrorDocumentProperty {
        /**
         * @Property httpStatus: The HTTP status code of the error page. Valid values: 200, 404 (default).
         */
        readonly httpStatus?: string | ros.IResolvable;
        /**
         * @Property key: The default error page.
     * When an error page is specified, if the accessed Object does not exist, this error page is returned.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface ExpirationProperty {
        /**
         * @Property expiredObjectDeleteMarker: Specifies whether expired delete tags should be removed automatically. The values are as follows:
     * - true: This means that the expiration delete flag is automatically removed. When set to true, specifying Days or CreatedBeforeDate is not supported.
     * - false: This indicates that the expiration delete marker will not be automatically removed. When false, either Days or CreatedBeforeDate must be specified.
         */
        readonly expiredObjectDeleteMarker?: boolean | ros.IResolvable;
        /**
         * @Property createdBeforeDate: undefined
         */
        readonly createdBeforeDate?: string | ros.IResolvable;
        /**
         * @Property days: undefined
         */
        readonly days?: number | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface FilterProperty {
        /**
         * @Property not: undefined
         */
        readonly not?: RosBucket.NotProperty | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface IncludeHeadersProperty {
        /**
         * @Property key: The name of the header.
         */
        readonly key: string | ros.IResolvable;
        /**
         * @Property equalsTo: The value of the header.
         */
        readonly equalsTo?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface IndexDocumentProperty {
        /**
         * @Property type: Behavior when an Object that ends with a non-forward slash (\/) and does not exist is accessed after setting the default home page. It only takes effect when SupportSubDir is set to true, and it takes effect after RoutingRule and before ErrorFile.
     * Assume that the default home page for the index. The HTML, to access the file path for bucket.oss-cn-hangzhou.aliyuncs.com\/abc, and ABC this Object does not exist, at this moment, in different values corresponding to the Type of behavior is as follows:
     * - 0 (default) : Check if abc\/index.html exists (Object + forward slash (\/) + home page) and return 302 with the URL code of \/abc\/ as Location header (forward slash (\/) + Object + forward slash (\/)). If it doesn't, it will return 404 and keep checking ErrorFile.
     * - 1: Directly return 404, error NoSuchKey, continue to check ErrorFile.
     * - 2: Check if abc\/index.html exists and return the contents of the Object if it does. If it doesn't, it will return 404 and keep checking ErrorFile.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property suffix: Default home page.
     * After setting the default home page, if you visit an Object ending with a forward slash (\/), OSS will return to this default home page.
         */
        readonly suffix: string | ros.IResolvable;
        /**
         * @Property supportSubDir: Whether to jump to the default home page of a subdirectory when accessing it. The range is as follows:
     * - true: Go to the default home page in a subdirectory.
     * - false (default) : Instead of going to the default home page in a subdirectory, go to the default home page in the root directory.
     * Assume that the default home page for the index. The HTML, to access bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/, if set SupportSubDir to false, Then go to bucket.oss-cn-hangzhou.aliyuncs.com\/index.html; If set SupportSubDir is true, then transferred to the bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/index.html.
         */
        readonly supportSubDir?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface LifecycleConfigurationProperty {
        /**
         * @Property rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
         */
        readonly rule: Array<RosBucket.RuleProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface LoggingConfigurationProperty {
        /**
         * @Property targetPrefix: This element lets you specify a prefix for the objects that the log files will be stored.
         */
        readonly targetPrefix?: string | ros.IResolvable;
        /**
         * @Property targetBucket: Specifies the bucket where you want Aliyun OSS to store server access logs.
         */
        readonly targetBucket?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface MirrorHeadersProperty {
        /**
         * @Property passAll: Whether to pass through other headers to the source except the following headers. This only works if RedirectType is set to Mirror.
     * - content-length, authorization2, authorization, range, date and other headers
     * - Headers starting with oss-\/x-oss-\/x-drs-
     * Default value: false
         */
        readonly passAll?: boolean | ros.IResolvable;
        /**
         * @Property pass: Pass through the specified Header to the source. This only works if RedirectType is set to Mirror.
     * Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
     * A maximum of 10 can be specified for this field.
         */
        readonly pass?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sets: Set a Header to the origin, and it will be set when the request is sent back to the origin, regardless of whether the specified headers are included in the request. This only works if RedirectType is set to Mirror.
     * Up to 10 groups can be specified for this container.
         */
        readonly sets?: Array<RosBucket.SetsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property remove: Disables pass-through of the specified Header to the source. This only works if RedirectType is set to Mirror.
     * Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
     * A maximum of 10 can be specified for this field.
         */
        readonly remove?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface NotProperty {
        /**
         * @Property prefix: The Object prefix to which this exclusion rule applies.
     * - If Prefix is configured under Rule node, the Prefix under Not node must be prefixed by the Prefix under Rule node. For example, if the Prefix configured under the Rule node is dir, the Prefix under the Not node must begin with dir, such as dir1, dir2, and so on.
     * - If the Tag is Not configured under the Not node, the Prefix configured under the NOT node cannot be the same as the Prefix configured under the Rule node.
         */
        readonly prefix?: string | ros.IResolvable;
        /**
         * @Property tag: At most one Object tag to which this exclusion rule applies.
         */
        readonly tag?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface RedirectProperty {
        /**
         * @Property mirrorUrl: Mirror back to the source station address of the source. This only works if RedirectType is set to Mirror.
     * The origin URL must begin with http:\/\/ or https:\/\/ and end with a forward slash (\/), which OSS will follow with the Object name to form the return URL.
     * Name to access the Object myobject, for example, if you specify this to http:\/\/example.com\/, then back to the source URL for http:\/\/example.com\/myobject, if you specify this to http:\/\/example.com\/dir1\/, Back to the source URL as http:\/\/example.com\/dir1\/myobject.
         */
        readonly mirrorUrl?: string | ros.IResolvable;
        /**
         * @Property replaceKeyWith: With Redirect, the Object name is replaced with the value specified by ReplaceKeyWith, which allows you to set variables. The currently supported variable is ${key}, which represents the name of the Object in the request.
     * Suppose to access the Object for the test, if set ReplaceKeyWith to prefix\/${key}. The suffix, is the Location head to http:\/\/example.com\/prefix\/test.suffix.
         */
        readonly replaceKeyWith?: string | ros.IResolvable;
        /**
         * @Property mirrorHeaders: Specifies the Header that is mirrored back to the source. This only works if RedirectType is set to Mirror.
         */
        readonly mirrorHeaders?: RosBucket.MirrorHeadersProperty | ros.IResolvable;
        /**
         * @Property httpRedirectCode: Status code returned when jumping. Only if RedirectType is set to External or AliCDN.The default value is 302.
     * Value: 301, 302, 307
         */
        readonly httpRedirectCode?: string | ros.IResolvable;
        /**
         * @Property enableReplacePrefix: If you set this field to true, the prefix of Object is replaced with the value specified by ReplaceKeyPrefixWith. If this field is not specified or is empty, it means that the Object prefix is truncated.
     * Notes: This field cannot be set to true when the ReplaceKeyWith field is not null.
     * Default value: false
         */
        readonly enableReplacePrefix?: boolean | ros.IResolvable;
        /**
         * @Property passQueryString: Whether to carry request parameters when performing a jump or mirroring back to the source rule.
     * Does the user request OSS with the request parameters? a=b&c=d, and set PassQueryString to true, if the rule is a 302 jump, then this request parameter is added in the Location header of the jump. For example, Location:example.com?a=b&c=d, the jump type is mirror back to the source, then this request parameter will also be carried in the initiated back to the source request.
     * Valid values: true, false (default)
         */
        readonly passQueryString?: boolean | ros.IResolvable;
        /**
         * @Property mirrorFollowRedirect: If the result obtained by mirriling back to the source is 3xx, whether to continue to jump to the specified Location to obtain data. This only works if RedirectType is set to Mirror.
     * For example, when we mirror back to the source, the source returns a 302 with Location specified.
     * - If set to true, OSS will continue to request the Location.
     * It can jump up to 10 times, and if it jumps more than 10 times, it fails to return the mirror back to the source.
     * - If set to false, OSS will return 302 and pass through the Location.
     * Default value: true
         */
        readonly mirrorFollowRedirect?: boolean | ros.IResolvable;
        /**
         * @Property replaceKeyPrefixWith: This value will be substituted for the prefix of the Object name in Redirect. If the prefix is empty, the string is inserted before the Object name.
     * Notes: Only ReplaceKeyWith or ReplaceKeyPrefixWith nodes are allowed.
     * Hypothesis to access the Object for ABC\/test. TXT, if set KeyPrefixEquals for ABC \/, ReplaceKeyPrefixWith for def \/, then the Location head to http:\/\/example.com\/def\/test.txt.
         */
        readonly replaceKeyPrefixWith?: string | ros.IResolvable;
        /**
         * @Property redirectType: Specifies the type of jump. The range is as follows:
     * - Mirror: Mirror back to the source.
     * - External: External branch, i.e. OSS will return a 3xx request specifying the branch to another address.
     * - AliCDN: Aliyun CDN jump, mainly used for the CDN of Aliyun. Unlike External, OSS adds an additional Header. After identifying this Header, Aliyun CDN will actively jump to the specified address and return the obtained data to the user instead of returning the 3xx jump request to the user.
         */
        readonly redirectType: string | ros.IResolvable;
        /**
         * @Property mirrorPassQueryString: Same as PassQueryString, but takes precedence over PassQueryString. This only works if RedirectType is set to Mirror.
     * Default value: false
         */
        readonly mirrorPassQueryString?: boolean | ros.IResolvable;
        /**
         * @Property mirrorCheckMd5: Whether to check MD5 back to the source body. This only works if RedirectType is set to Mirror.
     * When MirrorCheckMd5 is set to true, and the response returned by the source contains the Content-Md5 Header, OSS checks whether the pulled data MD5 matches this header, if not, it is not saved on OSS.
     * Default value: false
         */
        readonly mirrorCheckMd5?: boolean | ros.IResolvable;
        /**
         * @Property protocol: Protocol when jumping. Only if RedirectType is set to External or AliCDN.
     * If the file you want to access is test, set to go to example.com, and set Protocol to https, the Location header is https:\/\/example.com\/test.
     * Value: http, https
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property hostName: The domain name of the jump, the domain name should conform to the domain name specification.
     * If the file you want to access is test, the Protocol is set to https, and the Hostname is set to example.com, the Location header is https:\/\/example.com\/test.
         */
        readonly hostName?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface RefererConfigurationProperty {
        /**
         * @Property refererList: undefined
         */
        readonly refererList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property allowEmptyReferer: undefined
         */
        readonly allowEmptyReferer?: boolean | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface RoutingRulesProperty {
        /**
         * @Property condition: Conditions for matching.
     * This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
         */
        readonly condition: RosBucket.ConditionProperty | ros.IResolvable;
        /**
         * @Property ruleNumber: Match and execute the sequence number of the RoutingRule, OSS will match the rules in turn according to this sequence number. If the match is successful, this rule is executed and no subsequent rules are executed.
         */
        readonly ruleNumber: number | ros.IResolvable;
        /**
         * @Property redirect: Specifies the action to be performed when this rule is matched.
         */
        readonly redirect: RosBucket.RedirectProperty | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface RuleProperty {
        /**
         * @Property status: undefined
         */
        readonly status?: string | ros.IResolvable;
        /**
         * @Property abortMultipartUpload: undefined
         */
        readonly abortMultipartUpload?: RosBucket.AbortMultipartUploadProperty | ros.IResolvable;
        /**
         * @Property filter: This exclusion rule has at most one conditional argument container.
         */
        readonly filter?: RosBucket.FilterProperty | ros.IResolvable;
        /**
         * @Property expiration: undefined
         */
        readonly expiration?: RosBucket.ExpirationProperty | ros.IResolvable;
        /**
         * @Property prefix: undefined
         */
        readonly prefix: string | ros.IResolvable;
        /**
         * @Property id: undefined
         */
        readonly id?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface ServerSideEncryptionConfigurationProperty {
        /**
         * @Property sseAlgorithm: Specifies the default server-side encryption method.
         */
        readonly sseAlgorithm: string | ros.IResolvable;
        /**
         * @Property kmsMasterKeyId: Specifies the CMK ID when the value of SSEAlgorithm is KMS and a specified CMK is used for encryption. If the value of SSEAlgorithm is not KMS, this element must be null.
         */
        readonly kmsMasterKeyId?: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface SetsProperty {
        /**
         * @Property value: Set the value of the Header to a maximum of 1024 bytes without \r\n. This only works if RedirectType is set to Mirror.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: Sets the Header key to a maximum of 1024 bytes in the same character set as Pass. This only works if RedirectType is set to Mirror.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface VersioningConfigurationProperty {
        /**
         * @Property status: Specifies the versioning state of a bucket. Valid values: Enabled and Suspended.
         */
        readonly status: string | ros.IResolvable;
    }
}
export declare namespace RosBucket {
    /**
     * @stability external
     */
    interface WebsiteConfigurationV2Property {
        /**
         * @Property indexDocument: The properties of default home page.
         */
        readonly indexDocument?: RosBucket.IndexDocumentProperty | ros.IResolvable;
        /**
         * @Property routingRules: The list of routing rules, up to 20.
         */
        readonly routingRules?: Array<RosBucket.RoutingRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property errorDocument: The properties of default error page.
         */
        readonly errorDocument?: RosBucket.ErrorDocumentProperty | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosBucketReplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
 */
export interface RosBucketReplicationProps {
    /**
     * @Property bucketName: Bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * @Property replicationConfiguration: Replication configuration.
     */
    readonly replicationConfiguration: RosBucketReplication.ReplicationConfigurationProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::BucketReplication`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BucketReplication` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
 */
export declare class RosBucketReplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::BucketReplication";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucketName: Bucket name.
     */
    bucketName: string | ros.IResolvable;
    /**
     * @Property replicationConfiguration: Replication configuration.
     */
    replicationConfiguration: RosBucketReplication.ReplicationConfigurationProperty | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBucketReplicationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosBucketReplication {
    /**
     * @stability external
     */
    interface DestinationProperty {
        /**
         * @Property bucket: Destination bucket name.
         */
        readonly bucket: string | ros.IResolvable;
        /**
         * @Property transferType: Transfer type for replication.
         */
        readonly transferType: string | ros.IResolvable;
        /**
         * @Property location: Destination region.
         */
        readonly location: string | ros.IResolvable;
    }
}
export declare namespace RosBucketReplication {
    /**
     * @stability external
     */
    interface EncryptionConfigurationProperty {
        /**
         * @Property replicaKmsKeyId: ARN of the KMS key used to encrypt replica objects.
         */
        readonly replicaKmsKeyId?: string | ros.IResolvable;
    }
}
export declare namespace RosBucketReplication {
    /**
     * @stability external
     */
    interface RTCProperty {
        /**
         * @Property status: Whether to enable real-time replication.
         */
        readonly status?: string | ros.IResolvable;
    }
}
export declare namespace RosBucketReplication {
    /**
     * @stability external
     */
    interface ReplicationConfigurationProperty {
        /**
         * @Property rule: Replication Rule
         */
        readonly rule: RosBucketReplication.RuleProperty | ros.IResolvable;
    }
}
export declare namespace RosBucketReplication {
    /**
     * @stability external
     */
    interface RuleProperty {
        /**
         * @Property rtc: undefined
         */
        readonly rtc?: RosBucketReplication.RTCProperty | ros.IResolvable;
        /**
         * @Property destination: Destination bucket and location for replication.
         */
        readonly destination: RosBucketReplication.DestinationProperty | ros.IResolvable;
        /**
         * @Property action: Action to be taken on matching objects. Valid values are ALL, PUT, DELETE.
         */
        readonly action?: string | ros.IResolvable;
        /**
         * @Property syncRole: Role used for replication synchronization.
         */
        readonly syncRole?: string | ros.IResolvable;
        /**
         * @Property encryptionConfiguration: undefined
         */
        readonly encryptionConfiguration?: RosBucketReplication.EncryptionConfigurationProperty | ros.IResolvable;
        /**
         * @Property sourceSelectionCriteria: Criteria for selecting source objects.
         */
        readonly sourceSelectionCriteria?: RosBucketReplication.SourceSelectionCriteriaProperty | ros.IResolvable;
        /**
         * @Property prefixSet: List of prefixes to which this rule applies.
         */
        readonly prefixSet?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property historicalObjectReplication: Whether to replicate existing objects.
         */
        readonly historicalObjectReplication?: string | ros.IResolvable;
        /**
         * @Property identity: ID of the rule applied.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
export declare namespace RosBucketReplication {
    /**
     * @stability external
     */
    interface SourceSelectionCriteriaProperty {
        /**
         * @Property sseKmsEncryptedObjects: undefined
         */
        readonly sseKmsEncryptedObjects?: RosBucketReplication.SseKmsEncryptedObjectsProperty | ros.IResolvable;
    }
}
export declare namespace RosBucketReplication {
    /**
     * @stability external
     */
    interface SseKmsEncryptedObjectsProperty {
        /**
         * @Property status: Status of KMS encrypted object replication.
         */
        readonly status?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDirectory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
 */
export interface RosDirectoryProps {
    /**
     * @Property bucketName: bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * @Property directoryName: Directory name
     */
    readonly directoryName: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete the relative objects in the directory. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Directory`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Directory` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
 */
export declare class RosDirectory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Directory";
    /**
     * @Attribute BucketName: The name of Bucket
     */
    readonly attrBucketName: ros.IResolvable;
    /**
     * @Attribute DirectoryName: The name of Directory
     */
    readonly attrDirectoryName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucketName: bucket name.
     */
    bucketName: string | ros.IResolvable;
    /**
     * @Property directoryName: Directory name
     */
    directoryName: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete the relative objects in the directory. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDirectoryProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
 */
export interface RosDomainProps {
    /**
     * @Property bucketName: bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Domain`, which is used to bind a custom domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Domain";
    /**
     * @Attribute BucketName: The name of Bucket
     */
    readonly attrBucketName: ros.IResolvable;
    /**
     * @Attribute DomainName: The custom domain name.
     */
    readonly attrDomainName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucketName: bucket name.
     */
    bucketName: string | ros.IResolvable;
    /**
     * @Property domainName: Domain name
     */
    domainName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosObjectAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
 */
export interface RosObjectAclProps {
    /**
     * @Property bucket: Bucket name.
     */
    readonly bucket: string | ros.IResolvable;
    /**
     * @Property objectAcl: Object acl.
     */
    readonly objectAcl: string | ros.IResolvable;
    /**
     * @Property objectKey: Object key.
     */
    readonly objectKey: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::ObjectAcl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ObjectAcl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
 */
export declare class RosObjectAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::ObjectAcl";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucket: Bucket name.
     */
    bucket: string | ros.IResolvable;
    /**
     * @Property objectAcl: Object acl.
     */
    objectAcl: string | ros.IResolvable;
    /**
     * @Property objectKey: Object key.
     */
    objectKey: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosObjectAclProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWebsite`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
 */
export interface RosWebsiteProps {
    /**
     * @Property bucketName: Bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * @Property websiteConfiguration: Website configuration.
     */
    readonly websiteConfiguration?: RosWebsite.WebsiteConfigurationProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Website`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Website` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
 */
export declare class RosWebsite extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OSS::Website";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucketName: Bucket name.
     */
    bucketName: string | ros.IResolvable;
    /**
     * @Property websiteConfiguration: Website configuration.
     */
    websiteConfiguration: RosWebsite.WebsiteConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWebsiteProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosWebsite {
    /**
     * @stability external
     */
    interface ConditionProperty {
        /**
         * @Property includeHeaders: This rule will only match if the request contains the specified Header and the value is the specified value. Up to 10.
         */
        readonly includeHeaders?: Array<RosWebsite.IncludeHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property keyPrefixEquals: The prefix of the Object name to be matched.
         */
        readonly keyPrefixEquals?: string | ros.IResolvable;
        /**
         * @Property httpErrorCodeReturnedEquals: When accessing the specified Object, this status must be returned to match this rule. This field must be 404 when the jump rule is mirror-back to the source type.
         */
        readonly httpErrorCodeReturnedEquals?: string | ros.IResolvable;
        /**
         * @Property keySuffixEquals: The suffix of the Object name to be matched.
         */
        readonly keySuffixEquals?: string | ros.IResolvable;
    }
}
export declare namespace RosWebsite {
    /**
     * @stability external
     */
    interface ErrorDocumentProperty {
        /**
         * @Property httpStatus: The HTTP status code of the error page. Valid values: 200, 404 (default).
         */
        readonly httpStatus?: string | ros.IResolvable;
        /**
         * @Property key: The default error page.
     * When an error page is specified, if the accessed Object does not exist, this error page is returned.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosWebsite {
    /**
     * @stability external
     */
    interface IncludeHeadersProperty {
        /**
         * @Property key: The name of the header.
         */
        readonly key: string | ros.IResolvable;
        /**
         * @Property equalsTo: The value of the header.
         */
        readonly equalsTo?: string | ros.IResolvable;
    }
}
export declare namespace RosWebsite {
    /**
     * @stability external
     */
    interface IndexDocumentProperty {
        /**
         * @Property type: Behavior when an Object that ends with a non-forward slash (\/) and does not exist is accessed after setting the default home page. It only takes effect when SupportSubDir is set to true, and it takes effect after RoutingRule and before ErrorFile.
     * Assume that the default home page for the index. The HTML, to access the file path for bucket.oss-cn-hangzhou.aliyuncs.com\/abc, and ABC this Object does not exist, at this moment, in different values corresponding to the Type of behavior is as follows:
     * - 0 (default) : Check if abc\/index.html exists (Object + forward slash (\/) + home page) and return 302 with the URL code of \/abc\/ as Location header (forward slash (\/) + Object + forward slash (\/)). If it doesn't, it will return 404 and keep checking ErrorFile.
     * - 1: Directly return 404, error NoSuchKey, continue to check ErrorFile.
     * - 2: Check if abc\/index.html exists and return the contents of the Object if it does. If it doesn't, it will return 404 and keep checking ErrorFile.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property suffix: Default home page.
     * After setting the default home page, if you visit an Object ending with a forward slash (\/), OSS will return to this default home page.
         */
        readonly suffix: string | ros.IResolvable;
        /**
         * @Property supportSubDir: Whether to jump to the default home page of a subdirectory when accessing it. The range is as follows:
     * - true: Go to the default home page in a subdirectory.
     * - false (default) : Instead of going to the default home page in a subdirectory, go to the default home page in the root directory.
     * Assume that the default home page for the index. The HTML, to access bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/, if set SupportSubDir to false, Then go to bucket.oss-cn-hangzhou.aliyuncs.com\/index.html; If set SupportSubDir is true, then transferred to the bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/index.html.
         */
        readonly supportSubDir?: string | ros.IResolvable;
    }
}
export declare namespace RosWebsite {
    /**
     * @stability external
     */
    interface MirrorHeadersProperty {
        /**
         * @Property passAll: Whether to pass through other headers to the source except the following headers. This only works if RedirectType is set to Mirror.
     * - content-length, authorization2, authorization, range, date and other headers
     * - Headers starting with oss-\/x-oss-\/x-drs-
     * Default value: false
         */
        readonly passAll?: boolean | ros.IResolvable;
        /**
         * @Property pass: Pass through the specified Header to the source. This only works if RedirectType is set to Mirror.
     * Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
     * A maximum of 10 can be specified for this field.
         */
        readonly pass?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sets: Set a Header to the origin, and it will be set when the request is sent back to the origin, regardless of whether the specified headers are included in the request. This only works if RedirectType is set to Mirror.
     * Up to 10 groups can be specified for this container.
         */
        readonly sets?: Array<RosWebsite.SetsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property remove: Disables pass-through of the specified Header to the source. This only works if RedirectType is set to Mirror.
     * Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
     * A maximum of 10 can be specified for this field.
         */
        readonly remove?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosWebsite {
    /**
     * @stability external
     */
    interface RedirectProperty {
        /**
         * @Property mirrorUrl: Mirror back to the source station address of the source. This only works if RedirectType is set to Mirror.
     * The origin URL must begin with http:\/\/ or https:\/\/ and end with a forward slash (\/), which OSS will follow with the Object name to form the return URL.
     * Name to access the Object myobject, for example, if you specify this to http:\/\/example.com\/, then back to the source URL for http:\/\/example.com\/myobject, if you specify this to http:\/\/example.com\/dir1\/, Back to the source URL as http:\/\/example.com\/dir1\/myobject.
         */
        readonly mirrorUrl?: string | ros.IResolvable;
        /**
         * @Property replaceKeyWith: With Redirect, the Object name is replaced with the value specified by ReplaceKeyWith, which allows you to set variables. The currently supported variable is ${key}, which represents the name of the Object in the request.
     * Suppose to access the Object for the test, if set ReplaceKeyWith to prefix\/${key}. The suffix, is the Location head to http:\/\/example.com\/prefix\/test.suffix.
         */
        readonly replaceKeyWith?: string | ros.IResolvable;
        /**
         * @Property mirrorHeaders: Specifies the Header that is mirrored back to the source. This only works if RedirectType is set to Mirror.
         */
        readonly mirrorHeaders?: RosWebsite.MirrorHeadersProperty | ros.IResolvable;
        /**
         * @Property httpRedirectCode: Status code returned when jumping. Only if RedirectType is set to External or AliCDN.The default value is 302.
     * Value: 301, 302, 307
         */
        readonly httpRedirectCode?: string | ros.IResolvable;
        /**
         * @Property enableReplacePrefix: If you set this field to true, the prefix of Object is replaced with the value specified by ReplaceKeyPrefixWith. If this field is not specified or is empty, it means that the Object prefix is truncated.
     * Notes: This field cannot be set to true when the ReplaceKeyWith field is not null.
     * Default value: false
         */
        readonly enableReplacePrefix?: boolean | ros.IResolvable;
        /**
         * @Property passQueryString: Whether to carry request parameters when performing a jump or mirroring back to the source rule.
     * Does the user request OSS with the request parameters? a=b&c=d, and set PassQueryString to true, if the rule is a 302 jump, then this request parameter is added in the Location header of the jump. For example, Location:example.com?a=b&c=d, the jump type is mirror back to the source, then this request parameter will also be carried in the initiated back to the source request.
     * Valid values: true, false (default)
         */
        readonly passQueryString?: boolean | ros.IResolvable;
        /**
         * @Property mirrorFollowRedirect: If the result obtained by mirriling back to the source is 3xx, whether to continue to jump to the specified Location to obtain data. This only works if RedirectType is set to Mirror.
     * For example, when we mirror back to the source, the source returns a 302 with Location specified.
     * - If set to true, OSS will continue to request the Location.
     * It can jump up to 10 times, and if it jumps more than 10 times, it fails to return the mirror back to the source.
     * - If set to false, OSS will return 302 and pass through the Location.
     * Default value: true
         */
        readonly mirrorFollowRedirect?: boolean | ros.IResolvable;
        /**
         * @Property replaceKeyPrefixWith: This value will be substituted for the prefix of the Object name in Redirect. If the prefix is empty, the string is inserted before the Object name.
     * Notes: Only ReplaceKeyWith or ReplaceKeyPrefixWith nodes are allowed.
     * Hypothesis to access the Object for ABC\/test. TXT, if set KeyPrefixEquals for ABC \/, ReplaceKeyPrefixWith for def \/, then the Location head to http:\/\/example.com\/def\/test.txt.
         */
        readonly replaceKeyPrefixWith?: string | ros.IResolvable;
        /**
         * @Property redirectType: Specifies the type of jump. The range is as follows:
     * - Mirror: Mirror back to the source.
     * - External: External branch, i.e. OSS will return a 3xx request specifying the branch to another address.
     * - AliCDN: Aliyun CDN jump, mainly used for the CDN of Aliyun. Unlike External, OSS adds an additional Header. After identifying this Header, Aliyun CDN will actively jump to the specified address and return the obtained data to the user instead of returning the 3xx jump request to the user.
         */
        readonly redirectType: string | ros.IResolvable;
        /**
         * @Property mirrorPassQueryString: Same as PassQueryString, but takes precedence over PassQueryString. This only works if RedirectType is set to Mirror.
     * Default value: false
         */
        readonly mirrorPassQueryString?: boolean | ros.IResolvable;
        /**
         * @Property mirrorCheckMd5: Whether to check MD5 back to the source body. This only works if RedirectType is set to Mirror.
     * When MirrorCheckMd5 is set to true, and the response returned by the source contains the Content-Md5 Header, OSS checks whether the pulled data MD5 matches this header, if not, it is not saved on OSS.
     * Default value: false
         */
        readonly mirrorCheckMd5?: boolean | ros.IResolvable;
        /**
         * @Property protocol: Protocol when jumping. Only if RedirectType is set to External or AliCDN.
     * If the file you want to access is test, set to go to example.com, and set Protocol to https, the Location header is https:\/\/example.com\/test.
     * Value: http, https
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property hostName: The domain name of the jump, the domain name should conform to the domain name specification.
     * If the file you want to access is test, the Protocol is set to https, and the Hostname is set to example.com, the Location header is https:\/\/example.com\/test.
         */
        readonly hostName?: string | ros.IResolvable;
    }
}
export declare namespace RosWebsite {
    /**
     * @stability external
     */
    interface RoutingRulesProperty {
        /**
         * @Property condition: Conditions for matching.
     * This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
         */
        readonly condition: RosWebsite.ConditionProperty | ros.IResolvable;
        /**
         * @Property ruleNumber: Match and execute the sequence number of the RoutingRule, OSS will match the rules in turn according to this sequence number. If the match is successful, this rule is executed and no subsequent rules are executed.
         */
        readonly ruleNumber: number | ros.IResolvable;
        /**
         * @Property redirect: Specifies the action to be performed when this rule is matched.
         */
        readonly redirect: RosWebsite.RedirectProperty | ros.IResolvable;
    }
}
export declare namespace RosWebsite {
    /**
     * @stability external
     */
    interface SetsProperty {
        /**
         * @Property value: Set the value of the Header to a maximum of 1024 bytes without \r\n. This only works if RedirectType is set to Mirror.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: Sets the Header key to a maximum of 1024 bytes in the same character set as Pass. This only works if RedirectType is set to Mirror.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosWebsite {
    /**
     * @stability external
     */
    interface WebsiteConfigurationProperty {
        /**
         * @Property indexDocument: The properties of default home page.
         */
        readonly indexDocument?: RosWebsite.IndexDocumentProperty | ros.IResolvable;
        /**
         * @Property routingRules: The list of routing rules, up to 20.
         */
        readonly routingRules?: Array<RosWebsite.RoutingRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property errorDocument: The properties of default error page.
         */
        readonly errorDocument?: RosWebsite.ErrorDocumentProperty | ros.IResolvable;
    }
}
