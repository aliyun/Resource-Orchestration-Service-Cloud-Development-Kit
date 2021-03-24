using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>A single dependency.</summary>
    [JsiiInterface(nativeType: typeof(IDependency), fullyQualifiedName: "@alicloud/ros-cdk-core.Dependency")]
    public interface IDependency
    {
        /// <summary>Source the dependency.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Source
        {
            get;
        }

        /// <summary>Target of the dependency.</summary>
        [JsiiProperty(name: "target", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Target
        {
            get;
        }

        /// <summary>A single dependency.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDependency), fullyQualifiedName: "@alicloud/ros-cdk-core.Dependency")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IDependency
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Source the dependency.</summary>
            [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Source
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct>()!;
            }

            /// <summary>Target of the dependency.</summary>
            [JsiiProperty(name: "target", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Target
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct>()!;
            }
        }
    }
}
