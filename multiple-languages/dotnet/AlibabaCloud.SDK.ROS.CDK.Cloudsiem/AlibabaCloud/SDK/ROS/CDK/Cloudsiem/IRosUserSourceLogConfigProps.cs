using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsiem
{
    /// <summary>Properties for defining a `RosUserSourceLogConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosUserSourceLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfigProps")]
    public interface IRosUserSourceLogConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: sourceLogCode: The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        /// </remarks>
        [JsiiProperty(name: "sourceLogCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceLogCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceLogInfo: The info of log to be added.
        /// </remarks>
        [JsiiProperty(name: "sourceLogInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty\"}]}}")]
        object SourceLogInfo
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceProdCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
        /// </remarks>
        [JsiiProperty(name: "sourceProdCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceProdCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: subUserId: The Id of the account to be submitted.
        /// </remarks>
        [JsiiProperty(name: "subUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SubUserId
        {
            get;
        }

        /// <summary>Properties for defining a `RosUserSourceLogConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosUserSourceLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsiem.IRosUserSourceLogConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceLogCode: The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
            /// </remarks>
            [JsiiProperty(name: "sourceLogCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceLogCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceLogInfo: The info of log to be added.
            /// </remarks>
            [JsiiProperty(name: "sourceLogInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty\"}]}}")]
            public object SourceLogInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceProdCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
            /// </remarks>
            [JsiiProperty(name: "sourceProdCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceProdCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: subUserId: The Id of the account to be submitted.
            /// </remarks>
            [JsiiProperty(name: "subUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SubUserId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
