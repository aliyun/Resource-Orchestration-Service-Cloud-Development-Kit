using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ControlPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ControlPolicyProps")]
    public interface IControlPolicyProps
    {
        /// <summary>Property controlPolicyName: PolicyName.</summary>
        [JsiiProperty(name: "controlPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ControlPolicyName
        {
            get;
        }

        /// <summary>Property effectScope: EffectScope.</summary>
        [JsiiProperty(name: "effectScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EffectScope
        {
            get;
        }

        /// <summary>Property policyDocument: PolicyDocument.</summary>
        [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyDocument
        {
            get;
        }

        /// <summary>Property description: Description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ControlPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ControlPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IControlPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property controlPolicyName: PolicyName.</summary>
            [JsiiProperty(name: "controlPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ControlPolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property effectScope: EffectScope.</summary>
            [JsiiProperty(name: "effectScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EffectScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyDocument: PolicyDocument.</summary>
            [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyDocument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
