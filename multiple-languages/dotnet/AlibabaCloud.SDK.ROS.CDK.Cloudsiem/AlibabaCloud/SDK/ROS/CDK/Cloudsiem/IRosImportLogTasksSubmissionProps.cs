using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsiem
{
    /// <summary>Properties for defining a `RosImportLogTasksSubmission`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosImportLogTasksSubmissionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsiem.RosImportLogTasksSubmissionProps")]
    public interface IRosImportLogTasksSubmissionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accounts: The list of accounts to be submitted.
        /// </remarks>
        [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Accounts
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cloudCode: The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
        /// </remarks>
        [JsiiProperty(name: "cloudCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CloudCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logCodes: The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        /// </remarks>
        [JsiiProperty(name: "logCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object LogCodes
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: prodCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
        /// </remarks>
        [JsiiProperty(name: "prodCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProdCode
        {
            get;
        }

        /// <summary>Properties for defining a `RosImportLogTasksSubmission`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosImportLogTasksSubmissionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsiem.RosImportLogTasksSubmissionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsiem.IRosImportLogTasksSubmissionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accounts: The list of accounts to be submitted.
            /// </remarks>
            [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Accounts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudCode: The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
            /// </remarks>
            [JsiiProperty(name: "cloudCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CloudCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logCodes: The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
            /// </remarks>
            [JsiiProperty(name: "logCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object LogCodes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: prodCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
            /// </remarks>
            [JsiiProperty(name: "prodCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProdCode
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
