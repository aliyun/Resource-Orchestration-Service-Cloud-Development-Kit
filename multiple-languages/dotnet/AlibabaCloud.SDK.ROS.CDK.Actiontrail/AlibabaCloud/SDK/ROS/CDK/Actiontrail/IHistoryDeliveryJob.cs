using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Represents a `HistoryDeliveryJob`.</summary>
    [JsiiInterface(nativeType: typeof(IHistoryDeliveryJob), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.IHistoryDeliveryJob")]
    public interface IHistoryDeliveryJob : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute JobId: The ID of the delivery history job.</summary>
        [JsiiProperty(name: "attrJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJobId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-actiontrail.HistoryDeliveryJobProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Actiontrail.IHistoryDeliveryJobProps Props
        {
            get;
        }

        /// <summary>Represents a `HistoryDeliveryJob`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHistoryDeliveryJob), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.IHistoryDeliveryJob")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.IHistoryDeliveryJob
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute JobId: The ID of the delivery history job.</summary>
            [JsiiProperty(name: "attrJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-actiontrail.HistoryDeliveryJobProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Actiontrail.IHistoryDeliveryJobProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Actiontrail.IHistoryDeliveryJobProps>()!;
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
