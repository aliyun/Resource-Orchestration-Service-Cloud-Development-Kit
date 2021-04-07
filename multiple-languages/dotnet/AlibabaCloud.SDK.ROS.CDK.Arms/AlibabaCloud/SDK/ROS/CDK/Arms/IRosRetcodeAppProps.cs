using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `ALIYUN::ARMS::RetcodeApp`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRetcodeAppProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosRetcodeAppProps")]
    public interface IRosRetcodeAppProps
    {
        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        /// </remarks>
        [JsiiProperty(name: "retcodeAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RetcodeAppName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        /// </remarks>
        [JsiiProperty(name: "retcodeAppType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RetcodeAppType
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ARMS::RetcodeApp`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosRetcodeAppProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosRetcodeAppProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosRetcodeAppProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
            /// </remarks>
            [JsiiProperty(name: "retcodeAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RetcodeAppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
            /// </remarks>
            [JsiiProperty(name: "retcodeAppType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RetcodeAppType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
