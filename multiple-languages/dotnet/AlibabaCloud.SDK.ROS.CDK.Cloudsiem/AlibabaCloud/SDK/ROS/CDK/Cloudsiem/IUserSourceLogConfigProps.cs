using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsiem
{
    /// <summary>Properties for defining a `UserSourceLogConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserSourceLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsiem.UserSourceLogConfigProps")]
    public interface IUserSourceLogConfigProps
    {
        /// <summary>Property sourceLogCode: The source log code.</summary>
        /// <remarks>
        /// For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        /// </remarks>
        [JsiiProperty(name: "sourceLogCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceLogCode
        {
            get;
        }

        /// <summary>Property sourceLogInfo: The info of log to be added.</summary>
        [JsiiProperty(name: "sourceLogInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty\"}]}}")]
        object SourceLogInfo
        {
            get;
        }

        /// <summary>Property sourceProdCode: The product code.</summary>
        /// <remarks>
        /// For all available product codes, query the Cloud Siem ListAllProds API.
        /// </remarks>
        [JsiiProperty(name: "sourceProdCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceProdCode
        {
            get;
        }

        /// <summary>Property subUserId: The Id of the account to be submitted.</summary>
        [JsiiProperty(name: "subUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SubUserId
        {
            get;
        }

        /// <summary>Properties for defining a `UserSourceLogConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserSourceLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsiem.UserSourceLogConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsiem.IUserSourceLogConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property sourceLogCode: The source log code.</summary>
            /// <remarks>
            /// For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
            /// </remarks>
            [JsiiProperty(name: "sourceLogCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceLogCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceLogInfo: The info of log to be added.</summary>
            [JsiiProperty(name: "sourceLogInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty\"}]}}")]
            public object SourceLogInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceProdCode: The product code.</summary>
            /// <remarks>
            /// For all available product codes, query the Cloud Siem ListAllProds API.
            /// </remarks>
            [JsiiProperty(name: "sourceProdCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceProdCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property subUserId: The Id of the account to be submitted.</summary>
            [JsiiProperty(name: "subUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SubUserId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
