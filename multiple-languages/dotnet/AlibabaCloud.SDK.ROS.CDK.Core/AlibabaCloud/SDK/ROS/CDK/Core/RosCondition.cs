using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents a RosTemplate condition, for resources which must be conditionally created and&#xD; the determination must be made at deploy time.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosCondition), fullyQualifiedName: "@alicloud/ros-cdk-core.RosCondition", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosConditionProps\"}}]")]
    public class RosCondition : AlibabaCloud.SDK.ROS.CDK.Core.RosElement, AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression, AlibabaCloud.SDK.ROS.CDK.Core.IResolvable
    {
        /// <summary>Build a new condition.</summary>
        /// <remarks>
        /// The condition must be constructed with a condition token,
        /// that the condition is based on.
        /// </remarks>
        public RosCondition(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionProps? props = null): base(new DeputyProps(new object?[]{scope, id, props}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCondition(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCondition(DeputyProps props): base(props)
        {
        }

        /// <summary>Synthesizes the condition.</summary>
        [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"_context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]", isOverride: true)]
        public virtual object Resolve(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{context})!;
        }

        /// <summary>The condition statement.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "expression", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression? Expression
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression?>();
            set => SetInstanceProperty(value);
        }
    }
}
