using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents a construct.</summary>
    [JsiiInterface(nativeType: typeof(IConstruct), fullyQualifiedName: "@alicloud/ros-cdk-core.IConstruct")]
    public interface IConstruct : Constructs.IConstruct, AlibabaCloud.SDK.ROS.CDK.Core.IDependable
    {
        /// <summary>The construct tree node for this construct.</summary>
        [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
        {
            get;
        }

        /// <summary>Represents a construct.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConstruct), fullyQualifiedName: "@alicloud/ros-cdk-core.IConstruct")]
        new internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IConstruct
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
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
