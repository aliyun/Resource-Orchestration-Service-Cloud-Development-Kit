using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Configuration properties for DefaultStackSynthesizer.</summary>
    [JsiiInterface(nativeType: typeof(IDefaultStackSynthesizerProps), fullyQualifiedName: "@alicloud/ros-cdk-core.DefaultStackSynthesizerProps")]
    public interface IDefaultStackSynthesizerProps
    {
        /// <summary>Qualifier to disambiguate multiple environments in the same account&#xD; &#xD; You can use this and leave the other naming properties empty if you have deployed&#xD; the bootstrap environment with standard names but only differnet qualifiers.</summary>
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Qualifier
        {
            get
            {
                return null;
            }
        }

        /// <summary>Configuration properties for DefaultStackSynthesizer.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDefaultStackSynthesizerProps), fullyQualifiedName: "@alicloud/ros-cdk-core.DefaultStackSynthesizerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IDefaultStackSynthesizerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Qualifier to disambiguate multiple environments in the same account&#xD; &#xD; You can use this and leave the other naming properties empty if you have deployed&#xD; the bootstrap environment with standard names but only differnet qualifiers.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Qualifier
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
