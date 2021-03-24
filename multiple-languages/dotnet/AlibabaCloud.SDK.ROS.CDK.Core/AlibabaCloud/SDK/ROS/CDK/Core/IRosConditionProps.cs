using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRosConditionProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosConditionProps")]
    public interface IRosConditionProps
    {
        /// <summary>The expression that the condition will evaluate.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - None.
        /// </remarks>
        [JsiiProperty(name: "expression", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression? Expression
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IRosConditionProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosConditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The expression that the condition will evaluate.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - None.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expression", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression? Expression
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression?>();
            }
        }
    }
}
