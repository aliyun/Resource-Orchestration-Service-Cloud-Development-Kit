using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::LogConfig`.</summary>
    [JsiiInterface(nativeType: typeof(ILogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.LogConfigProps")]
    public interface ILogConfigProps
    {
        /// <summary>Property slsLogStore: Logstore name of SLS.</summary>
        [JsiiProperty(name: "slsLogStore", typeJson: "{\"primitive\":\"string\"}")]
        string SlsLogStore
        {
            get;
        }

        /// <summary>Property slsProject: Project name of SLS.</summary>
        [JsiiProperty(name: "slsProject", typeJson: "{\"primitive\":\"string\"}")]
        string SlsProject
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::LogConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.LogConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.ILogConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property slsLogStore: Logstore name of SLS.</summary>
            [JsiiProperty(name: "slsLogStore", typeJson: "{\"primitive\":\"string\"}")]
            public string SlsLogStore
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property slsProject: Project name of SLS.</summary>
            [JsiiProperty(name: "slsProject", typeJson: "{\"primitive\":\"string\"}")]
            public string SlsProject
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
