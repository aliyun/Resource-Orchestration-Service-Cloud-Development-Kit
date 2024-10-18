using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRosRuleAssertionProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosRuleAssertionProps")]
    public interface IRosRuleAssertionProps
    {
        /// <summary>Define assertions.</summary>
        [JsiiProperty(name: "assert", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.IResolvable Assert
        {
            get;
        }

        /// <summary>Define the assertion description.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - None
        /// </remarks>
        [JsiiProperty(name: "assertDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AssertDescription
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IRosRuleAssertionProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosRuleAssertionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRosRuleAssertionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Define assertions.</summary>
            [JsiiProperty(name: "assert", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResolvable Assert
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
            }

            /// <summary>Define the assertion description.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - None
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "assertDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AssertDescription
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
