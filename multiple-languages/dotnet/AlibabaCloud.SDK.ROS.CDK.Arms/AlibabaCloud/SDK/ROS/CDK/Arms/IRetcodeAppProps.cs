using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `RetcodeApp`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRetcodeAppProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RetcodeAppProps")]
    public interface IRetcodeAppProps
    {
        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RegionId
        {
            get;
        }

        /// <summary>Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.</summary>
        [JsiiProperty(name: "retcodeAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RetcodeAppName
        {
            get;
        }

        /// <summary>Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.</summary>
        /// <remarks>
        /// Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        /// </remarks>
        [JsiiProperty(name: "retcodeAppType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RetcodeAppType
        {
            get;
        }

        /// <summary>Properties for defining a `RetcodeApp`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRetcodeAppProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RetcodeAppProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRetcodeAppProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property regionId: Region ID.</summary>
            /// <remarks>
            /// Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.</summary>
            [JsiiProperty(name: "retcodeAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RetcodeAppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.</summary>
            /// <remarks>
            /// Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
            /// </remarks>
            [JsiiProperty(name: "retcodeAppType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RetcodeAppType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
