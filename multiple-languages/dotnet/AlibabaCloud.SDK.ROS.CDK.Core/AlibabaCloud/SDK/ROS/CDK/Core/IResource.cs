using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface for the Resource construct.</summary>
    [JsiiInterface(nativeType: typeof(IResource), fullyQualifiedName: "@alicloud/ros-cdk-core.IResource")]
    public interface IResource : AlibabaCloud.SDK.ROS.CDK.Core.IConstruct
    {
        /// <summary>The stack in which this resource is defined.</summary>
        [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
        {
            get;
        }

        /// <summary>Interface for the Resource construct.</summary>
        [JsiiTypeProxy(nativeType: typeof(IResource), fullyQualifiedName: "@alicloud/ros-cdk-core.IResource")]
        new internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
