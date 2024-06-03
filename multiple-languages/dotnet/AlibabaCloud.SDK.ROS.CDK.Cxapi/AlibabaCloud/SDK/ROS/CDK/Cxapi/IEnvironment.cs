using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Models an ALIYUN execution environment, for use within the CDK toolkit.</summary>
    [JsiiInterface(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.Environment")]
    public interface IEnvironment
    {
        /// <summary>The ALIYUN account this environment deploys into.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        string Account
        {
            get;
        }

        /// <summary>The arbitrary name of this environment (user-set, or at least user-meaningful).</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>The ALIYUN region name where this environment deploys into.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        /// <summary>Models an ALIYUN execution environment, for use within the CDK toolkit.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.Environment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The ALIYUN account this environment deploys into.</summary>
            [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
            public string Account
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The arbitrary name of this environment (user-set, or at least user-meaningful).</summary>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The ALIYUN region name where this environment deploys into.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
