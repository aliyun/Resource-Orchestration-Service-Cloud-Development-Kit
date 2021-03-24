using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `ALIYUN::ARMS::RetcodeApp`.</summary>
    [JsiiInterface(nativeType: typeof(IRetcodeAppProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RetcodeAppProps")]
    public interface IRetcodeAppProps
    {
        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}")]
        string RegionId
        {
            get;
        }

        /// <summary>Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.</summary>
        [JsiiProperty(name: "retcodeAppName", typeJson: "{\"primitive\":\"string\"}")]
        string RetcodeAppName
        {
            get;
        }

        /// <summary>Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.</summary>
        /// <remarks>
        /// Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        /// </remarks>
        [JsiiProperty(name: "retcodeAppType", typeJson: "{\"primitive\":\"string\"}")]
        string RetcodeAppType
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ARMS::RetcodeApp`.</summary>
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
            [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}")]
            public string RegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.</summary>
            [JsiiProperty(name: "retcodeAppName", typeJson: "{\"primitive\":\"string\"}")]
            public string RetcodeAppName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.</summary>
            /// <remarks>
            /// Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
            /// </remarks>
            [JsiiProperty(name: "retcodeAppType", typeJson: "{\"primitive\":\"string\"}")]
            public string RetcodeAppType
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
