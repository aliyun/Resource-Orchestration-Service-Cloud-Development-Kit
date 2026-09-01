using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsiem
{
    /// <summary>Properties for defining a `ImportLogTasksSubmission`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImportLogTasksSubmissionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsiem.ImportLogTasksSubmissionProps")]
    public interface IImportLogTasksSubmissionProps
    {
        /// <summary>Property accounts: The list of accounts for log ingestion.</summary>
        /// <remarks>
        /// The value must be a JSON array. Valid
        /// values:
        ///
        /// <list type="bullet">
        /// <description>AccountId: The ID of the account.</description>
        /// <description>Imported: Specifies whether to enable or disable log ingestion for the account.
        /// Valid values:</description>
        /// <description>0: Disable ingestion.</description>
        /// <description>1: Enable ingestion.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Accounts
        {
            get;
        }

        /// <summary>Property cloudCode: The cloud code.</summary>
        /// <remarks>
        /// The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
        /// </remarks>
        [JsiiProperty(name: "cloudCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CloudCode
        {
            get;
        }

        /// <summary>Property logCodes: The list of log codes to be submitted.</summary>
        /// <remarks>
        /// For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        /// </remarks>
        [JsiiProperty(name: "logCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object LogCodes
        {
            get;
        }

        /// <summary>Property prodCode: The product code.</summary>
        /// <remarks>
        /// For all available product codes, query the Cloud Siem ListAllProds API.
        /// </remarks>
        [JsiiProperty(name: "prodCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProdCode
        {
            get;
        }

        /// <summary>Properties for defining a `ImportLogTasksSubmission`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImportLogTasksSubmissionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsiem.ImportLogTasksSubmissionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsiem.IImportLogTasksSubmissionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accounts: The list of accounts for log ingestion.</summary>
            /// <remarks>
            /// The value must be a JSON array. Valid
            /// values:
            ///
            /// <list type="bullet">
            /// <description>AccountId: The ID of the account.</description>
            /// <description>Imported: Specifies whether to enable or disable log ingestion for the account.
            /// Valid values:</description>
            /// <description>0: Disable ingestion.</description>
            /// <description>1: Enable ingestion.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Accounts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cloudCode: The cloud code.</summary>
            /// <remarks>
            /// The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
            /// </remarks>
            [JsiiProperty(name: "cloudCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CloudCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logCodes: The list of log codes to be submitted.</summary>
            /// <remarks>
            /// For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
            /// </remarks>
            [JsiiProperty(name: "logCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object LogCodes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property prodCode: The product code.</summary>
            /// <remarks>
            /// For all available product codes, query the Cloud Siem ListAllProds API.
            /// </remarks>
            [JsiiProperty(name: "prodCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProdCode
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
