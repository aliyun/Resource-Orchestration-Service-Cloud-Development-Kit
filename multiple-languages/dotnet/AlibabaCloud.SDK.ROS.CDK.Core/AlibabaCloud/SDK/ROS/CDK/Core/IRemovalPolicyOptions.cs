using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRemovalPolicyOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.RemovalPolicyOptions")]
    public interface IRemovalPolicyOptions
    {
        [JsiiProperty(name: "applyToUpdateReplacePolicy", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? ApplyToUpdateReplacePolicy
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "defaultPolicy", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RemovalPolicy\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.RemovalPolicy? DefaultPolicy
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IRemovalPolicyOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.RemovalPolicyOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRemovalPolicyOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            [JsiiOptional]
            [JsiiProperty(name: "applyToUpdateReplacePolicy", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? ApplyToUpdateReplacePolicy
            {
                get => GetInstanceProperty<bool?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "defaultPolicy", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RemovalPolicy\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.RemovalPolicy? DefaultPolicy
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.RemovalPolicy?>();
            }
        }
    }
}
