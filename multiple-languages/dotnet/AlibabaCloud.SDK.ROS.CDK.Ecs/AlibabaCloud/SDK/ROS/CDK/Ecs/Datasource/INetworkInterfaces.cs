using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `NetworkInterfaces`.</summary>
    [JsiiInterface(nativeType: typeof(INetworkInterfaces), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.INetworkInterfaces")]
    public interface INetworkInterfaces : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute NetworkInterfaceIds: The list of NetworkInterfaceIds.</summary>
        [JsiiProperty(name: "attrNetworkInterfaceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkInterfaceIds
        {
            get;
        }

        /// <summary>Attribute NetworkInterfaces: The list of NetworkInterfaces.</summary>
        [JsiiProperty(name: "attrNetworkInterfaces", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkInterfaces
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.NetworkInterfacesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.INetworkInterfacesProps Props
        {
            get;
        }

        /// <summary>Represents a `NetworkInterfaces`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INetworkInterfaces), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.INetworkInterfaces")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.INetworkInterfaces
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute NetworkInterfaceIds: The list of NetworkInterfaceIds.</summary>
            [JsiiProperty(name: "attrNetworkInterfaceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkInterfaceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkInterfaces: The list of NetworkInterfaces.</summary>
            [JsiiProperty(name: "attrNetworkInterfaces", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkInterfaces
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.NetworkInterfacesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.INetworkInterfacesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.INetworkInterfacesProps>()!;
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
