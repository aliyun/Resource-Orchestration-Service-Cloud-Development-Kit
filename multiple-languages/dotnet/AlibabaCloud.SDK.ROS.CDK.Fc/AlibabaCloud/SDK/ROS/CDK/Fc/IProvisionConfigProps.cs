using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::ProvisionConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.ProvisionConfigProps")]
    public interface IProvisionConfigProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
        string FunctionName
        {
            get;
        }

        /// <summary>Property qualifier: Service's alias.</summary>
        /// <remarks>
        /// Example : "LATEST"
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}")]
        string Qualifier
        {
            get;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <summary>Property target: Number of provision.</summary>
        [JsiiProperty(name: "target", typeJson: "{\"primitive\":\"number\"}")]
        double Target
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::FC::ProvisionConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.ProvisionConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IProvisionConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property functionName: Function name.</summary>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
            public string FunctionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property qualifier: Service's alias.</summary>
            /// <remarks>
            /// Example : "LATEST"
            /// </remarks>
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}")]
            public string Qualifier
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property target: Number of provision.</summary>
            [JsiiProperty(name: "target", typeJson: "{\"primitive\":\"number\"}")]
            public double Target
            {
                get => GetInstanceProperty<double>()!;
            }
        }
    }
}
