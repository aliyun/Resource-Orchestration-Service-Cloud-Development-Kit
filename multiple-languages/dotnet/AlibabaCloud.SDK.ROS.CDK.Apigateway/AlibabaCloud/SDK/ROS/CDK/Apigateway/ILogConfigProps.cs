using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::LogConfig`.</summary>
    [JsiiInterface(nativeType: typeof(ILogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.LogConfigProps")]
    public interface ILogConfigProps
    {
        /// <summary>Property slsLogStore: Logstore name of SLS.</summary>
        [JsiiProperty(name: "slsLogStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsLogStore
        {
            get;
        }

        /// <summary>Property slsProject: Project name of SLS.</summary>
        [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsProject
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
            [JsiiProperty(name: "slsLogStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsLogStore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property slsProject: Project name of SLS.</summary>
            [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsProject
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
