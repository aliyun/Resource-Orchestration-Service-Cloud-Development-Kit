using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acs
{
    /// <summary>Represents a `VirtualCapacityReservation`.</summary>
    [JsiiInterface(nativeType: typeof(IVirtualCapacityReservation), fullyQualifiedName: "@alicloud/ros-cdk-acs.IVirtualCapacityReservation")]
    public interface IVirtualCapacityReservation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-acs.VirtualCapacityReservationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Acs.IVirtualCapacityReservationProps Props
        {
            get;
        }

        /// <summary>Represents a `VirtualCapacityReservation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVirtualCapacityReservation), fullyQualifiedName: "@alicloud/ros-cdk-acs.IVirtualCapacityReservation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acs.IVirtualCapacityReservation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-acs.VirtualCapacityReservationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Acs.IVirtualCapacityReservationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Acs.IVirtualCapacityReservationProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
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
